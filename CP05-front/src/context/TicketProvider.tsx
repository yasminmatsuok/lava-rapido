import { useEffect, useState, type ReactNode } from 'react'
import type { NovoTicket, TipoTicket } from '../types/tipoTicket'
import { TicketContext } from './TicketContext'

const CHAVE_TICKETS = 'brilho-total:tickets'
const CHAVE_ULTIMO_NUMERO = 'brilho-total:ultimo-numero'

// A fila fica salva no localStorage para não se perder ao recarregar a página.
function lerTickets(): TipoTicket[] {
  try {
    const dados: unknown = JSON.parse(localStorage.getItem(CHAVE_TICKETS) ?? '[]')
    return Array.isArray(dados) ? (dados as TipoTicket[]) : []
  } catch {
    return []
  }
}

function lerUltimoNumero(): number {
  try {
    const numero = Number(localStorage.getItem(CHAVE_ULTIMO_NUMERO))
    return Number.isInteger(numero) && numero > 0 ? numero : 0
  } catch {
    return 0
  }
}

type TicketProviderProps = {
  children: ReactNode
}

export default function TicketProvider({ children }: TicketProviderProps) {
  const [tickets, setTickets] = useState<TipoTicket[]>(lerTickets)
  const [ultimoNumero, setUltimoNumero] = useState<number>(lerUltimoNumero)

  useEffect(() => {
    try {
      localStorage.setItem(CHAVE_TICKETS, JSON.stringify(tickets))
      localStorage.setItem(CHAVE_ULTIMO_NUMERO, String(ultimoNumero))
    } catch {
      // Sem acesso ao armazenamento (ex.: navegação privada): a fila segue apenas em memória.
    }
  }, [tickets, ultimoNumero])

  function adicionarTicket(dados: NovoTicket): TipoTicket {
    // A numeração nunca se repete, mesmo depois de excluir tíquetes.
    const numero = Math.max(ultimoNumero, ...tickets.map((ticket) => ticket.numero)) + 1
    const ticket: TipoTicket = {
      ...dados,
      id: `${Date.now()}-${numero}`,
      numero,
      criadoEm: new Date().toISOString(),
    }
    setUltimoNumero(numero)
    setTickets((atuais) => [...atuais, ticket])
    return ticket
  }

  function removerTicket(id: string) {
    setTickets((atuais) => atuais.filter((ticket) => ticket.id !== id))
  }

  return (
    <TicketContext.Provider value={{ tickets, adicionarTicket, removerTicket }}>
      {children}
    </TicketContext.Provider>
  )
}
