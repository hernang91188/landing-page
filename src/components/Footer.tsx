import { Linkedin, Twitter, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
    const [socialLinks, setSocialLinks] = useState({
        linkedin: '#',
        twitter: '#',
        email: '#'
    });

    useEffect(() => {
        const fetchSocialLinks = async () => {
            try {
                const response = await fetch('/api/mp/social-links');
                const data = await response.json();
                setSocialLinks({
                    linkedin: data.linkedin || '#',
                    twitter: data.twitter || '#',
                    email: data.email ? `mailto:${data.email}` : '#'
                });
            } catch (error) {
                console.error('Failed to fetch social links:', error);
            }
        };

        fetchSocialLinks();
    }, []);

    return (
        <footer className="bg-navy-950 text-cream-200 py-16 border-t border-navy-800">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <a href="#" className="text-2xl font-serif font-bold text-cream-100 tracking-tight mb-6 block">
                            Align<span className="text-gold-500">.</span>
                        </a>
                        <p className="text-navy-300 max-w-sm mb-8">
                            Transforming chaos into clarity. We help forward-thinking businesses
                            build the systems they need to scale with confidence.
                        </p>
                        <div className="flex gap-4">
                            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-all">
                                <Linkedin size={18} />
                            </a>
                            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-all">
                                <Twitter size={18} />
                            </a>
                            <a href={socialLinks.email} className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-all">
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-gold-500 font-medium uppercase tracking-widest text-sm mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><a href="#about" className="hover:text-gold-500 transition-colors">About Us</a></li>
                            <li><a href="#services" className="hover:text-gold-500 transition-colors">Services</a></li>
                            <li><a href="#process" className="hover:text-gold-500 transition-colors">Our Process</a></li>
                            <li><a href="#" className="hover:text-gold-500 transition-colors">Careers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-gold-500 font-medium uppercase tracking-widest text-sm mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-gold-500 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-navy-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-navy-400">
                    <p>&copy; {new Date().getFullYear()} Align Studio. All rights reserved.</p>
                    <p>Designed with precision.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
