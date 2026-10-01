import { useEffect } from 'react'

export default function useTituloPagina(titulo: string) {
  useEffect(() => {
    document.title = `${titulo} | Brilho Total Lava-Rápido`
  }, [titulo])
}
