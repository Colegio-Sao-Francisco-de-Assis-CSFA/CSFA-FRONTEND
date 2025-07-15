// app/api/instagram/route.ts
import { NextResponse } from 'next/server';
import { InstagramPost } from '@/types/instagram-types';

// Variáveis de Cache (cache em memória simples para demonstração)
// Em produção, considere um cache persistente como Redis ou banco de dados.
let cachedPosts: InstagramPost[] | null = null;
let lastFetched: number = 0;
const CACHE_DURATION = 1000 * 60 * 60; // 1 hora em milissegundos

export async function GET(request: Request) {
  // 3. Obtenha as variáveis de ambiente
  const IG_ID = process.env.NEXT_PUBLIC_IG_ID as string;
  const IG_USERNAME = process.env.NEXT_PUBLIC_IG_USERNAME as string;
  const IG_TOKEN = process.env.NEXT_PUBLIC_IG_TOKEN as string;
  const IG_VERSION = process.env.NEXT_PUBLIC_IG_VERSION as string;

  // 4. Validação das variáveis de ambiente
  if (!IG_ID || !IG_USERNAME || !IG_TOKEN || !IG_VERSION) {
    console.error('Erro: Variáveis de ambiente do Instagram (IG_ID, IG_USERNAME, IG_ACCESS_TOKEN, IG_API_VERSION) não configuradas corretamente no servidor.');
    return NextResponse.json(
      { error: 'Configuração do servidor incompleta. Por favor, verifique as variáveis de ambiente.' },
      { status: 500 }
    );
  }

  // 5. Lógica de Cache: Retorna os dados cacheados se ainda forem válidos
  if (cachedPosts && (Date.now() - lastFetched < CACHE_DURATION)) {
    console.log('Retornando posts do Instagram do cache.');
    return NextResponse.json(cachedPosts, { status: 200 });
  }

  // 6. Se o cache expirou ou não existe, faça a requisição para a API da Meta
  console.log('Cache de posts do Instagram expirado ou vazio. Buscando novos dados da Meta API...');
  try {
    const url = `https://graph.facebook.com/v${IG_VERSION}/${IG_ID}?fields=business_discovery.username(${IG_USERNAME}){media{id,like_count,comments_count,media_url,permalink,thumbnail_url}}&access_token=${IG_TOKEN}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      console.error('Erro da API do Instagram:', data.error);
      if (cachedPosts) {
        console.warn('Erro ao buscar novos posts, retornando dados cacheados antigos.');
        return NextResponse.json(cachedPosts, { status: 200 });
      }
      return NextResponse.json(
        { error: data.error.message || 'Erro ao carregar posts do Instagram da Meta API.' },
        { status: response.status }
      );
    }

    if (data.business_discovery && data.business_discovery.media && data.business_discovery.media.data) {
      const latestPosts: InstagramPost[] = data.business_discovery.media.data.slice(0, 8);

      // Atualiza o cache
      cachedPosts = latestPosts;
      lastFetched = Date.now();
      console.log('Posts do Instagram atualizados no cache.');

      return NextResponse.json(latestPosts, { status: 200 });
    } else {
      console.error('Estrutura de dados inesperada da API do Instagram:', data);
      if (cachedPosts) {
        console.warn('Estrutura de dados inesperada da Meta API, retornando dados cacheados antigos.');
        return NextResponse.json(cachedPosts, { status: 200 });
      }
      return NextResponse.json(
        { error: 'Estrutura de dados inesperada da API do Instagram.' },
        { status: 500 }
      );
    }
  } catch (err: any) {
    console.error('Erro no servidor ao buscar posts do Instagram:', err);
    if (cachedPosts) {
      console.warn('Erro de rede ao buscar novos posts, retornando dados cacheados antigos.');
      return NextResponse.json(cachedPosts, { status: 200 });
    }
    return NextResponse.json(
      { error: 'Erro interno do servidor ao buscar posts.' },
      { status: 500 }
    );
  }
}