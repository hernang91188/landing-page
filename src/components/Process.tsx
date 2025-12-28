

const steps = [
    {
        number: "01",
        title: "Discovery",
        description: "We begin by listening. We map your current workflows, interview key stakeholders, and identify the root causes of friction."
    },
    {
        number: "02",
        title: "Strategy",
        description: "We design a roadmap tailored to your goals. This isn't a generic template, but a bespoke plan focusing on high-impact levers."
    },
    {
        number: "03",
        title: "Implementation",
        description: "We work alongside your team to deploy changes. We ensure new systems are adopted through training and hands-on support."
    },
    {
        number: "04",
        title: "Optimization",
        description: "Growth is iterative. We measure results, gather feedback, and refine processes to ensure lasting efficientcy."
    }
];

const Process = () => {
    return (
        <section id="process" className="py-24 bg-navy-900 text-cream-100">
            <div className="container mx-auto px-6">
                <div className="mb-16 md:flex md:justify-between md:items-end border-b border-navy-800 pb-8">
                    <div className="max-w-xl">
                        <span className="text-gold-500 font-medium tracking-widest text-sm uppercase mb-3 block">Our Methodology</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-cream-100">From Chaos to Clarity</h2>
                    </div>
                    <p className="md:max-w-sm mt-6 md:mt-0 text-navy-300">
                        A proven framework that delivers predictable results without disrupting your daily operations.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            <span className="text-6xl font-serif text-navy-800 font-bold opacity-50 group-hover:text-gold-500/20 transition-colors duration-500 absolute -top-4 -left-2 -z-10">
                                {step.number}
                            </span>
                            <div className="h-full pt-8 relative z-10 border-t border-navy-800 group-hover:border-gold-500 transition-colors duration-300">
                                <h3 className="text-xl font-serif font-bold text-cream-100 mb-4">{step.title}</h3>
                                <p className="text-navy-300 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
