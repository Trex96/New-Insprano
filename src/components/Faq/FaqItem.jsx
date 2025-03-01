import { motion, AnimatePresence } from "framer-motion";
export const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
      <motion.div 
          className="relative mb-8"
          initial={false}
      >
          <motion.button
              className="w-full text-left group"
              onClick={onClick}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
          >
              <div className="flex items-center">
                  <motion.span
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      className="text-[#FF6B6B] mr-4 text-2xl font-light"
                  >
                      →
                  </motion.span>
                  <h3 className="text-2xl font-light text-white/90">
                      {question}
                  </h3>
              </div>
              <motion.div 
                  className="h-[1px] bg-gradient-to-r from-[#FF6B6B] to-transparent mt-2"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
              />
          </motion.button>
          
          <AnimatePresence>
              {isOpen && (
                  <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ 
                          opacity: 1, 
                          y: 0,
                          transition: { duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }
                      }}
                      exit={{ 
                          opacity: 0,
                          y: -10,
                          transition: { duration: 0.3 }
                      }}
                      className="pl-10 pr-4 mt-4 text-white/60 text-lg font-light leading-relaxed"
                  >
                      {answer}
                  </motion.div>
              )}
          </AnimatePresence>
      </motion.div>
  );
};