
import { useState, useEffect } from 'react';
import { Calendar, CreditCard, Lock } from 'lucide-react';
import { createPreference } from '../lib/payment';
import { motion } from 'framer-motion';

const Booking = () => {
    const [isPaid, setIsPaid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isPaymentRequires, setIsPaymentRequires] = useState(true);

    useEffect(() => {
        const checkConfig = async () => {
            try {
                // Fetch config from backend (via proxy)
                const response = await fetch("/api/mp/config");
                const data = await response.json();

                // Store the payment requirement config
                setIsPaymentRequires(data.isPaymentRequires !== false);

                // If payment IS required, check for URL status
                if (data.isPaymentRequires !== false) {
                    const params = new URLSearchParams(window.location.search);
                    const status = params.get('status');

                    if (status === 'approved') {
                        setIsPaid(true);
                        window.history.replaceState({}, '', window.location.pathname + '#booking');
                        // Scroll to booking section
                        document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            } catch (error) {
                console.error("Failed to fetch config, defaulting to locked:", error);
            }
        };

        checkConfig();
    }, []);

    const handlePayment = async () => {
        // If payment is not required, just unlock the calendar
        if (!isPaymentRequires) {
            setIsPaid(true);
            return;
        }

        // Otherwise, proceed with MercadoPago payment flow
        setIsLoading(true);
        const url = await createPreference();
        setIsLoading(false);
        if (url) {
            window.location.href = url;
        } else {
            // Fallback for CORS issue in pure static/browser environment if needed
            // For now, we rely on the API working or user handling the error
            console.warn("Payment link generation failed (likely due to CORS on localhost)");
        }
    };

    return (
        <section id="booking" className="py-24 bg-navy-900 text-cream-100">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-5 gap-12">

                    {/* Left Content */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6 text-gold-500">
                            <Calendar size={28} />
                            <span className="font-medium tracking-widest text-sm uppercase">Book a Call</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif mb-6 text-cream-100">
                            Let's Discuss Your Vision
                        </h2>
                        <p className="text-cream-100/70 text-lg mb-8 leading-relaxed">
                            Schedule a complimentary 30-minute discovery call. We'll explore your current challenges
                            and identify potential avenues for growth.
                        </p>

                        <div className="bg-navy-800 p-8 rounded-sm border border-navy-700">
                            <h3 className="font-serif text-xl mb-4">What to expect:</h3>
                            <ul className="space-y-3 text-cream-100/80">
                                <li className="flex gap-3">
                                    <span className="text-gold-500">•</span>
                                    Initial assessment of your needs
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-gold-500">•</span>
                                    Overview of our methodology
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-gold-500">•</span>
                                    Clear next steps and recommendations
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Content - Gated Calendar */}
                    <div className="lg:col-span-3 bg-cream-100 rounded-sm overflow-hidden h-[600px] shadow-2xl relative">
                        {isPaid ? (
                            <iframe
                                src="https://calendar.app.google/WXkzJuEtrcmt8hBn9?gv=true"
                                style={{ border: 0 }}
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                title="Book an appointment"
                            >
                            </iframe>
                        ) : (
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-cream-100">
                                <div className="w-16 h-16 bg-navy-900/10 rounded-full flex items-center justify-center mb-6">
                                    <Lock className="text-navy-900" size={32} />
                                </div>
                                <h3 className="text-2xl font-serif text-navy-900 mb-2">Consultation Access</h3>
                                <p className="text-navy-800/70 max-w-md mb-8">
                                    To ensure committed interest, we require a nominal consultation deposit of <strong>$5,000 ARS</strong>.
                                    This will be deducted from your first project invoice.
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handlePayment}
                                    disabled={isLoading}
                                    className="flex items-center gap-3 px-8 py-4 bg-navy-900 text-cream-100 rounded-sm hover:bg-gold-500 hover:text-navy-900 transition-all shadow-lg font-medium"
                                >
                                    {isLoading ? (
                                        <span>Processing...</span>
                                    ) : (
                                        <>
                                            <CreditCard size={20} />
                                            <span>{isPaymentRequires ? 'Secure Your Spot' : 'Access Calendar'}</span>
                                        </>
                                    )}
                                </motion.button>
                                <p className="mt-4 text-xs text-navy-800/40 uppercase tracking-wider">
                                    Powered by MercadoPago
                                </p>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Booking;
