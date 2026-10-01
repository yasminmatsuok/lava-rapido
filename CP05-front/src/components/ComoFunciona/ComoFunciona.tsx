import { CalendarCheck, ListChecks, Sparkles } from 'lucide-react'
import TituloSecao from '../TituloSecao/TituloSecao'

const passos = [
  {
    icone: CalendarCheck,
    titulo: 'Agende online',
    texto: 'Informe nome, modelo, placa e o tipo de lavagem. O tíquete é gerado na hora.',
  },
  {
    icone: ListChecks,
    titulo: 'Acompanhe a fila',
    texto: 'O topo do site mostra, em tempo real, quantos carros estão aguardando lavagem.',
  },
  {
    icone: Sparkles,
    titulo: 'Retire brilhando',
    texto: 'Quando chegar a sua vez, é só buscar o carro limpinho, cheiroso e protegido.',
  },
]

export default function ComoFunciona() {
  return (
    <section aria-labelledby="titulo-como-funciona" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <TituloSecao id="titulo-como-funciona" rotulo="Como funciona" titulo="Do agendamento ao brilho em 3 passos" />
        <ol className="mt-16 grid gap-10 md:grid-cols-3">
          {passos.map((passo, indice) => {
            const Icone = passo.icone
            return (
              <li key={passo.titulo} className="relative rounded-3xl bg-slate-50 p-8 pt-10 ring-1 ring-slate-200">
                <span
                  aria-hidden="true"
                  className="absolute -top-5 left-8 grid size-10 place-items-center rounded-full bg-sky-700 font-extrabold text-white shadow-lg shadow-sky-700/30"
                >
                  {indice + 1}
                </span>
                <Icone className="size-8 text-sky-700" />
                <h3 className="mt-4 text-xl font-bold text-slate-900">{passo.titulo}</h3>
                <p className="mt-2 text-slate-600">{passo.texto}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
