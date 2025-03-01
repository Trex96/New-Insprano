'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaqItem } from './FaqItem';

const faqData = [
    {
        question: "What's your design approach?",
        answer: "I believe in minimalism with purpose. Every element serves a function while maintaining visual harmony and engaging user experience."
    },
    {
        question: "Which tools do you use?",
        answer: "Figma for design, After Effects for motion, and custom code for interactive experiences. I believe in using the right tool for each unique challenge."
    },
    {
        question: "How do you handle projects?",
        answer: "Each project begins with deep research and wireframing. I collaborate closely with clients through iterative design sprints to achieve the perfect balance of form and function."
    }
];


const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="py-16 md:py-24 lg:py-32 px-4 bg-black relative min-h-screen w-full">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[#FF6B6B] rounded-full opacity-[0.04] blur-[150px]" />
                <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[#4ECDC4] rounded-full opacity-[0.04] blur-[150px]" />
            </div>

            <motion.div 
                className="max-w-4xl mx-auto relative z-10"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
            >
                <div className="mb-12 md:mb-16 lg:mb-20 text-center">
                    <motion.p 
                        className="text-[#FF6B6B] tracking-[0.2em] text-xs md:text-sm mb-3 md:mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        ― Got Questions? ―
                    </motion.p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white/90 tracking-tight">
                        Let&apos;s Clear Things Up
                    </h2>
                    <motion.div 
                        className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#FF6B6B] to-transparent mx-auto mt-6"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    />
                </div>

                <div>
                    {faqData.map((faq, index) => (
                        <FaqItem
                            key={index}
                            {...faq}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Faq;
