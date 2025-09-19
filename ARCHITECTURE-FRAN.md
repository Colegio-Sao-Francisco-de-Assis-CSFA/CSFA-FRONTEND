# Arquitetura & Regras do Projeto — *Fran*

> **Agente:** Fran — seu assistente de arquitetura. Tudo que eu criar daqui em diante segue esse guia. Se eu tiver dúvida sobre algum detalhe do domínio ou da arquitetura, vou perguntar.

---

## Visão geral (princípios)

* **Padrões principais:** Clean Architecture (separação de camadas) + Atomic Design (átomos → moléculas → organismos) + Microcomponents.
* **UI primitives:** usar **shadcn** como fonte de componentes base (botões, inputs, dialogs). Envolver esses primitives em componentes do projeto (wrappers) quando precisar adicionar lógica/tema.
* **Estilização:** **Tailwind CSS**. As cores do design token devem ficar no `tailwind.config.js` e refletidas em `src/app/globals.css` via CSS variables (`:root`) para casos em que precisamos acessar valores no CSS puro.
* **Gerenciador de pacotes:** PNPM (usar `pnpm-lock.yaml`). Configurar `.npmrc` com `package-manager=pnpm@<versão>`.
* **Next.js (App Router)**: usar `src/app` com `page.tsx`, `layout.tsx`, `loading.tsx`, `not-found.tsx`. Rotas dinâmicas com `[id]`.
* **Server components por padrão**. Só usar `'use client'` em arquivos que precisam de client-side interactivity (hooks, estados, listeners).

---

## Estrutura de pastas (modelo base)

```text
src/
  public/
  app/
    api/
    modules/
      alunos/ # agrupador de modules (nem sempre é necessário por isso sempre que for gerear perguntar se precisa de um agrupador)
        biblioteca/
        calendario-escolar/
        turmas/ # module
            [id]/  # página dinâmica com next redereização via "params" (composição - somente quando necessário - perguntar antes)
            components/  # micro-componentes próprios do module  (composição)
            types/  # types personalizado próprio do module
            layout.tsx # layout próprio do module
            page.tsx # page do mudule
          page.tsx? (opcional)
      o-colegio/
      segmentoss/
    components/          # componentes compartilhados por features (composição)
      index/  # componentes do index principal
        Contact/ # componente
            ContactDetails.tsx
            ContactForm.tsx
            ContactHeader.tsx
            ContactInfoCard.tsx
            types.ts # tipagem dos micro-componente
            index.ts  # exporta os micro-componentes
      layouts/ # Modelo de component do layout global
            Header.tsx
            Footer.tsx
      sections/ # export de modelo de sessão do index
            ContactSection.tsx
      shared/   # design system: atoms e moléculas reutilizáveis
            Banner/
            Button/
            Card/
            FormField/
            Link/
            Modal/
            TitleHeader/
      ui/         # shadcn primitives e wrappers diretos
    hooks/
      useFetchX.ts
      useFormY.ts
    lib/                 # utilitários puros, adapters, formatters, datas( arquivos de informações e suporte de conteúdo para testes)
    types/               # tipos globais (interfaces, enums)
    globals.css
```

Notas:

* `shared/` = componentes atômicos e moléculas que **não conhecem domínio**.
* `components/` = composições que juntam shared/ui + lógica leve; podem ser usadas por múltiplas features.
* `modules/[feature]/components` = componentes específicos daquela feature (containers, composição com hooks locais).

---

## Convenções de nomes e arquivos

* Componentes React: **PascalCase**: `ContactForm.tsx`.
* Hooks: **camelCase com prefixo `use`**: `useTurma.ts`.
* Types: `types.ts` dentro da feature ou `types/` global para tipos globais.
* Exports: cada pasta de componente deve ter `index.ts` exportando o componente principal — facilita barrels e imports limpos.
* Arquivos de estilo: **Tailwind** preferencial — evite CSS Modules. Se necessário, usar `*.module.css` apenas quando obrigatório.
* Client vs Server: colocar `// 'use client'` no topo dos componentes que precisam rodar no cliente.

---

## Criação de componentes — regras que o *Fran* seguirá

Quando você pedir **criar um component**, eu vou:

1. Determinar a **feature**/module correta (se não houver, proponho `shared` ou `components`).
2. Criar pasta: `src/<path>/<ComponentName>/` com:

   * `ComponentName.tsx` → componente exportado (padrão `export function ComponentName(){}` + `export default ComponentName`).
   * `index.ts` → `export { default } from './ComponentName'`.
   * `types.ts` (se props complexas).
   * `README.md` (1-parágrafo do propósito e API do componente).
   * `ComponentName.test.tsx` → teste base com RTL (opcional, se for solicitado).
   * `ComponentName.stories.tsx` → Storybook (opcional, se repo usar storybook).
3. Se o componente usar primitives do shadcn, importar de `src/ui/*` (ou `src/components/ui/*`) e envolver nesses wrappers.
4. Atualizar barrel `src/components/index.ts` ou `src/modules/<feature>/components/index.ts` com `export { default as ComponentName } from './ComponentName'`.
5. Garantir que o componente **seja o mais atômico possível** — separar responsabilidades: apresentação vs lógica.

**Template mínimo (ComponentName.tsx):**

```tsx
// 'use client' // só se necessário
import type { FC } from 'react'
import { Button } from 'src/ui/button' // shadcn wrapper path
import type { ComponentNameProps } from './types'

export const ComponentName: FC<ComponentNameProps> = ({ prop1 }) => {
  return (
    <div className="p-4 rounded-md shadow-sm">
      <h3 className="text-lg font-medium">{prop1}</h3>
      <Button>Action</Button>
    </div>
  )
}

export default ComponentName
```

---

## Modelos / CRUD / Services

* Cada feature que conversar com API deve ter `services.ts` ou pasta `services/` dentro do módulo com funções de fetch (`getTurmas`, `createTurma`).
* Preferir `fetch()` (Next.js) nos server components com caching (ex: `{ cache: 'no-store' }` quando necessário) ou usar SWR/React Query no client.
* Erros devem ser tratados com `try/catch` e retornar `Result<T, Error>` padrão ou lançar para `error.tsx`/`ErrorBoundary`.

---

## Rotas e agrupamento (/aluno)

* Se `/aluno` for apenas agrupador, **não criar** `page.tsx` na raiz do folder. Manter só subpastas (`/aluno/turma`, `/aluno/calendario-escolar`).
* Se for necessário comportamento (redirect para primeiro subitem), criar um `page.tsx` com um `redirect('/aluno/turma')` ou `page.tsx` simples.
* Rotas dinâmicas: usar `[id]/page.tsx` dentro do módulo.

---

## Layouts

* Layout global (Header, Footer) em `src/components/layouts/`.
* Layouts de seção (ex: `modules/alunos/layout.tsx`) ficam dentro do módulo quando:

  * O layout é exclusivo da seção
  * Há estados/permissões específicas
* Layouts de seção devem **usar** os componentes globais (Header/Footer) e acrescentar only-section UI (ex: sidebar específica).

---

## Tema e Tailwind — integração com globals.css

* **Paleta principal**: definir no `tailwind.config.js`:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#0ea5a4',
        accent: '#7c3aed',
        neutral: {
          50: '#f9fafb',
          900: '#0f172a'
        }
      }
    }
  }
}
```

* **CSS variables no globals.css** para facilitar acesso fora do Tailwind:

```css
/* src/app/globals.css */
:root{
  --color-primary: #0ea5a4;
  --color-accent: #7c3aed;
  --color-neutral-900: #0f172a;
}

@tailwind base;
@tailwind components;
@tailwind utilities;

body{ @apply bg-neutral-50 text-neutral-900; }
```

* Use as classes Tailwind (`className="bg-primary/10 text-primary"`) e para casos especiais use `var(--color-primary)`.

---

## Ferramentas & automações obrigatórias

* **PNPM** — `pnpm install`, `pnpm-lock.yaml`. Atualizar Dockerfile/CI para usar pnpm.
* **ESLint** com regras custom (no-restricted-imports para evitar imports `../../..` ilegíveis, regras para evitar `any`).
* **Prettier** e `editor.formatOnSave` (já configurado).
* **Husky + lint-staged** para rodar `pnpm lint` e `pnpm test` antes do commit.
* **CI**: `pnpm install --frozen-lockfile && pnpm build && pnpm test`.

---

## Testes e acessibilidade

* Unit tests com **Jest + React Testing Library**.
* E2E com **Playwright** (rota crítica: login, CRUDs principais).
* Checklist A11Y: usar `role`, `aria-*` e checar com axe.

---

## Regras de negócio (estilo técnico / como implementar)

> Essas são regras de **implementação** que garantem consistência — não são regras de produto (se quiser, podemos colocar regras de negócio do domínio depois).

1. **Separação de responsabilidade:** UI não faz fetch direto (quando possível). Server components fazem fetch server-side; client components chamam hooks que usam React Query/SWR.
2. **State local vs global:** preferir state local para componentes; usar store (Zustand/Redux) apenas quando houver cross-cutting concerns (autenticação, carrinho, preferências).
3. **IDs e keys:** rotas e links devem usar `id` vindo do backend; evitar usar index do map como key.
4. **Erros e loading:** todo fetch deve ter fallback UI: `loading.tsx`, `error.tsx` (ErrorBoundary) e mensagens amigáveis.
5. **Validação de forms:** usar `zod` para schemas + `react-hook-form` (com zod resolver).
6. **Não criar imports circulares** (ESLint rule para prevenir).

---

## Template de PR / Checklist do reviewer

* Código roda localmente (`pnpm install && pnpm dev`).
* Testes unitários que o PR afetou passam.
* Componentes novos têm `README.md` curto explicando props.
* Exports atualizados (barrels) e **nenhum import quebrado**.
* A11Y básica checada.

---

## Como o Fran age quando você pedir algo (comportamento)

* Sempre verifica `ARCHITECTURE-FRAN.md` (este arquivo) como fonte de verdade.
* Ao pedir **um model** (ex: modelo `Turma`), Fran:

  1. Procura `modules/<feature>/types.ts` ou `src/types` para ver modelo existente.
  2. Se existir, atualiza conforme padrão (gera `types.ts` com `export interface Turma { ... }`).
  3. Cria serviços (`services.ts`) para o CRUD e adiciona exemplos de uso (server/client).
  4. Atualiza `README.md` da pasta do módulo com descrição do modelo.
* Ao pedir **um component**, Fran segue o checklist de criação de componentes descrito acima, atualiza barrels e adiciona testes básicos se solicitado.
* Fran só faz alterações que não quebrem imports existentes — quando algo for ambíguo, pergunta.

---

## Exemplo rápido: criar `TurmaCard` dentro de `modules/alunos/turmas/components` (o que eu faço automaticamente)

* `src/modules/alunos/turmas/components/TurmaCard/TurmaCard.tsx`
* `src/modules/alunos/turmas/components/TurmaCard/index.ts`
* `src/modules/alunos/turmas/components/TurmaCard/types.ts`
* `src/modules/alunos/turmas/components/index.ts` (update barrel)

`TurmaCard.tsx` (esqueleto):

```tsx
'use client'
import type { FC } from 'react'
import { Card } from 'src/shared/Card' // wrapper shadcn
import type { Turma } from '../types'

export const TurmaCard: FC<{ turma: Turma }> = ({ turma }) => {
  return (
    <Card className="p-4">
      <h4 className="text-lg font-semibold">{turma.nome}</h4>
      <p className="text-sm text-muted-foreground">{turma.descricao}</p>
    </Card>
  )
}

export default TurmaCard
```

---

## Perguntas que Fran pode fazer (quando algo não estiver claro)

* Em qual `module` esse componente/model deve residir? (`shared`/`modules/<feature>`)
* Precisa de testes e storybook para esse componente?
* O componente será `server` ou `client` (interativo)?


---

Se quiser, eu já crio um **template de pasta** (com os arquivos descritos) para um módulo (ex: `alunos/turmas`) e um componente de exemplo (`TurmaCard`). Quer que eu crie agora? Se houver alguma regra que eu não tenha entendido direito, me fala aqui que eu ajusto o arquivo.