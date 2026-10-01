import { Outlet, ScrollRestoration } from 'react-router-dom'
import Cabecalho from './components/Cabecalho/Cabecalho'
import Rodape from './components/Rodape/Rodape'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-800 antialiased">
      <Cabecalho />
      <main id="conteudo" tabIndex={-1} className="flex-1 focus:outline-hidden">
        <Outlet />
      </main>
      <Rodape />
      <ScrollRestoration />
    </div>
  )
}
