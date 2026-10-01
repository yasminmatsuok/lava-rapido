import BannerPagina from '../../components/BannerPagina/BannerPagina'
import FormularioAgendamento from '../../components/FormularioAgendamento/FormularioAgendamento'
import ListaTickets from '../../components/ListaTickets/ListaTickets'
import useTituloPagina from '../../hooks/useTituloPagina'

export default function Agendamentos() {
  useTituloPagina('Agendamentos')

  return (
    <>
      <BannerPagina
        rotulo="Agendamentos"
        titulo="Agende sua lavagem"
        descricao="Preencha o formulário para gerar o tíquete de lavagem. Cada tíquete entra na fila de atendimento e pode ser excluído no próprio tíquete."
      />
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 lg:grid-cols-[400px_1fr]">
        <FormularioAgendamento />
        <ListaTickets />
      </div>
    </>
  )
}
