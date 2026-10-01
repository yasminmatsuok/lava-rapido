import { Star } from 'lucide-react'
import type { TipoDepoimento } from '../../types/tipoDepoimento'

type CardDepoimentoProps = {
  depoimento: TipoDepoimento
}

export default function CardDepoimento({ depoimento }: CardDepoimentoProps) {
  const iniciais = depoimento.cliente
    .split(' ')
    .map((parte) => parte[0])
    .slice(0, 2)
    .join('')

  return (
    <figure className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-xs ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg">
      <img
        src={depoimento.foto}
        alt={depoimento.descricaoFoto}
        width={800}
        height={500}
        loading="lazy"
        className="aspect-8/5 w-full object-cover"
      />
      <div className="flex flex-1 flex-col px-6 pt-6">
        <div className="flex gap-1" role="img" aria-label={`Nota ${depoimento.nota} de 5`}>
          {Array.from({ length: 5 }, (_, indice) => (
            <Star
              key={indice}
              className={`size-5 ${indice < depoimento.nota ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`}
            />
          ))}
        </div>
        <blockquote className="mt-4 flex-1 text-slate-700">
          <p>“{depoimento.texto}”</p>
        </blockquote>
      </div>
      <figcaption className="mx-6 mt-6 mb-6 flex items-center gap-3 border-t border-slate-100 pt-4">
        <span
          aria-hidden="true"
          className="grid size-11 shrink-0 place-items-center rounded-full bg-sky-100 font-bold text-sky-800"
        >
          {iniciais}
        </span>
        <span>
          <strong className="block text-slate-900">{depoimento.cliente}</strong>
          <span className="text-sm text-slate-500">
            {depoimento.veiculo} · {depoimento.servico}
          </span>
        </span>
      </figcaption>
    </figure>
  )
}
