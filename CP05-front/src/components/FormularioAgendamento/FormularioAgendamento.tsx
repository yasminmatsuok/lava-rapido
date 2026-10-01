import { CalendarPlus, CircleAlert, CircleCheck, Ticket } from 'lucide-react'
import { useContext, useState, type ChangeEvent, type FormEvent } from 'react'
import { TicketContext } from '../../context/TicketContext'
import { buscarServico, servicos } from '../../data/servicos'
import {
  formatarDuracao,
  formatarMoeda,
  formatarNumeroTicket,
  normalizarPlaca,
  placaValida,
} from '../../utils/formatadores'

type Campos = {
  nomeCliente: string
  modelo: string
  placa: string
  tipoLavagem: string
}

type Erros = Partial<Record<keyof Campos, string>>

const camposIniciais: Campos = { nomeCliente: '', modelo: '', placa: '', tipoLavagem: '' }

function classeCampo(erro?: string) {
  return `mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-slate-900 shadow-xs transition placeholder:text-slate-400 focus:ring-4 focus:outline-hidden ${
    erro
      ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
      : 'border-slate-300 focus:border-sky-600 focus:ring-sky-100'
  }`
}

type MensagemErroProps = {
  id: string
  mensagem?: string
}

function MensagemErro({ id, mensagem }: MensagemErroProps) {
  if (!mensagem) return null
  return (
    <p id={id} className="mt-2 flex items-center gap-1.5 text-sm font-medium text-red-700">
      <CircleAlert className="size-4 shrink-0" />
      {mensagem}
    </p>
  )
}

export default function FormularioAgendamento() {
  const { tickets, adicionarTicket } = useContext(TicketContext)
  const [campos, setCampos] = useState<Campos>(camposIniciais)
  const [erros, setErros] = useState<Erros>({})
  const [mensagem, setMensagem] = useState('')

  const servicoEscolhido = buscarServico(campos.tipoLavagem)

  function validar(dados: Campos): Erros {
    const novosErros: Erros = {}
    if (dados.nomeCliente.trim().length < 3) {
      novosErros.nomeCliente = 'Informe o nome do cliente (mínimo de 3 letras).'
    }
    if (dados.modelo.trim().length < 2) {
      novosErros.modelo = 'Informe o modelo do veículo.'
    }
    if (!placaValida(dados.placa)) {
      novosErros.placa = 'Informe uma placa válida, como ABC-1234 ou ABC1D23.'
    } else if (tickets.some((ticket) => ticket.placa === normalizarPlaca(dados.placa))) {
      novosErros.placa = 'Este veículo já está na fila de lavagem.'
    }
    if (!buscarServico(dados.tipoLavagem)) {
      novosErros.tipoLavagem = 'Selecione o tipo de lavagem.'
    }
    return novosErros
  }

  function handleChange(evento: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const campo = evento.target.name as keyof Campos
    const valor = campo === 'placa' ? evento.target.value.toUpperCase() : evento.target.value
    setCampos((atuais) => ({ ...atuais, [campo]: valor }))
    setErros((atuais) => ({ ...atuais, [campo]: undefined }))
    setMensagem('')
  }

  function handleSubmit(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    const novosErros = validar(campos)
    setErros(novosErros)

    const primeiroCampoComErro = (Object.keys(novosErros) as (keyof Campos)[])[0]
    if (primeiroCampoComErro) {
      setMensagem('')
      document.getElementById(primeiroCampoComErro)?.focus()
      return
    }

    const ticket = adicionarTicket({
      nomeCliente: campos.nomeCliente.trim(),
      modelo: campos.modelo.trim(),
      placa: normalizarPlaca(campos.placa),
      tipoLavagem: campos.tipoLavagem,
    })
    setCampos(camposIniciais)
    setMensagem(`Tíquete nº ${formatarNumeroTicket(ticket.numero)} gerado para ${ticket.nomeCliente}!`)
  }

  return (
    <section
      aria-labelledby="titulo-formulario"
      className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 lg:sticky lg:top-28"
    >
      <div className="flex items-center gap-3">
        <span className="grid size-11 place-items-center rounded-2xl bg-sky-100 text-sky-700">
          <Ticket className="size-6" />
        </span>
        <div>
          <h2 id="titulo-formulario" className="text-xl font-extrabold text-slate-900">
            Novo tíquete de lavagem
          </h2>
          <p className="text-sm text-slate-500">Todos os campos são obrigatórios.</p>
        </div>
      </div>

      <form noValidate onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div>
          <label htmlFor="nomeCliente" className="text-sm font-semibold text-slate-800">
            Nome do cliente
          </label>
          <input
            id="nomeCliente"
            name="nomeCliente"
            type="text"
            autoComplete="name"
            required
            placeholder="Ex.: Maria Oliveira"
            value={campos.nomeCliente}
            onChange={handleChange}
            aria-invalid={erros.nomeCliente ? true : undefined}
            aria-describedby={erros.nomeCliente ? 'erro-nomeCliente' : undefined}
            className={classeCampo(erros.nomeCliente)}
          />
          <MensagemErro id="erro-nomeCliente" mensagem={erros.nomeCliente} />
        </div>

        <div>
          <label htmlFor="modelo" className="text-sm font-semibold text-slate-800">
            Modelo do veículo
          </label>
          <input
            id="modelo"
            name="modelo"
            type="text"
            autoComplete="off"
            required
            placeholder="Ex.: Honda Civic"
            value={campos.modelo}
            onChange={handleChange}
            aria-invalid={erros.modelo ? true : undefined}
            aria-describedby={erros.modelo ? 'erro-modelo' : undefined}
            className={classeCampo(erros.modelo)}
          />
          <MensagemErro id="erro-modelo" mensagem={erros.modelo} />
        </div>

        <div>
          <label htmlFor="placa" className="text-sm font-semibold text-slate-800">
            Placa
          </label>
          <input
            id="placa"
            name="placa"
            type="text"
            autoComplete="off"
            autoCapitalize="characters"
            spellCheck={false}
            maxLength={8}
            required
            placeholder="ABC1D23"
            value={campos.placa}
            onChange={handleChange}
            aria-invalid={erros.placa ? true : undefined}
            aria-describedby={erros.placa ? 'dica-placa erro-placa' : 'dica-placa'}
            className={`${classeCampo(erros.placa)} font-mono tracking-widest`}
          />
          <p id="dica-placa" className="mt-2 text-xs text-slate-500">
            Padrão antigo (ABC-1234) ou Mercosul (ABC1D23).
          </p>
          <MensagemErro id="erro-placa" mensagem={erros.placa} />
        </div>

        <div>
          <label htmlFor="tipoLavagem" className="text-sm font-semibold text-slate-800">
            Tipo de lavagem
          </label>
          <select
            id="tipoLavagem"
            name="tipoLavagem"
            required
            value={campos.tipoLavagem}
            onChange={handleChange}
            aria-invalid={erros.tipoLavagem ? true : undefined}
            aria-describedby={erros.tipoLavagem ? 'erro-tipoLavagem' : undefined}
            className={classeCampo(erros.tipoLavagem)}
          >
            <option value="" disabled>
              Selecione o tipo de lavagem
            </option>
            {servicos.map((servico) => (
              <option key={servico.id} value={servico.id}>
                {servico.nome} — {formatarMoeda(servico.preco)}
              </option>
            ))}
          </select>
          {servicoEscolhido && (
            <p className="mt-2 text-sm text-slate-600">
              Valor: <strong>{formatarMoeda(servicoEscolhido.preco)}</strong> · duração estimada:{' '}
              <strong>{formatarDuracao(servicoEscolhido.duracaoMinutos)}</strong>
            </p>
          )}
          <MensagemErro id="erro-tipoLavagem" mensagem={erros.tipoLavagem} />
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-sky-700 px-6 py-3.5 font-bold text-white shadow-lg shadow-sky-700/25 transition hover:bg-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
        >
          <CalendarPlus className="size-5" />
          Gerar tíquete
        </button>

        <div role="status">
          {mensagem && (
            <p className="flex items-center gap-2 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800 ring-1 ring-emerald-200">
              <CircleCheck className="size-5 shrink-0" />
              {mensagem}
            </p>
          )}
        </div>
      </form>
    </section>
  )
}
