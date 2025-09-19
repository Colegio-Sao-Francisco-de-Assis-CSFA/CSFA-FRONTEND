# Card Component

Sistema de componentes de card reutilizável e flexível, baseado nos padrões dos cards existentes do projeto (News, Campus, Parceiros).

## Características

- **Modular**: Componentes atômicos que podem ser compostos
- **Flexível**: Adapta-se a diferentes tipos de conteúdo
- **Variantes**: Suporte a diferentes estilos (news, campus, parceiros, etc.)
- **Acessível**: Segue padrões de acessibilidade
- **Tema consistente**: Usa as cores definidas no `globals.css`

## Componentes Principais

### Card (Container)
Container principal com variantes e tamanhos.

```tsx
<Card variant="news" size="lg">
  {/* conteúdo */}
</Card>
```

**Variantes:**
- `default`: Estilo padrão
- `news`: Para notícias (hover com elevação)
- `campus`: Para showcase do campus (hover com sombra)
- `parceiros`: Para parceiros (hover com escala e rotação)
- `minimal`: Estilo minimalista

**Tamanhos:**
- `sm`: Pequeno (p-3)
- `default`: Padrão (p-4)
- `lg`: Grande (p-6)
- `xl`: Extra grande (p-8)

### Subcomponentes

#### CardImage
Imagem responsiva com Next.js Image.

```tsx
<CardImage
  src="/image.jpg"
  alt="Descrição"
  className="h-48"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

#### CardIcon
Ícone com diferentes variantes.

```tsx
<CardIcon
  icon={<UserIcon />}
  variant="gradient"
/>
```

**Variantes:**
- `default`: Ícone simples com fundo primary
- `gradient`: Ícone com gradiente (estilo parceiros)
- `outline`: Ícone com borda

#### CardContent
Container para o conteúdo principal.

```tsx
<CardContent>
  <CardTitle>Título</CardTitle>
  <CardDescription>Descrição</CardDescription>
</CardContent>
```

#### CardTitle
Título do card com diferentes níveis.

```tsx
<CardTitle as="h2" className="text-xl">
  Título do Card
</CardTitle>
```

#### CardDescription
Descrição com controle de linhas.

```tsx
<CardDescription maxLines={3}>
  Descrição do card que será truncada em 3 linhas
</CardDescription>
```

#### CardFooter
Rodapé do card com borda opcional.

```tsx
<CardFooter showBorder={true}>
  <CardDate date="2024-01-15" />
  <CardAction href="/link">Ver mais</CardAction>
</CardFooter>
```

#### CardBadge
Badge posicionado sobre a imagem.

```tsx
<CardBadge
  color="#3465ed"
  position="top-left"
>
  Categoria
</CardBadge>
```

#### CardDate
Data com ícone opcional.

```tsx
<CardDate
  date="15 de Janeiro, 2024"
  icon={<CalendarIcon size={16} />}
/>
```

#### CardAction
Ação (link ou botão) do card.

```tsx
<CardAction
  href="/link"
  variant="button"
  buttonVariant="csfa"
>
  Acessar
</CardAction>
```

## Cards Compostos

### NewsCard
Card específico para notícias.

```tsx
import { NewsCard } from '@/components/shared/Card'

<NewsCard
  item={{
    id: "1",
    title: "Título da notícia",
    excerpt: "Resumo da notícia...",
    imageUrl: "/news.jpg",
    date: "15 de Janeiro, 2024",
    category: "Educação",
    categoryColor: "#3465ed",
    slug: "/noticia/titulo"
  }}
/>
```

### CampusCard
Card para showcase do campus.

```tsx
import { CampusCard } from '@/components/shared/Card'

<CampusCard
  feature={{
    id: "1",
    title: "Laboratório de Ciências",
    description: "Descrição do laboratório...",
    imageSrc: "/campus.jpg",
    imageAlt: "Laboratório de Ciências"
  }}
/>
```

### ParceirosCard
Card para parceiros com ícone.

```tsx
import { ParceirosCard } from '@/components/shared/Card'

<ParceirosCard
  icon={<GraduationCap />}
  title="Parceria Educacional"
  description="Descrição da parceria..."
/>
```

## Uso Avançado

### Card Customizado
Composição livre dos subcomponentes.

```tsx
<Card variant="default" className="custom-card">
  <CardImage src="/image.jpg" alt="Imagem" />
  <CardBadge color="#ff0000">Novo</CardBadge>

  <CardContent>
    <CardTitle>Título Customizado</CardTitle>
    <CardDescription maxLines={2}>
      Descrição customizada
    </CardDescription>
  </CardContent>

  <CardFooter>
    <CardDate date="Hoje" />
    <CardAction
      onClick={() => console.log('clicked')}
      variant="button"
    >
      Ação Customizada
    </CardAction>
  </CardFooter>
</Card>
```

## Migração dos Cards Existentes

Os cards existentes podem ser facilmente migrados:

1. **NewsCard**: Use `NewsCard` diretamente
2. **CampusShowcaseCard**: Use `CampusCard`
3. **ParceiroBeneficioCard**: Use `ParceirosCard`

Todos mantêm a mesma API e comportamento visual dos originais.
