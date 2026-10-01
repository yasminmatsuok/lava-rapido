export type TipoTicket = {
  id: string
  numero: number
  nomeCliente: string
  modelo: string
  placa: string
  /** id do serviço escolhido (ver src/data/servicos.ts) */
  tipoLavagem: string
  /** data e hora de criação no formato ISO 8601 */
  criadoEm: string
}

/** Dados que o formulário informa; id, número e horário são gerados pelo contexto. */
export type NovoTicket = Omit<TipoTicket, 'id' | 'numero' | 'criadoEm'>
