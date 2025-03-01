import { motion, AnimatePresence } from "framer-motion";
export const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
      <motion.div 
          className="relative mb-12"
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
                      className="text-[#FF6B6B] mr-4 text-2xl"
                  >
                      →
                  </motion.span>
                  <h3 className="text-2xl text-white/90 hover:text-[#FF6B6B] transition-colors duration-300">
                      {question}
                  </h3>
              </div>
              <motion.div 
                  className="h-[1px] bg-gradient-to-r from-[#FF6B6B] via-[#FF8F8F] to-transparent mt-3"
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
                      className="pl-12 pr-4 mt-6 text-white/70 text-lg leading-relaxed"
                  >
                      {answer}
                  </motion.div>
              )}
          </AnimatePresence>
      </motion.div>
  );
};