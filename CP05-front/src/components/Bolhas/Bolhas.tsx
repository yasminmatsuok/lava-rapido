// Bolhas de sabão decorativas usadas nos banners (ocultas para leitores de tela).
export default function Bolhas() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className="absolute top-10 -left-12 size-48 rounded-full border border-white/10 bg-white/5" />
      <span className="absolute -top-12 left-1/3 size-28 rounded-full border border-white/10 bg-white/5" />
      <span className="absolute right-1/4 -bottom-20 size-64 rounded-full border border-white/10 bg-white/5" />
      <span className="absolute top-8 right-8 size-16 rounded-full border border-white/20" />
      <span className="absolute bottom-10 left-1/2 size-8 rounded-full border border-white/25" />
    </div>
  )
}
