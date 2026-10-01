type TituloSecaoProps = {
  id: string
  rotulo: string
  titulo: string
  descricao?: string
}

export default function TituloSecao({ id, rotulo, titulo, descricao }: TituloSecaoProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-bold tracking-[0.2em] text-sky-700 uppercase">{rotulo}</p>
      <h2 id={id} className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        {titulo}
      </h2>
      {descricao && <p className="mt-4 text-lg text-slate-600">{descricao}</p>}
    </div>
  )
}
