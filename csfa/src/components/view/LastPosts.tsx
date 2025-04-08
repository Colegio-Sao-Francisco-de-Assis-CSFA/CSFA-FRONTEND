// import React, { useState, useRef, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { ChevronLeft, ChevronRight, Instagram } from 'lucide-react';

// // Instagram Post type
// interface InstagramPost {
//   id: string;
//   media_url: string;
//   caption: string;
//   permalink: string;
//   timestamp: string;
//   media_type: string;
// }

// interface InstagramCarouselProps {
//   initialPosts?: InstagramPost[];
//   accessToken?: string;
// }

// const InstagramCarousel: React.FC<InstagramCarouselProps> = ({
//   initialPosts = [],
//   accessToken
// }) => {
//   const [posts, setPosts] = useState<InstagramPost[]>(initialPosts);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [loading, setLoading] = useState(initialPosts.length === 0);
//   const [error, setError] = useState<string | null>(null);
//   const autoplayRef = useRef<NodeJS.Timeout | null>(null);

//   // Fetch Instagram posts if needed
//   useEffect(() => {
//     const fetchInstagramPosts = async () => {
//       if (!accessToken) return;

//       try {
//         setLoading(true);
//         const response = await fetch(
//           `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,timestamp,media_type&access_token=${accessToken}`
//         );

//         if (!response.ok) {
//           throw new Error(`Instagram API responded with status: ${response.status}`);
//         }

//         const data = await response.json();

//         if (data && data.data && Array.isArray(data.data)) {
//           // Filter to only include photos and videos
//           const mediaPosts = data.data.filter(
//             (post: InstagramPost) =>
//               post.media_type === 'IMAGE' ||
//               post.media_type === 'CAROUSEL_ALBUM' ||
//               post.media_type === 'VIDEO'
//           );

//           setPosts(mediaPosts);
//         }
//       } catch (err) {
//         console.error('Error fetching Instagram posts:', err);
//         setError('Failed to load Instagram posts. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (initialPosts.length === 0 && accessToken) {
//       fetchInstagramPosts();
//     }
//   }, [accessToken, initialPosts.length]);

//   // For demo purposes - use placeholder data if no posts
//   useEffect(() => {
//     if (posts.length === 0 && !loading) {
//       const placeholderPosts: InstagramPost[] = [
//         {
//           id: '1',
//           media_url: '/api/placeholder/400/400',
//           caption: 'Últimos Eventos: Fique por dentro de tudo o que preparamos para você!',
//           permalink: 'https://instagram.com/p/1',
//           timestamp: new Date().toISOString(),
//           media_type: 'IMAGE'
//         },
//         {
//           id: '2',
//           media_url: '/api/placeholder/400/400',
//           caption: 'Pequenos Chefs em Ação! Nosso workshop culinário para crianças foi um sucesso.',
//           permalink: 'https://instagram.com/p/2',
//           timestamp: new Date().toISOString(),
//           media_type: 'IMAGE'
//         },
//         {
//           id: '3',
//           media_url: '/api/placeholder/400/400',
//           caption: 'Estilo Ghibli: Onde o simples se torna mágico! ✨',
//           permalink: 'https://instagram.com/p/3',
//           timestamp: new Date().toISOString(),
//           media_type: 'IMAGE'
//         },
//         {
//           id: '4',
//           media_url: '/api/placeholder/400/400',
//           caption: 'Novidades da semana! Confira nossas últimas atualizações.',
//           permalink: 'https://instagram.com/p/4',
//           timestamp: new Date().toISOString(),
//           media_type: 'IMAGE'
//         },
//         {
//           id: '5',
//           media_url: '/api/placeholder/400/400',
//           caption: 'Momentos especiais que compartilhamos com vocês. Obrigado pela presença!',
//           permalink: 'https://instagram.com/p/5',
//           timestamp: new Date().toISOString(),
//           media_type: 'IMAGE'
//         }
//       ];

//       setPosts(placeholderPosts);
//     }
//   }, [loading, posts.length]);

//   // Get visible item indexes
//   const getVisibleIndexes = () => {
//     if (posts.length < 3) return [0];

//     return [
//       (currentIndex - 1 + posts.length) % posts.length,
//       currentIndex,
//       (currentIndex + 1) % posts.length
//     ];
//   };

//   const nextSlide = () => {
//     if (isAnimating || posts.length < 2) return;

//     setIsAnimating(true);
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);

//     // Reset animation lock after animation completes
//     setTimeout(() => {
//       setIsAnimating(false);
//     }, 500);
//   };

//   const prevSlide = () => {
//     if (isAnimating || posts.length < 2) return;

//     setIsAnimating(true);
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + posts.length) % posts.length);

//     // Reset animation lock after animation completes
//     setTimeout(() => {
//       setIsAnimating(false);
//     }, 500);
//   };

//   // Auto-rotate carousel with reset on user interaction
//   const startAutoplay = () => {
//     stopAutoplay();
//     autoplayRef.current = setInterval(() => {
//       nextSlide();
//     }, 5000);
//   };

//   const stopAutoplay = () => {
//     if (autoplayRef.current) {
//       clearInterval(autoplayRef.current);
//     }
//   };

//   useEffect(() => {
//     startAutoplay();
//     return () => stopAutoplay();
//   }, []);

//   const handleDotClick = (index: number) => {
//     if (isAnimating || index === currentIndex) return;

//     setIsAnimating(true);
//     setCurrentIndex(index);

//     // Reset animation lock after animation completes
//     setTimeout(() => {
//       setIsAnimating(false);
//     }, 500);

//     // Reset autoplay on user interaction
//     startAutoplay();
//   };

//   // Truncate caption to reasonable length
//   const formatCaption = (caption: string | null) => {
//     if (!caption) return '';

//     // Remove hashtags and @mentions for cleaner display
//     const cleanCaption = caption
//       .replace(/#\w+/g, '')
//       .replace(/@\w+/g, '')
//       .trim();

//     return cleanCaption.length > 100
//       ? cleanCaption.substring(0, 97) + '...'
//       : cleanCaption;
//   };

//   const visibleIndexes = getVisibleIndexes();

//   if (loading) {
//     return (
//       <div className="w-full bg-blue-100 p-8 flex justify-center items-center h-64">
//         <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
//         <span className="ml-2 text-blue-600">Carregando posts do Instagram...</span>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="w-full bg-red-100 p-8 text-center text-red-600">
//         <p>{error}</p>
//       </div>
//     );
//   }

//   if (posts.length === 0) {
//     return (
//       <div className="w-full bg-blue-100 p-8 text-center text-blue-600">
//         <p>Não há posts do Instagram para exibir no momento.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full bg-blue-600 p-8 relative overflow-hidden">
//       <div className="flex items-center justify-center mb-6">
//         <Instagram className="text-white mr-2" size={24} />
//         <h2 className="text-2xl font-bold text-white">Últimos Posts</h2>
//       </div>

//       {/* Only show navigation if we have enough posts */}
//       {posts.length > 1 && (
//         <>
//           <motion.button
//             className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             onClick={() => {
//               prevSlide();
//               startAutoplay(); // Reset autoplay on user interaction
//             }}
//             aria-label="Previous post"
//           >
//             <ChevronLeft size={24} />
//           </motion.button>

//           <motion.button
//             className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             onClick={() => {
//               nextSlide();
//               startAutoplay(); // Reset autoplay on user interaction
//             }}
//             aria-label="Next post"
//           >
//             <ChevronRight size={24} />
//           </motion.button>
//         </>
//       )}

//       {/* Carousel items */}
//       <div className="flex justify-center items-center h-96 px-16">
//         <div className="relative w-full h-full flex justify-center items-center">
//           {posts.map((post, idx) => {
//             // Determine position (left, center, right, or hidden)
//             const position = visibleIndexes.indexOf(idx);
//             if (position === -1) return null; // Don't render if not visible

//             return (
//               <motion.div
//                 key={post.id}
//                 className="absolute rounded-lg overflow-hidden shadow-xl"
//                 initial={false}
//                 animate={{
//                   left: position === 0 ? '10%' : position === 1 ? '50%' : '90%',
//                   x: position === 0 ? '-50%' : position === 1 ? '-50%' : '-50%',
//                   width: position === 1 ? '40%' : '30%',
//                   height: position === 1 ? '90%' : '75%',
//                   scale: 1,
//                   zIndex: position === 1 ? 10 : 5,
//                   opacity: 1
//                 }}
//                 transition={{
//                   type: "spring",
//                   stiffness: 300,
//                   damping: 30,
//                   duration: 0.4
//                 }}
//               >
//                 <a
//                   href={post.permalink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block w-full h-full relative"
//                 >
//                   <img
//                     src={post.media_url}
//                     alt={post.caption || 'Instagram post'}
//                     className="w-full h-full object-cover"
//                   />

//                   {/* VER MAIS button */}
//                   <div className="absolute top-4 right-4">
//                     <motion.span
//                       className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-1 rounded-md font-medium text-sm inline-block"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       VER MAIS
//                     </motion.span>
//                   </div>

//                   {/* Caption overlay */}
//                   <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent p-4">
//                     <p className="text-white text-center font-medium text-sm">
//                       {formatCaption(post.caption)}
//                     </p>
//                   </div>
//                 </a>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Pagination dots */}
//       {posts.length > 1 && (
//         <div className="flex justify-center mt-6 gap-2">
//           {posts.map((_, idx) => (
//             <motion.button
//               key={idx}
//               className={`h-2 rounded-full ${
//                 idx === currentIndex
//                   ? 'w-8 bg-white'
//                   : 'w-2 bg-blue-200'
//               }`}
//               onClick={() => handleDotClick(idx)}
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//               aria-label={`Go to post ${idx + 1}`}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default InstagramCarousel;