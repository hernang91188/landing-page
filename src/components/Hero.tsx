
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-gold-500 font-medium tracking-widest text-sm uppercase mb-4 block">
                            Business Process Consulting
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-navy-900 leading-[1.1] mb-6">
                            Precision in <br />
                            <span className="italic text-gold-500">Process</span>.
                        </h1>
                        <p className="text-navy-800/70 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
                            We refine your operations, streamlining complexity into clarity.
                            Elevate your business efficiency with strategy designed for growth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#booking"
                                className="group flex items-center justify-center gap-2 px-8 py-4 bg-navy-900 text-cream-100 rounded-sm hover:bg-navy-800 transition-all duration-300"
                            >
                                Start Transformation
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#services"
                                className="flex items-center justify-center px-8 py-4 border border-navy-900/20 text-navy-900 rounded-sm hover:bg-navy-900/5 transition-colors"
                            >
                                Explore Services
                            </a>
                        </div>
                    </motion.div>

                    {/* Abstract Visual / Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative h-[600px] hidden md:block"
                    >
                        <div className="absolute inset-0 bg-navy-900/5 rounded-t-full rounded-b-full transform rotate-3 scale-95" />
                        <div className="absolute inset-0 overflow-hidden rounded-t-full rounded-b-full">
                            <img
                                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Elegant office architecture detailed"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-navy-900/10 mix-blend-multiply" />
                        </div>

                        {/* Floating Card Element */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="absolute bottom-12 -left-12 bg-cream-100 p-6 shadow-xl max-w-xs z-10 border-l-4 border-gold-500"
                        >
                            <p className="font-serif text-xl italic text-navy-900 mb-2">"Simplicity is the ultimate sophistication."</p>
                            <p className="text-sm text-navy-800/60">— Leonardo da Vinci</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
