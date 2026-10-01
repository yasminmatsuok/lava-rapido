import { Clock } from 'lucide-react'
import type { TipoServico } from '../../types/tipoServico'
import { formatarDuracao, formatarMoeda } from '../../utils/formatadores'

type CardServicoProps = {
  servico: TipoServico
}

export default function CardServico({ servico }: CardServicoProps) {
  const Icone = servico.icone

  return (
    <article className="relative flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-xs transition hover:-translate-y-1 hover:shadow-lg">
      {servico.maisPedido && (
        <p className="absolute top-5 right-5 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
          Mais pedido
        </p>
      )}
      <span className="grid size-12 place-items-center rounded-2xl bg-sky-100 text-sky-700">
        <Icone className="size-6" />
      </span>
      <h3 className="mt-5 text-xl font-bold text-slate-900">{servico.nome}</h3>
      <p className="mt-2 flex-1 text-slate-600">{servico.descricao}</p>
      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
        <p className="text-2xl font-extrabold text-slate-900">
          <span className="sr-only">Preço: </span>
          {formatarMoeda(servico.preco)}
        </p>
        <p className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500">
          <Clock className="size-4" />
          <span className="sr-only">Duração: </span>
          {formatarDuracao(servico.duracaoMinutos)}
        </p>
      </div>
    </article>
  )
}
