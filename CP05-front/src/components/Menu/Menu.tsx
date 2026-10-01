import { NavLink } from 'react-router-dom'

const links = [
  { para: '/', rotulo: 'Home' },
  { para: '/agendamentos', rotulo: 'Agendamentos' },
  { para: '/sobre', rotulo: 'Sobre' },
]

type MenuProps = {
  className?: string
}

export default function Menu({ className = '' }: MenuProps) {
  return (
    <nav aria-label="Menu principal" className={className}>
      <ul className="flex items-center gap-1 rounded-full bg-slate-100 p-1">
        {links.map((link) => (
          <li key={link.para} className="flex-1 md:flex-none">
            <NavLink
              to={link.para}
              end
              className={({ isActive }) =>
                `block rounded-full px-4 py-2 text-center text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-white text-sky-800 shadow-sm'
                    : 'text-slate-600 hover:bg-white/70 hover:text-slate-900'
                }`
              }
            >
              {link.rotulo}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
