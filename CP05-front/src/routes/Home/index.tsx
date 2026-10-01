import Apresentacao from '../../components/Apresentacao/Apresentacao'
import ChamadaAgendamento from '../../components/ChamadaAgendamento/ChamadaAgendamento'
import ComoFunciona from '../../components/ComoFunciona/ComoFunciona'
import Depoimentos from '../../components/Depoimentos/Depoimentos'
import Servicos from '../../components/Servicos/Servicos'
import useTituloPagina from '../../hooks/useTituloPagina'

export default function Home() {
  useTituloPagina('Home')

  return (
    <>
      <Apresentacao />
      <Servicos />
      <ComoFunciona />
      <Depoimentos />
      <ChamadaAgendamento />
    </>
  )
}
