import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '/#services', isAnchor: false },
        { name: 'Process', href: '/#process', isAnchor: false },
        { name: 'About', href: '/#about', isAnchor: false },
        { name: 'Blog', href: '/blog', isAnchor: false },
    ];

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
                isScrolled ? 'bg-cream-100/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link to="/" className="text-2xl font-serif font-bold text-navy-900 tracking-tight">
                    Align<span className="text-gold-500">.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="text-navy-800 hover:text-gold-500 transition-colors text-sm font-medium tracking-wide"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/#booking"
                        className="px-6 py-2.5 bg-navy-900 text-cream-100 text-sm font-medium rounded-sm hover:bg-navy-800 transition-colors"
                    >
                        Book a Call
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-navy-900"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-cream-100 border-t border-cream-200 overflow-hidden"
                    >
                        <nav className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-navy-800 text-lg font-serif"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/#booking"
                                onClick={() => setMobileMenuOpen(false)}
                                className="inline-block text-center px-6 py-3 bg-navy-900 text-cream-100 text-sm font-medium rounded-sm"
                            >
                                Book a Call
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
