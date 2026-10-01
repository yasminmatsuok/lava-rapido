import type { TipoIntegrante } from '../../types/tipoIntegrante'

type CardIntegranteProps = {
  integrante: TipoIntegrante
}

export default function CardIntegrante({ integrante }: CardIntegranteProps) {
  return (
    <article className="flex h-full flex-col items-center rounded-3xl bg-white p-6 text-center shadow-xs ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg">
      <img
        src={integrante.foto}
        alt={`Foto de ${integrante.nome}`}
        width={160}
        height={160}
        loading="lazy"
        className="size-32 rounded-full object-cover ring-4 ring-sky-100"
      />
      <h3 className="mt-5 text-lg font-bold text-slate-900">{integrante.nome}</h3>
      <p className="mt-2 rounded-full bg-sky-50 px-4 py-1 text-sm font-semibold text-sky-800">RM {integrante.rm}</p>
    </article>
  )
}
