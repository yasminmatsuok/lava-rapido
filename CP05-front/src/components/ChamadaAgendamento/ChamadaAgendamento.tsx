import { CalendarPlus } from 'lucide-react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { TicketContext } from '../../context/TicketContext'
import { quantidadeDeCarros } from '../../utils/formatadores'
import Bolhas from '../Bolhas/Bolhas'

export default function ChamadaAgendamento() {
  const { tickets } = useContext(TicketContext)
  const aguardando = tickets.length

  return (
    <section aria-labelledby="titulo-chamada" className="px-4 pb-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-4xl bg-linear-to-r from-sky-700 via-blue-700 to-indigo-700 px-8 py-12 text-white shadow-xl md:flex md:items-center md:justify-between md:gap-10 md:px-14">
        <Bolhas />
        <div className="relative">
          <h2 id="titulo-chamada" className="text-3xl font-extrabold tracking-tight">
            Pronto para deixar seu carro brilhando?
          </h2>
          <p className="mt-3 text-lg text-sky-100">
            {aguardando === 0
              ? 'A fila está livre agora: agende e seja o próximo!'
              : `Neste momento há ${quantidadeDeCarros(aguardando)} na fila. Garanta já o seu lugar!`}
          </p>
        </div>
        <Link
          to="/agendamentos"
          className="relative mt-8 inline-flex shrink-0 items-center gap-2 rounded-full bg-amber-400 px-6 py-3 font-bold text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-300 md:mt-0"
        >
          <CalendarPlus className="size-5" />
          Agendar lavagem
        </Link>
      </div>
    </section>
  )
}
