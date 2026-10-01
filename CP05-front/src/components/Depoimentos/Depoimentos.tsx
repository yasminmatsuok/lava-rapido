import { depoimentos } from '../../data/depoimentos'
import CardDepoimento from '../CardDepoimento/CardDepoimento'
import TituloSecao from '../TituloSecao/TituloSecao'

export default function Depoimentos() {
  return (
    <section aria-labelledby="titulo-depoimentos" className="mx-auto max-w-6xl px-4 py-20">
      <TituloSecao
        id="titulo-depoimentos"
        rotulo="Depoimentos"
        titulo="Quem lava aqui, volta sempre"
        descricao="Veja como ficaram os carros dos nossos clientes e o que eles acharam do serviço."
      />
      <ul className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {depoimentos.map((depoimento) => (
          <li key={depoimento.id}>
            <CardDepoimento depoimento={depoimento} />
          </li>
        ))}
      </ul>
    </section>
  )
}
