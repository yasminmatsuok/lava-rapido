# Brilho Total — Lava-Rápido 🚗✨

Checkpoint 5 — **Roteamento de páginas e uso do contexto**

- **Curso:** Análise e Desenvolvimento de Sistemas
- **Disciplina:** Front-End Design Engineering
- **Turma:** 1TDSPI
- **Professor:** Luís Carlos S. Silva

Site de um lava-rápido feito com **React + Vite + TypeScript + Tailwind CSS + React Router**, usando o hook
**`useContext`** para compartilhar a fila de lavagem entre as páginas e o cabeçalho.

## 👥 Integrantes

| Nome                 | RM     |
| -------------------- | ------ |
| Nome do Integrante 1 | 000001 |
| Nome do Integrante 2 | 000002 |


> Os mesmos nomes, RMs e fotos aparecem na página **Sobre** (arquivo `src/data/integrantes.ts`).


## 📄 Páginas

| Rota            | Página       | Conteúdo                                                                                                                                       |
| --------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`             | Home         | Apresentação do lava-rápido, serviços e preços, como funciona e **depoimentos com fotos dos carros lavados e a opinião dos clientes**.         |
| `/agendamentos` | Agendamentos | Formulário (nome do cliente, modelo, placa e tipo de lavagem) que gera os **tíquetes de lavagem**, cada um com o botão **Excluir**.            |
| `/sobre`        | Sobre        | Integrantes do grupo com **RM e foto**, tecnologias usadas e link do repositório.                                                              |
| qualquer outra  | Erro (404)   | Página de erro definida no `errorElement` da rota principal.                                                                                   |

Todas as páginas usam os componentes **Cabeçalho** e **Rodapé**. O cabeçalho, além do menu, mostra pelo contexto o
**número de carros aguardando lavagem**, que muda na hora quando um tíquete é criado ou excluído.

## 🧭 Rotas (React Router)

As rotas são criadas em `src/main.tsx` com `createBrowserRouter` e `RouterProvider`. O `App` é o layout
(Cabeçalho + `<Outlet />` + Rodapé) e as páginas ficam em `src/routes`:

```tsx
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
```

## 🧩 Contexto (useContext)

- `src/context/TicketContext.ts`: cria o contexto com `createContext` (lista de tíquetes, `adicionarTicket` e `removerTicket`).
- `src/context/TicketProvider.tsx`: guarda a fila com `useState`, salva no `localStorage` (a fila continua lá depois de recarregar a página) e disponibiliza tudo pelo `TicketContext.Provider`, que envolve o `RouterProvider`.
- Quem usa `useContext(TicketContext)`:
  - **Cabeçalho**: mostra quantos carros estão aguardando lavagem;
  - **Formulário de agendamento**: cria os tíquetes (e impede placa repetida na fila);
  - **Lista de tíquetes**: mostra a fila e exclui tíquetes;
  - **Chamada da Home**: informa quantos carros estão na fila.

## 🛠️ Tecnologias

- React 19 + Vite + TypeScript
- Tailwind CSS 4 (plugin `@tailwindcss/vite`), usado em **toda** a estilização. O `index.css` só importa o Tailwind e define a fonte no `@theme`
- React Router 7 (`react-router-dom`)
- Ícones: `lucide-react` · Fonte: Plus Jakarta Sans (`@fontsource-variable`)

Boas práticas W3C: HTML semântico (`header`, `nav`, `main`, `section`, `article`, `footer`, `address`), `lang="pt-BR"`,
um `h1` por página, `label` em todos os campos, textos alternativos nas imagens, mensagens de erro acessíveis e link
para pular direto ao conteúdo. O HTML renderizado de todas as páginas passou no validador oficial do W3C
(Nu HTML Checker) sem erros.

## ▶️ Como executar

Pré-requisito: Node.js 20.19+ (ou 22.12+).

```bash
npm install
npm run dev
```

Acesse o endereço mostrado no terminal (normalmente http://localhost:5173).

Outros comandos:

```bash
npm run build    # gera a versão de produção em dist/
npm run preview  # serve a versão de produção
npm run lint     # verifica o código com o ESLint
```

## 📁 Estrutura

```
src/
├── App.tsx                  # layout: Cabeçalho + Outlet + Rodapé
├── main.tsx                 # rotas (createBrowserRouter) + TicketProvider
├── index.css                # importação do Tailwind
├── assets/                  # ilustrações dos carros e fotos dos integrantes
├── components/              # Cabecalho, Rodape, Menu, FormularioAgendamento, CardTicket...
├── context/                 # TicketContext e TicketProvider
├── data/                    # serviços, depoimentos e integrantes
├── hooks/                   # useTituloPagina
├── routes/                  # páginas: Home, Agendamentos, Sobre e Erro
├── types/                   # tipos TypeScript
└── utils/                   # formatação de moeda, placa, datas etc.
```

## 🖼️ Imagens

As imagens dos carros dos depoimentos e da página inicial são ilustrações vetoriais (SVG) criadas para o projeto, em
`src/assets`. Para usar fotos reais, é só trocar os arquivos e ajustar os imports em `src/data/depoimentos.ts`.
