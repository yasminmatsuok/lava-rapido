import { ExternalLink } from 'lucide-react'
import BannerPagina from '../../components/BannerPagina/BannerPagina'
import CardIntegrante from '../../components/CardIntegrante/CardIntegrante'
import TituloSecao from '../../components/TituloSecao/TituloSecao'
import { integrantes } from '../../data/integrantes'
import useTituloPagina from '../../hooks/useTituloPagina'

const LINK_REPOSITORIO = 'https://github.com/vinisl2510-sudo/ParaYasmin'

const tecnologias = [
  { nome: 'React 19', descricao: 'Componentes e hooks (useState, useEffect e useContext).' },
  { nome: 'Vite', descricao: 'Servidor de desenvolvimento e build de produção.' },
  { nome: 'TypeScript', descricao: 'Tipagem das props, do contexto e dos dados.' },
  { nome: 'Tailwind CSS 4', descricao: 'Toda a estilização das páginas, sem CSS próprio.' },
  { nome: 'React Router 7', descricao: 'Rotas criadas com createBrowserRouter e RouterProvider.' },
  { nome: 'Context API', descricao: 'Fila de tíquetes compartilhada entre as páginas e o cabeçalho.' },
]

export default function Sobre() {
  useTituloPagina('Sobre')

  return (
    <>
      <BannerPagina
        rotulo="Sobre"
        titulo="Quem faz o Brilho Total"
        descricao="Site desenvolvido para o Checkpoint 5 de Front-End Design Engineering (1TDSPI): roteamento de páginas com React Router e compartilhamento de informações com o hook useContext."
      />

      <section aria-labelledby="titulo-integrantes" className="mx-auto max-w-6xl px-4 py-16">
        <TituloSecao
          id="titulo-integrantes"
          rotulo="Equipe"
          titulo="Integrantes do grupo"
          descricao="As pessoas que planejaram, desenvolveram e estilizaram este projeto."
        />
        <ul className="mt-12 flex flex-wrap justify-center gap-6">
          {integrantes.map((integrante) => (
            <li key={integrante.rm} className="w-full max-w-xs sm:w-60 lg:w-48">
              <CardIntegrante integrante={integrante} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="titulo-tecnologias" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <TituloSecao id="titulo-tecnologias" rotulo="Projeto" titulo="Tecnologias utilizadas" />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tecnologias.map((tecnologia) => (
              <li key={tecnologia.nome} className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
                <h3 className="font-bold text-slate-900">{tecnologia.nome}</h3>
                <p className="mt-1 text-sm text-slate-600">{tecnologia.descricao}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-center">
            <a
              href={LINK_REPOSITORIO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-slate-700"
            >
              Ver o repositório no GitHub
              <ExternalLink className="size-4" />
              <span className="sr-only">(abre em uma nova aba)</span>
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
