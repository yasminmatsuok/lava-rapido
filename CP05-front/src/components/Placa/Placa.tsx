import { formatarPlaca } from '../../utils/formatadores'

type PlacaProps = {
  placa: string
}

// Desenho de placa no estilo Mercosul.
export default function Placa({ placa }: PlacaProps) {
  return (
    <span className="inline-flex flex-col overflow-hidden rounded-md border-2 border-slate-800 bg-white text-center leading-none shadow-xs">
      <span aria-hidden="true" className="bg-blue-700 px-2 py-0.5 text-[0.55rem] font-bold tracking-[0.3em] text-white">
        BRASIL
      </span>
      <span className="px-2.5 py-1 font-mono text-base font-bold tracking-widest text-slate-900">
        {formatarPlaca(placa)}
      </span>
    </span>
  )
}
