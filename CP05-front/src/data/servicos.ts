import { Armchair, Droplets, Gem, Leaf, Sparkles } from 'lucide-react'
import type { TipoServico } from '../types/tipoServico'

// Usados na Home (cards de serviço) e no formulário de Agendamentos (tipo de lavagem).
export const servicos: TipoServico[] = [
  {
    id: 'simples',
    nome: 'Lavagem Simples',
    descricao: 'Lavagem externa com shampoo neutro, secagem com microfibra e pretinho nos pneus.',
    preco: 40,
    duracaoMinutos: 30,
    icone: Droplets,
  },
  {
    id: 'completa',
    nome: 'Lavagem Completa',
    descricao: 'Tudo da simples + aspiração, limpeza do painel, dos vidros por dentro e dos tapetes.',
    preco: 70,
    duracaoMinutos: 60,
    icone: Sparkles,
    maisPedido: true,
  },
  {
    id: 'a-seco',
    nome: 'Lavagem a Seco',
    descricao: 'Limpeza ecológica sem água, com produtos biodegradáveis e cera de proteção.',
    preco: 60,
    duracaoMinutos: 45,
    icone: Leaf,
  },
  {
    id: 'higienizacao',
    nome: 'Higienização Interna',
    descricao: 'Limpeza profunda de bancos, carpetes e teto, eliminando ácaros, manchas e odores.',
    preco: 150,
    duracaoMinutos: 120,
    icone: Armchair,
  },
  {
    id: 'polimento',
    nome: 'Polimento + Cera',
    descricao: 'Polimento técnico que remove riscos leves e devolve o brilho de carro novo.',
    preco: 180,
    duracaoMinutos: 150,
    icone: Gem,
  },
]

export function buscarServico(id: string) {
  return servicos.find((servico) => servico.id === id)
}
