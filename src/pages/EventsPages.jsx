import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Ticket, ChevronLeft, ChevronRight, Filter, X, ChevronDown } from 'lucide-react';

export default function EventsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('All Events');
  const [showFilters, setShowFilters] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({
    sortBy: '',
    day: [],
    month: '',
    city: '',
    priceRange: [0, 10000]
  });

  // Hero Carousel Data
  const heroSlides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&h=600&fit=crop",
      title: "CIRCUS FESTIVAL 2025",
      subtitle: "Mumbai | 26-29 December"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&h=600&fit=crop",
      title: "ROOM XO presents Tom Enzy",
      subtitle: "New Delhi | 12 December 2025"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=600&fit=crop",
      title: "SUNNY SIDE UP",
      subtitle: "Goa | 26-31 December"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&h=600&fit=crop",
      title: "NEW YEAR DHAMAKA",
      subtitle: "Mumbai | 31 December"
    }
  ];

  // Category Tabs
  const categories = [
    'All Events', 'Club Gigs - Music', 'Music Concerts', 'Music Festivals', 
    'Comedy Events', 'Open Air Music Festivals', 'New Year 2026', 'Festivals', 
    'Concert', 'Classical Music', 'Party', 'Open Mic Event'
  ];

  // Events Data
  const events = [
    {
      id: 1,
      title: "Circus Festival 2025 | Mumbai",
      category: "Music Festivals",
      location: "Mumbai",
      country: "India",
      date: "26 December - 29 December 2025",
      time: "05:00 PM",
      price: 1499,
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=800&fit=crop",
      tags: ["Electronic Dance Music", "Techno"],
      featured: true
    },
    {
      id: 2,
      title: "*Exclusive Tables + MOSH / VPD Lounge - Circus Festival 2025 | Mumbai",
      category: "Music Festivals",
      location: "Mumbai",
      country: "India",
      date: "26 December - 29 December 2025",
      time: "05:00 PM",
      price: 20000,
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=800&fit=crop",
      tags: ["Electronic Dance Music", "Techno"],
      featured: true
    },
    {
      id: 3,
      title: "Room XO presents Tom Enzy",
      category: "Club Gigs - Music",
      location: "New Delhi",
      country: "India",
      date: "12 December 2025",
      time: "10:00 PM",
      price: 799,
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=800&fit=crop",
      tags: ["Live Music"],
      featured: false
    },
    {
      id: 4,
      title: "Sunny Side Up Festival",
      category: "Music Festivals",
      location: "Vagator, Goa",
      country: "India",
      date: "26 December - 31 December 2025",
      time: "10:00 PM",
      price: 2499,
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=800&fit=crop",
      tags: ["Electronic", "House"],
      featured: true
    },
    {
      id: 5,
      title: "Imran Khan Live in Mumbai",
      category: "Music Concerts",
      location: "Mumbai",
      country: "India",
      date: "24 December 2025",
      time: "08:00 PM",
      price: 1999,
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=800&fit=crop",
      tags: ["Live Performance"],
      featured: false
    },
    {
      id: 6,
      title: "New Year Dhamaka with Soundarya Sharma",
      category: "New Year 2026",
      location: "Mumbai",
      country: "India",
      date: "31 December 2025",
      time: "09:00 PM",
      price: 3499,
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=800&fit=crop",
      tags: ["New Year Party", "DJ Night"],
      featured: true
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const filteredEvents = events.filter(event => {
    if (activeTab !== 'All Events' && event.category !== activeTab) return false;
    if (selectedFilters.city && event.location !== selectedFilters.city) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Carousel */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            
            <div className="absolute bottom-12 left-0 right-0 text-center px-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 animate-gradient-x">
                  {slide.title}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">{slide.subtitle}</p>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 p-3 rounded-full transition-all duration-300 z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 p-3 rounded-full transition-all duration-300 z-10"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-8 bg-gradient-to-r from-pink-500 to-cyan-500' 
                  : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Category Tabs - Horizontal Scroll */}
      <section className="sticky top-0 z-40 bg-black/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-slate-800 rounded-full transition-colors">
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex-1 overflow-x-auto scrollbar-hide">
              <div className="flex gap-2 whitespace-nowrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveTab(category)}
                    className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                      activeTab === category
                        ? 'bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-500 text-white shadow-lg shadow-pink-500/50'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <button className="p-2 hover:bg-slate-800 rounded-full transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Main Content - Sidebar + Grid */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-24 space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
                  Filter Options
                </h2>
                <button className="text-cyan-400 text-sm hover:text-cyan-300">clear</button>
              </div>

              {/* Sort By Accordion */}
              <div className="bg-slate-900/50 rounded-lg border border-slate-800">
                <button
                  onClick={() => toggleAccordion('sortBy')}
                  className="w-full flex items-center justify-between p-4 hover:bg-slate-800/50 transition-colors"
                >
                  <span className="font-semibold">Sort By</span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${openAccordion === 'sortBy' ? 'rotate-180' : ''}`}
                  />
                </button>
                {openAccordion === 'sortBy' && (
                  <div className="p-4 pt-0 space-y-2">
                    {['Relevance', 'Price: Low to High', 'Price: High to Low', 'Date'].map((option) => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer hover:text-cyan-400">
                        <input type="radio" name="sort" className="accent-cyan-500" />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Day Filter Accordion */}
              <div className="bg-slate-900/50 rounded-lg border border-slate-800">
                <button
                  onClick={() => toggleAccordion('day')}
                  className="w-full flex items-center justify-between p-4 hover:bg-slate-800/50 transition-colors"
                >
                  <span className="font-semibold">Day</span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${openAccordion === 'day' ? 'rotate-180' : ''}`}
                  />
                </button>
                {openAccordion === 'day' && (
                  <div className="p-4 pt-0 space-y-2">
                    {['Today', 'Tomorrow', 'This Weekend', 'This Week'].map((day) => (
                      <label key={day} className="flex items-center gap-2 cursor-pointer hover:text-cyan-400">
                        <input type="checkbox" className="accent-cyan-500" />
                        <span>{day}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Month Filter Accordion */}
              <div className="bg-slate-900/50 rounded-lg border border-slate-800">
                <button
                  onClick={() => toggleAccordion('month')}
                  className="w-full flex items-center justify-between p-4 hover:bg-slate-800/50 transition-colors"
                >
                  <span className="font-semibold">Filter By Month and Date</span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${openAccordion === 'month' ? 'rotate-180' : ''}`}
                  />
                </button>
                {openAccordion === 'month' && (
                  <div className="p-4 pt-0">
                    <input
                      type="month"
                      className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2 text-white"
                    />
                  </div>
                )}
              </div>

              {/* City Filter Accordion */}
              <div className="bg-slate-900/50 rounded-lg border border-slate-800">
                <button
                  onClick={() => toggleAccordion('city')}
                  className="w-full flex items-center justify-between p-4 hover:bg-slate-800/50 transition-colors"
                >
                  <span className="font-semibold">Search by your city</span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${openAccordion === 'city' ? 'rotate-180' : ''}`}
                  />
                </button>
                {openAccordion === 'city' && (
                  <div className="p-4 pt-0">
                    <input
                      type="text"
                      placeholder="Enter city name..."
                      className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2 text-white placeholder-gray-500"
                      onChange={(e) => setSelectedFilters({...selectedFilters, city: e.target.value})}
                    />
                  </div>
                )}
              </div>

              {/* Price Filter Accordion */}
              <div className="bg-slate-900/50 rounded-lg border border-slate-800">
                <button
                  onClick={() => toggleAccordion('price')}
                  className="w-full flex items-center justify-between p-4 hover:bg-slate-800/50 transition-colors"
                >
                  <span className="font-semibold">Price</span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${openAccordion === 'price' ? 'rotate-180' : ''}`}
                  />
                </button>
                {openAccordion === 'price' && (
                  <div className="p-4 pt-0 space-y-3">
                    <div className="flex gap-2">
                      <input
                        type="number"
                        placeholder="Min"
                        className="w-1/2 bg-slate-800 border border-slate-700 rounded px-3 py-2 text-white"
                      />
                      <input
                        type="number"
                        placeholder="Max"
                        className="w-1/2 bg-slate-800 border border-slate-700 rounded px-3 py-2 text-white"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </aside>

          {/* Mobile Filter Button */}
          <button
            onClick={() => setShowFilters(true)}
            className="lg:hidden fixed bottom-6 right-6 bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-500 p-4 rounded-full shadow-2xl shadow-pink-500/50 z-30"
          >
            <Filter size={24} />
          </button>

          {/* Mobile Filter Sidebar */}
          {showFilters && (
            <div className="lg:hidden fixed inset-0 bg-black/80 z-50">
              <div className="absolute right-0 top-0 bottom-0 w-80 bg-slate-900 overflow-y-auto">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold">Filters</h2>
                    <button onClick={() => setShowFilters(false)}>
                      <X size={24} />
                    </button>
                  </div>
                  {/* Same filter content as desktop */}
                </div>
              </div>
            </div>
          )}

          {/* Events Grid */}
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-300">
                Showing <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">{filteredEvents.length}</span> events
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="group bg-gradient-to-b from-slate-900/80 to-slate-950/80 rounded-xl overflow-hidden border border-slate-800 hover:border-pink-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-2xl hover:shadow-pink-500/20"
                >
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Featured Badge */}
                    {event.featured && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-600 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                        FEATURED
                      </div>
                    )}

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-cyan-400 px-3 py-1 rounded-full text-xs font-semibold border border-cyan-400/30">
                      {event.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-cyan-400 transition-all duration-300 line-clamp-2">
                      {event.title}
                    </h3>

                    <div className="space-y-2 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-cyan-400" />
                        <span>{event.location}, {event.country}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-cyan-400" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-cyan-400" />
                        <span>{event.time}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {event.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-slate-800 text-gray-300 rounded-full text-xs border border-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                      <div>
                        <p className="text-xs text-gray-500">Starting from</p>
                        <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
                          INR {event.price} onwards
                        </p>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-500 text-white font-bold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-2xl group-hover:shadow-pink-500/50 overflow-hidden relative">
                      <span className="relative z-10 flex items-center gap-2">
                        <Ticket size={18} />
                        BOOK NOW
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}




// import React, { useState, useEffect, useRef } from 'react';
// import { Calendar, Clock, MapPin, Ticket, ChevronLeft, ChevronRight, Filter, X, ChevronDown } from 'lucide-react';

// export default function EventsPage() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [activeTab, setActiveTab] = useState('All Events');
//   const [showFilters, setShowFilters] = useState(false);
//   const [openAccordion, setOpenAccordion] = useState(null);
//   const tabsRef = useRef(null);

//   // Hero Carousel Data - Matching the image
//   const heroSlides = [
//     {
//       id: 1,
//       image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1400&h=700&fit=crop",
//       title: "BEYOND THE BEAT, FEEL THE SYNC",
//       subtitle: "ASH ROY B2B CALM CHOR",
//       date: "19-25 JANUARY | Phoenix Club, Kolkata",
//       logo: "MONKEY SHOULDER"
//     },
//     {
//       id: 2,
//       image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1400&h=700&fit=crop",
//       title: "MONOLINK",
//       subtitle: "LIVE PERFORMANCE",
//       date: "Barala Halla, Kolkata",
//       logo: "SKILLBOX"
//     },
//     {
//       id: 3,
//       image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1400&h=700&fit=crop",
//       title: "ANOUSHKA SHANKAR",
//       subtitle: "30 Years: The Story Continues",
//       date: "08 February | Netaji Indoor Stadium, Kolkata",
//       logo: "SKILLBOX"
//     },
//     {
//       id: 4,
//       image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1400&h=700&fit=crop",
//       title: "DREAM THEATER",
//       subtitle: "40th Anniversary Tour - India 2026",
//       date: "Sun, Feb 01 - Kolkata Aquatica Grounds",
//       logo: "SKILLBOX"
//     },
//     {
//       id: 5,
//       image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1400&h=700&fit=crop",
//       title: "SUBLIME with AKCENT & DEEPSIDE",
//       subtitle: "Live in India Tour",
//       date: "13th Dec / 2:00 PM OMW+ | At Lahti, Manekshaw",
//       logo: "SKILLBOX"
//     }
//   ];

//   // Category Tabs
//   const categories = [
//     'Club Gigs - Music', 'Music Concerts', 'Music Festivals', 'Open Air Music Festivals',
//     'New Year 2026', 'Comedy Events', 'Open Mic Event', 'Festivals', 'Classical Music',
//     'Concert', 'Residential Packages'
//   ];

//   // Events Data
//   const allEvents = [
//     {
//       id: 1,
//       title: "Circus Festival 2025 | Mumbai",
//       category: "Music Festivals",
//       location: "Mumbai",
//       country: "India",
//       date: "26 Dec - 29 Dec 2025",
//       time: "05:00 PM",
//       price: 1499,
//       image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=800&fit=crop",
//       tags: ["Electronic Dance Music", "Techno"],
//       featured: true
//     },
//     {
//       id: 2,
//       title: "Exclusive Tables + MOSH - Circus Festival 2025",
//       category: "Music Festivals",
//       location: "Mumbai",
//       country: "India",
//       date: "26 Dec - 29 Dec 2025",
//       time: "05:00 PM",
//       price: 20000,
//       image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=800&fit=crop",
//       tags: ["Electronic", "VIP"],
//       featured: true
//     },
//     {
//       id: 3,
//       title: "Room XO presents Tom Enzy",
//       category: "Club Gigs - Music",
//       location: "New Delhi",
//       country: "India",
//       date: "12 Dec 2025",
//       time: "10:00 PM",
//       price: 799,
//       image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=800&fit=crop",
//       tags: ["Live Music", "DJ"],
//       featured: false
//     },
//     {
//       id: 4,
//       title: "Sunny Side Up Festival",
//       category: "Music Festivals",
//       location: "Vagator, Goa",
//       country: "India",
//       date: "26 Dec - 31 Dec 2025",
//       time: "10:00 PM",
//       price: 2499,
//       image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=800&fit=crop",
//       tags: ["Electronic", "House", "Beach"],
//       featured: true
//     },
//     {
//       id: 5,
//       title: "Monolink Live in Kolkata",
//       category: "Music Concerts",
//       location: "Kolkata",
//       country: "India",
//       date: "15 Jan 2026",
//       time: "08:00 PM",
//       price: 1999,
//       image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=800&fit=crop",
//       tags: ["Live Performance", "Electronic"],
//       featured: true
//     },
//     {
//       id: 6,
//       title: "New Year Dhamaka 2026",
//       category: "New Year 2026",
//       location: "Mumbai",
//       country: "India",
//       date: "31 Dec 2025",
//       time: "09:00 PM",
//       price: 3499,
//       image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=800&fit=crop",
//       tags: ["New Year Party", "DJ Night"],
//       featured: true
//     },
//     {
//       id: 7,
//       title: "Comedy Night Special",
//       category: "Comedy Events",
//       location: "Bangalore",
//       country: "India",
//       date: "15 Dec 2025",
//       time: "07:00 PM",
//       price: 599,
//       image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=600&h=800&fit=crop",
//       tags: ["Stand-up", "Comedy"],
//       featured: false
//     },
//     {
//       id: 8,
//       title: "Anoushka Shankar - Kolkata",
//       category: "Classical Music",
//       location: "Kolkata",
//       country: "India",
//       date: "08 Feb 2026",
//       time: "06:00 PM",
//       price: 1499,
//       image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&h=800&fit=crop",
//       tags: ["Classical", "Sitar", "Traditional"],
//       featured: true
//     },
//     {
//       id: 9,
//       title: "Dream Theater - 40th Anniversary Tour",
//       category: "Music Concerts",
//       location: "Kolkata",
//       country: "India",
//       date: "01 Feb 2026",
//       time: "05:00 PM",
//       price: 2999,
//       image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&h=800&fit=crop",
//       tags: ["Rock", "Progressive Metal"],
//       featured: true
//     }
//   ];

//   // Filter events
//   const filteredEvents = activeTab === 'All Events' 
//     ? allEvents 
//     : allEvents.filter(event => event.category === activeTab);

//   // Auto-play carousel
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [heroSlides.length]);

//   const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//   const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
//   const toggleAccordion = (section) => setOpenAccordion(openAccordion === section ? null : section);

//   const scrollTabs = (direction) => {
//     if (tabsRef.current) {
//       tabsRef.current.scrollBy({ left: direction === 'left' ? -200 : 200, behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black text-white relative overflow-hidden">
//       {/* Animated particles */}
//       <div className="fixed inset-0 pointer-events-none z-0">
//         <div className="absolute top-20 left-10 w-2 h-2 bg-pink-500/30 rounded-full animate-float-1"></div>
//         <div className="absolute top-40 right-20 w-3 h-3 bg-cyan-400/20 rounded-full animate-float-2"></div>
//         <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-purple-500/25 rounded-full animate-float-3"></div>
//         <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-pink-400/30 rounded-full animate-float-1"></div>
//       </div>

//       {/* Hero Carousel */}
//       <section className="relative h-[75vh] overflow-hidden">
//         <div className="relative h-full">
//           {heroSlides.map((slide, index) => (
//             <div
//               key={slide.id}
//               className={`absolute inset-0 transition-all duration-1000 ${
//                 index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
//               }`}
//             >
//               <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              
//               <div className={`absolute inset-0 flex items-center justify-center text-center px-6 transition-all duration-1000 delay-300 ${
//                 index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//               }`}>
//                 <div>
//                   <div className="mb-4">
//                     <span className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-full">
//                       {slide.logo}
//                     </span>
//                   </div>
//                   <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6">
//                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 animate-gradient">
//                       {slide.title}
//                     </span>
//                   </h1>
//                   <p className="text-2xl md:text-3xl text-gray-200 mb-3 font-bold">{slide.subtitle}</p>
//                   <p className="text-lg md:text-xl text-gray-400">{slide.date}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Navigation */}
//         <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-pink-600 p-4 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20 z-20">
//           <ChevronLeft size={28} />
//         </button>
//         <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-pink-600 p-4 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20 z-20">
//           <ChevronRight size={28} />
//         </button>

//         {/* Dots */}
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
//           {heroSlides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`transition-all duration-300 rounded-full ${
//                 index === currentSlide 
//                   ? 'w-12 h-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500' 
//                   : 'w-3 h-3 bg-white/40 hover:bg-white/60'
//               }`}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Category Tabs */}
//       <section className="sticky top-0 z-40 bg-black/95 backdrop-blur-xl border-b border-slate-800 shadow-lg">
//         <div className="max-w-7xl mx-auto px-4 py-5">
//           <div className="flex items-center gap-3">
//             <button onClick={() => scrollTabs('left')} className="p-2 hover:bg-slate-800 rounded-full transition-all hover:scale-110 border border-slate-700 hover:border-pink-500 flex-shrink-0">
//               <ChevronLeft size={20} />
//             </button>
            
//             <div ref={tabsRef} className="flex-1 overflow-x-auto scrollbar-hide scroll-smooth">
//               <div className="flex gap-3 pb-2">
//                 {categories.map((category) => (
//                   <button
//                     key={category}
//                     onClick={() => setActiveTab(category)}
//                     className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
//                       activeTab === category
//                         ? 'bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-500 text-white shadow-lg shadow-pink-500/50 scale-105'
//                         : 'bg-slate-800/80 text-gray-300 hover:bg-slate-700 border border-slate-700'
//                     }`}
//                   >
//                     {category}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <button onClick={() => scrollTabs('right')} className="p-2 hover:bg-slate-800 rounded-full transition-all hover:scale-110 border border-slate-700 hover:border-pink-500 flex-shrink-0">
//               <ChevronRight size={20} />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="max-w-7xl mx-auto px-4 py-12 relative z-10">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Sidebar Filters */}
//           <aside className="hidden lg:block w-80 flex-shrink-0">
//             <div className="sticky top-28 space-y-4">
//               <div className="flex justify-between mb-6">
//                 <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
//                   Filter Options
//                 </h2>
//                 <button className="text-cyan-400 text-sm hover:text-cyan-300">clear</button>
//               </div>

//               {/* Sort By */}
//               <div className="bg-slate-900/50 rounded-xl border border-slate-800 hover:border-pink-500/30 transition-all backdrop-blur-sm">
//                 <button onClick={() => toggleAccordion('sort')} className="w-full flex justify-between p-4 hover:bg-slate-800/50 rounded-t-xl">
//                   <span className="font-semibold">Sort By</span>
//                   <ChevronDown size={20} className={`transition-transform ${openAccordion === 'sort' ? 'rotate-180 text-pink-500' : ''}`} />
//                 </button>
//                 <div className={`overflow-hidden transition-all ${openAccordion === 'sort' ? 'max-h-48' : 'max-h-0'}`}>
//                   <div className="p-4 pt-0 space-y-3">
//                     {['Relevance', 'Price: Low to High', 'Price: High to Low', 'Date'].map((opt) => (
//                       <label key={opt} className="flex items-center gap-3 cursor-pointer hover:text-cyan-400 group">
//                         <input type="radio" name="sort" className="accent-cyan-500 w-4 h-4" />
//                         <span className="group-hover:translate-x-1 transition-transform">{opt}</span>
//                       </label>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Day */}
//               <div className="bg-slate-900/50 rounded-xl border border-slate-800 hover:border-purple-500/30 transition-all backdrop-blur-sm">
//                 <button onClick={() => toggleAccordion('day')} className="w-full flex justify-between p-4 hover:bg-slate-800/50 rounded-t-xl">
//                   <span className="font-semibold">Day</span>
//                   <ChevronDown size={20} className={`transition-transform ${openAccordion === 'day' ? 'rotate-180 text-purple-500' : ''}`} />
//                 </button>
//                 <div className={`overflow-hidden transition-all ${openAccordion === 'day' ? 'max-h-48' : 'max-h-0'}`}>
//                   <div className="p-4 pt-0 space-y-3">
//                     {['Today', 'Tomorrow', 'This Weekend', 'This Week'].map((day) => (
//                       <label key={day} className="flex items-center gap-3 cursor-pointer hover:text-cyan-400 group">
//                         <input type="checkbox" className="accent-cyan-500 w-4 h-4" />
//                         <span className="group-hover:translate-x-1 transition-transform">{day}</span>
//                       </label>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Month */}
//               <div className="bg-slate-900/50 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-all backdrop-blur-sm">
//                 <button onClick={() => toggleAccordion('month')} className="w-full flex justify-between p-4 hover:bg-slate-800/50 rounded-t-xl">
//                   <span className="font-semibold">Filter By Month and Date</span>
//                   <ChevronDown size={20} className={`transition-transform ${openAccordion === 'month' ? 'rotate-180 text-cyan-500' : ''}`} />
//                 </button>
//                 <div className={`overflow-hidden transition-all ${openAccordion === 'month' ? 'max-h-32' : 'max-h-0'}`}>
//                   <div className="p-4 pt-0">
//                     <input type="month" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" />
//                   </div>
//                 </div>
//               </div>

//               {/* City */}
//               <div className="bg-slate-900/50 rounded-xl border border-slate-800 hover:border-pink-500/30 transition-all backdrop-blur-sm">
//                 <button onClick={() => toggleAccordion('city')} className="w-full flex justify-between p-4 hover:bg-slate-800/50 rounded-t-xl">
//                   <span className="font-semibold">Search by your city</span>
//                   <ChevronDown size={20} className={`transition-transform ${openAccordion === 'city' ? 'rotate-180 text-pink-500' : ''}`} />
//                 </button>
//                 <div className={`overflow-hidden transition-all ${openAccordion === 'city' ? 'max-h-32' : 'max-h-0'}`}>
//                   <div className="p-4 pt-0">
//                     <input type="text" placeholder="Enter city..." className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/50" />
//                   </div>
//                 </div>
//               </div>

//               {/* Price */}
//               <div className="bg-slate-900/50 rounded-xl border border-slate-800 hover:border-purple-500/30 transition-all backdrop-blur-sm">
//                 <button onClick={() => toggleAccordion('price')} className="w-full flex justify-between p-4 hover:bg-slate-800/50 rounded-t-xl">
//                   <span className="font-semibold">Price</span>
//                   <ChevronDown size={20} className={`transition-transform ${openAccordion === 'price' ? 'rotate-180 text-purple-500' : ''}`} />
//                 </button>
//                 <div className={`overflow-hidden transition-all ${openAccordion === 'price' ? 'max-h-32' : 'max-h-0'}`}>
//                   <div className="p-4 pt-0 flex gap-2">
//                     <input type="number" placeholder="Min" className="w-1/2 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:border-purple-500 focus:outline-none" />
//                     <input type="number" placeholder="Max" className="w-1/2 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:border-purple-500 focus:outline-none" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </aside>

//           {/* Mobile Filter Button */}
//           <button onClick={() => setShowFilters(true)} className="lg:hidden fixed bottom-8 right-8 bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-500 p-5 rounded-full shadow-2xl z-40 hover:scale-110 transition-transform animate-pulse-subtle">
//             <Filter size={24} />
//           </button>

//           {/* Mobile Filter Sidebar */}
//           <div className={`lg:hidden fixed inset-0 bg-black/90 z-50 transition-opacity ${showFilters ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
//             <div className={`absolute right-0 top-0 bottom-0 w-80 bg-slate-900 overflow-y-auto transition-transform ${showFilters ? 'translate-x-0' : 'translate-x-full'}`}>
//               <div className="p-6">
//                 <div className="flex justify-between mb-6">
//                   <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">Filters</h2>
//                   <button onClick={() => setShowFilters(false)} className="p-2 hover:bg-slate-800 rounded-full">
//                     <X size={24} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Events Grid */}
//           <div className="flex-1">
//             <div className="mb-8">
//               <h2 className="text-3xl font-bold text-gray-300">
//                 Showing <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-4xl">{filteredEvents.length}</span> events
//               </h2>
//               <div className="h-1 w-32 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full mt-3"></div>
//             </div>

//             <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
//               {filteredEvents.map((event, idx) => (
//                 <div key={event.id} className="group bg-gradient-to-b from-slate-900/80 to-slate-950/80 rounded-2xl overflow-hidden border border-slate-800 hover:border-pink-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-3 shadow-2xl hover:shadow-pink-500/30" style={{animationDelay: `${idx * 100}ms`}}>
//                   <div className="relative h-80 overflow-hidden">
//                     <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
//                     {event.featured && (
//                       <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-600 to-red-600 text-white px-4 py-2 rounded-full text-xs font-bold animate-pulse">
//                         ⭐ FEATURED
//                       </div>
//                     )}

//                     <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-cyan-400 px-4 py-2 rounded-full text-xs font-semibold border border-cyan-400/30">
//                       {event.category}
//                     </div>
//                   </div>

//                   <div className="p-6 space-y-4">
//                     <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-cyan-400 transition-all line-clamp-2 min-h-[3.5rem]">
//                       {event.title}
//                     </h3>

//                     <div className="space-y-3 text-sm text-gray-400">
//                       <div className="flex items-center gap-3 hover:text-white transition-colors">
//                         <MapPin size={16} className="text-cyan-400" />
//                         <span>{event.location}, {event.country}</span>
//                       </div>
//                       <div className="flex items-center gap-3 hover:text-white transition-colors">
//                         <Calendar size={16} className="text-cyan-400" />
//                         <span>{event.date}</span>
//                       </div>
//                       <div className="flex items-center gap-3 hover:text-white transition-colors">
//                         <Clock size={16} className="text-cyan-400" />
//                         <span>{event.time}</span>
//                       </div>
//                     </div>

//                     <div className="flex flex-wrap gap-2">
//                       {event.tags.map((tag, i) => (
//                         <span key={i} className="px-3 py-1 bg-slate-800 text-gray-300 rounded-full text-xs border border-slate-700 hover:border-pink-500 hover:text-pink-400 transition-all cursor-pointer">
//                           {tag}
//                         </span>
//                       ))}
//                     </div>

//                     <div className="pt-4 border-t border-slate-800 space-y-4">
//                       <div>
//                         <p className="text-xs text-gray-500 mb-1">Starting from</p>
//                         <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
//                           INR {event.price}
//                         </p>
//                         <p className="text-xs text-gray-400">onwards</p>
//                       </div>

//                       <button className="w-full bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-500 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-2xl group-hover:shadow-pink-500/50 overflow-hidden relative transform hover:scale-105">
//                         <span className="relative z-10 flex items-center gap-2">
//                           <Ticket size={18} />
//                           BOOK NOW
//                         </span>
//                         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

      
// <style jsx>{`
// /* =========================
//    GRADIENT ANIMATION
// ========================= */
// @keyframes gradient {
//   0%, 100% {
//     background-position: 0% 50%;
//   }
//   50% {
//     background-position: 100% 50%;
//   }
// }

// .animate-gradient {
//   background-size: 200% 200%;
//   animation: gradient 3s ease infinite;
// }

// /* =========================
//    FLOATING PARTICLES
// ========================= */
// @keyframes float-1 {
//   0%, 100% {
//     transform: translate(0, 0);
//     opacity: 0;
//   }
//   50% {
//     transform: translate(10px, -30px);
//     opacity: 1;
//   }
// }

// @keyframes float-2 {
//   0%, 100% {
//     transform: translate(0, 0);
//     opacity: 0;
//   }
//   50% {
//     transform: translate(-10px, 30px);
//     opacity: 1;
//   }
// }

// @keyframes float-3 {
//   0%, 100% {
//     transform: translate(0, 0);
//     opacity: 0;
//   }
//   50% {
//     transform: translate(20px, -20px);
//     opacity: 1;
//   }
// }

// .animate-float-1 {
//   animation: float-1 6s ease-in-out infinite;
// }

// .animate-float-2 {
//   animation: float-2 7s ease-in-out infinite;
// }

// .animate-float-3 {
//   animation: float-3 8s ease-in-out infinite;
// }

// /* =========================
//    SUBTLE PULSE (FAB BUTTON)
// ========================= */
// @keyframes pulse-subtle {
//   0% {
//     box-shadow: 0 0 0 0 rgba(236, 72, 153, 0.6);
//   }
//   70% {
//     box-shadow: 0 0 0 20px rgba(236, 72, 153, 0);
//   }
//   100% {
//     box-shadow: 0 0 0 0 rgba(236, 72, 153, 0);
//   }
// }

// .animate-pulse-subtle {
//   animation: pulse-subtle 2.5s infinite;
// }

// /* =========================
//    SCROLLBAR HIDE (TABS)
// ========================= */
// .scrollbar-hide::-webkit-scrollbar {
//   display: none;
// }

// .scrollbar-hide {
//   -ms-overflow-style: none;
//   scrollbar-width: none;
// }

// /* =========================
//    TEXT CLAMP (EVENT TITLE)
// ========================= */
// .line-clamp-2 {
//   display: -webkit-box;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
//   overflow: hidden;
// }

// /* =========================
//    SMOOTH ACCORDION
// ========================= */
// .accordion-enter {
//   max-height: 0;
//   opacity: 0;
// }

// .accordion-enter-active {
//   max-height: 300px;
//   opacity: 1;
//   transition: max-height 0.4s ease, opacity 0.3s ease;
// }

// .accordion-exit {
//   max-height: 300px;
//   opacity: 1;
// }

// .accordion-exit-active {
//   max-height: 0;
//   opacity: 0;
//   transition: max-height 0.3s ease, opacity 0.2s ease;
// }

// /* =========================
//    CARD FADE-IN (GRID)
// ========================= */
// @keyframes fadeUp {
//   from {
//     opacity: 0;
//     transform: translateY(40px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }

// .card-animate {
//   animation: fadeUp 0.8s ease forwards;
// }
// `
// }</style>

