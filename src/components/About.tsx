
import { CheckCircle } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-cream-100">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-gold-500 hidden md:block" />
                        <img
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Professional consultant meeting"
                            className="w-full h-auto rounded-sm shadow-xl relative z-10"
                        />
                        <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-gold-500 hidden md:block" />
                    </div>

                    <div>
                        <span className="text-gold-500 font-medium tracking-widest text-sm uppercase mb-3 block">Who We Are</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-6">Partners in your Success</h2>
                        <p className="text-navy-800/70 text-lg mb-6 leading-relaxed">
                            At Align Studio, we believe that true efficiency comes from clarity. We don't just solve problems;
                            we continually reimagine what your business is capable of achieving.
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                "Over 10 years of cross-industry experience",
                                "Proven methodology for risk reduction",
                                "Focus on long-term sustainable growth",
                                "Boutique approach with personalized attention"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle size={20} className="text-gold-500 shrink-0" />
                                    <span className="text-navy-900 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-12 border-t border-navy-900/10 pt-8">
                            <div>
                                <span className="block text-3xl font-serif text-gold-500 font-bold mb-1">50+</span>
                                <span className="text-sm text-navy-800/60 uppercase tracking-wider">Clients Helped</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-serif text-gold-500 font-bold mb-1">200%</span>
                                <span className="text-sm text-navy-800/60 uppercase tracking-wider">Avg ROI</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
