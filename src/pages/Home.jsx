import { motion } from 'framer-motion'
import { FaRegFileAlt } from 'react-icons/fa'
import SplitText from '../components/SplitText'
import { stagger, fade } from '../animations'

export default function Home() {
  return (
    <motion.main className="page home home__background" variants={stagger} initial="hidden" animate="show">
      <SplitText className="home__name">GABRIEL DE OLIVEIRA GONÇALVES</SplitText>

      <motion.p className="home__role" variants={fade}>
        FRONT-END DEV, CREATIVE MANAGER<br />
        ANGULAR E REACT<br />
        SÃO PAULO – BRASIL
      </motion.p>

      <motion.a className="btn" variants={fade} href="GabrielOliveira.pdf" target='_blank' rel='noopener noreferrer'>
        <FaRegFileAlt /> CURRÍCULO
      </motion.a>
    </motion.main>
  )
}
