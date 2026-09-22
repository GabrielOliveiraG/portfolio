import { motion } from 'framer-motion'
import { char, chars } from '../animations'

// Anima o texto letra por letra. Deve estar dentro de um pai com initial="hidden" animate="show".
export default function SplitText({ children, className }) {
  return (
    <motion.h1 className={className} variants={chars} aria-label={children}>
      {[...children].map((c, i) => (
        <motion.span key={i} variants={char} aria-hidden="true" style={{ display: 'inline-block', whiteSpace: 'pre' }}>
          {c}
        </motion.span>
      ))}
    </motion.h1>
  )
}
