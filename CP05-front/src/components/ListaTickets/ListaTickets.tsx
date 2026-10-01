import { CarFront } from 'lucide-react'
import { useContext } from 'react'
import { TicketContext } from '../../context/TicketContext'
import { buscarServico } from '../../data/servicos'
import { formatarDuracao, quantidadeDeCarros } from '../../utils/formatadores'
import CardTicket from '../CardTicket/CardTicket'

export default function ListaTickets() {
  const { tickets, removerTicket } = useContext(TicketContext)
  const tempoTotal = tickets.reduce(
    (total, ticket) => total + (buscarServico(ticket.tipoLavagem)?.duracaoMinutos ?? 0),
    0,
  )

  return (
    <section aria-labelledby="titulo-fila">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 id="titulo-fila" className="text-2xl font-extrabold text-slate-900">
            Fila de lavagem
          </h2>
          <p className="mt-1 text-slate-600">
            {tickets.length === 0
              ? 'Nenhum carro aguardando no momento.'
              : `${quantidadeDeCarros(tickets.length)} aguardando · tempo estimado de ${formatarDuracao(tempoTotal)}`}
          </p>
        </div>
      </div>

      {tickets.length === 0 ? (
        <div className="mt-6 flex flex-col items-center rounded-3xl border-2 border-dashed border-slate-300 bg-white px-6 py-16 text-center">
          <span className="grid size-16 place-items-center rounded-full bg-sky-100 text-sky-700">
            <CarFront className="size-8" />
          </span>
          <p className="mt-4 text-lg font-bold text-slate-900">A fila está vazia</p>
          <p className="mt-1 max-w-sm text-slate-600">
            Preencha o formulário para gerar o primeiro tíquete de lavagem.
          </p>
        </div>
      ) : (
        <ol className="mt-6 grid gap-6 sm:grid-cols-2">
          {tickets.map((ticket, indice) => (
            <li key={ticket.id}>
              <CardTicket ticket={ticket} posicao={indice + 1} onExcluir={() => removerTicket(ticket.id)} />
            </li>
          ))}
        </ol>
      )}
    </section>
  )
}
