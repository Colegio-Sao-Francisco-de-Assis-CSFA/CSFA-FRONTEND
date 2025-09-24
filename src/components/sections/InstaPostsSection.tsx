// components/InstagramPosts.tsx
import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, ExternalLink, AlertCircle } from 'lucide-react';
import { Button } from '@/components/shared/Button';
import { motion } from 'framer-motion';
import { InstagramPost } from '@/types/instagram.types';

const InstagramPosts: React.FC = () => {

  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const IG_USERNAME = process.env.NEXT_PUBLIC_IG_USERNAME as string;

  const fetchInstagramPosts = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('/api/instagram');
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro desconhecido ao carregar posts do Instagram da sua API.');
      }

      setPosts(data);
    } catch (err: any) {
      setError(err.message);
      console.error('Erro ao buscar posts da sua API:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInstagramPosts();
  }, []);

  const formatCount = (count: number | undefined): string => {
    if (count === undefined) return '0';
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'K';
    }
    return count.toString();
  };

  if (loading) {
    return (
      <section className="py-16 bg-background">
        <div className=" mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-8 mb-6">
            <div className='inline-block w-full max-w-96 h-8 bg-gray-500 animate-pulse rounded-lg'></div>
            <div className='inline-block w-full max-w-62 h-8 bg-gray-500 animate-pulse rounded-lg'></div>
          </div>

          <div className="grid grid-cols-4 gap-1 max-w-6xl bg-background mx-auto">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="aspect-square w-[95%] h-[95%] rounded-sm bg-gray-500 animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossos Últimos Posts</h2>
            <p className="text-gray-600">Acompanhe nossas novidades no Instagram</p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="grid grid-cols-3 gap-1 filter blur-sm">
              {[...Array(9)].map((_, index) => (
                <div key={index} className="aspect-square bg-gray-300"></div>
              ))}
            </div>

            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 backdrop-blur-sm">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-md mx-4">
                <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Erro ao carregar posts</h3>
                <p className="text-gray-600 mb-4">{error}</p>
                <button
                  onClick={fetchInstagramPosts}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Tentar novamente
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const title = 'Nossos Últimos Posts';
  const subtitle = 'Acompanhe nossas novidades no Instagram';

  return (
    <section className=" w-full mx-auto">
      <div className="max-w-screen-xl space-y-6 mx-auto py-12">

        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-bl from-blue-950 via-blue-800 to-blue-500 bg-clip-text text-transparent leading-tight mb-4"
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6
                   dark:text-muted-foreground">
            {subtitle}
          </motion.p>

          <motion.span
            className="block w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full
                   dark:bg-primary">
          </motion.span>
        </div>

        <div className="grid grid-cols-4 gap-1 max-w-6xl bg-foreground mx-auto">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group relative aspect-square overflow-hidden cursor-pointer"
            >
              <img
                src={post.thumbnail_url as string || post.media_url as string}
                alt="Instagram Post" className="w-full h-full object-cover absolute transition-transform duration-300 group-hover:scale-110 z-10"
              />

              <div className="absolute inset-0 bg-black/0 z-20 group-hover:bg-blue-900/80 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-6 text-white">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-5 h-5 fill-current" />
                    <span className="font-semibold">{formatCount(post.like_count)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span className="font-semibold">{formatCount(post.comments_count)}</span>
                  </div>
                </div>
              </div>

              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
              >
                <span className="sr-only">Ver post no Instagram</span>
              </a>
            </div>
          ))}
        </div>

        <Button className='max-w-[350px] flex items-center justify-center gap-4 mx-auto' href={`https://instagram.com/${IG_USERNAME}`} external variant="csfa" size="lg">
          Ver mais no instagram
          <ExternalLink className="mt-1 w-6 h-6" />
        </Button>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Nenhum post encontrado</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default InstagramPosts;