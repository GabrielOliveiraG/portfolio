import { motion } from 'framer-motion'
import SplitText from '../components/SplitText'
import { stagger, fade, photo, slide } from '../animations'

const fotos = [
  { src: '/images/nasa.jpeg', alt: 'Gabriel em frente ao globo da NASA' },
  { src: '/images/academia.jpeg', alt: 'Gabriel na academia' },
  { src: '/images/disney.jpeg', alt: 'Gabriel em frente ao castelo da Disney' },
  { src: '/images/pc.jpeg', alt: 'PC gamer com iluminação RGB' },
]

const experiencias = [
  {
    empresa: 'COLGATE-PALMOLIVE',
    logo: '/images/colgate.svg',
    cargo: 'Estágio em Business Intelligence',
    periodo: '2014-2016',
    descricao: [
      'Administrar e manter banco de dados SQL Server e Microsoft Access.',
      'Análises de Business Intelligence para Trade Marketing.',
    ],
  },
  {
    empresa: 'GETWI WIFI MARKETING',
    logo: '/images/getwi.svg',
    cargo: 'Desenvolvedor Front-End',
    periodo: '2016-2017',
    descricao: ['Desenvolvi painéis internos utilizando jQuery, AngularJS, Node 11 e Gulp 3, facilitando operações diárias da equipe.'],
  },
  {
    empresa: 'CAZAMBA',
    logo: '/images/cazamba.svg',
    cargo: 'Desenvolvedor Front-End',
    periodo: '2017-2026',
    descricao: [
      'Dashboards internos utilizando Angular 8+, Node.js e Gulp.',
      'Banners Rich Media para mercados de publicidade online e programática.',
      'Desenvolvi projetos de Marketing Digital e Publicidade, coordenando estratégias criativas para campanhas.',
    ],
  },
]

export default function Sobre() {
  return (
    <main className="page sobre home__background">
      {/* Topo: texto + foto de perfil */}
      <motion.section className="sobre__top" variants={stagger} initial="hidden" animate="show">
        <div>
          <SplitText className="sobre__title">TECNOLOGIA.VIAGEM.UNIVERSO.</SplitText>
          <motion.p className="sobre__bio" variants={fade}>
            Nasci e cresci em São Paulo, ainda criança comecei a mexer com computadores, mesmo sem entender nada, foi paixão à primeira vista.
          </motion.p>
          <motion.p className="sobre__bio" variants={fade}>
            Iniciei a faculdade de Administração em 2011, percebi que não era o que eu queria e mudei para Ciências da Computação em 2012, concluindo em 2017.
            <br />
            Apesar da tecnologia formar meu caráter, viagens e musculação mudaram a minha percepção e me fizeram entender que dessa vida, aprender nunca é demais.
          </motion.p>
        </div>

        <motion.img className="sobre__perfil" variants={photo} src="/images/perfil.jpeg" alt="Retrato de Gabriel" />
      </motion.section>

      {/* Base: galeria + experiência */}
      <section className="sobre__bottom">
        <motion.div className="galeria" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          {fotos.map((f) => (
            <motion.img key={f.src} variants={photo} src={f.src} alt={f.alt} />
          ))}
        </motion.div>

        <div className="exp">
          <motion.h2 variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>EXPERIÊNCIA</motion.h2>
          {experiencias.map((e) => (
            <motion.article key={e.empresa} className="exp__item" variants={slide} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
              <img className="exp__logo" src={e.logo} alt="" />
              <div className="exp__body">
                <h3>{e.empresa}</h3>
                <h4>{e.cargo}</h4>
                {e.descricao.map((d) => <p key={d}>{d}</p>)}
              </div>
              <span className="exp__periodo">{e.periodo}</span>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  )
}
