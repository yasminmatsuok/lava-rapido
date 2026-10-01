import Bolhas from '../Bolhas/Bolhas'

type BannerPaginaProps = {
  rotulo: string
  titulo: string
  descricao: string
}

export default function BannerPagina({ rotulo, titulo, descricao }: BannerPaginaProps) {
  return (
    <header className="relative overflow-hidden bg-linear-to-br from-sky-950 via-blue-900 to-cyan-800 text-white">
      <Bolhas />
      <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-20">
        <p className="text-sm font-bold tracking-[0.2em] text-cyan-300 uppercase">{rotulo}</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">{titulo}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-sky-100">{descricao}</p>
      </div>
    </header>
  )
}
