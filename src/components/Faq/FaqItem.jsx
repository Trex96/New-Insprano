import { motion, AnimatePresence } from "framer-motion";
export const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
      <motion.div 
          className="relative mb-8 md:mb-12"
          initial={false}
      >
          <motion.button
              className="w-full text-left group"
              onClick={onClick}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
              <div className="flex items-center">
                  <motion.span
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      className="text-[#3B82F6] mr-3 md:mr-4 text-xl md:text-2xl"
                  >
                      →
                  </motion.span>
                  <h3 className="text-xl md:text-2xl text-white/90 hover:text-[#3B82F6] transition-colors duration-300 pr-4">
                      {question}
                  </h3>
              </div>
              <motion.div 
                  className="h-[1px] bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-transparent mt-3"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
              />
          </motion.button>
          
          <AnimatePresence>
              {isOpen && (
                  <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ 
                          opacity: 1, 
                          y: 0,
                          transition: { duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }
                      }}
                      exit={{ 
                          opacity: 0,
                          y: -10,
                          transition: { duration: 0.4 }
                      }}
                      className="pl-8 md:pl-12 pr-2 md:pr-4 mt-4 md:mt-6 text-white/70 text-base md:text-lg leading-relaxed"
                  >
                      {answer}
                  </motion.div>
              )}
          </AnimatePresence>
      </motion.div>
  );
};