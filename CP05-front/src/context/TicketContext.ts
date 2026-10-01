import { createContext } from 'react'
import type { NovoTicket, TipoTicket } from '../types/tipoTicket'

export type TicketContextType = {
  /** Tíquetes na ordem de chegada: cada um é um carro aguardando lavagem. */
  tickets: TipoTicket[]
  adicionarTicket: (dados: NovoTicket) => TipoTicket
  removerTicket: (id: string) => void
}

export const TicketContext = createContext<TicketContextType>({
  tickets: [],
  adicionarTicket: () => {
    throw new Error('adicionarTicket deve ser usado dentro de <TicketProvider>')
  },
  removerTicket: () => {},
})
