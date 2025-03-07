'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaqItem } from './FaqItem';

const faqData = [
    {
        question: "What are TechFest and Udaan?",
        answer: "TechFest is a technology-based festival featuring coding, robotics, and tech competitions. Udaan is a cultural festival that includes dance, painting, photography, and other artistic competitions."
    },
    {
        question: "Can I participate in both TechFest and Udaan?",
        answer: "Yes! Participants can join events in both fests, but be sure to check the schedules to avoid overlaps."
    },
    {
        question: "What kind of competitions are included?",
        answer: "TechFest includes hackathons, coding challenges, robotics, and innovation-based competitions. Udaan features dance, painting, photography, and other creative arts competitions."
    },
    {
        question: "How do I register for the events?",
        answer: "Registration is available online through our official portal. Choose your preferred competitions and complete the registration before the deadline."
    },
    {
        question: "Are there prizes for winners?",
        answer: "Yes! Winners will receive cash prizes, certificates, and other exciting rewards based on the competition."
    }
];



const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="py-16 md:py-24 lg:py-32 px-4 bg-black relative min-h-screen w-full">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[#3B82F6] rounded-full opacity-[0.04] blur-[150px]" />
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
                        className="text-[#3B82F6] tracking-[0.2em] text-xs md:text-sm mb-3 md:mb-4"
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
                        className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent mx-auto mt-6"
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
