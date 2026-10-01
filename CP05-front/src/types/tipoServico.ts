import type { LucideIcon } from 'lucide-react'

export type TipoServico = {
  id: string
  nome: string
  descricao: string
  preco: number
  duracaoMinutos: number
  icone: LucideIcon
  maisPedido?: boolean
}
