import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Ticket } from 'lucide-react';
import { useNavigate } from "react-router-dom";


export default function AboutAndEvents() {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const events = [
    {
      id: 1,
      title: "Adult Sunday Design Groups",
      date: "28",
      month: "September",
      year: 2025,
      day: "Friday",
      time: "9pm-4am",
      dj: "DJ Nexus",
      image: "https://1840729241.rsc.cdn77.org/media/home_order/c0lGYzlCZU9aNVlnNnBWd2hYQkFrQT09/anUvZklscG9wVElZc1h0aTRJZmtGZz09/resize/1200x1200/1760792705nvlHX6TNyw1pxaB6.jpg.webp",
      price: "$50",
      eventDate: new Date('2025-09-28T21:00:00')
    },
    {
      id: 2,
      title: "DJ Pauly D",
      date: "30",
      month: "September",
      year: 2025,
      day: "Friday",
      time: "10pm-3am",
      dj: "DJ Pauly D",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=800&fit=crop",
      price: "$75",
      eventDate: new Date('2025-09-30T22:00:00')
    },
    {
      id: 3,
      title: "Global Fridays Octoberfest",
      date: "05",
      month: "October",
      year: 2025,
      day: "Friday",
      time: "10pm-5am",
      dj: "DJ Blaze",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=800&fit=crop",
      price: "$60",
      eventDate: new Date('2025-10-05T22:00:00')
    },
    {
      id: 4,
      title: "Bass Revolution",
      date: "12",
      month: "October",
      year: 2025,
      day: "Saturday",
      time: "10:30pm-4am",
      dj: "DJ Thunder",
      image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600&h=800&fit=crop",
      price: "$55",
      eventDate: new Date('2025-10-12T22:30:00')
    },
    {
      id: 5,
      title: "Electro Vibes",
      date: "18",
      month: "December",
      year: 2025,
      day: "Thursday",
      time: "11pm-5am",
      dj: "DJ Spectrum",
      image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600&h=800&fit=crop",
      price: "$100",
      eventDate: new Date('2025-12-18T23:00:00')
    },
    {
      id: 6,
      title: "House Sessions",
      date: "25",
      month: "December",
      year: 2025,
      day: "Thursday",
      time: "10pm-4am",
      dj: "DJ Pulse",
      image: "https://1840729241.rsc.cdn77.org/media/home_order/c0lGYzlCZU9aNVlnNnBWd2hYQkFrQT09/anUvZklscG9wVElZc1h0aTRJZmtGZz09/resize/1200x1200/1757051751z32ii3lbdsYCwG7c.jpg.webp",
      price: "$45",
      eventDate: new Date('2025-12-25T22:00:00')
    },
    {
      id: 7,
      title: "Neon Nights",
      date: "01",
      month: "January",
      year: 2026,
      day: "Thursday",
      time: "10pm-4am",
      dj: "DJ Pulse",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=800&fit=crop",
      price: "$45",
      eventDate: new Date('2026-01-01T22:00:00')
    },
    {
      id: 8,
      title: "Summer Beats",
      date: "08",
      month: "January",
      year: 2026,
      day: "Thursday",
      time: "9pm-3am",
      dj: "DJ Storm",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=800&fit=crop",
      price: "$50",
      eventDate: new Date('2026-01-08T21:00:00')
    },
    {
      id: 9,
      title: "Urban Legends",
      date: "15",
      month: "January",
      year: 2026,
      day: "Thursday",
      time: "10pm-5am",
      dj: "DJ Nova",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=800&fit=crop",
      price: "$65",
      eventDate: new Date('2026-01-15T22:00:00')
    },
    {
      id: 10,
      title: "Midnight Magic",
      date: "22",
      month: "January",
      year: 2026,
      day: "Thursday",
      time: "11pm-5am",
      dj: "DJ Stellar",
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&h=800&fit=crop",
      price: "$55",
      eventDate: new Date('2026-01-22T23:00:00')
    },
    {
      id: 11,
      title: "Retro Vibes",
      date: "29",
      month: "January",
      year: 2026,
      day: "Thursday",
      time: "10pm-4am",
      dj: "DJ Echo",
      image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600&h=800&fit=crop",
      price: "$48",
      eventDate: new Date('2026-01-29T22:00:00')
    },
    {
      id: 12,
      title: "Festival Finale",
      date: "06",
      month: "February",
      year: 2026,
      day: "Friday",
      time: "10pm-6am",
      dj: "DJ Phoenix",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=800&fit=crop",
      price: "$80",
      eventDate: new Date('2026-02-06T22:00:00')
    }
  ];

  // Find the nearest upcoming event
  const getNextEvent = () => {
    const now = new Date();
    const upcomingEvents = events.filter(event => event.eventDate > now);
    if (upcomingEvents.length === 0) return events[0]; // Fallback to first event
    return upcomingEvents.sort((a, b) => a.eventDate - b.eventDate)[0];
  };

  const nextEvent = getNextEvent();

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = nextEvent.eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [nextEvent]);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 pb-32 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-pink-500/30 rounded-full animate-float-particle"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-cyan-400/20 rounded-full animate-float-particle-delayed"></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-red-500/25 rounded-full animate-float-particle-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-pink-400/30 rounded-full animate-float-particle"></div>
      </div>

      {/* Hero Section */}
      <div className={`max-w-7xl mx-auto mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative overflow-hidden rounded-lg group animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600/40 to-transparent z-10 group-hover:opacity-70 transition-opacity duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=800&h=500&fit=crop" 
              alt="Nightclub atmosphere" 
              className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            
            {/* NEW DESIGN: Circular Sound Wave Visualizer */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative w-32 h-32">
                {/* Center play button */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-pink-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/50">
                  <div className="w-0 h-0 border-l-8 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
                </div>
                
                {/* Animated sound rings */}
                <div className="absolute inset-0 rounded-full border-2 border-pink-500/60 animate-sound-ring-1"></div>
                <div className="absolute inset-0 rounded-full border-2 border-cyan-500/60 animate-sound-ring-2"></div>
                <div className="absolute inset-0 rounded-full border-2 border-purple-500/60 animate-sound-ring-3"></div>
                
                {/* Rotating bars around circle */}
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="absolute top-0 left-1/2 w-1 h-6 bg-gradient-to-b from-pink-500 to-transparent transform -translate-x-1/2 animate-sound-pulse"></div>
                  <div className="absolute bottom-0 left-1/2 w-1 h-8 bg-gradient-to-t from-cyan-500 to-transparent transform -translate-x-1/2 animate-sound-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="absolute left-0 top-1/2 w-6 h-1 bg-gradient-to-r from-purple-500 to-transparent transform -translate-y-1/2 animate-sound-pulse" style={{animationDelay: '0.4s'}}></div>
                  <div className="absolute right-0 top-1/2 w-8 h-1 bg-gradient-to-l from-pink-500 to-transparent transform -translate-y-1/2 animate-sound-pulse" style={{animationDelay: '0.6s'}}></div>
                </div>
              </div>
            </div>

            {/* ALTERNATIVE DESIGN: Classic Vertical Sound Bars (Fixed) */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="flex items-end space-x-1.5 bg-black/40 px-4 py-3 rounded-full">
                <div className="w-3.5 bg-gradient-to-t from-white rounded-full animate-sound-bar-1" style={{height: '24px'}}></div>
                <div className="w-3.5 bg-gradient-to-t from-white rounded-full animate-sound-bar-2" style={{height: '32px'}}></div>
                <div className="w-3.5 bg-gradient-to-t from-white rounded-full animate-sound-bar-3" style={{height: '20px'}}></div>
                <div className="w-3.5 bg-gradient-to-t from-white rounded-full animate-sound-bar-4" style={{height: '28px'}}></div>
                <div className="w-3.5 bg-gradient-to-t from-white rounded-full animate-sound-bar-5" style={{height: '16px'}}></div>
                <div className="w-3.5 bg-gradient-to-t from-white rounded-full animate-sound-bar-6" style={{height: '24px'}}></div>
                <div className="w-3.5 bg-gradient-to-t from-white rounded-full animate-sound-bar-1" style={{height: '30px'}}></div>
              </div>
            </div>
            
            {/* Glowing border effect on hover */}
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 rounded-lg shadow-[0_0_30px_rgba(236,72,153,0.6)] animate-pulse-glow"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-slide-in-right">
            <h1 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-red-600 animate-gradient-x">
              Welcome to The Festival<span className="text-cyan-400 animate-pulse-slow">.</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed animate-fade-in-up-delay">
              A Legacy of Iconic Experiences born in Kolkata in 2012, The Festival by E365 has grown into one of Eastern India's most enduring and diverse live-music properties. With 18 successful editions in Kolkata, a virtual edition, and recent expansions to Guwahati and Imphal, the journey now continues to Bengaluru and pan-India. More than an event, The Festival is a cultural movement—bringing together global icons, Indian legends, and passionate fans for unforgettable music experiences. With a genre-neutral lineup, world-class production, immersive staging, and a fan-first approach, it continues to redefine the country's live entertainment landscape.
            </p>
            <button 
              onClick={() => navigate("/aboutus")}
              className="group relative px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-bold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 overflow-hidden animate-bounce-in shadow-lg shadow-cyan-400/0 hover:shadow-cyan-400/50 hover:shadow-xl"
            >
              <span className="relative z-10">EXPLORE</span>
              <div className="absolute inset-0 bg-cyan-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
        </div>
      </div>

      {/* NEXT EVENT COUNTDOWN SECTION */}
      {/* NEXT EVENT COUNTDOWN SECTION */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-950/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-pink-500/30 shadow-2xl shadow-pink-500/20">
          {/* Animated background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse-slow"></div>
          
          <div className="relative grid lg:grid-cols-2 gap-6 p-6 md:p-8">
            {/* Event Poster */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 to-cyan-500/30 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <div className="relative overflow-hidden rounded-xl border-2 border-pink-500/50 group-hover:border-cyan-400/50 transition-all duration-500">
                <img 
                  src={nextEvent.image} 
                  alt={nextEvent.title}
                  className="w-full h-[300px] md:h-[380px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
                {/* Event Details Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <div className="bg-gradient-to-r from-pink-600 to-red-600 text-white px-3 py-1 rounded-full font-bold text-xs">
                      NEXT EVENT
                    </div>
                    <div className="bg-black/60 backdrop-blur-md text-cyan-400 px-3 py-1 rounded-full font-bold text-xs border border-cyan-400/30">
                      {nextEvent.price}
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white mb-1">
                    {nextEvent.title}
                  </h3>
                  <div className="flex items-center gap-2 text-pink-400 font-semibold text-sm md:text-base mb-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-pulse"></span>
                    {nextEvent.dj}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-gray-300 text-xs">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-cyan-400" />
                      <span>{nextEvent.day}, {nextEvent.month} {nextEvent.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} className="text-cyan-400" />
                      <span>{nextEvent.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="flex flex-col justify-center">
              <div className="text-center mb-4 md:mb-6">
                <h2 className="text-2xl md:text-3xl font-black mb-3">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400">
                    Event Starting In
                  </span>
                </h2>
                <div className="h-0.5 w-24 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full"></div>
              </div>

              {/* Digital Clock Display */}
              <div className="grid grid-cols-4 gap-2 md:gap-3 mb-4 md:mb-6">
                {/* Days */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg md:rounded-xl p-3 md:p-4 border-2 border-pink-500/30 shadow-lg shadow-pink-500/20 hover:border-pink-500/50 transition-all duration-300">
                    <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-pink-400 to-pink-600 mb-1 digital-font">
                      {String(timeLeft.days).padStart(2, '0')}
                    </div>
                    <div className="text-[10px] md:text-xs text-gray-400 font-semibold uppercase tracking-wider">Days</div>
                  </div>
                  <div className="absolute inset-0 bg-pink-500/20 rounded-lg md:rounded-xl blur-lg -z-10 animate-pulse-soft"></div>
                </div>

                {/* Hours */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg md:rounded-xl p-3 md:p-4 border-2 border-purple-500/30 shadow-lg shadow-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                    <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-purple-600 mb-1 digital-font">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </div>
                    <div className="text-[10px] md:text-xs text-gray-400 font-semibold uppercase tracking-wider">Hours</div>
                  </div>
                  <div className="absolute inset-0 bg-purple-500/20 rounded-lg md:rounded-xl blur-lg -z-10 animate-pulse-soft"></div>
                </div>

                {/* Minutes */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg md:rounded-xl p-3 md:p-4 border-2 border-cyan-500/30 shadow-lg shadow-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-cyan-600 mb-1 digital-font">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </div>
                    <div className="text-[10px] md:text-xs text-gray-400 font-semibold uppercase tracking-wider">Mins</div>
                  </div>
                  <div className="absolute inset-0 bg-cyan-500/20 rounded-lg md:rounded-xl blur-lg -z-10 animate-pulse-soft"></div>
                </div>

                {/* Seconds */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg md:rounded-xl p-3 md:p-4 border-2 border-red-500/30 shadow-lg shadow-red-500/20 hover:border-red-500/50 transition-all duration-300">
                    <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-red-400 to-red-600 mb-1 digital-font animate-pulse">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </div>
                    <div className="text-[10px] md:text-xs text-gray-400 font-semibold uppercase tracking-wider">Secs</div>
                  </div>
                  <div className="absolute inset-0 bg-red-500/20 rounded-lg md:rounded-xl blur-lg -z-10 animate-pulse-soft"></div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-500 text-white font-bold text-sm md:text-base py-3 md:py-4 rounded-lg transition-all duration-300 shadow-2xl shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-105 flex items-center justify-center gap-2 overflow-hidden relative group">
                <span className="relative z-10 flex items-center gap-2">
                  <Ticket size={18} className="md:w-5 md:h-5" />
                  BOOK TICKETS NOW
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section with Infinite Scrolling Cards */}
      <section className="relative py-12 overflow-hidden">
        <div className="text-center mb-20">
          <div className="inline-block relative">
            {/* Glowing background */}
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-cyan-500/30 animate-pulse-slow"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 animate-fade-in relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 animate-gradient-x">
                Upcoming Events
              </span>
              <span className="text-cyan-400 animate-pulse-slow">.</span>
            </h2>
          </div>
          
          {/* Animated underline */}
          <div className="flex justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></div>
            <div className="w-40 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/50 animate-shimmer"></div>
            </div>
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
          
          <p className="text-gray-300 text-lg font-light tracking-wide">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-300">
              Curated collections • Exclusive releases
            </span>
          </p>
        </div>

        {/* Infinite Scrolling Cards Container */}
         <div className="relative cards-scroll-container overflow-hidden">
  {/* Track: duplicate cards once so scroll = -100% */}
  <div className="track animate-infinite-scroll">
    {[...events, ...events].map((event, index) => (
      <div 
        key={`${event.id}-${index}`} 
        className="flex-shrink-0 w-[320px] md:w-[380px] mx-4 group event-card"
      >
        <div className="relative bg-gradient-to-b from-slate-900/80 to-slate-950/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-2xl border border-slate-800 hover:border-pink-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-3">

          <div className="relative h-[420px] overflow-hidden">
            <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent"></div>

            <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-600 to-red-600 text-white px-5 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse-subtle">
              {event.price}
            </div>

            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md rounded-lg p-3 border border-cyan-400/30 group-hover:border-cyan-400 transition-colors duration-300">
              <div className="text-center">
                <div className="text-3xl font-black">
                  <span className="text-cyan-400">{event.date.charAt(0)}</span>
                  <span className="text-pink-500">{event.date.charAt(1)}</span>
                </div>
                <div className="text-xs text-gray-300 font-semibold mt-1">{event.month}</div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-cyan-400 transition-all duration-300">
                {event.title}
              </h3>
              <div className="flex items-center gap-2 text-pink-400 font-semibold text-lg">
                <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
                {event.dj}
              </div>
            </div>
          </div>

          <div className="p-6 space-y-4 bg-gradient-to-b from-transparent to-black/40">
            <div className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors duration-300">
              <Clock size={18} className="text-cyan-400" />
              <span className="text-sm font-medium">{event.time}</span>
            </div>

            <div className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors duration-300">
              <Calendar size={18} className="text-cyan-400" />
              <span className="text-sm font-medium">
                {event.day}, {event.month} {event.date}
              </span>
            </div>

            <button className="w-full mt-4 bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-500 text-white font-bold py-4 rounded-sm transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-2xl group-hover:shadow-pink-500/50 overflow-hidden relative">
              <span className="relative z-10 flex items-center gap-2">
                <Ticket size={18} />
                BOOK NOW
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>

        </div>
      </div>
    ))}
  </div>
</div>


        {/* Show All Events Button */}
        <div className="flex justify-center mt-16 z-0 relative">
          <button 
            onClick={() => navigate("/events")}
            className="relative bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold text-lg px-10 py-4 rounded-md 
            hover:bg-cyan-400 hover:text-black transition-all duration-300 
            shadow-lg shadow-cyan-400/0 hover:shadow-cyan-400/40 overflow-hidden group">
            <span className="relative z-10 tracking-wide">SHOW ALL EVENTS</span>
            <div className="absolute inset-0 bg-cyan-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[900ms]"></div>
          </button>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-pink-600/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse-slower pointer-events-none"></div>
      </section>

      {/* Sell Tickets Section */}
      <section className="max-w-7xl mx-auto mt-20 mb-16">
        <div className="bg-gradient-to-r from-slate-900/60 to-slate-950/60 backdrop-blur-sm rounded-2xl border border-slate-800 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-pink-500/30 transition-all duration-500">
          <div className="flex items-center gap-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <Ticket size={40} className="text-gray-400" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Got extra tickets to an event?
              </h3>
              <p className="text-gray-400 text-lg">
                List them now to find buyers soon.
              </p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-bold text-lg px-10 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 whitespace-nowrap">
            SELL TICKETS NOW
          </button>
        </div>
      </section>

      <style jsx>{`
  /* Digital Font Style */
  .digital-font {
    font-family: 'Courier New', monospace;
    letter-spacing: 0.1em;
  }

  /* Circular Sound Wave Animations */
  @keyframes sound-ring-1 {
    0% { transform: scale(1); opacity: 0.8; }
    100% { transform: scale(1.8); opacity: 0; }
  }
  @keyframes sound-ring-2 {
    0% { transform: scale(1); opacity: 0.6; }
    100% { transform: scale(2); opacity: 0; }
  }
  @keyframes sound-ring-3 {
    0% { transform: scale(1); opacity: 0.4; }
    100% { transform: scale(2.2); opacity: 0; }
  }
  .animate-sound-ring-1 { animation: sound-ring-1 1.5s ease-out infinite; }
  .animate-sound-ring-2 { animation: sound-ring-2 1.5s ease-out infinite 0.3s; }
  .animate-sound-ring-3 { animation: sound-ring-3 1.5s ease-out infinite 0.6s; }

  /* Vertical Sound Pulse */
  @keyframes sound-pulse {
    0%, 100% { opacity: 0.4; transform: scaleY(0.8); }
    50% { opacity: 1; transform: scaleY(1.2); }
  }
  .animate-sound-pulse { animation: sound-pulse 0.8s ease-in-out infinite; }

  /* Slow Rotation */
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .animate-spin-slow { animation: spin-slow 4s linear infinite; }

  /* Vertical Sound Bars */
  @keyframes sound-bar-1 { 0%,100%{height:24px;} 50%{height:40px;} }
  @keyframes sound-bar-2 { 0%,100%{height:32px;} 50%{height:48px;} }
  @keyframes sound-bar-3 { 0%,100%{height:20px;} 50%{height:36px;} }
  @keyframes sound-bar-4 { 0%,100%{height:28px;} 50%{height:44px;} }
  @keyframes sound-bar-5 { 0%,100%{height:16px;} 50%{height:32px;} }
  @keyframes sound-bar-6 { 0%,100%{height:24px;} 50%{height:40px;} }

  .animate-sound-bar-1 { animation: sound-bar-1 0.6s ease-in-out infinite; }
  .animate-sound-bar-2 { animation: sound-bar-2 0.5s ease-in-out infinite 0.1s; }
  .animate-sound-bar-3 { animation: sound-bar-3 0.7s ease-in-out infinite 0.2s; }
  .animate-sound-bar-4 { animation: sound-bar-4 0.55s ease-in-out infinite 0.15s; }
  .animate-sound-bar-5 { animation: sound-bar-5 0.65s ease-in-out infinite 0.25s; }
  .animate-sound-bar-6 { animation: sound-bar-6 0.6s ease-in-out infinite 0.3s; }

  /* Shimmer Effect */
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  .animate-shimmer { animation: shimmer 0.4s infinite; }

  /* Particle Animations */
  @keyframes float-particle {
    0%,100% { transform: translateY(0) translateX(0); opacity: 0; }
    50% { transform: translateY(-30px) translateX(10px); opacity: 1; }
  }
  @keyframes float-particle-delayed {
    0%,100% { transform: translateY(0) translateX(0); opacity: 0; }
    50% { transform: translateY(30px) translateX(-10px); opacity: 1; }
  }
  @keyframes float-particle-slower {
    0%,100% { transform: translateY(0) translateX(0); opacity: 0.2; }
    50% { transform: translateY(-15px) translateX(-15px); opacity: 0.4; }
  }

  .animate-float-particle { animation: float-particle 0.5s ease-in-out infinite; }
  .animate-float-particle-delayed { animation: float-particle-delayed 0.5s ease-in-out infinite; }
  .animate-float-particle-slower { animation: float-particle-slower 0.7s ease-in-out infinite; }

  /* Pulse Effects */
  @keyframes pulse-slow {
    0%,100% { opacity: 1; }
    50% { opacity: 0.6; }
  }
  @keyframes pulse-soft {
    0%,100% { opacity: 0.3; }
    50% { opacity: 0.5; }
  }
  .animate-pulse-slow { animation: pulse-slow 0.5s ease-in-out infinite; }
  .animate-pulse-soft { animation: pulse-soft 0.25s ease-in-out infinite; }

  /* ⭐ FIXED INFINITE SCROLL (supports unlimited cards) */
  @keyframes infinite-scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .cards-scroll-container {
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .track {
    display: flex;
    flex-wrap: nowrap;
    align-items: stretch;
    width: max-content;
    gap: 2rem;
    will-change: transform;
  }

  .track > * {
    flex-shrink: 0;
  }

  .animate-infinite-scroll {
    animation: infinite-scroll 45s linear infinite;
  }

  /* Pause on hover */
  .cards-scroll-container:hover .animate-infinite-scroll {
    animation-play-state: paused;
  }

  /* Card brings itself forward */
  .event-card:hover { z-index: 30; }
`}</style>
    </div>
  );
}