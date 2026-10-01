import { ArrowRight, CalendarPlus, Leaf, Sparkles, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import carroDestaque from '../../assets/carro-destaque.svg'
import Bolhas from '../Bolhas/Bolhas'

const numeros = [
  { valor: '+12 mil', rotulo: 'carros lavados' },
  { valor: '4,9', rotulo: 'nota dos clientes' },
  { valor: '40 min', rotulo: 'tempo médio' },
]

export default function Apresentacao() {
  return (
    <section
      aria-labelledby="titulo-home"
      className="relative overflow-hidden bg-linear-to-br from-sky-950 via-blue-900 to-cyan-800 text-white"
    >
      <Bolhas />
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-4 py-16 md:py-24 lg:grid-cols-2">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-cyan-200 ring-1 ring-white/20">
            <Sparkles className="size-4" />
            Lava-rápido com agendamento online
          </p>
          <h1
            id="titulo-home"
            className="mt-6 text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Seu carro limpo e{' '}
            <span className="bg-linear-to-r from-cyan-300 to-amber-200 bg-clip-text text-transparent">brilhando</span> em
            poucos minutos
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-sky-100">
            No Brilho Total você agenda a lavagem, acompanha a fila em tempo real e retira o carro impecável — com
            produtos biodegradáveis e uma equipe apaixonada por carro limpo.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/agendamentos"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 font-bold text-slate-900 shadow-lg shadow-amber-500/30 transition hover:-translate-y-0.5 hover:bg-amber-300"
            >
              <CalendarPlus className="size-5" />
              Agendar lavagem
            </Link>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white ring-1 ring-white/40 transition hover:bg-white/10"
            >
              Ver serviços
              <ArrowRight className="size-5" />
            </a>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {numeros.map((numero) => (
              <div key={numero.rotulo} className="flex flex-col-reverse justify-end">
                <dt className="mt-1 text-sm text-sky-200">{numero.rotulo}</dt>
                <dd className="text-2xl font-extrabold sm:text-3xl">{numero.valor}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <img
            src={carroDestaque}
            alt="Sedã azul reluzente logo após a lavagem, cercado de bolhas de sabão"
            width={800}
            height={500}
            className="w-full rounded-4xl shadow-2xl shadow-sky-950/50 ring-1 ring-white/20"
          />
          <div className="absolute -top-5 right-4 flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-sm text-slate-800 shadow-xl sm:right-6">
            <Star className="size-5 fill-amber-400 text-amber-400" />
            <p>
              <strong>4,9</strong> de 5 · +2 mil avaliações
            </p>
          </div>
          <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-xl sm:left-6">
            <span className="grid size-10 place-items-center rounded-xl bg-emerald-100 text-emerald-700">
              <Leaf className="size-5" />
            </span>
            <p className="text-sm leading-tight">
              <strong className="block">Lavagem ecológica</strong>
              até 80% menos água
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
