// import { useState, useEffect, useRef } from 'react';
// import { ArrowRight, Calendar, MapPin, Clock } from 'lucide-react';

// export default function NewsPage() {
//   const [scrollY, setScrollY] = useState(0);
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [windowSize, setWindowSize] = useState({ width: typeof window !== 'undefined' ? window.innerWidth : 1920, height: typeof window !== 'undefined' ? window.innerHeight : 1080 });
//   const newsRef = useRef(null);
//   const leftBeamRef = useRef(null);
//   const rightBeamRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     const handleMouseMove = (e) => {
//       setMousePos({ x: e.clientX, y: e.clientY });
//     };
//     const handleResize = () => {
//       setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     };

//     // Initialize
//     handleResize();

//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   // Update beam angles to follow mouse smoothly
//   useEffect(() => {
//     const updateBeams = () => {
//       // Direct mouse tracking - beams follow cursor position
//       const targetX = mousePos.x;
//       const targetY = mousePos.y;

//       // Left beam
//       if (leftBeamRef.current) {
//         const leftOriginX = 0;
//         const leftOriginY = windowSize.height;
//         const leftAngleRad = Math.atan2(targetY - leftOriginY, targetX - leftOriginX);
//         const leftAngleDeg = (leftAngleRad * 180) / Math.PI;
//         leftBeamRef.current.style.transform = `rotate(${leftAngleDeg}deg)`;
//       }

//       // Right beam
//       if (rightBeamRef.current) {
//         const rightOriginX = windowSize.width;
//         const rightOriginY = windowSize.height;
//         const rightAngleRad = Math.atan2(targetY - rightOriginY, targetX - rightOriginX);
//         const rightAngleDeg = (rightAngleRad * 180) / Math.PI;
//         rightBeamRef.current.style.transform = `rotate(${rightAngleDeg}deg)`;
//       }
//     };

//     updateBeams();
//   }, [mousePos, windowSize]);

//   const filters = ['All', 'Events', 'Announcements', 'Features', 'Community'];

//   const newsArticles = [
//     { id: 1, category: 'events', tag: 'Major Event', title: 'Bengaluru Edition 2025: Three Days of Musical Excellence', excerpt: 'We\'re bringing the festival experience to India\'s tech capital with an unprecedented lineup spanning multiple genres.', date: '2025-03-15', location: 'Bengaluru', readTime: '5 min read', featured: true, image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&h=800&fit=crop' },
//     { id: 2, category: 'announcements', tag: 'Lineup', title: 'Phase One Artist Announcement', excerpt: 'The first wave of artists has been revealed, featuring electronic music pioneers and chart-topping performers.', date: '2025-01-20', location: 'Mumbai', readTime: '4 min read', image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop' },
//     { id: 3, category: 'features', tag: 'Interview', title: 'In Conversation: The Vision Behind the Experience', excerpt: 'An in-depth discussion with our creative director about the artistic direction and stage design philosophy.', date: '2025-01-15', location: 'Editorial', readTime: '8 min read', image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop' },
//     { id: 4, category: 'community', tag: 'Initiative', title: 'Sustainability First: Our Carbon-Neutral Commitment', excerpt: 'Details on our comprehensive environmental strategy and long-term ecological impact goals.', date: '2025-01-10', location: 'Pan-India', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop' },
//     { id: 5, category: 'events', tag: 'Workshop', title: 'Music Production Masterclass Series', excerpt: 'Industry professionals will lead intensive sessions covering production techniques and technology.', date: '2025-02-05', location: 'Delhi', readTime: '3 min read', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop' },
//     { id: 6, category: 'announcements', tag: 'Partnership', title: 'Strategic Alliance with Leading Audio Brand', excerpt: 'This collaboration brings cutting-edge sound systems and immersive audio experiences to our venues.', date: '2025-01-08', location: 'Corporate', readTime: '4 min read', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop' }
//   ];

//   const filteredArticles = activeFilter === 'all' 
//     ? newsArticles 
//     : newsArticles.filter(article => article.category === activeFilter.toLowerCase());

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
//   };

//   return (
//     <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      
//       {/* --- SHARPY LIGHT OVERLAY (FIXED) --- */}
//       <div className="fixed inset-0 pointer-events-none z-0">
//         {/* Left Sharpy */}
//         <div 
//           ref={leftBeamRef}
//           className="absolute bottom-[-10px] left-[-10px] w-10 h-10 bg-white rounded-full shadow-[0_0_60px_20px_white] transition-transform duration-200 ease-out"
//         >
//           <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-[200vh] h-[250px] origin-left"
//             style={{
//               background: 'linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(168,85,247,0.4) 12%, rgba(168,85,247,0.2) 30%, rgba(168,85,247,0.08) 50%, transparent 75%)',
//               clipPath: 'polygon(0% 42%, 100% 0%, 100% 100%, 0% 58%)',
//               filter: 'blur(2px)',
//             }}
//           />
//         </div>

//         {/* Right Sharpy */}
//         <div 
//           ref={rightBeamRef}
//           className="absolute bottom-[-10px] right-[-10px] w-10 h-10 bg-white rounded-full shadow-[0_0_60px_20px_white] transition-transform duration-200 ease-out"
//         >
//           <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-[200vh] h-[250px] origin-left"
//             style={{
//               background: 'linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(6,182,212,0.4) 12%, rgba(6,182,212,0.2) 30%, rgba(6,182,212,0.08) 50%, transparent 75%)',
//               clipPath: 'polygon(0% 42%, 100% 0%, 100% 100%, 0% 58%)',
//               filter: 'blur(2px)',
//             }}
//           />
//         </div>
//       </div>

//       {/* Hero Section */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden z-10">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.05)_1px,_transparent_0)] bg-[length:40px_40px]" />
        
//         <div className="relative max-w-7xl mx-auto px-6 text-center">
//           <div className="mb-6 inline-block animate-slideDown">
//             <span className="text-sm tracking-[0.3em] text-gray-400 uppercase">Latest Updates</span>
//           </div>
          
//           <h1 
//             ref={newsRef}
//             className="text-7xl md:text-[10rem] font-bold mb-8 tracking-tight leading-none animate-scaleIn"
//             style={{ transform: `translateY(${scrollY * 0.2}px)`, opacity: Math.max(0, 1 - scrollY * 0.002) }}
//           >
//             <span className="inline-block bg-gradient-to-r from-white via-purple-200 to-cyan-100 bg-clip-text text-transparent">
//               NEWS
//             </span>
//           </h1>
          
//           <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fadeInUp"
//              style={{ transform: `translateY(${scrollY * 0.15}px)`, opacity: Math.max(0, 1 - scrollY * 0.002), animationDelay: '0.3s' }}>
//             Stay informed with the latest announcements, artist reveals, and exclusive insights.
//           </p>
//         </div>
//       </section>

//       {/* Filter Navigation */}
//       <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
//         <div className="max-w-7xl mx-auto px-6 py-6">
//           <div className="flex items-center justify-between gap-8 overflow-x-auto">
//             <div className="flex gap-2">
//               {filters.map((filter, index) => (
//                 <button
//                   key={filter}
//                   onClick={() => setActiveFilter(filter.toLowerCase())}
//                   className={`px-6 py-2 text-sm font-medium transition-all duration-300 whitespace-nowrap ${
//                     activeFilter === filter.toLowerCase() ? 'text-white bg-white/10 rounded-full' : 'text-gray-400 hover:text-white'
//                   }`}
//                 >
//                   {filter}
//                 </button>
//               ))}
//             </div>
//             <span className="text-sm text-gray-500 whitespace-nowrap">
//               {filteredArticles.length} Articles
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Main Content (Cards) */}
//       <main className="relative z-10 max-w-7xl mx-auto px-6 py-24">
//         {activeFilter === 'all' && (
//           <article className="mb-32 group cursor-pointer animate-fadeInUp" onMouseEnter={() => setHoveredCard('featured')} onMouseLeave={() => setHoveredCard(null)}>
//             <div className="grid md:grid-cols-2 gap-12 items-center">
//               <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900">
//                 <img src={newsArticles[0].image} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
//               </div>
//               <div>
//                 <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
//                   <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium uppercase tracking-wider">{newsArticles[0].tag}</span>
//                   <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{formatDate(newsArticles[0].date)}</span>
//                 </div>
//                 <h2 className="text-4xl md:text-5xl font-bold mb-6 group-hover:text-purple-400 transition-colors">{newsArticles[0].title}</h2>
//                 <p className="text-lg text-gray-400 mb-8">{newsArticles[0].excerpt}</p>
//                 <button className="flex items-center gap-2 text-white font-medium group/btn">
//                   Read Article <ArrowRight className={`w-5 h-5 transition-transform ${hoveredCard === 'featured' ? 'translate-x-1' : ''}`} />
//                 </button>
//               </div>
//             </div>
//           </article>
//         )}

//         {/* Grid for Articles */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredArticles.slice(activeFilter === 'all' ? 1 : 0).map((article, index) => (
//             <article
//               key={article.id}
//               className="group cursor-pointer animate-fadeUp"
//               onMouseEnter={() => setHoveredCard(article.id)}
//               onMouseLeave={() => setHoveredCard(null)}
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className="h-full flex flex-col">
//                 <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-zinc-900">
//                   <img src={article.image} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//                 </div>
//                 <div className="flex-1 flex flex-col">
//                   <div className="flex items-center gap-3 mb-3">
//                     <span className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-xs font-medium uppercase tracking-wider">{article.tag}</span>
//                     <span className="text-xs text-gray-500">{formatDate(article.date)}</span>
//                   </div>
//                   <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{article.title}</h3>
//                   <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">{article.excerpt}</p>
//                   <div className="flex items-center justify-between pt-4 border-t border-white/5">
//                     <span className="flex items-center gap-1 text-xs text-gray-500"><Clock className="w-3 h-3" />{article.readTime}</span>
//                     <button className="text-sm text-gray-400 group-hover:text-white flex items-center gap-1">
//                       Read <ArrowRight className={`w-4 h-4 transition-transform ${hoveredCard === article.id ? 'translate-x-0.5' : ''}`} />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </main>

//       <style jsx>{`
//         @keyframes slideDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
//         @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
//         @keyframes scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
//         .animate-slideDown { animation: slideDown 0.6s ease-out forwards; }
//         .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
//         .animate-scaleIn { animation: scaleIn 0.8s ease-out forwards; }
//       `}</style>
//     </div>
//   );
// }





// import { useState, useEffect, useRef } from 'react';
// import { ArrowRight, Calendar, MapPin, Clock } from 'lucide-react';

// export default function NewsPage() {
//   const [scrollY, setScrollY] = useState(0);
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [windowSize, setWindowSize] = useState({ width: typeof window !== 'undefined' ? window.innerWidth : 1920, height: typeof window !== 'undefined' ? window.innerHeight : 1080 });
//   const [isFilterSticky, setIsFilterSticky] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const newsRef = useRef(null);
//   const leftBeamRef = useRef(null);
//   const rightBeamRef = useRef(null);
//   const filterNavRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setScrollY(currentScrollY);
      
//       // Sticky filter navigation logic
//       if (filterNavRef.current) {
//         const filterNavTop = filterNavRef.current.offsetTop;
        
//         // Scrolling down - make sticky
//         if (currentScrollY > lastScrollY && currentScrollY >= filterNavTop) {
//           setIsFilterSticky(true);
//         }
//         // Scrolling up - release sticky
//         else if (currentScrollY < lastScrollY && currentScrollY < filterNavTop) {
//           setIsFilterSticky(false);
//         }
//       }
      
//       setLastScrollY(currentScrollY);
//     };
    
//     const handleMouseMove = (e) => {
//       setMousePos({ x: e.clientX, y: e.clientY });
//     };
//     const handleResize = () => {
//       setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     };

//     // Initialize
//     handleResize();

//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [lastScrollY]);

//   // Update beam angles to follow mouse smoothly
//   useEffect(() => {
//     const updateBeams = () => {
//       // Direct mouse tracking - beams follow cursor position
//       const targetX = mousePos.x;
//       const targetY = mousePos.y;

//       // Left beam
//       if (leftBeamRef.current) {
//         const leftOriginX = 0;
//         const leftOriginY = windowSize.height;
//         const leftAngleRad = Math.atan2(targetY - leftOriginY, targetX - leftOriginX);
//         const leftAngleDeg = (leftAngleRad * 180) / Math.PI;
//         leftBeamRef.current.style.transform = `rotate(${leftAngleDeg}deg)`;
//       }

//       // Right beam
//       if (rightBeamRef.current) {
//         const rightOriginX = windowSize.width;
//         const rightOriginY = windowSize.height;
//         const rightAngleRad = Math.atan2(targetY - rightOriginY, targetX - rightOriginX);
//         const rightAngleDeg = (rightAngleRad * 180) / Math.PI;
//         rightBeamRef.current.style.transform = `rotate(${rightAngleDeg}deg)`;
//       }
//     };

//     updateBeams();
//   }, [mousePos, windowSize]);

//   const filters = ['All', 'Events', 'Announcements', 'Features', 'Community'];

  // const newsArticles = [
  //   { id: 1, category: 'events', tag: 'Major Event', title: 'Bengaluru Edition 2025: Three Days of Musical Excellence', excerpt: 'We\'re bringing the festival experience to India\'s tech capital with an unprecedented lineup spanning multiple genres.', date: '2025-03-15', location: 'Bengaluru', readTime: '5 min read', featured: true, image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&h=800&fit=crop' },
  //   { id: 2, category: 'announcements', tag: 'Lineup', title: 'Phase One Artist Announcement', excerpt: 'The first wave of artists has been revealed, featuring electronic music pioneers and chart-topping performers.', date: '2025-01-20', location: 'Mumbai', readTime: '4 min read', image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop' },
  //   { id: 3, category: 'features', tag: 'Interview', title: 'In Conversation: The Vision Behind the Experience', excerpt: 'An in-depth discussion with our creative director about the artistic direction and stage design philosophy.', date: '2025-01-15', location: 'Editorial', readTime: '8 min read', image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop' },
  //   { id: 4, category: 'community', tag: 'Initiative', title: 'Sustainability First: Our Carbon-Neutral Commitment', excerpt: 'Details on our comprehensive environmental strategy and long-term ecological impact goals.', date: '2025-01-10', location: 'Pan-India', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop' },
  //   { id: 5, category: 'events', tag: 'Workshop', title: 'Music Production Masterclass Series', excerpt: 'Industry professionals will lead intensive sessions covering production techniques and technology.', date: '2025-02-05', location: 'Delhi', readTime: '3 min read', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop' },
  //   { id: 6, category: 'announcements', tag: 'Partnership', title: 'Strategic Alliance with Leading Audio Brand', excerpt: 'This collaboration brings cutting-edge sound systems and immersive audio experiences to our venues.', date: '2025-01-08', location: 'Corporate', readTime: '4 min read', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop' }
  // ];

//   const filteredArticles = activeFilter === 'all' 
//     ? newsArticles 
//     : newsArticles.filter(article => article.category === activeFilter.toLowerCase());

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
//   };

//   return (
//     <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      
//       {/* --- SHARPY LIGHT OVERLAY (FIXED) --- */}
//       <div className="fixed inset-0 pointer-events-none z-0">
//         {/* Left Sharpy */}
//         <div 
//           ref={leftBeamRef}
//           className="absolute bottom-[-10px] left-[-10px] w-10 h-10 opacity-0 transition-transform duration-200 ease-out"
//         >
//           <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-[200vh] h-[250px] origin-left"
//             style={{
//               background: 'linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(168,85,247,0.4) 12%, rgba(168,85,247,0.2) 30%, rgba(168,85,247,0.08) 50%, transparent 75%)',
//               clipPath: 'polygon(0% 42%, 100% 0%, 100% 100%, 0% 58%)',
//               filter: 'blur(2px)',
//             }}
//           />
//         </div>

//         {/* Right Sharpy */}
//         <div 
//           ref={rightBeamRef}
//           className="absolute bottom-[-10px] right-[-10px] w-10 h-10 opacity-0 transition-transform duration-200 ease-out"
//         >
//           <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-[200vh] h-[250px] origin-left"
//             style={{
//               background: 'linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(6,182,212,0.4) 12%, rgba(6,182,212,0.2) 30%, rgba(6,182,212,0.08) 50%, transparent 75%)',
//               clipPath: 'polygon(0% 42%, 100% 0%, 100% 100%, 0% 58%)',
//               filter: 'blur(2px)',
//             }}
//           />
//         </div>
//       </div>

      // {/* Hero Section */}
      // <section className="relative h-screen flex items-center justify-center overflow-hidden z-10">
      //   <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.05)_1px,_transparent_0)] bg-[length:40px_40px]" />
        
      //   <div className="relative max-w-7xl mx-auto px-6 text-center">
      //     <div className="mb-6 inline-block animate-slideDown">
      //       <span className="text-sm tracking-[0.3em] text-gray-400 uppercase">Latest Updates</span>
      //     </div>
          
      //     <h1 
      //       ref={newsRef}
      //       className="text-7xl md:text-[10rem] font-bold mb-8 tracking-tight leading-none animate-scaleIn"
      //       style={{ transform: `translateY(${scrollY * 0.2}px)`, opacity: Math.max(0, 1 - scrollY * 0.002) }}
      //     >
      //       <span className="inline-block bg-gradient-to-r from-white via-purple-200 to-cyan-100 bg-clip-text text-transparent">
      //         NEWS
      //       </span>
      //     </h1>
          
      //     <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fadeInUp"
      //        style={{ transform: `translateY(${scrollY * 0.15}px)`, opacity: Math.max(0, 1 - scrollY * 0.002), animationDelay: '0.3s' }}>
      //       Stay informed with the latest announcements, artist reveals, and exclusive insights.
      //     </p>
      //   </div>
      // </section>

      // {/* Filter Navigation */}
      // <div ref={filterNavRef} className={`${isFilterSticky ? 'fixed top-0' : 'sticky top-0'} z-50 bg-black/80 backdrop-blur-xl border-b border-white/10 w-full`}>
      //   <div className="max-w-7xl mx-auto px-6 py-6">
      //     <div className="flex items-center justify-between gap-8 overflow-x-auto">
      //       <div className="flex gap-2">
      //         {filters.map((filter, index) => (
      //           <button
      //             key={filter}
      //             onClick={() => setActiveFilter(filter.toLowerCase())}
      //             className={`px-6 py-2 text-sm font-medium transition-all duration-300 whitespace-nowrap ${
      //               activeFilter === filter.toLowerCase() ? 'text-white bg-white/10 rounded-full' : 'text-gray-400 hover:text-white'
      //             }`}
      //           >
      //             {filter}
      //           </button>
      //         ))}
      //       </div>
      //       <span className="text-sm text-gray-500 whitespace-nowrap">
      //         {filteredArticles.length} Articles
      //       </span>
      //     </div>
      //   </div>
      // </div>

      // {/* Main Content (Cards) */}
      // <main className="relative z-10 max-w-7xl mx-auto px-6 py-24">
      //   {activeFilter === 'all' && (
      //     <article className="mb-32 group cursor-pointer animate-fadeInUp" onMouseEnter={() => setHoveredCard('featured')} onMouseLeave={() => setHoveredCard(null)}>
      //       <div className="grid md:grid-cols-2 gap-12 items-center">
      //         <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900">
      //           <img src={newsArticles[0].image} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      //           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      //         </div>
      //         <div>
      //           <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
      //             <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium uppercase tracking-wider">{newsArticles[0].tag}</span>
      //             <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{formatDate(newsArticles[0].date)}</span>
      //           </div>
      //           <h2 className="text-4xl md:text-5xl font-bold mb-6 group-hover:text-purple-400 transition-colors">{newsArticles[0].title}</h2>
      //           <p className="text-lg text-gray-400 mb-8">{newsArticles[0].excerpt}</p>
      //           <button className="flex items-center gap-2 text-white font-medium group/btn">
      //             Read Article <ArrowRight className={`w-5 h-5 transition-transform ${hoveredCard === 'featured' ? 'translate-x-1' : ''}`} />
      //           </button>
      //         </div>
      //       </div>
      //     </article>
      //   )}

      //   {/* Grid for Articles */}
      //   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      //     {filteredArticles.slice(activeFilter === 'all' ? 1 : 0).map((article, index) => (
      //       <article
      //         key={article.id}
      //         className="group cursor-pointer animate-fadeUp"
      //         onMouseEnter={() => setHoveredCard(article.id)}
      //         onMouseLeave={() => setHoveredCard(null)}
      //         style={{ animationDelay: `${index * 0.1}s` }}
      //       >
      //         <div className="h-full flex flex-col">
      //           <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-zinc-900">
      //             <img src={article.image} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      //             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      //           </div>
      //           <div className="flex-1 flex flex-col">
      //             <div className="flex items-center gap-3 mb-3">
      //               <span className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-xs font-medium uppercase tracking-wider">{article.tag}</span>
      //               <span className="text-xs text-gray-500">{formatDate(article.date)}</span>
      //             </div>
      //             <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{article.title}</h3>
      //             <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">{article.excerpt}</p>
      //             <div className="flex items-center justify-between pt-4 border-t border-white/5">
      //               <span className="flex items-center gap-1 text-xs text-gray-500"><Clock className="w-3 h-3" />{article.readTime}</span>
      //               <button className="text-sm text-gray-400 group-hover:text-white flex items-center gap-1">
      //                 Read <ArrowRight className={`w-4 h-4 transition-transform ${hoveredCard === article.id ? 'translate-x-0.5' : ''}`} />
      //               </button>
      //             </div>
      //           </div>
      //         </div>
      //       </article>
      //     ))}
      //   </div>
      // </main>

      // <style jsx>{`
      //   @keyframes slideDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
      //   @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      //   @keyframes scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
      //   .animate-slideDown { animation: slideDown 0.6s ease-out forwards; }
      //   .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
      //   .animate-scaleIn { animation: scaleIn 0.8s ease-out forwards; }
      // `}</style>
    // </div>
//   );
// }







import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Calendar, MapPin, Clock } from 'lucide-react';

export default function NewsPage() {
  const [scrollY, setScrollY] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: typeof window !== 'undefined' ? window.innerWidth : 1920, height: typeof window !== 'undefined' ? window.innerHeight : 1080 });
  const [isFilterFixed, setIsFilterFixed] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const newsRef = useRef(null);
  const leftBeamRef = useRef(null);
  const rightBeamRef = useRef(null);
  const filterRef = useRef(null);
  const filterOffsetTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Get filter bar's original position if not set
      if (filterOffsetTop.current === 0 && filterRef.current) {
        filterOffsetTop.current = filterRef.current.offsetTop;
      }

      // Check if scrolling down or up
      const scrollingDown = currentScrollY > lastScrollY;

      if (currentScrollY >= filterOffsetTop.current && scrollingDown) {
        // Scrolling down and past the filter bar - make it fixed
        setIsFilterFixed(true);
      } else if (!scrollingDown && currentScrollY < filterOffsetTop.current) {
        // Scrolling up and above original position - release fixed
        setIsFilterFixed(false);
      }

      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      // Reset offset on resize
      if (filterRef.current) {
        filterOffsetTop.current = filterRef.current.offsetTop;
      }
    };

    // Initialize
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [lastScrollY]);

  // Update beam angles to follow mouse smoothly
  useEffect(() => {
    const updateBeams = () => {
      // Direct mouse tracking - beams follow cursor position
      const targetX = mousePos.x;
      const targetY = mousePos.y;

      // Left beam
      if (leftBeamRef.current) {
        const leftOriginX = 0;
        const leftOriginY = windowSize.height;
        const leftAngleRad = Math.atan2(targetY - leftOriginY, targetX - leftOriginX);
        const leftAngleDeg = (leftAngleRad * 180) / Math.PI;
        leftBeamRef.current.style.transform = `rotate(${leftAngleDeg}deg)`;
      }

      // Right beam
      if (rightBeamRef.current) {
        const rightOriginX = windowSize.width;
        const rightOriginY = windowSize.height;
        const rightAngleRad = Math.atan2(targetY - rightOriginY, targetX - rightOriginX);
        const rightAngleDeg = (rightAngleRad * 180) / Math.PI;
        rightBeamRef.current.style.transform = `rotate(${rightAngleDeg}deg)`;
      }
    };

    updateBeams();
  }, [mousePos, windowSize]);

  const filters = ['All', 'Events', 'Announcements', 'Features', 'Community'];

  const newsArticles = [
    { id: 1, category: 'events', tag: 'Major Event', title: 'Bengaluru Edition 2025: Three Days of Musical Excellence', excerpt: 'We\'re bringing the festival experience to India\'s tech capital with an unprecedented lineup spanning multiple genres.', date: '2025-03-15', location: 'Bengaluru', readTime: '5 min read', featured: true, image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&h=800&fit=crop' },
    { id: 2, category: 'announcements', tag: 'Lineup', title: 'Phase One Artist Announcement', excerpt: 'The first wave of artists has been revealed, featuring electronic music pioneers and chart-topping performers.', date: '2025-01-20', location: 'Mumbai', readTime: '4 min read', image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop' },
    { id: 3, category: 'features', tag: 'Interview', title: 'In Conversation: The Vision Behind the Experience', excerpt: 'An in-depth discussion with our creative director about the artistic direction and stage design philosophy.', date: '2025-01-15', location: 'Editorial', readTime: '8 min read', image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop' },
    { id: 4, category: 'community', tag: 'Initiative', title: 'Sustainability First: Our Carbon-Neutral Commitment', excerpt: 'Details on our comprehensive environmental strategy and long-term ecological impact goals.', date: '2025-01-10', location: 'Pan-India', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop' },
    { id: 5, category: 'events', tag: 'Workshop', title: 'Music Production Masterclass Series', excerpt: 'Industry professionals will lead intensive sessions covering production techniques and technology.', date: '2025-02-05', location: 'Delhi', readTime: '3 min read', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop' },
    { id: 6, category: 'announcements', tag: 'Partnership', title: 'Strategic Alliance with Leading Audio Brand', excerpt: 'This collaboration brings cutting-edge sound systems and immersive audio experiences to our venues.', date: '2025-01-08', location: 'Corporate', readTime: '4 min read', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop' }
  ];

  const filteredArticles = activeFilter === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === activeFilter.toLowerCase());

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      
      {/* --- SHARPY LIGHT OVERLAY (FIXED) --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Left Sharpy */}
        <div 
          ref={leftBeamRef}
          className="absolute bottom-[-10px] left-[-10px] w-10 h-10 bg-white rounded-full shadow-[0_0_60px_20px_white] transition-transform duration-200 ease-out"
        >
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-[200vh] h-[250px] origin-left"
            style={{
              background: 'linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(168,85,247,0.4) 12%, rgba(168,85,247,0.2) 30%, rgba(168,85,247,0.08) 50%, transparent 75%)',
              clipPath: 'polygon(0% 42%, 100% 0%, 100% 100%, 0% 58%)',
              filter: 'blur(2px)',
            }}
          />
        </div>

        {/* Right Sharpy */}
        <div 
          ref={rightBeamRef}
          className="absolute bottom-[-10px] right-[-10px] w-10 h-10 bg-white rounded-full shadow-[0_0_60px_20px_white] transition-transform duration-200 ease-out"
        >
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-[200vh] h-[250px] origin-left"
            style={{
              background: 'linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(6,182,212,0.4) 12%, rgba(6,182,212,0.2) 30%, rgba(6,182,212,0.08) 50%, transparent 75%)',
              clipPath: 'polygon(0% 42%, 100% 0%, 100% 100%, 0% 58%)',
              filter: 'blur(2px)',
            }}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.05)_1px,_transparent_0)] bg-[length:40px_40px]" />
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="mb-6 inline-block animate-slideDown">
            <span className="text-sm tracking-[0.3em] text-gray-400 uppercase">Latest Updates</span>
          </div>
          
          <h1 
            ref={newsRef}
            className="text-7xl md:text-[10rem] font-bold mb-8 tracking-tight leading-none animate-scaleIn"
            style={{ transform: `translateY(${scrollY * 0.2}px)`, opacity: Math.max(0, 1 - scrollY * 0.002) }}
          >
            <span className="inline-block bg-gradient-to-r from-white via-purple-200 to-cyan-100 bg-clip-text text-transparent">
              NEWS
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fadeInUp"
             style={{ transform: `translateY(${scrollY * 0.15}px)`, opacity: Math.max(0, 1 - scrollY * 0.002), animationDelay: '0.3s' }}>
            Stay informed with the latest announcements, artist reveals, and exclusive insights.
          </p>
        </div>
      </section>

      {/* Filter Navigation */}
      <div 
        ref={filterRef}
        className={`${isFilterFixed ? 'fixed' : 'sticky'} top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10`}
        style={{ width: '100%' }}
      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between gap-8 overflow-x-auto">
            <div className="flex gap-2">
              {filters.map((filter, index) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter.toLowerCase())}
                  className={`px-6 py-2 text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    activeFilter === filter.toLowerCase() ? 'text-white bg-white/10 rounded-full' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <span className="text-sm text-gray-500 whitespace-nowrap">
              {filteredArticles.length} Articles
            </span>
          </div>
        </div>
      </div>

      {/* Main Content (Cards) */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {activeFilter === 'all' && (
          <article className="mb-32 group cursor-pointer animate-fadeInUp" onMouseEnter={() => setHoveredCard('featured')} onMouseLeave={() => setHoveredCard(null)}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900">
                <img src={newsArticles[0].image} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium uppercase tracking-wider">{newsArticles[0].tag}</span>
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{formatDate(newsArticles[0].date)}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 group-hover:text-purple-400 transition-colors">{newsArticles[0].title}</h2>
                <p className="text-lg text-gray-400 mb-8">{newsArticles[0].excerpt}</p>
                <button className="flex items-center gap-2 text-white font-medium group/btn">
                  Read Article <ArrowRight className={`w-5 h-5 transition-transform ${hoveredCard === 'featured' ? 'translate-x-1' : ''}`} />
                </button>
              </div>
            </div>
          </article>
        )}

        {/* Grid for Articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.slice(activeFilter === 'all' ? 1 : 0).map((article, index) => (
            <article
              key={article.id}
              className="group cursor-pointer animate-fadeUp"
              onMouseEnter={() => setHoveredCard(article.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-full flex flex-col">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-zinc-900">
                  <img src={article.image} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-xs font-medium uppercase tracking-wider">{article.tag}</span>
                    <span className="text-xs text-gray-500">{formatDate(article.date)}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{article.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">{article.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="flex items-center gap-1 text-xs text-gray-500"><Clock className="w-3 h-3" />{article.readTime}</span>
                    <button className="text-sm text-gray-400 group-hover:text-white flex items-center gap-1">
                      Read <ArrowRight className={`w-4 h-4 transition-transform ${hoveredCard === article.id ? 'translate-x-0.5' : ''}`} />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <style jsx>{`
        @keyframes slideDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        .animate-slideDown { animation: slideDown 0.6s ease-out forwards; }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.8s ease-out forwards; }
      `}</style>
    </div>
  );
}