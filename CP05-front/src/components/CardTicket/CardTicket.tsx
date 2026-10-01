import { Hourglass, Trash2 } from 'lucide-react'
import { buscarServico } from '../../data/servicos'
import type { TipoTicket } from '../../types/tipoTicket'
import { formatarDataHora, formatarMoeda, formatarNumeroTicket } from '../../utils/formatadores'
import Placa from '../Placa/Placa'

type CardTicketProps = {
  ticket: TipoTicket
  posicao: number
  onExcluir: () => void
}

export default function CardTicket({ ticket, posicao, onExcluir }: CardTicketProps) {
  const servico = buscarServico(ticket.tipoLavagem)
  const numero = formatarNumeroTicket(ticket.numero)
  const idTitulo = `ticket-${ticket.id}`

  return (
    <article
      aria-labelledby={idTitulo}
      className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200"
    >
      <header className="flex items-center justify-between gap-3 bg-linear-to-r from-sky-700 to-blue-800 px-5 py-4 text-white">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-sky-200 uppercase">Tíquete</p>
          <h3 id={idTitulo} className="text-2xl font-extrabold">
            Nº {numero}
          </h3>
        </div>
        <p className="rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-slate-900">{posicao}º na fila</p>
      </header>

      {/* Picote do tíquete */}
      <div aria-hidden="true" className="relative border-t-2 border-dashed border-slate-200">
        <span className="absolute -top-3 -left-3 size-6 rounded-full bg-slate-50" />
        <span className="absolute -top-3 -right-3 size-6 rounded-full bg-slate-50" />
      </div>

      <dl className="grid flex-1 gap-3 px-5 py-5 text-sm">
        <div className="flex items-center justify-between gap-4">
          <dt className="text-slate-500">Cliente</dt>
          <dd className="text-right font-semibold text-slate-900">{ticket.nomeCliente}</dd>
        </div>
        <div className="flex items-center justify-between gap-4">
          <dt className="text-slate-500">Modelo</dt>
          <dd className="text-right font-semibold text-slate-900">{ticket.modelo}</dd>
        </div>
        <div className="flex items-center justify-between gap-4">
          <dt className="text-slate-500">Placa</dt>
          <dd>
            <Placa placa={ticket.placa} />
          </dd>
        </div>
        <div className="flex items-center justify-between gap-4">
          <dt className="text-slate-500">Lavagem</dt>
          <dd className="text-right font-semibold text-slate-900">{servico?.nome ?? ticket.tipoLavagem}</dd>
        </div>
        <div className="flex items-center justify-between gap-4">
          <dt className="text-slate-500">Valor</dt>
          <dd className="text-right font-semibold text-slate-900">{servico ? formatarMoeda(servico.preco) : '—'}</dd>
        </div>
        <div className="flex items-center justify-between gap-4">
          <dt className="text-slate-500">Entrada</dt>
          <dd className="text-right font-semibold text-slate-900">
            <time dateTime={ticket.criadoEm}>{formatarDataHora(ticket.criadoEm)}</time>
          </dd>
        </div>
      </dl>

      <footer className="flex items-center justify-between gap-3 border-t border-slate-100 px-5 py-4">
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-amber-700">
          <Hourglass className="size-4" />
          Aguardando
        </p>
        <button
          type="button"
          onClick={onExcluir}
          aria-label={`Excluir tíquete nº ${numero} de ${ticket.nomeCliente}`}
          className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 ring-1 ring-red-200 transition hover:bg-red-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          <Trash2 className="size-4" />
          Excluir
        </button>
      </footer>
    </article>
  )
}
