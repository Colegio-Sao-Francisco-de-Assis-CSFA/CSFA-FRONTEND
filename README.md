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

A arquitetura segue os princípios de **Clean Architecture**, separando as responsabilidades em camadas, e **Atomic Design** para a estruturação dos componentes de UI (átomos, moléculas, organismos).

### Estrutura de Pastas

A estrutura de pastas do projeto é organizada da seguinte forma:

```
src/
  app/                # Páginas e rotas da aplicação
    api/              # Endpoints de API
  components/         # Componentes reutilizáveis
    shared/           # Componentes atômicos e moléculas
    ui/               # Primitivos de UI (shadcn)
  hooks/              # Hooks customizados
  lib/                # Funções utilitárias
  services/           # Lógica de negócio e comunicação com o backend
  types/              # Tipos e interfaces globais
  ```

### Padrões Arquiteturais

- **Clean Architecture:** A lógica de negócio é separada da UI e do framework, tornando o código mais testável e independente.
- **Atomic Design:** Os componentes são divididos em átomos, moléculas e organismos, promovendo a reutilização e a consistência visual.

### Modularidade de Componentes

A modularidade dos componentes segue o princípio do Atomic Design:

- **Átomos:** Componentes básicos e indivisíveis, como `Button`, `Input`, `Label`. Eles são encontrados em `src/components/ui`.
- **Moléculas:** Combinações de átomos que formam componentes mais complexos, como um campo de busca (composto por `Input` e `Button`).
- **Organismos:** Combinações de moléculas que formam seções de uma página, como um cabeçalho ou um formulário de contato.

**Exemplo: `TurmaCard`**

Um exemplo prático é o `TurmaCard`, que pode ser encontrado em `src/modules/alunos/turmas/components/TurmaCard`. Este componente é um organismo que exibe informações sobre uma turma. Ele é composto por átomos como `Card`, `CardHeader`, `CardTitle`, `CardDescription` e `CardContent`.

```tsx
// src/modules/alunos/turmas/components/TurmaCard/TurmaCard.tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Turma } from '../types';

interface TurmaCardProps {
  turma: Turma;
}

export const TurmaCard = ({ turma }: TurmaCardProps) => (
  <Card>
    <CardHeader>
      <CardTitle>{turma.nome}</CardTitle>
      <CardDescription>{turma.descricao}</CardDescription>
    </CardHeader>
    <CardContent>
      {/* Outras informações da turma */}
    </CardContent>
  </Card>
);
```

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
