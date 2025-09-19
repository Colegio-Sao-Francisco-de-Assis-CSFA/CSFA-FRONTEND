# Button Component

Componente de botão reutilizável baseado no shadcn/ui com variantes específicas do projeto CSFA.

## Características

- **Baseado em shadcn/ui**: Utiliza o componente Button do shadcn como base
- **Variantes personalizadas**: Inclui variantes específicas do tema CSFA
- **Suporte a links**: Pode ser usado como botão ou link (interno/externo)
- **Acessibilidade**: Segue padrões de acessibilidade com foco e estados
- **Tema consistente**: Usa as cores definidas no `globals.css`

## Variantes

- `default`: Botão primário padrão
- `destructive`: Botão de ação destrutiva (vermelho)
- `outline`: Botão com borda
- `secondary`: Botão secundário
- `ghost`: Botão transparente
- `link`: Botão como link
- `csfa`: Variante específica do CSFA (primária)
- `csfa-outline`: Variante outline do CSFA
- `csfa-ghost`: Variante ghost do CSFA

## Tamanhos

- `default`: Tamanho padrão
- `sm`: Pequeno
- `lg`: Grande
- `xl`: Extra grande
- `icon`: Quadrado para ícones
- `icon-sm`: Ícone pequeno
- `icon-lg`: Ícone grande

## Uso

```tsx
import { Button } from '@/components/shared/Button'

// Botão simples
<Button>Clique aqui</Button>

// Botão com variante
<Button variant="csfa" size="lg">Matricular</Button>

// Botão como link interno
<Button href="/contato">Contato</Button>

// Botão como link externo
<Button href="https://exemplo.com" external>Site Externo</Button>

// Botão com ícone
<Button size="icon">
  <PlusIcon />
</Button>
```
