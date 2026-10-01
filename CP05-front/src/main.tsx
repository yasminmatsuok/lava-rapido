import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '@fontsource-variable/plus-jakarta-sans'
import './index.css'
import App from './App'
import TicketProvider from './context/TicketProvider'
import Agendamentos from './routes/Agendamentos'
import Erro from './routes/Erro'
import Home from './routes/Home'
import Sobre from './routes/Sobre'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Erro />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/agendamentos', element: <Agendamentos /> },
      { path: '/sobre', element: <Sobre /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* O provedor envolve todas as rotas: cabeçalho, páginas e página de erro enxergam a mesma fila. */}
    <TicketProvider>
      <RouterProvider router={router} />
    </TicketProvider>
  </StrictMode>,
)
