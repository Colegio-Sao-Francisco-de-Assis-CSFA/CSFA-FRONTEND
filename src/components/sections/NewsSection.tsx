'use client';

// components/sections/NewsSection.tsx


import React from 'react';
import { NewsCard } from '@/components/index/News//NewsCard';
import TitleHeaderComponent from '@/components/shared/TitleHeader';
import { news } from '@/lib/data/news';

export default function NewsSection() {

  const title = "Acontece CSA"
  const subtitle = 'Fique por dentro das notícias, atualidades, premiações e muito mais no blog "Acontece CSFA" do Colégio São Francisco De Assis.'


  return (
    <div className="py-12 px-4 max-w-screen-2xl mx-auto flex flex-col gap-12 mt-12 bg-background">

      <TitleHeaderComponent
        title={title}
        subtitle={subtitle}
      />

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {news.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>

    </div>
  );
};
