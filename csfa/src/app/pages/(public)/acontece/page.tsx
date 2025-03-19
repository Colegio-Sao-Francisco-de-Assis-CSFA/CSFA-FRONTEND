// src/app/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Define the Post type
interface Post {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
}

// Sample blog posts data
const blogPosts: Post[] = [
  {
    id: 1,
    title: "The Future of Web Development",
    excerpt: "Exploring the latest trends in web development and what to expect in the coming years.",
    category: "Technology",
    date: "March 15, 2025",
    imageUrl: "https://placehold.co/100x100?format=png",
  },
  {
    id: 2,
    title: "Getting Started with Tailwind CSS",
    excerpt: "A beginner's guide to setting up and using Tailwind CSS in your projects.",
    category: "Design",
    date: "March 12, 2025",
    imageUrl: "https://placehold.co/100x100?format=png",
  },
  {
    id: 3,
    title: "Building Accessible Web Applications",
    excerpt: "Best practices for creating inclusive and accessible web experiences for all users.",
    category: "Accessibility",
    date: "March 10, 2025",
    imageUrl: "https://placehold.co/100x100?format=png",
  },
  {
    id: 4,
    title: "Optimizing React Performance",
    excerpt: "Tips and tricks to improve the performance of your React applications.",
    category: "React",
    date: "March 8, 2025",
    imageUrl: "https://placehold.co/100x100?format=png",
  },
  {
    id: 5,
    title: "Introduction to TypeScript",
    excerpt: "Why TypeScript is becoming essential for modern JavaScript development.",
    category: "TypeScript",
    date: "March 6, 2025",
    imageUrl: "https://placehold.co/100x100?format=png",
  },
  {
    id: 6,
    title: "Designing with shadcn/ui",
    excerpt: "How to leverage shadcn/ui to create beautiful and consistent user interfaces.",
    category: "UI/UX",
    date: "March 4, 2025",
    imageUrl: "https://placehold.co/100x100?format=png",
  },
  {
    id: 7,
    title: "The Power of Server Components",
    excerpt: "Understanding Next.js server components and how they change application architecture.",
    category: "Next.js",
    date: "March 2, 2025",
    imageUrl: "https://placehold.co/100x100?format=png",
  },
  {
    id: 8,
    title: "CSS Grid Mastery",
    excerpt: "Advanced techniques for creating complex layouts with CSS Grid.",
    category: "CSS",
    date: "February 28, 2025",
    imageUrl: "https://placehold.co/100x100?format=png",
  },
  {
    id: 9,
    title: "State Management in 2025",
    excerpt: "Comparing modern state management solutions for React applications.",
    category: "React",
    date: "February 26, 2025",
    imageUrl: "https://placehold.co/100x100?format=png",
  },
];

// Get the first 3 posts for the "News Recentes" section
const recentPosts = blogPosts.slice(0, 4);

// Get the remaining posts for the main grid
const mainPosts = blogPosts.slice(3);

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Header */}
      <header className="bg-blue-600 w-screen h-40 py-8 flex justify-center relative overflow-hidden">
          <Image className="absolute top-0 left-0 object-cover w-full h-full" src="https://placehold.co/1980x1800?format=png" alt="Blog Logo" width={1980} height={1800} />
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-white py-8 px-4 md:px-8 max-w-6xl mx-auto w-full">
        {/* Recent News Section */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">News Recentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Featured Post */}
            <Card className="md:col-span-1">
              <CardContent className="p-4">
                <Image 
                  src="https://placehold.co/200x150?format=png" 
                  alt="Featured post" 
                  width={200} 
                  height={150} 
                  className="mb-2"
                />
                <div className="flex-grow">
                  <h3 className="font-medium mb-1 line-clamp-1">The Future of Web Development</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    Exploring the latest trends in web development 
                    and what to expect in the coming years.
                  </p>
                  <div className="mt-1 text-xs text-gray-500">
                    Technology • March 15, 2025
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Posts List */}
            <div className="md:col-span-3 space-y-4">
              {recentPosts.map((post) => (
                <div key={post.id} className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <Image 
                      src={post.imageUrl} 
                      alt={post.title} 
                      width={50} 
                      height={50} 
                      className="rounded"
                    />
                  </div>
                  <div className="flex-grow">
                  <h3 className="font-medium mb-1 line-clamp-1">The Future of Web Development</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    Exploring the latest trends in web development 
                    and what to expect in the coming years.
                  </p>
                  <div className="mt-1 text-xs text-gray-500">
                    Technology • March 15, 2025
                  </div>
                </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* News and Search Section */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">News</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Search News:</span>
              <Input className="w-40" placeholder="Search..." />
            </div>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mainPosts.map((post) => (
              <div key={post.id} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Image 
                    src={post.imageUrl} 
                    alt={post.title} 
                    width={80} 
                    height={80} 
                    className="rounded"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-medium mb-1 line-clamp-1">{post.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
                  <div className="mt-1 text-xs text-gray-500">
                    {post.category} • {post.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-8">
          <Button variant="default" size="sm" className="bg-blue-600 hover:bg-blue-700">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            &gt;
          </Button>
        </div>
      </main>

      {/* Footer Call to Action */}
      <footer className="bg-blue-600 py-6 text-center text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-semibold mb-4">Call to action</h2>
          <Button variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
            Subscribe to Newsletter
          </Button>
        </div>
      </footer>
    </div>
  );
}