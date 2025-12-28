
import { BarChart2, Layers, Users, Zap, Search, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: BarChart2,
        title: "Strategic Planning",
        description: "Aligning your operational capabilities with long-term business objectives for sustainable growth."
    },
    {
        icon: Layers,
        title: "Process Optimization",
        description: "Identifying bottlenecks and streamlining workflows to maximize efficiency and reduce waste."
    },
    {
        icon: Users,
        title: "Change Management",
        description: "Guiding your team through structural changes with empathy, clarity, and minimal disruption."
    },
    {
        icon: Zap,
        title: "Digital Transformation",
        description: "Integrating modern technology stacks to modernize legacy systems and accelerate data flow."
    },
    {
        icon: Search,
        title: "Operational Audits",
        description: "Deep-dive analysis of your current state to opportunities for immediate improvement."
    },
    {
        icon: Globe,
        title: "Global Expansion",
        description: "Scalable frameworks for businesses entering new markets and territories."
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-cream-200">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-gold-500 font-medium tracking-widest text-sm uppercase mb-3 block">Our Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-6">Designed for Excellence</h2>
                    <p className="text-navy-800/70 text-lg">
                        We provide comprehensive solutions tailored to the unique challenges of modern enterprise.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-cream-100 p-8 rounded-sm hover:shadow-lg transition-shadow duration-300 group cursor-default"
                        >
                            <div className="w-12 h-12 bg-navy-900/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold-500/10 transition-colors">
                                <service.icon className="text-navy-900 group-hover:text-gold-500 transition-colors" size={24} />
                            </div>
                            <h3 className="text-xl font-serif font-bold text-navy-900 mb-3">{service.title}</h3>
                            <p className="text-navy-800/70 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
