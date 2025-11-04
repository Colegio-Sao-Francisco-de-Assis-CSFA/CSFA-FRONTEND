# CSFA - Colégio São Francisco de Assis

Este é o repositório do front-end do site do Colégio São Francisco de Assis.

## Visão Geral do Projeto

O projeto foi desenvolvido com base em uma arquitetura moderna, utilizando **Clean Architecture** e **Atomic Design**. O objetivo é criar um sistema modular, escalável e de fácil manutenção.

## Stacks e Arquitetura

- **Framework Principal:** Next.js (com App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Componentes de UI:** shadcn/ui
- **Gerenciador de Pacotes:** NPM

### Estrutura de Pastas Detalhada

A estrutura de pastas do projeto é organizada da seguinte forma:

```
.vscode/              # Configurações do VSCode
node_modules/         # Dependências do projeto
public/               # Arquivos estáticos (imagens, fontes, etc.)
src/
  app/                # Páginas e rotas da aplicação (App Router)
    (pages)/          # Agrupamento de páginas
      alunos/
      como-educamos/
      o-colegio/
      segmentos/
    api/              # Endpoints de API do Next.js
      instagram/
    globals.css       # Estilos globais
    layout.tsx        # Layout principal da aplicação
    page.tsx          # Página inicial
  components/         # Componentes React reutilizáveis
    contato/          # Componentes da página de contato
    extracurriculares/ # Componentes da página de extracurriculares
    index/            # Componentes da página inicial
    layouts/          # Componentes de layout (Header, Footer)
    shared/           # Componentes atômicos e moléculas (Design System)
      Banner/
      Button/
      Card/
    ui/               # Primitivos de UI (shadcn/ui)
  config/             # Configurações do projeto (env, etc.)
  hooks/              # Hooks React customizados
  lib/                # Funções utilitárias e helpers
    data/             # Dados mockados
    utils.ts          # Funções utilitárias
  services/           # Lógica de negócio e comunicação com o backend
  types/              # Tipos e interfaces TypeScript globais
.gitignore            # Arquivos e pastas a serem ignorados pelo Git
components.json       # Configuração do shadcn/ui
GEMINI.md             # Documentação da arquitetura e convenções do projeto
next.config.ts        # Configurações do Next.js
package.json          # Dependências e scripts do projeto
README.md             # Documentação do projeto
taiwind.config.ts     # Configurações do Tailwind CSS
tsconfig.json         # Configurações do TypeScript
```

### Padrões Arquiteturais

#### Clean Architecture

A Clean Architecture é um modelo de design de software que separa o código em camadas, com o objetivo de isolar a lógica de negócio de dependências externas, como frameworks e bancos de dados. Isso torna o código mais testável, manutenível e independente de tecnologia.


**Responsabilidades das Camadas:**

- **Domain (Entidades):** Contém os objetos de domínio e as regras de negócio mais gerais. No nosso caso, são as interfaces e tipos definidos em `src/types`.
- **Use Cases (Casos de Uso):** Contém a lógica de negócio específica da aplicação. São as funções que orquestram o fluxo de dados, como buscar uma lista de turmas ou criar um novo aluno. Essa lógica reside principalmente nos arquivos de serviço em `src/services`.
- **Interface Adapters (Adaptadores de Interface):** Converte os dados do formato mais conveniente para os casos de uso e entidades para o formato mais conveniente para os frameworks e drivers. Isso inclui os `Presenters` que formatam os dados para a UI.
- **Frameworks & Drivers (Frameworks e Drivers):** É a camada mais externa, que contém os detalhes de implementação, como o Next.js, React, a biblioteca de acesso ao banco de dados, etc.

**Fluxo de Dados (Exemplo: Buscar Turmas):**

1.  O usuário acessa a página de turmas.
2.  O componente React (UI) chama uma função do endpoint da API em `src/app/api/turmas/route.ts`.
3.  O endpoint da API (Frameworks & Drivers) chama o `getTurmas` do `turmaService` (Use Cases).
4.  O `turmaService` faz a requisição para a API externa usando o `axios` (Frameworks & Drivers).
5.  A API externa retorna os dados.
6.  O `turmaService` recebe os dados e os retorna para o endpoint da API.
7.  O endpoint da API retorna os dados para o componente React.
8.  O componente React renderiza os dados na tela.

#### Atomic Design

O Atomic Design é uma metodologia para criar sistemas de design de forma hierárquica e componentizada. Ele divide a interface em cinco níveis:

**Diagrama de Níveis:**


- **Atoms (Átomos):** Os blocos de construção básicos da interface, como botões, inputs, labels e ícones. Eles são encontrados em `src/components/ui`.
- **Molecules (Moléculas):** Grupos de átomos que funcionam juntos como uma unidade, como um campo de busca (composto por um input e um botão).
- **Organisms (Organismos):** Partes relativamente complexas da interface que são compostas por grupos de moléculas e/ou átomos, como um cabeçalho, um rodapé ou um card de produto.
- **Templates (Modelos):** Estruturas de página que definem o layout do conteúdo, mas sem o conteúdo real.
- **Pages (Páginas):** Instâncias específicas de templates, com conteúdo real e funcionalidade.

**Exemplo de Composição de Página:**

1.  **Átomos:** `Button`, `Input`, `Card`, `CardHeader`, `CardTitle`.
2.  **Moléculas:** Um formulário de busca (`Input` + `Button`), um item de menu (`Link` + `Icon`).
3.  **Organismos:** O `TurmaCard` (composto por `Card`, `CardHeader`, `CardTitle`, etc.), a barra de navegação (composta por itens de menu).
4.  **Templates:** Um layout de duas colunas com uma barra lateral e uma área de conteúdo principal.
5.  **Páginas:** A página de turmas, que usa o template de duas colunas, exibe a barra de navegação e uma lista de `TurmaCard`s.

## Requisições HTTP

Para a comunicação com o backend, o projeto utiliza o `axios`. A lógica de negócio e a comunicação com a API são separadas em duas camadas:

- **`services/`:** Esta pasta contém a lógica de negócio e as funções que fazem as requisições HTTP para o backend. Cada serviço é responsável por um recurso da API (ex: `turmaService.ts`).

- **`app/api/`:** Esta pasta contém os endpoints da API do Next.js. Eles recebem as requisições do cliente, chamam os serviços correspondentes na pasta `services/` e retornam a resposta.

**Exemplo: Buscar turmas**

1.  **Serviço (`src/services/turmaService.ts`):**

    ```typescript
    import axios from 'axios';

    const api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
    });

    export const getTurmas = async () => {
      const response = await api.get('/turmas');
      return response.data;
    };
    ```

2.  **Endpoint da API (`src/app/api/turmas/route.ts`):**

    ```typescript
    import { getTurmas } from '@/services/turmaService';
    import { NextResponse } from 'next/server';

    export async function GET() {
      try {
        const turmas = await getTurmas();
        return NextResponse.json(turmas);
      } catch (error) {
        return new NextResponse('Internal Server Error', { status: 500 });
      }
    }
    ```

## Dependências

As principais dependências do projeto são:

- **Next.js:** Framework React para renderização no servidor e geração de sites estáticos.
- **React:** Biblioteca para construção de interfaces de usuário.
- **TypeScript:** Superset de JavaScript que adiciona tipagem estática.
- **Tailwind CSS:** Framework de CSS utilitário para estilização.
- **shadcn/ui:** Coleção de componentes de UI reutilizáveis.
- **Zod:** Biblioteca para validação de esquemas.
- **React Hook Form:** Gerenciamento de formulários.
- **NextAuth.js:** Autenticação.
- **Prettier:** Formatador de código.
- **Swiper:** Biblioteca para carrosséis e sliders.
- **Framer Motion:** Biblioteca para animações.
- **Lucide React:** Biblioteca de ícones.
- **Iconify:** Biblioteca de ícones.
- **clsx:** Utilitário para construir strings de classes condicionalmente.
- **ESLint:** Ferramenta de linting para JavaScript e TypeScript.
- **React Input Mask:** Componente de input com máscara.

Para uma lista completa, consulte o arquivo `package.json`.

## Tipagem

O projeto utiliza TypeScript para a tipagem de dados. As interfaces e tipos são definidos em arquivos `types.ts` dentro de cada módulo de componente ou em `src/types` para tipos globais.

**Exemplo de tipo:**

```typescript
// src/modules/alunos/turmas/types.ts
export interface Turma {
  id: string;
  nome: string;
  descricao: string;
}
```

## Exemplos de Uso de Bibliotecas

### Swiper

Para criar um carrossel de imagens:

```tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ImageCarousel = () => (
  <Swiper>
    <SwiperSlide><img src="/path/to/image1.jpg" alt="Image 1" /></SwiperSlide>
    <SwiperSlide><img src="/path/to/image2.jpg" alt="Image 2" /></SwiperSlide>
  </Swiper>
);
```

### Framer Motion

Para adicionar uma animação de fade-in a um elemento:

```tsx
import { motion } from 'framer-motion';

const FadeInDiv = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    Hello, world!
  </motion.div>
);
```

### Zod e React Hook Form

Para validar um formulário de contato:

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
});

type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />
      {errors.name && <span>{errors.name.message}</span>}
      <input {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}
      <button type="submit">Submit</button>
    </form>
  );
};
```

### clsx

Para aplicar classes condicionalmente:

```tsx
import clsx from 'clsx';

const Button = ({ primary, disabled }) => (
  <button
    className={clsx(
      'px-4 py-2 rounded',
      primary && 'bg-blue-500 text-white',
      disabled && 'opacity-50 cursor-not-allowed'
    )}
  >
    Click me
  </button>
);
```

## Como Instalar e Rodar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/CSFA-FRONTEND.git
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env.local` na raiz do projeto e adicione as variáveis necessárias.

4. **Rode o projeto em modo de desenvolvimento:**
   ```bash
   npm run dev
   ```

O site estará disponível em `http://localhost:3000`.
