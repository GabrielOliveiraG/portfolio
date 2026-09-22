import { motion } from 'framer-motion'
import { curtain } from '../animations'

// Envolve cada página. O AnimatePresence do App espera o "exit" terminar antes de montar a próxima.
export default function PageTransition({ children }) {
  return (
    <motion.div className="route" initial="initial" animate="enter" exit="exit">
      {children}
      <motion.div className="curtain" variants={curtain} aria-hidden="true" />
    </motion.div>
  )
}
