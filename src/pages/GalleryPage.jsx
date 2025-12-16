import React, { useState, useEffect } from "react";
import { Camera, Calendar, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";


const galleries = [
  {
    id: 1,
    title: "DREAMSONIC 2023",
    year: "2023",
    location: "World Tour",
    image: "/image/gallery1.jpeg",
    photos: 247,
    gradient: "from-cyan-500/30 via-blue-500/30 to-purple-500/30"
  },
  {
    id: 2,
    title: "TOP OF THE WORLD TOUR 2022",
    year: "2022",
    location: "Global Tour",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80",
    photos: 189,
    gradient: "from-yellow-500/30 via-orange-500/30 to-red-500/30"
  },
  {
    id: 3,
    title: "THE DISTANCE OVER TIME TOUR 2019",
    year: "2019",
    location: "International",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    photos: 312,
    gradient: "from-pink-500/30 via-purple-500/30 to-blue-500/30"
  },
  {
    id: 4,
    title: "IMAGES, WORDS & BEYOND TOUR",
    year: "2017",
    location: "Anniversary Tour",
    image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80",
    photos: 156,
    gradient: "from-orange-500/30 via-red-500/30 to-pink-500/30"
  },
  {
    id: 5,
    title: "BREAKING THE FOURTH WALL 2014",
    year: "2014",
    location: "Live Recording",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    photos: 203,
    gradient: "from-blue-500/30 via-cyan-500/30 to-teal-500/30"
  },
  {
    id: 6,
    title: "THE ASTONISHING TOUR 2016",
    year: "2016",
    location: "Concept Tour",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    photos: 278,
    gradient: "from-purple-500/30 via-pink-500/30 to-red-500/30"
  },
  {
    id: 7,
    title: "THE ASTONISHING TOUR 2016",
    year: "2016",
    location: "West Bengal",
    image: "/image/gallery5.jpeg",
    photos: 278,
    gradient: "from-purple-500/30 via-pink-500/30 to-red-500/30"
  }
];

export default function GalleryPage() {
  const [hoveredId, setHoveredId] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const navigate = useNavigate();

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
    handleScroll(); // initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="min-h-screen bg-black text-white py-24 px-6 relative overflow-hidden">
        {/* Scroll Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-slate-900 z-50">
            <div className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 transition-[width] duration-200 ease-out"
                style={{ width: `${scrollProgress}%` }}
             />
        </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] animate-pulse-slow-delayed" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 relative z-10">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-4">
            <Camera className="w-4 h-4 text-purple-400" />
            <span className="text-xs uppercase tracking-widest text-gray-400">Visual Archive</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 animate-gradient-x">
                PHOTO GALLERIES
              </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            EXPLORE PHOTOS FROM THROUGHOUT DREAM THEATER HISTORY!
          </p>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 pt-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleries.map((gallery, index) => (
           <GalleryCard
                key={gallery.id}
                gallery={gallery}
                onOpen={() => navigate(`/gallery/card/${gallery.id}`)}
                index={index}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-pulse-slow-delayed {
          animation: pulse-slow 8s ease-in-out infinite;
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}

function GalleryCard({ gallery, onOpen, onHover, onLeave, index }) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer"
      style={{
        animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={gallery.image}
          alt={gallery.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
      </div>

      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gallery.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay`} />

      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/20 transition-all duration-500" />

      {/* Shine effect */}
      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        {/* Top badges */}
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-xl border border-white/20 w-fit">
              <Calendar className="w-3 h-3" />
              <span className="text-xs font-medium">{gallery.year}</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-xl border border-white/20 w-fit opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
              <Camera className="w-3 h-3" />
              <span className="text-xs font-medium">{gallery.photos} Photos</span>
            </div>
          </div>

          {/* Arrow button */}
          <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-white/20 hover:scale-110">
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom content */}
        <div className="space-y-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex items-center gap-2 text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
            <MapPin className="w-3.5 h-3.5" />
            <span className="text-xs uppercase tracking-wider">{gallery.location}</span>
          </div>

          <h3 className="text-xl font-bold tracking-wide leading-tight">
            {gallery.title}
          </h3>

          {/* View gallery button */}
          {/* <button className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300 opacity-0 group-hover:opacity-100 delay-300 flex items-center justify-center gap-2 text-sm font-medium">
            View Gallery
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button> */}
            <button
                onClick={onOpen}
                className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300 opacity-0 group-hover:opacity-100 delay-300 flex items-center justify-center gap-2 text-sm font-medium"
            >
                View Gallery
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>


        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}