import { Clock, Droplets, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const ANO_ATUAL = new Date().getFullYear()

const horarios = [
  { dias: 'Segunda a sexta', horas: '8h às 19h' },
  { dias: 'Sábado', horas: '8h às 16h' },
  { dias: 'Domingos e feriados', horas: '9h às 13h' },
]

const classeTitulo = 'text-sm font-bold tracking-[0.2em] text-white uppercase'
const classeLink = 'transition-colors hover:text-white'

export default function Rodape() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="flex items-center gap-3 text-white">
            <span className="grid size-10 place-items-center rounded-xl bg-linear-to-br from-cyan-400 to-blue-700">
              <Droplets className="size-5" />
            </span>
            <span className="text-lg font-extrabold">Brilho Total</span>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Lava-rápido com agendamento online, produtos biodegradáveis e fila acompanhada em tempo real.
          </p>
        </div>

        <nav aria-labelledby="rodape-navegacao">
          <h2 id="rodape-navegacao" className={classeTitulo}>
            Navegação
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/" className={classeLink}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/agendamentos" className={classeLink}>
                Agendamentos
              </Link>
            </li>
            <li>
              <Link to="/sobre" className={classeLink}>
                Sobre
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className={classeTitulo}>Contato</h2>
          <address className="mt-4 space-y-3 text-sm not-italic">
            <p className="flex gap-3">
              <MapPin className="size-5 shrink-0 text-cyan-400" />
              Rua das Águas Claras, 250 — São Paulo/SP
            </p>
            <p className="flex gap-3">
              <Phone className="size-5 shrink-0 text-cyan-400" />
              (11) 4002-1234
            </p>
            <p className="flex gap-3">
              <Mail className="size-5 shrink-0 text-cyan-400" />
              contato@brilhototal.com.br
            </p>
          </address>
        </div>

        <div>
          <h2 className={classeTitulo}>Horário de funcionamento</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {horarios.map((horario) => (
              <li key={horario.dias} className="flex gap-3">
                <Clock className="size-5 shrink-0 text-cyan-400" />
                <span>
                  <span className="block font-semibold text-white">{horario.dias}</span>
                  {horario.horas}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-slate-400 sm:text-left">
          © {ANO_ATUAL} Brilho Total Lava-Rápido. Projeto acadêmico — Checkpoint 5 de Front-End Design
          Engineering (1TDSPI).
        </p>
      </div>
    </footer>
  )
}
