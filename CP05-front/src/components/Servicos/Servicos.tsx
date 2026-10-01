import { CalendarPlus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { servicos } from '../../data/servicos'
import CardServico from '../CardServico/CardServico'
import TituloSecao from '../TituloSecao/TituloSecao'

export default function Servicos() {
  return (
    <section id="servicos" aria-labelledby="titulo-servicos" className="mx-auto max-w-6xl scroll-mt-32 px-4 py-20">
      <TituloSecao
        id="titulo-servicos"
        rotulo="Nossos serviços"
        titulo="Uma lavagem para cada necessidade"
        descricao="Escolha o serviço ideal, confira o preço e o tempo estimado e agende em menos de um minuto."
      />
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {servicos.map((servico) => (
          <li key={servico.id}>
            <CardServico servico={servico} />
          </li>
        ))}
        <li>
          <div className="flex h-full flex-col justify-between rounded-3xl bg-linear-to-br from-sky-700 to-blue-800 p-6 text-white">
            <div>
              <h3 className="text-xl font-bold">Não sabe qual escolher?</h3>
              <p className="mt-2 text-sky-100">
                Agende a lavagem e nossa equipe avalia o carro na chegada, sem compromisso.
              </p>
            </div>
            <Link
              to="/agendamentos"
              className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-white px-5 py-2.5 font-bold text-sky-800 transition hover:bg-sky-50"
            >
              <CalendarPlus className="size-5" />
              Agendar agora
            </Link>
          </div>
        </li>
      </ul>
    </section>
  )
}
