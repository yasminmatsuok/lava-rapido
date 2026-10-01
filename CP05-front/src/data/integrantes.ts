import foto1 from '../assets/integrantes/integrante-1.svg'
import foto2 from '../assets/integrantes/integrante-2.svg'
import foto3 from '../assets/integrantes/integrante-3.svg'
import foto4 from '../assets/integrantes/integrante-4.svg'
import foto5 from '../assets/integrantes/integrante-5.svg'
import type { TipoIntegrante } from '../types/tipoIntegrante'

// TODO: troque pelos nomes, RMs e fotos reais do grupo (até 5 integrantes).
// Coloque as fotos em src/assets/integrantes/ e ajuste os imports acima.
// Os mesmos nomes e RMs também devem ficar no README.md.
export const integrantes: TipoIntegrante[] = [
  { nome: 'Nome do Integrante 1', rm: '000001', foto: foto1 },
  { nome: 'Nome do Integrante 2', rm: '000002', foto: foto2 },
  { nome: 'Nome do Integrante 3', rm: '000003', foto: foto3 },
  { nome: 'Nome do Integrante 4', rm: '000004', foto: foto4 },
  { nome: 'Nome do Integrante 5', rm: '000005', foto: foto5 },
]
