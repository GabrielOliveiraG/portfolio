const ease = [0.22, 1, 0.36, 1]

// container: dispara os filhos em sequência
export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.5 } },
}

// texto comum
export const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

// fotos: revelam de cima para baixo, como uma cortina
export const photo = {
  hidden: { opacity: 0, scale: 1.06, clipPath: 'inset(0 0 100% 0)' },
  show: {
    opacity: 1,
    scale: 1,
    clipPath: 'inset(0 0 0% 0)',
    transition: { duration: 1, ease },
  },
}

// itens da experiência entram pela direita ao rolar a página
export const slide = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
}

// letra a letra (título)
export const char = {
  hidden: { opacity: 0, y: '0.6em' },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
}
export const chars = { hidden: {}, show: { transition: { staggerChildren: 0.03 } } }

// cortina da transição de páginas: sobe cobrindo a tela e sai para cima
export const curtain = {
  initial: { scaleY: 1, originY: 0 },
  enter: { scaleY: 0, originY: 0, transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1], delay: 0.05 } },
  exit: { scaleY: 1, originY: 1, transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] } },
}
