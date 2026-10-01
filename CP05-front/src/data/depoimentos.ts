import fotoHatch from '../assets/depoimentos/hatch-vermelho.svg'
import fotoPickup from '../assets/depoimentos/pickup-branca.svg'
import fotoSuv from '../assets/depoimentos/suv-grafite.svg'
import type { TipoDepoimento } from '../types/tipoDepoimento'

export const depoimentos: TipoDepoimento[] = [
  {
    id: 1,
    cliente: 'Mariana Souza',
    veiculo: 'Hyundai HB20 vermelho',
    servico: 'Lavagem Completa',
    nota: 5,
    texto:
      'Agendei pelo site, deixei o carro no horário do almoço e peguei brilhando. Até o cheirinho de carro novo voltou!',
    foto: fotoHatch,
    descricaoFoto: 'Hyundai HB20 vermelho reluzente depois da lavagem completa',
  },
  {
    id: 2,
    cliente: 'Carlos Henrique',
    veiculo: 'Jeep Compass grafite',
    servico: 'Polimento + Cera',
    nota: 5,
    texto:
      'O polimento tirou os riscos que eu achava que não tinham mais jeito. Atendimento rápido e preço justo.',
    foto: fotoSuv,
    descricaoFoto: 'Jeep Compass grafite com a pintura brilhando após o polimento',
  },
  {
    id: 3,
    cliente: 'Fernanda Lima',
    veiculo: 'Fiat Toro branca',
    servico: 'Higienização Interna',
    nota: 5,
    texto:
      'Uso a picape no trabalho e ela vivia cheia de poeira. Voltou impecável por dentro e por fora. Recomendo!',
    foto: fotoPickup,
    descricaoFoto: 'Fiat Toro branca limpa e brilhando depois da higienização',
  },
]
