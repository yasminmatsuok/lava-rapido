import { House } from 'lucide-react'
import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom'
import Cabecalho from '../../components/Cabecalho/Cabecalho'
import Rodape from '../../components/Rodape/Rodape'
import useTituloPagina from '../../hooks/useTituloPagina'

export default function Erro() {
  const erro = useRouteError()
  const naoEncontrada = isRouteErrorResponse(erro) && erro.status === 404

  useTituloPagina(naoEncontrada ? 'Página não encontrada' : 'Erro')

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-800 antialiased">
      <Cabecalho />
      <main id="conteudo" tabIndex={-1} className="flex flex-1 items-center justify-center px-4 py-20 focus:outline-hidden">
        <section aria-labelledby="titulo-erro" className="max-w-lg text-center">
          <p className="bg-linear-to-r from-sky-600 to-cyan-500 bg-clip-text text-8xl font-extrabold text-transparent">
            {naoEncontrada ? '404' : 'Ops!'}
          </p>
          <h1 id="titulo-erro" className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900">
            {naoEncontrada ? 'Página não encontrada' : 'Algo deu errado'}
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            {naoEncontrada
              ? 'O endereço que você procurou não existe ou foi removido. Que tal voltar e agendar uma lavagem?'
              : 'Ocorreu um erro inesperado. Volte para a página inicial e tente novamente.'}
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-sky-700 px-6 py-3 font-bold text-white shadow-lg shadow-sky-700/25 transition hover:bg-sky-800"
          >
            <House className="size-5" />
            Voltar para a Home
          </Link>
        </section>
      </main>
      <Rodape />
    </div>
  )
}
