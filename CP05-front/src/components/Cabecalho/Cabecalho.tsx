import { CarFront, Droplets } from 'lucide-react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { TicketContext } from '../../context/TicketContext'
import Menu from '../Menu/Menu'

export default function Cabecalho() {
  // Cada tíquete da fila é um carro aguardando lavagem.
  const { tickets } = useContext(TicketContext)
  const aguardando = tickets.length

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <a
        href="#conteudo"
        className="sr-only rounded-lg bg-sky-800 px-4 py-2 font-semibold text-white focus:not-sr-only focus:m-2 focus:inline-block"
      >
        Pular para o conteúdo
      </a>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 py-3">
        <Link to="/" className="flex items-center gap-3 rounded-2xl">
          <span className="grid size-11 place-items-center rounded-2xl bg-linear-to-br from-cyan-400 to-blue-700 text-white shadow-lg shadow-sky-500/30">
            <Droplets className="size-6" />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-extrabold tracking-tight text-slate-900">Brilho Total</span>
            <span className="block text-xs font-bold tracking-[0.25em] text-sky-700 uppercase">Lava-Rápido</span>
          </span>
        </Link>

        <Menu className="order-last w-full md:order-none md:w-auto" />

        <Link
          to="/agendamentos"
          className="flex items-center gap-3 rounded-full bg-slate-900 py-1.5 pr-4 pl-1.5 text-white shadow-md transition hover:bg-slate-700"
        >
          <span className="relative grid size-9 place-items-center rounded-full bg-amber-400 text-slate-900">
            <CarFront className="size-5" />
            {aguardando > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex size-3">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-3 rounded-full border-2 border-slate-900 bg-emerald-400" />
              </span>
            )}
          </span>
          <span className="sr-only">Fila de lavagem:</span>
          <span className="flex items-baseline gap-1.5" aria-live="polite">
            <strong className="text-xl font-extrabold">{aguardando}</strong>
            <span className="text-sm font-medium text-slate-200">
              <span className="sm:hidden">na fila</span>
              <span className="hidden sm:inline">{aguardando === 1 ? 'carro aguardando' : 'carros aguardando'}</span>
            </span>
          </span>
        </Link>
      </div>
    </header>
  )
}
