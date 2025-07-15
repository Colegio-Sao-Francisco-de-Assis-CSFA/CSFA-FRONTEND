// components/theme-provider.tsx
'use client'; // <-- ADICIONE OU CONFIRME ESSA LINHA!

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes" // Se você usa next-themes
import { type ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
