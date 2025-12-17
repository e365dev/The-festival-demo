// import React, { useState, useEffect } from 'react';
// import { Calendar, Clock, MapPin, Ticket, ChevronLeft, ChevronRight, Filter, X, ChevronDown } from 'lucide-react';

// export default function EventsPage() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [activeTab, setActiveTab] = useState('All Events');
//   const [showFilters, setShowFilters] = useState(false);
//   const [openAccordion, setOpenAccordion] = useState(null);
//   const [selectedFilters, setSelectedFilters] = useState({
//     sortBy: '',
//     day: [],
//     month: '',
//     city: '',
//     priceRange: [0, 10000]
//   });

//   // Hero Carousel Data
//   const heroSlides = [
//     {
//       id: 1,
//       image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&h=600&fit=crop",
//       title: "CIRCUS FESTIVAL 2025",
//       subtitle: "Mumbai | 26-29 December"
//     },
//     {
//       id: 2,
//       image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&h=600&fit=crop",
//       title: "ROOM XO presents Tom Enzy",
//       subtitle: "New Delhi | 12 December 2025"
//     },
//     {
//       id: 3,
//       image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=600&fit=crop",
//       title: "SUNNY SIDE UP",
//       subtitle: "Goa | 26-31 December"
//     },
//     {
//       id: 4,
//       image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&h=600&fit=crop",
//       title: "NEW YEAR DHAMAKA",
//       subtitle: "Mumbai | 31 December"
//     }
//   ];

//   // Category Tabs
//   const categories = [
//     'All Events', 'Club Gigs - Music', 'Music Concerts', 'Music Festivals', 
//     'Comedy Events', 'Open Air Music Festivals', 'New Year 2026', 'Festivals', 
//     'Concert', 'Classical Music', 'Party', 'Open Mic Event'
//   ];

//   // Events Data
//   const events = [
//     {
//       id: 1,
//       title: "Circus Festival 2025 | Mumbai",
//       category: "Music Festivals",
//       location: "Mumbai",
//       country: "India",
//       date: "26 December - 29 December 2025",
//       time: "05:00 PM",
//       price: 1499,
//       image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=800&fit=crop",
//       tags: ["Electronic Dance Music", "Techno"],
//       featured: true
//     },
//     {
//       id: 2,
//       title: "*Exclusive Tables + MOSH / VPD Lounge - Circus Festival 2025 | Mumbai",
//       category: "Music Festivals",
//       location: "Mumbai",
//       country: "India",
//       date: "26 December - 29 December 2025",
//       time: "05:00 PM",
//       price: 20000,
//       image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=800&fit=crop",
//       tags: ["Electronic Dance Music", "Techno"],
//       featured: true
//     },
//     {
//       id: 3,
//       title: "Room XO presents Tom Enzy",
//       category: "Club Gigs - Music",
//       location: "New Delhi",
//       country: "India",
//       date: "12 December 2025",
//       time: "10:00 PM",
//       price: 799,
//       image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=800&fit=crop",
//       tags: ["Live Music"],
//       featured: false
//     },
//     {
//       id: 4,
//       title: "Sunny Side Up Festival",
//       category: "Music Festivals",
//       location: "Vagator, Goa",
//       country: "India",
//       date: "26 December - 31 December 2025",
//       time: "10:00 PM",
//       price: 2499,
//       image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=800&fit=crop",
//       tags: ["Electronic", "House"],
//       featured: true
//     },
//     {
//       id: 5,
//       title: "Imran Khan Live in Mumbai",
//       category: "Music Concerts",
//       location: "Mumbai",
//       country: "India",
//       date: "24 December 2025",
//       time: "08:00 PM",
//       price: 1999,
//       image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=800&fit=crop",
//       tags: ["Live Performance"],
//       featured: false
//     },
//     {
//       id: 6,
//       title: "New Year Dhamaka with Soundarya Sharma",
//       category: "New Year 2026",
//       location: "Mumbai",
//       country: "India",
//       date: "31 December 2025",
//       time: "09:00 PM",
//       price: 3499,
//       image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=800&fit=crop",
//       tags: ["New Year Party", "DJ Night"],
//       featured: true
//     }
//   ];

//   // Auto-play carousel
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//   const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

//   const toggleAccordion = (section) => {
//     setOpenAccordion(openAccordion === section ? null : section);
//   };

//   const filteredEvents = events.filter(event => {
//     if (activeTab !== 'All Events' && event.category !== activeTab) return false;
//     if (selectedFilters.city && event.location !== selectedFilters.city) return false;
//     return true;
//   });

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Hero Carousel */}
//       <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
//         {heroSlides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`absolute inset-0 transition-opacity duration-1000 ${
//               index === currentSlide ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <img
//               src={slide.image}
//               alt={slide.title}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            
//             <div className="absolute bottom-12 left-0 right-0 text-center px-6">
//               <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4">
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 animate-gradient-x">
//                   {slide.title}
//                 </span>
//               </h1>
//               <p className="text-xl md:text-2xl text-gray-300">{slide.subtitle}</p>
//             </div>
//           </div>
//         ))}

//         {/* Navigation Arrows */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 p-3 rounded-full transition-all duration-300 z-10"
//         >
//           <ChevronLeft size={24} />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 p-3 rounded-full transition-all duration-300 z-10"
//         >
//           <ChevronRight size={24} />
//         </button>

//         {/* Dots Indicator */}
//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
//           {heroSlides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                 index === currentSlide 
//                   ? 'w-8 bg-gradient-to-r from-pink-500 to-cyan-500' 
//                   : 'bg-white/50'
//               }`}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Category Tabs - Horizontal Scroll */}
//       <section className="sticky top-0 z-40 bg-black/95 backdrop-blur-md border-b border-slate-800">
//         <div className="max-w-7xl mx-auto px-4 py-4">
//           <div className="flex items-center gap-2">
//             <button className="p-2 hover:bg-slate-800 rounded-full transition-colors">
//               <ChevronLeft size={20} />
//             </button>
            
//             <div className="flex-1 overflow-x-auto scrollbar-hide">
//               <div className="flex gap-2 whitespace-nowrap">
//                 {categories.map((category) => (
//                   <button
//                     key={category}
//                     onClick={() => setActiveTab(category)}
//                     className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
//                       activeTab === category
//                         ? 'bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-500 text-white shadow-lg shadow-pink-500/50'
//                         : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
//                     }`}
//                   >
//                     {category}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <button className="p-2 hover:bg-slate-800 rounded-full transition-colors">
//               <ChevronRight size={20} />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Main Content - Sidebar + Grid */}
//       <section className="max-w-7xl mx-auto px-4 py-8">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Sidebar Filters - Desktop */}
//           <aside className="hidden lg:block w-80 flex-shrink-0">
//             <div className="sticky top-24 space-y-4">
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
//                   Filter Options
//                 </h2>
//                 <button className="text-cyan-400 text-sm hover:text-cyan-300">clear</button>
//               </div>

//               {/* Sort By Accordion */}
//               <div className="bg-slate-900/50 rounded-lg border border-slate-800">
//                 <button
//                   onClick={() => toggleAccordion('sortBy')}
//                   className="w-full flex items-center justify-between p-4 hover:bg-slate-800/50 transition-colors"
//                 >
//                   <span className="font-semibold">Sort By</span>
//                   <ChevronDown
//                     size={20}
//                     className={`transition-transform ${openAccordion === 'sortBy' ? 'rotate-180' : ''}`}
//                   />
//                 </button>
//                 {openAccordion === 'sortBy' && (
//                   <div className="p-4 pt-0 space-y-2">
//                     {['Relevance', 'Price: Low to High', 'Price: High to Low', 'Date'].map((option) => (
//                       <label key={option} className="flex items-center gap-2 cursor-pointer hover:text-cyan-400">
//                         <input type="radio" name="sort" className="accent-cyan-500" />
//                         <span>{option}</span>
//                       </label>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Day Filter Accordion */}
//               <div className="bg-slate-900/50 rounded-lg border border-slate-800">
//                 <button
//                   onClick={() => toggleAccordion('day')}
//                   className="w-full flex items-center justify-between p-4 hover:bg-slate-800/50 transition-colors"
//                 >
//                   <span className="font-semibold">Day</span>
//                   <ChevronDown
//                     size={20}
//                     className={`transition-transform ${openAccordion === 'day' ? 'rotate-180' : ''}`}
//                   />
//                 </button>
//                 {openAccordion === 'day' && (
//                   <div className="p-4 pt-0 space-y-2">
//                     {['Today', 'Tomorrow', 'This Weekend', 'This Week'].map((day) => (
//                       <label key={day} className="flex items-center gap-2 cursor-pointer hover:text-cyan-400">
//                         <input type="checkbox" className="accent-cyan-500" />
//                         <span>{day}</span>
//                       </label>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Month Filter Accordion */}
//               <div className="bg-slate-900/50 rounded-lg border border-slate-800">
//                 <button
//                   onClick={() => toggleAccordion('month')}
//                   className="w-full flex items-center justify-between p-4 hover:bg-slate-800/50 transition-colors"
//                 >
//                   <span className="font-semibold">Filter By Month and Date</span>
//                   <ChevronDown
//                     size={20}
//                     className={`transition-transform ${openAccordion === 'month' ? 'rotate-180' : ''}`}
//                   />
//                 </button>
//                 {openAccordion === 'month' && (
//                   <div className="p-4 pt-0">
//                     <input
//                       type="month"
//                       className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2 text-white"
//                     />
//                   </div>
//                 )}
//               </div>

//               {/* City Filter Accordion */}
//               <div className="bg-slate-900/50 rounded-lg border border-slate-800">
//                 <button
//                   onClick={() => toggleAccordion('city')}
//                   className="w-full flex items-center justify-between p-4 hover:bg-slate-800/50 transition-colors"
//                 >
//                   <span className="font-semibold">Search by your city</span>
//                   <ChevronDown
//                     size={20}
//                     className={`transition-transform ${openAccordion === 'city' ? 'rotate-180' : ''}`}
//                   />
//                 </button>
//                 {openAccordion === 'city' && (
//                   <div className="p-4 pt-0">
//                     <input
//                       type="text"
//                       placeholder="Enter city name..."
//                       className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2 text-white placeholder-gray-500"
//                       onChange={(e) => setSelectedFilters({...selectedFilters, city: e.target.value})}
//                     />
//                   </div>
//                 )}
//               </div>

//               {/* Price Filter Accordion */}
//               <div className="bg-slate-900/50 rounded-lg border border-slate-800">
//                 <button
//                   onClick={() => toggleAccordion('price')}
//                   className="w-full flex items-center justify-between p-4 hover:bg-slate-800/50 transition-colors"
//                 >
//                   <span className="font-semibold">Price</span>
//                   <ChevronDown
//                     size={20}
//                     className={`transition-transform ${openAccordion === 'price' ? 'rotate-180' : ''}`}
//                   />
//                 </button>
//                 {openAccordion === 'price' && (
//                   <div className="p-4 pt-0 space-y-3">
//                     <div className="flex gap-2">
//                       <input
//                         type="number"
//                         placeholder="Min"
//                         className="w-1/2 bg-slate-800 border border-slate-700 rounded px-3 py-2 text-white"
//                       />
//                       <input
//                         type="number"
//                         placeholder="Max"
//                         className="w-1/2 bg-slate-800 border border-slate-700 rounded px-3 py-2 text-white"
//                       />
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </aside>

//           {/* Mobile Filter Button */}
//           <button
//             onClick={() => setShowFilters(true)}
//             className="lg:hidden fixed bottom-6 right-6 bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-500 p-4 rounded-full shadow-2xl shadow-pink-500/50 z-30"
//           >
//             <Filter size={24} />
//           </button>

//           {/* Mobile Filter Sidebar */}
//           {showFilters && (
//             <div className="lg:hidden fixed inset-0 bg-black/80 z-50">
//               <div className="absolute right-0 top-0 bottom-0 w-80 bg-slate-900 overflow-y-auto">
//                 <div className="p-4">
//                   <div className="flex items-center justify-between mb-6">
//                     <h2 className="text-xl font-bold">Filters</h2>
//                     <button onClick={() => setShowFilters(false)}>
//                       <X size={24} />
//                     </button>
//                   </div>
//                   {/* Same filter content as desktop */}
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Events Grid */}
//           <div className="flex-1">
//             <div className="mb-6">
//               <h2 className="text-2xl font-bold text-gray-300">
//                 Showing <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">{filteredEvents.length}</span> events
//               </h2>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//               {filteredEvents.map((event) => (
//                 <div
//                   key={event.id}
//                   className="group bg-gradient-to-b from-slate-900/80 to-slate-950/80 rounded-xl overflow-hidden border border-slate-800 hover:border-pink-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-2xl hover:shadow-pink-500/20"
//                 >
//                   {/* Image */}
//                   <div className="relative h-80 overflow-hidden">
//                     <img
//                       src={event.image}
//                       alt={event.title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
//                     {/* Featured Badge */}
//                     {event.featured && (
//                       <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-600 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
//                         FEATURED
//                       </div>
//                     )}

//                     {/* Category Badge */}
//                     <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-cyan-400 px-3 py-1 rounded-full text-xs font-semibold border border-cyan-400/30">
//                       {event.category}
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="p-5 space-y-4">
//                     <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-cyan-400 transition-all duration-300 line-clamp-2">
//                       {event.title}
//                     </h3>

//                     <div className="space-y-2 text-sm text-gray-400">
//                       <div className="flex items-center gap-2">
//                         <MapPin size={16} className="text-cyan-400" />
//                         <span>{event.location}, {event.country}</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <Calendar size={16} className="text-cyan-400" />
//                         <span>{event.date}</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <Clock size={16} className="text-cyan-400" />
//                         <span>{event.time}</span>
//                       </div>
//                     </div>

//                     {/* Tags */}
//                     <div className="flex flex-wrap gap-2">
//                       {event.tags.map((tag, index) => (
//                         <span
//                           key={index}
//                           className="px-3 py-1 bg-slate-800 text-gray-300 rounded-full text-xs border border-slate-700"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>

//                     {/* Price & CTA */}
//                     <div className="flex items-center justify-between pt-4 border-t border-slate-800">
//                       <div>
//                         <p className="text-xs text-gray-500">Starting from</p>
//                         <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
//                           INR {event.price} onwards
//                         </p>
//                       </div>
//                     </div>

//                     <button className="w-full bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-500 text-white font-bold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-2xl group-hover:shadow-pink-500/50 overflow-hidden relative">
//                       <span className="relative z-10 flex items-center gap-2">
//                         <Ticket size={18} />
//                         BOOK NOW
//                       </span>
//                       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <style jsx>{`
//         @keyframes gradient-x {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }

//         .animate-gradient-x {
//           background-size: 200% 200%;
//           animation: gradient-x 3s ease infinite;
//         }

//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }

//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </div>
//   );
// }




// // import React, { useState, useEffect, useRef } from 'react';
// // import { Calendar, Clock, MapPin, Ticket, ChevronLeft, ChevronRight, Filter, X, ChevronDown } from 'lucide-react';

// // export default function EventsPage() {
// //   const [currentSlide, setCurrentSlide] = useState(0);
// //   const [activeTab, setActiveTab] = useState('All Events');
// //   const [showFilters, setShowFilters] = useState(false);
// //   const [openAccordion, setOpenAccordion] = useState(null);
// //   const tabsRef = useRef(null);

// //   // Hero Carousel Data - Matching the image
// //   const heroSlides = [
// //     {
// //       id: 1,
// //       image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1400&h=700&fit=crop",
// //       title: "BEYOND THE BEAT, FEEL THE SYNC",
// //       subtitle: "ASH ROY B2B CALM CHOR",
// //       date: "19-25 JANUARY | Phoenix Club, Kolkata",
// //       logo: "MONKEY SHOULDER"
// //     },
// //     {
// //       id: 2,
// //       image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1400&h=700&fit=crop",
// //       title: "MONOLINK",
// //       subtitle: "LIVE PERFORMANCE",
// //       date: "Barala Halla, Kolkata",
// //       logo: "SKILLBOX"
// //     },
// //     {
// //       id: 3,
// //       image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1400&h=700&fit=crop",
// //       title: "ANOUSHKA SHANKAR",
// //       subtitle: "30 Years: The Story Continues",
// //       date: "08 February | Netaji Indoor Stadium, Kolkata",
// //       logo: "SKILLBOX"
// //     },
// //     {
// //       id: 4,
// //       image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1400&h=700&fit=crop",
// //       title: "DREAM THEATER",
// //       subtitle: "40th Anniversary Tour - India 2026",
// //       date: "Sun, Feb 01 - Kolkata Aquatica Grounds",
// //       logo: "SKILLBOX"
// //     },
// //     {
// //       id: 5,
// //       image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1400&h=700&fit=crop",
// //       title: "SUBLIME with AKCENT & DEEPSIDE",
// //       subtitle: "Live in India Tour",
// //       date: "13th Dec / 2:00 PM OMW+ | At Lahti, Manekshaw",
// //       logo: "SKILLBOX"
// //     }
// //   ];

// //   // Category Tabs
// //   const categories = [
// //     'Club Gigs - Music', 'Music Concerts', 'Music Festivals', 'Open Air Music Festivals',
// //     'New Year 2026', 'Comedy Events', 'Open Mic Event', 'Festivals', 'Classical Music',
// //     'Concert', 'Residential Packages'
// //   ];

// //   // Events Data
// //   const allEvents = [
// //     {
// //       id: 1,
// //       title: "Circus Festival 2025 | Mumbai",
// //       category: "Music Festivals",
// //       location: "Mumbai",
// //       country: "India",
// //       date: "26 Dec - 29 Dec 2025",
// //       time: "05:00 PM",
// //       price: 1499,
// //       image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=800&fit=crop",
// //       tags: ["Electronic Dance Music", "Techno"],
// //       featured: true
// //     },
// //     {
// //       id: 2,
// //       title: "Exclusive Tables + MOSH - Circus Festival 2025",
// //       category: "Music Festivals",
// //       location: "Mumbai",
// //       country: "India",
// //       date: "26 Dec - 29 Dec 2025",
// //       time: "05:00 PM",
// //       price: 20000,
// //       image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=800&fit=crop",
// //       tags: ["Electronic", "VIP"],
// //       featured: true
// //     },
// //     {
// //       id: 3,
// //       title: "Room XO presents Tom Enzy",
// //       category: "Club Gigs - Music",
// //       location: "New Delhi",
// //       country: "India",
// //       date: "12 Dec 2025",
// //       time: "10:00 PM",
// //       price: 799,
// //       image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=800&fit=crop",
// //       tags: ["Live Music", "DJ"],
// //       featured: false
// //     },
// //     {
// //       id: 4,
// //       title: "Sunny Side Up Festival",
// //       category: "Music Festivals",
// //       location: "Vagator, Goa",
// //       country: "India",
// //       date: "26 Dec - 31 Dec 2025",
// //       time: "10:00 PM",
// //       price: 2499,
// //       image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=800&fit=crop",
// //       tags: ["Electronic", "House", "Beach"],
// //       featured: true
// //     },
// //     {
// //       id: 5,
// //       title: "Monolink Live in Kolkata",
// //       category: "Music Concerts",
// //       location: "Kolkata",
// //       country: "India",
// //       date: "15 Jan 2026",
// //       time: "08:00 PM",
// //       price: 1999,
// //       image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=800&fit=crop",
// //       tags: ["Live Performance", "Electronic"],
// //       featured: true
// //     },
// //     {
// //       id: 6,
// //       title: "New Year Dhamaka 2026",
// //       category: "New Year 2026",
// //       location: "Mumbai",
// //       country: "India",
// //       date: "31 Dec 2025",
// //       time: "09:00 PM",
// //       price: 3499,
// //       image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=800&fit=crop",
// //       tags: ["New Year Party", "DJ Night"],
// //       featured: true
// //     },
// //     {
// //       id: 7,
// //       title: "Comedy Night Special",
// //       category: "Comedy Events",
// //       location: "Bangalore",
// //       country: "India",
// //       date: "15 Dec 2025",
// //       time: "07:00 PM",
// //       price: 599,
// //       image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=600&h=800&fit=crop",
// //       tags: ["Stand-up", "Comedy"],
// //       featured: false
// //     },
// //     {
// //       id: 8,
// //       title: "Anoushka Shankar - Kolkata",
// //       category: "Classical Music",
// //       location: "Kolkata",
// //       country: "India",
// //       date: "08 Feb 2026",
// //       time: "06:00 PM",
// //       price: 1499,
// //       image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&h=800&fit=crop",
// //       tags: ["Classical", "Sitar", "Traditional"],
// //       featured: true
// //     },
// //     {
// //       id: 9,
// //       title: "Dream Theater - 40th Anniversary Tour",
// //       category: "Music Concerts",
// //       location: "Kolkata",
// //       country: "India",
// //       date: "01 Feb 2026",
// //       time: "05:00 PM",
// //       price: 2999,
// //       image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&h=800&fit=crop",
// //       tags: ["Rock", "Progressive Metal"],
// //       featured: true
// //     }
// //   ];

// //   // Filter events
// //   const filteredEvents = activeTab === 'All Events' 
// //     ? allEvents 
// //     : allEvents.filter(event => event.category === activeTab);

// //   // Auto-play carousel
// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
// //     }, 5000);
// //     return () => clearInterval(timer);
// //   }, [heroSlides.length]);

// //   const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
// //   const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
// //   const toggleAccordion = (section) => setOpenAccordion(openAccordion === section ? null : section);

// //   const scrollTabs = (direction) => {
// //     if (tabsRef.current) {
// //       tabsRef.current.scrollBy({ left: direction === 'left' ? -200 : 200, behavior: 'smooth' });
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-black text-white relative overflow-hidden">
// //       {/* Animated particles */}
// //       <div className="fixed inset-0 pointer-events-none z-0">
// //         <div className="absolute top-20 left-10 w-2 h-2 bg-pink-500/30 rounded-full animate-float-1"></div>
// //         <div className="absolute top-40 right-20 w-3 h-3 bg-cyan-400/20 rounded-full animate-float-2"></div>
// //         <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-purple-500/25 rounded-full animate-float-3"></div>
// //         <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-pink-400/30 rounded-full animate-float-1"></div>
// //       </div>

// //       {/* Hero Carousel */}
// //       <section className="relative h-[75vh] overflow-hidden">
// //         <div className="relative h-full">
// //           {heroSlides.map((slide, index) => (
// //             <div
// //               key={slide.id}
// //               className={`absolute inset-0 transition-all duration-1000 ${
// //                 index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
// //               }`}
// //             >
// //               <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
// //               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              
// //               <div className={`absolute inset-0 flex items-center justify-center text-center px-6 transition-all duration-1000 delay-300 ${
// //                 index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
// //               }`}>
// //                 <div>
// //                   <div className="mb-4">
// //                     <span className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-full">
// //                       {slide.logo}
// //                     </span>
// //                   </div>
// //                   <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6">
// //                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 animate-gradient">
// //                       {slide.title}
// //                     </span>
// //                   </h1>
// //                   <p className="text-2xl md:text-3xl text-gray-200 mb-3 font-bold">{slide.subtitle}</p>
// //                   <p className="text-lg md:text-xl text-gray-400">{slide.date}</p>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Navigation */}
// //         <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-pink-600 p-4 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20 z-20">
// //           <ChevronLeft size={28} />
// //         </button>
// //         <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-pink-600 p-4 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20 z-20">
// //           <ChevronRight size={28} />
// //         </button>

// //         {/* Dots */}
// //         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
// //           {heroSlides.map((_, index) => (
// //             <button
// //               key={index}
// //               onClick={() => setCurrentSlide(index)}
// //               className={`transition-all duration-300 rounded-full ${
// //                 index === currentSlide 
// //                   ? 'w-12 h-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500' 
// //                   : 'w-3 h-3 bg-white/40 hover:bg-white/60'
// //               }`}
// //             />
// //           ))}
// //         </div>
// //       </section>

// //       {/* Category Tabs */}
// //       <section className="sticky top-0 z-40 bg-black/95 backdrop-blur-xl border-b border-slate-800 shadow-lg">
// //         <div className="max-w-7xl mx-auto px-4 py-5">
// //           <div className="flex items-center gap-3">
// //             <button onClick={() => scrollTabs('left')} className="p-2 hover:bg-slate-800 rounded-full transition-all hover:scale-110 border border-slate-700 hover:border-pink-500 flex-shrink-0">
// //               <ChevronLeft size={20} />
// //             </button>
            
// //             <div ref={tabsRef} className="flex-1 overflow-x-auto scrollbar-hide scroll-smooth">
// //               <div className="flex gap-3 pb-2">
// //                 {categories.map((category) => (
// //                   <button
// //                     key={category}
// //                     onClick={() => setActiveTab(category)}
// //                     className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
// //                       activeTab === category
// //                         ? 'bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-500 text-white shadow-lg shadow-pink-500/50 scale-105'
// //                         : 'bg-slate-800/80 text-gray-300 hover:bg-slate-700 border border-slate-700'
// //                     }`}
// //                   >
// //                     {category}
// //                   </button>
// //                 ))}
// //               </div>
// //             </div>

// //             <button onClick={() => scrollTabs('right')} className="p-2 hover:bg-slate-800 rounded-full transition-all hover:scale-110 border border-slate-700 hover:border-pink-500 flex-shrink-0">
// //               <ChevronRight size={20} />
// //             </button>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Main Content */}
// //       <section className="max-w-7xl mx-auto px-4 py-12 relative z-10">
// //         <div className="flex flex-col lg:flex-row gap-8">
// //           {/* Sidebar Filters */}
// //           <aside className="hidden lg:block w-80 flex-shrink-0">
// //             <div className="sticky top-28 space-y-4">
// //               <div className="flex justify-between mb-6">
// //                 <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
// //                   Filter Options
// //                 </h2>
// //                 <button className="text-cyan-400 text-sm hover:text-cyan-300">clear</button>
// //               </div>

// //               {/* Sort By */}
// //               <div className="bg-slate-900/50 rounded-xl border border-slate-800 hover:border-pink-500/30 transition-all backdrop-blur-sm">
// //                 <button onClick={() => toggleAccordion('sort')} className="w-full flex justify-between p-4 hover:bg-slate-800/50 rounded-t-xl">
// //                   <span className="font-semibold">Sort By</span>
// //                   <ChevronDown size={20} className={`transition-transform ${openAccordion === 'sort' ? 'rotate-180 text-pink-500' : ''}`} />
// //                 </button>
// //                 <div className={`overflow-hidden transition-all ${openAccordion === 'sort' ? 'max-h-48' : 'max-h-0'}`}>
// //                   <div className="p-4 pt-0 space-y-3">
// //                     {['Relevance', 'Price: Low to High', 'Price: High to Low', 'Date'].map((opt) => (
// //                       <label key={opt} className="flex items-center gap-3 cursor-pointer hover:text-cyan-400 group">
// //                         <input type="radio" name="sort" className="accent-cyan-500 w-4 h-4" />
// //                         <span className="group-hover:translate-x-1 transition-transform">{opt}</span>
// //                       </label>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Day */}
// //               <div className="bg-slate-900/50 rounded-xl border border-slate-800 hover:border-purple-500/30 transition-all backdrop-blur-sm">
// //                 <button onClick={() => toggleAccordion('day')} className="w-full flex justify-between p-4 hover:bg-slate-800/50 rounded-t-xl">
// //                   <span className="font-semibold">Day</span>
// //                   <ChevronDown size={20} className={`transition-transform ${openAccordion === 'day' ? 'rotate-180 text-purple-500' : ''}`} />
// //                 </button>
// //                 <div className={`overflow-hidden transition-all ${openAccordion === 'day' ? 'max-h-48' : 'max-h-0'}`}>
// //                   <div className="p-4 pt-0 space-y-3">
// //                     {['Today', 'Tomorrow', 'This Weekend', 'This Week'].map((day) => (
// //                       <label key={day} className="flex items-center gap-3 cursor-pointer hover:text-cyan-400 group">
// //                         <input type="checkbox" className="accent-cyan-500 w-4 h-4" />
// //                         <span className="group-hover:translate-x-1 transition-transform">{day}</span>
// //                       </label>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Month */}
// //               <div className="bg-slate-900/50 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-all backdrop-blur-sm">
// //                 <button onClick={() => toggleAccordion('month')} className="w-full flex justify-between p-4 hover:bg-slate-800/50 rounded-t-xl">
// //                   <span className="font-semibold">Filter By Month and Date</span>
// //                   <ChevronDown size={20} className={`transition-transform ${openAccordion === 'month' ? 'rotate-180 text-cyan-500' : ''}`} />
// //                 </button>
// //                 <div className={`overflow-hidden transition-all ${openAccordion === 'month' ? 'max-h-32' : 'max-h-0'}`}>
// //                   <div className="p-4 pt-0">
// //                     <input type="month" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" />
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* City */}
// //               <div className="bg-slate-900/50 rounded-xl border border-slate-800 hover:border-pink-500/30 transition-all backdrop-blur-sm">
// //                 <button onClick={() => toggleAccordion('city')} className="w-full flex justify-between p-4 hover:bg-slate-800/50 rounded-t-xl">
// //                   <span className="font-semibold">Search by your city</span>
// //                   <ChevronDown size={20} className={`transition-transform ${openAccordion === 'city' ? 'rotate-180 text-pink-500' : ''}`} />
// //                 </button>
// //                 <div className={`overflow-hidden transition-all ${openAccordion === 'city' ? 'max-h-32' : 'max-h-0'}`}>
// //                   <div className="p-4 pt-0">
// //                     <input type="text" placeholder="Enter city..." className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/50" />
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Price */}
// //               <div className="bg-slate-900/50 rounded-xl border border-slate-800 hover:border-purple-500/30 transition-all backdrop-blur-sm">
// //                 <button onClick={() => toggleAccordion('price')} className="w-full flex justify-between p-4 hover:bg-slate-800/50 rounded-t-xl">
// //                   <span className="font-semibold">Price</span>
// //                   <ChevronDown size={20} className={`transition-transform ${openAccordion === 'price' ? 'rotate-180 text-purple-500' : ''}`} />
// //                 </button>
// //                 <div className={`overflow-hidden transition-all ${openAccordion === 'price' ? 'max-h-32' : 'max-h-0'}`}>
// //                   <div className="p-4 pt-0 flex gap-2">
// //                     <input type="number" placeholder="Min" className="w-1/2 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:border-purple-500 focus:outline-none" />
// //                     <input type="number" placeholder="Max" className="w-1/2 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:border-purple-500 focus:outline-none" />
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </aside>

// //           {/* Mobile Filter Button */}
// //           <button onClick={() => setShowFilters(true)} className="lg:hidden fixed bottom-8 right-8 bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-500 p-5 rounded-full shadow-2xl z-40 hover:scale-110 transition-transform animate-pulse-subtle">
// //             <Filter size={24} />
// //           </button>

// //           {/* Mobile Filter Sidebar */}
// //           <div className={`lg:hidden fixed inset-0 bg-black/90 z-50 transition-opacity ${showFilters ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
// //             <div className={`absolute right-0 top-0 bottom-0 w-80 bg-slate-900 overflow-y-auto transition-transform ${showFilters ? 'translate-x-0' : 'translate-x-full'}`}>
// //               <div className="p-6">
// //                 <div className="flex justify-between mb-6">
// //                   <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">Filters</h2>
// //                   <button onClick={() => setShowFilters(false)} className="p-2 hover:bg-slate-800 rounded-full">
// //                     <X size={24} />
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Events Grid */}
// //           <div className="flex-1">
// //             <div className="mb-8">
// //               <h2 className="text-3xl font-bold text-gray-300">
// //                 Showing <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-4xl">{filteredEvents.length}</span> events
// //               </h2>
// //               <div className="h-1 w-32 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full mt-3"></div>
// //             </div>

// //             <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
// //               {filteredEvents.map((event, idx) => (
// //                 <div key={event.id} className="group bg-gradient-to-b from-slate-900/80 to-slate-950/80 rounded-2xl overflow-hidden border border-slate-800 hover:border-pink-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-3 shadow-2xl hover:shadow-pink-500/30" style={{animationDelay: `${idx * 100}ms`}}>
// //                   <div className="relative h-80 overflow-hidden">
// //                     <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
// //                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
// //                     {event.featured && (
// //                       <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-600 to-red-600 text-white px-4 py-2 rounded-full text-xs font-bold animate-pulse">
// //                         ⭐ FEATURED
// //                       </div>
// //                     )}

// //                     <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-cyan-400 px-4 py-2 rounded-full text-xs font-semibold border border-cyan-400/30">
// //                       {event.category}
// //                     </div>
// //                   </div>

// //                   <div className="p-6 space-y-4">
// //                     <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-cyan-400 transition-all line-clamp-2 min-h-[3.5rem]">
// //                       {event.title}
// //                     </h3>

// //                     <div className="space-y-3 text-sm text-gray-400">
// //                       <div className="flex items-center gap-3 hover:text-white transition-colors">
// //                         <MapPin size={16} className="text-cyan-400" />
// //                         <span>{event.location}, {event.country}</span>
// //                       </div>
// //                       <div className="flex items-center gap-3 hover:text-white transition-colors">
// //                         <Calendar size={16} className="text-cyan-400" />
// //                         <span>{event.date}</span>
// //                       </div>
// //                       <div className="flex items-center gap-3 hover:text-white transition-colors">
// //                         <Clock size={16} className="text-cyan-400" />
// //                         <span>{event.time}</span>
// //                       </div>
// //                     </div>

// //                     <div className="flex flex-wrap gap-2">
// //                       {event.tags.map((tag, i) => (
// //                         <span key={i} className="px-3 py-1 bg-slate-800 text-gray-300 rounded-full text-xs border border-slate-700 hover:border-pink-500 hover:text-pink-400 transition-all cursor-pointer">
// //                           {tag}
// //                         </span>
// //                       ))}
// //                     </div>

// //                     <div className="pt-4 border-t border-slate-800 space-y-4">
// //                       <div>
// //                         <p className="text-xs text-gray-500 mb-1">Starting from</p>
// //                         <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
// //                           INR {event.price}
// //                         </p>
// //                         <p className="text-xs text-gray-400">onwards</p>
// //                       </div>

// //                       <button className="w-full bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-500 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-2xl group-hover:shadow-pink-500/50 overflow-hidden relative transform hover:scale-105">
// //                         <span className="relative z-10 flex items-center gap-2">
// //                           <Ticket size={18} />
// //                           BOOK NOW
// //                         </span>
// //                         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

      
// // <style jsx>{`
// // /* =========================
// //    GRADIENT ANIMATION
// // ========================= */
// // @keyframes gradient {
// //   0%, 100% {
// //     background-position: 0% 50%;
// //   }
// //   50% {
// //     background-position: 100% 50%;
// //   }
// // }

// // .animate-gradient {
// //   background-size: 200% 200%;
// //   animation: gradient 3s ease infinite;
// // }

// // /* =========================
// //    FLOATING PARTICLES
// // ========================= */
// // @keyframes float-1 {
// //   0%, 100% {
// //     transform: translate(0, 0);
// //     opacity: 0;
// //   }
// //   50% {
// //     transform: translate(10px, -30px);
// //     opacity: 1;
// //   }
// // }

// // @keyframes float-2 {
// //   0%, 100% {
// //     transform: translate(0, 0);
// //     opacity: 0;
// //   }
// //   50% {
// //     transform: translate(-10px, 30px);
// //     opacity: 1;
// //   }
// // }

// // @keyframes float-3 {
// //   0%, 100% {
// //     transform: translate(0, 0);
// //     opacity: 0;
// //   }
// //   50% {
// //     transform: translate(20px, -20px);
// //     opacity: 1;
// //   }
// // }

// // .animate-float-1 {
// //   animation: float-1 6s ease-in-out infinite;
// // }

// // .animate-float-2 {
// //   animation: float-2 7s ease-in-out infinite;
// // }

// // .animate-float-3 {
// //   animation: float-3 8s ease-in-out infinite;
// // }

// // /* =========================
// //    SUBTLE PULSE (FAB BUTTON)
// // ========================= */
// // @keyframes pulse-subtle {
// //   0% {
// //     box-shadow: 0 0 0 0 rgba(236, 72, 153, 0.6);
// //   }
// //   70% {
// //     box-shadow: 0 0 0 20px rgba(236, 72, 153, 0);
// //   }
// //   100% {
// //     box-shadow: 0 0 0 0 rgba(236, 72, 153, 0);
// //   }
// // }

// // .animate-pulse-subtle {
// //   animation: pulse-subtle 2.5s infinite;
// // }

// // /* =========================
// //    SCROLLBAR HIDE (TABS)
// // ========================= */
// // .scrollbar-hide::-webkit-scrollbar {
// //   display: none;
// // }

// // .scrollbar-hide {
// //   -ms-overflow-style: none;
// //   scrollbar-width: none;
// // }

// // /* =========================
// //    TEXT CLAMP (EVENT TITLE)
// // ========================= */
// // .line-clamp-2 {
// //   display: -webkit-box;
// //   -webkit-line-clamp: 2;
// //   -webkit-box-orient: vertical;
// //   overflow: hidden;
// // }

// // /* =========================
// //    SMOOTH ACCORDION
// // ========================= */
// // .accordion-enter {
// //   max-height: 0;
// //   opacity: 0;
// // }

// // .accordion-enter-active {
// //   max-height: 300px;
// //   opacity: 1;
// //   transition: max-height 0.4s ease, opacity 0.3s ease;
// // }

// // .accordion-exit {
// //   max-height: 300px;
// //   opacity: 1;
// // }

// // .accordion-exit-active {
// //   max-height: 0;
// //   opacity: 0;
// //   transition: max-height 0.3s ease, opacity 0.2s ease;
// // }

// // /* =========================
// //    CARD FADE-IN (GRID)
// // ========================= */
// // @keyframes fadeUp {
// //   from {
// //     opacity: 0;
// //     transform: translateY(40px);
// //   }
// //   to {
// //     opacity: 1;
// //     transform: translateY(0);
// //   }
// // }

// // .card-animate {
// //   animation: fadeUp 0.8s ease forwards;
// // }
// // `
// // }</style>




// import React, { useState } from 'react';
// import { Search, Plus, Settings, Menu, Calendar, MapPin } from 'lucide-react';

// export default function EventDashboard() {
//   const [events, setEvents] = useState([
//    {
//     id: 1,
//     title: "Raajkutir Pet Talks in Association with The Furry",
//     venue: "Raajkutir Swabhumi, Kolkata",
//     date: "January 18",
//     time: "11AM",
//     status: "Under Review",
//     statusColor: "from-yellow-600 to-amber-600",
//     image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop"
//   },
//   {
//     id: 2,
//     title: "Nick Carter - Who I Am Tour | Siliguri",
//     venue: "Utsodhaara Teesta Township, Siliguri",
//     date: "March 20",
//     time: "4PM Onwards",
//     status: "Cancelled",
//     statusColor: "from-pink-600 to-red-600",
//     image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop"
//   },
//   {
//     id: 3,
//     title: "Sunburn Arena ft. DJ Snake",
//     venue: "GMR Arena, Hyderabad",
//     date: "February 10",
//     time: "6PM",
//     status: "Live",
//     statusColor: "from-green-500 to-emerald-600",
//     image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop"
//   },
//   {
//     id: 4,
//     title: "Comedy Night with Zakir Khan",
//     venue: "Phoenix Marketcity, Pune",
//     date: "January 25",
//     time: "7PM",
//     status: "Few Seats Left",
//     statusColor: "from-orange-500 to-yellow-500",
//     image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=400&h=300&fit=crop"
//   },
//   {
//     id: 5,
//     title: "Art & Wine Evening",
//     venue: "DLF CyberHub, Gurugram",
//     date: "February 3",
//     time: "5PM",
//     status: "Selling Fast",
//     statusColor: "from-purple-500 to-pink-500",
//     image: "https://images.unsplash.com/photo-1515165562835-c4c2b8e63d1a?w=400&h=300&fit=crop"
//   },
//   {
//     id: 6,
//     title: "Goa Sunset Beach Party",
//     venue: "Anjuna Beach, Goa",
//     date: "March 5",
//     time: "3PM",
//     status: "Live",
//     statusColor: "from-cyan-500 to-blue-600",
//     image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"
//   },
//   {
//     id: 7,
//     title: "Startup Founders Meetup 2025",
//     venue: "WeWork Galaxy, Bengaluru",
//     date: "January 30",
//     time: "10AM",
//     status: "Open",
//     statusColor: "from-indigo-500 to-purple-600",
//     image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop"
//   },
//   {
//     id: 8,
//     title: "Classical Music Evening – Raga Nights",
//     venue: "NCPA, Mumbai",
//     date: "February 14",
//     time: "6:30PM",
//     status: "Live",
//     statusColor: "from-teal-500 to-emerald-500",
//     image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=300&fit=crop"
//   },
//   {
//     id: 9,
//     title: "Food Carnival & Street Fest",
//     venue: "Eco Park, New Town Kolkata",
//     date: "March 12",
//     time: "12PM",
//     status: "Selling Fast",
//     statusColor: "from-rose-500 to-pink-600",
//     image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400&h=300&fit=crop"
//   },
//   {
//     id: 10,
//     title: "Photography Walk – Old Delhi",
//     venue: "Chandni Chowk, Delhi",
//     date: "January 22",
//     time: "6AM",
//     status: "Open",
//     statusColor: "from-sky-500 to-blue-500",
//     image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&h=300&fit=crop"
//   },
//   {
//     id: 11,
//     title: "Techno Warehouse Night",
//     venue: "Secret Location, Mumbai",
//     date: "February 29",
//     time: "10PM",
//     status: "Under Review",
//     statusColor: "from-yellow-600 to-amber-600",
//     image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop"
//   },
//   {
//     id: 12,
//     title: "Yoga & Mindfulness Retreat",
//     venue: "Rishikesh Ghat, Uttarakhand",
//     date: "March 18",
//     time: "7AM",
//     status: "Confirmed",
//     statusColor: "from-green-600 to-lime-500",
//     image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop"
//   }
//   ]);

//   const [searchQuery, setSearchQuery] = useState("");
//   const [menuOpen, setMenuOpen] = useState(false);

//   const filteredEvents = events.filter(event =>
//     event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     event.venue.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
//       {/* Header */}
//       <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center gap-4">
//               <button 
//                 onClick={() => setMenuOpen(!menuOpen)}
//                 className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
//               >
//                 <Menu className="w-6 h-6 text-white" />
//               </button>
//                 <div className="flex items-center">
//                   <img
//                     src="/image/FESTIVAL.png"
//                     alt="distrikt by zomato"
//                     className="h-10 w-auto object-contain"
//                   />
//                 </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Page Header */}
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
//           <div>
//             <h2 className="text-4xl font-bold text-white mb-2">Your events</h2>
//             <p className="text-gray-400 text-lg">An overview of your events</p>
//           </div>
//           <button className="mt-4 sm:mt-0 inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105">
//             <Plus className="w-5 h-5" />
//             Create event
//           </button>
//         </div>

//         {/* Search Bar */}
//         <div className="mb-8">
//           <div className="relative">
//             <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//             <input
//               type="text"
//               placeholder="Search for an event or event group"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//             />
//           </div>
//         </div>

//         {/* Events List */}
//         <div className="space-y-6">
//           {filteredEvents.map((event) => (
//             <div
//               key={event.id}
//               className="group relative bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/20"
//             >
//               <div className="flex flex-col md:flex-row">
//                 {/* Event Image */}
//                 <div className="relative w-full md:w-64 h-64 md:h-auto overflow-hidden">
//                   <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
//                   <img
//                     src={event.image}
//                     alt={event.title}
//                     className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
//                   />
//                 </div>

//                 {/* Event Details */}
//                 <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
//                   <div>
//                     <div className="flex items-start justify-between gap-4 mb-4">
//                       <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-purple-400 transition-colors">
//                         {event.title}
//                       </h3>
//                       <span className={`px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${event.statusColor} whitespace-nowrap shadow-lg`}>
//                         {event.status}
//                       </span>
//                     </div>

//                     <div className="space-y-3 mb-6">
//                       <div className="flex items-center gap-2 text-gray-300">
//                         <MapPin className="w-5 h-5 text-purple-400" />
//                         <span className="text-base">{event.venue}</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-gray-300">
//                         <Calendar className="w-5 h-5 text-purple-400" />
//                         <span className="text-base">{event.date} | {event.time}</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex flex-wrap gap-3">
//                     <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all transform hover:scale-105 border border-gray-700">
//                       <Settings className="w-4 h-4" />
//                       Manage Event
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Empty State */}
//         {filteredEvents.length === 0 && (
//           <div className="text-center py-16">
//             <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-800 mb-4">
//               <Search className="w-10 h-10 text-gray-400" />
//             </div>
//             <h3 className="text-xl font-semibold text-white mb-2">No events found</h3>
//             <p className="text-gray-400">Try adjusting your search query</p>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }




import React, { useState, useEffect } from 'react';
import { Search, Plus, Settings, Menu, Calendar, MapPin, TrendingUp, Users, Clock, Sparkles, Filter, Eye } from 'lucide-react';
import { useNavigate } from "react-router-dom";


export default function EventDashboard() {
  const [events, setEvents] = useState([
   {
    id: 1,
    title: "Raajkutir Pet Talks in Association with The Furry",
    venue: "Raajkutir Swabhumi, Kolkata",
    date: "January 18",
    time: "11AM",
    status: "Under Review",
    statusColor: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
    attendees: 234,
    views: 1420,
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Nick Carter - Who I Am Tour | Siliguri",
    venue: "Utsodhaara Teesta Township, Siliguri",
    date: "March 20",
    time: "4PM Onwards",
    status: "Cancelled",
    statusColor: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
    attendees: 189,
    views: 892,
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Sunburn Arena ft. DJ Snake",
    venue: "GMR Arena, Hyderabad",
    date: "February 10",
    time: "6PM",
    status: "Live",
    statusColor: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
    attendees: 3456,
    views: 8920,
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Comedy Night with Zakir Khan",
    venue: "Phoenix Marketcity, Pune",
    date: "January 25",
    time: "7PM",
    status: "Few Seats Left",
    statusColor: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
    attendees: 567,
    views: 2340,
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    title: "Goa Sunset Beach Party",
    venue: "Anjuna Beach, Goa",
    date: "March 5",
    time: "3PM",
    status: "Live",
    statusColor: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
    attendees: 2134,
    views: 5670,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    title: "Startup Founders Meetup 2025",
    venue: "WeWork Galaxy, Bengaluru",
    date: "January 30",
    time: "10AM",
    status: "Open",
    statusColor: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
    attendees: 456,
    views: 1890,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop"
  },
  {
    id: 7,
    title: "Classical Music Evening – Raga Nights",
    venue: "NCPA, Mumbai",
    date: "February 14",
    time: "6:30PM",
    status: "Live",
    statusColor: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
    attendees: 678,
    views: 2890,
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=300&fit=crop"
  },
  {
    id: 8,
    title: "Food Carnival & Street Fest",
    venue: "Eco Park, New Town Kolkata",
    date: "March 12",
    time: "12PM",
    status: "Selling Fast",
    statusColor: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
    attendees: 1234,
    views: 4560,
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400&h=300&fit=crop"
  },
  {
    id: 9,
    title: "Photography Walk – Old Delhi",
    venue: "Chandni Chowk, Delhi",
    date: "January 22",
    time: "6AM",
    status: "Open",
    statusColor: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
    attendees: 345,
    views: 1230,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&h=300&fit=crop"
  },
  {
    id: 10,
    title: "Techno Warehouse Night",
    venue: "Secret Location, Mumbai",
    date: "February 29",
    time: "10PM",
    status: "Under Review",
    statusColor: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
    attendees: 789,
    views: 2340,
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop"
  },
  {
    id: 11,
    title: "Yoga & Mindfulness Retreat",
    venue: "Rishikesh Ghat, Uttarakhand",
    date: "March 18",
    time: "7AM",
    status: "Confirmed",
    statusColor: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
    attendees: 567,
    views: 1890,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop"
  }
  ]);

 
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const progress = (scrollTop / docHeight) * 100;
    setScrollProgress(progress);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.venue.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalAttendees = events.reduce((sum, event) => sum + event.attendees, 0);
  const totalViews = events.reduce((sum, event) => sum + event.views, 0);
  const liveEvents = events.filter(e => e.status === "Live").length;

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-[9999] bg-white/10">
        <div
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] animate-float" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[150px] animate-pulse-slow" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-2xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2.5 hover:bg-white/10 rounded-xl transition-all duration-300 group border border-white/5 hover:border-white/20"
              >
                <Menu className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
              <div className="flex items-center">
                <img
                  src="/image/FESTIVAL.png"
                  alt="distrikt by zomato"
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium text-white">{liveEvents} Live</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Users className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-white">{totalAttendees.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header with Stats */}
        <div className={`mb-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-4">
                <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
                <span className="text-xs uppercase tracking-widest text-gray-400">Event Management</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-3">
                <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                  Your Events
                </span>
              </h2>
              <p className="text-gray-400 text-lg">Manage and monitor all your events in one place</p>
            </div>
            
            <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-2xl transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 border border-white/20">
              <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              Create Event
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard
              icon={<Calendar className="w-6 h-6" />}
              label="Total Events"
              value={events.length}
              gradient="from-purple-500/20 to-pink-500/20"
              iconColor="text-purple-400"
              delay="100"
            />
            <StatCard
              icon={<Users className="w-6 h-6" />}
              label="Total Attendees"
              value={totalAttendees.toLocaleString()}
              gradient="from-cyan-500/20 to-blue-500/20"
              iconColor="text-cyan-400"
              delay="200"
            />
            <StatCard
              icon={<Eye className="w-6 h-6" />}
              label="Total Views"
              value={totalViews.toLocaleString()}
              gradient="from-pink-500/20 to-red-500/20"
              iconColor="text-pink-400"
              delay="300"
            />
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className={`mb-8 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search events by title or venue..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-5 py-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
              />
            </div>
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="inline-flex items-center gap-3 px-6 py-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all group"
            >
              <Filter className="w-5 h-5 text-purple-400 group-hover:rotate-180 transition-transform duration-500" />
              <span className="font-medium">Filter</span>
            </button>
          </div>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {filteredEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} isLoaded={isLoaded} />
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-20 animate-fade-in">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">No events found</h3>
            <p className="text-gray-400 text-lg">Try adjusting your search query or filters</p>
          </div>
        )}
      </main>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 25s ease-in-out infinite;
          animation-delay: -8s;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 10s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}

/* =========================================
   STAT CARD COMPONENT
========================================= */
function StatCard({ icon, label, value, gradient, iconColor, delay }) {
  return (
    <div 
      className={`relative overflow-hidden rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 group`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Shine effect */}
      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm mb-2 uppercase tracking-wider">{label}</p>
          <p className="text-3xl font-bold text-white">{value}</p>
        </div>
        <div className={`${iconColor} transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
          {icon}
        </div>
      </div>
    </div>
  );
}

/* =========================================
   EVENT CARD COMPONENT
========================================= */
function EventCard({ event, index, isLoaded }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative bg-white/[0.03] backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${300 + index * 100}ms` }}
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${event.statusColor.replace('from-', 'from-').replace('to-', 'to-')}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Shine effect */}
      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative flex flex-col md:flex-row">
        {/* Event Image */}
        <div className="relative w-full md:w-80 h-64 md:h-auto overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          
          {/* Status badge */}
          <div className="absolute top-6 left-6">
            <span className={`px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${event.statusColor} shadow-xl backdrop-blur-xl border border-white/20`}>
              {event.status}
            </span>
          </div>

          {/* Quick stats on image */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-xl border border-white/20">
              <Users className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-white">{event.attendees}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-xl border border-white/20">
              <Eye className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-white">{event.views}</span>
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="flex-1 p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
              {event.title}
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <span className="text-base font-medium">{event.venue}</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="text-base font-medium">{event.date}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <Clock className="w-5 h-5 text-pink-400" />
                </div>
                <span className="text-base font-medium">{event.time}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {/* <button className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white rounded-xl transition-all transform hover:scale-105 border border-white/20 hover:border-white/40 group/btn">
              <Settings className="w-5 h-5 group-hover/btn:rotate-90 transition-transform duration-300" />
              <span className="font-semibold">Manage Event</span>
            </button> */}
            
            <button
              onClick={() => navigate(`/event/card/${event.id}`)}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white rounded-xl transition-all transform hover:scale-105 border border-white/20 hover:border-white/40"
            >
              <Settings className="w-5 h-5" />
              <span className="font-semibold">Manage Event</span>
            </button>


            <button className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 text-white rounded-xl transition-all transform hover:scale-105 border border-purple-500/30 hover:border-purple-500/50">
              <TrendingUp className="w-5 h-5" />
              <span className="font-semibold">View Analytics</span>
            </button>
          </div>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}