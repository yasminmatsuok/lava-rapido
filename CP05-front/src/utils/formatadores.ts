const formatadorMoeda = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

export function formatarMoeda(valor: number) {
  return formatadorMoeda.format(valor)
}

export function formatarDuracao(minutos: number) {
  const horas = Math.floor(minutos / 60)
  const resto = minutos % 60
  if (horas === 0) return `${resto} min`
  return resto === 0 ? `${horas}h` : `${horas}h${String(resto).padStart(2, '0')}`
}

export function formatarNumeroTicket(numero: number) {
  return String(numero).padStart(4, '0')
}

export function formatarDataHora(iso: string) {
  return new Date(iso).toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function quantidadeDeCarros(quantidade: number) {
  return quantidade === 1 ? '1 carro' : `${quantidade} carros`
}

/** Remove hífen, espaços e deixa em maiúsculas: "abc-1234" vira "ABC1234". */
export function normalizarPlaca(placa: string) {
  return placa.toUpperCase().replace(/[^A-Z0-9]/g, '')
}

/** Aceita o padrão antigo (ABC1234 ou ABC-1234) e o padrão Mercosul (ABC1D23). */
export function placaValida(placa: string) {
  return /^[A-Z]{3}[0-9][A-Z0-9][0-9]{2}$/.test(normalizarPlaca(placa))
}

export function formatarPlaca(placa: string) {
  const normalizada = normalizarPlaca(placa)
  // O padrão antigo é exibido com hífen; o Mercosul, sem.
  return /^[A-Z]{3}[0-9]{4}$/.test(normalizada)
    ? `${normalizada.slice(0, 3)}-${normalizada.slice(3)}`
    : normalizada
}
