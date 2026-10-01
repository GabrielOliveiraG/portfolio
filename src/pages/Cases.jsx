import { motion } from 'framer-motion'
import SplitText from '../components/SplitText'
import { stagger, fade, slide } from '../animations'

const cases = [
  {
    cliente: 'Cazamba',
    logo: '/images/cazamba.svg',
    descricao: ['Banner para comemorar o fim do ano de 2024.'],
    url:"../links/cazamba/index.html"
  },
  {
    cliente: 'Black',
    logo: '/images/acer.svg',
    descricao: ['Banner com a interação de uma roleta, que gera links de acordo com o resultado.'],
    url:"../links/acer/index.html"
  },
  {
    cliente: 'House of the Dragon',
    logo: '/images/hbomax.svg',
    descricao: ['Banner feito como demonstração para conquistar a campanha.'],
    url:"../links/hbo/index.html"
  },
  {
    cliente: 'Outback + Ruffles',
    logo: '/images/outback.svg',
    descricao: ['Banner com jogo interativo.'],
    url:"../links/outback/index.html"
  },
  {
    cliente: 'Ghost of Tsushima',
    logo: '/images/playstation.svg',
    descricao: ['Banner feito para Playstation, um dos meus preferidos.'],
    url:"../links/playstation/index.html"
  },
  {
    cliente: 'Prime Video',
    logo: '/images/primeVideo.svg',
    descricao: ['Banner feito como demonstração para conquistar a campanha.'],
    url:"../links/primeVideo/index.html"
  },
]

export default function Sobre() {
  return (
    <main className="page sobre home__background">
      {/* Topo: texto + foto de perfil */}
      <motion.section className="sobre__top" variants={stagger} initial="hidden" animate="show">
        <div>
          <SplitText className="sobre__title">ALGUNS CASES.</SplitText>
          <motion.p className="sobre__bio" variants={fade}>
            Durante meu tempo de serviço na Cazamba, fui responsável por organizar, gerênciar, executar e planejar diversos banners de clientes diferentes.
            <br></br>
            <p className="cases__alert">Os cases serão melhor visualizados enquanto usar um desktop.</p>
          </motion.p>
        </div>
      </motion.section>

      <section className="cases__bottom">
        <motion.h2 variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>CASES</motion.h2>
        <div className="exp cases__exp">          
          {cases.map((e) => (
            <motion.article key={e.cliente} className="cases__item" variants={slide} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
              <img className="exp__logo" src={e.logo} alt="" />
              <div className="cases__body">
                <h3>{e.cliente}</h3>
               {e.descricao.map((d) => <p key={d}> &bull;  {d}</p>)}    
              </div>
              <br></br>
              <motion.a className="cases__btn" href={e.url} target='_blank' rel='noopener noreferrer'>
               EXEMPLO
              </motion.a>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  )
}
