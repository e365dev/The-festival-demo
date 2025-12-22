import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(4);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: 'Alex Rivers',
      role: 'Lead DJ & Music Director',
      department: 'artist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'Spinning beats for 15+ years',
      social: {linkedin: '#' }
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'Creative Director',
      department: 'creative',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      bio: 'Visionary behind our aesthetics',
      social: {linkedin: '#' }
    },
    {
      id: 3,
      name: 'Marcus Johnson',
      role: 'Head of Production',
      department: 'production',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      bio: 'Making magic happen backstage',
      social: {linkedin: '#' }
    },
    {
      id: 4,
      name: 'Luna Martinez',
      role: 'Sound Engineer',
      department: 'sound',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      bio: 'Perfect acoustics, every time',
      social: {linkedin: '#' }
    },
    {
      id: 5,
      name: 'David Park',
      role: 'Tech Lead',
      department: 'tech',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      bio: 'Innovating festival technology',
      social: {linkedin: '#' }
    },
    {
      id: 6,
      name: 'Emma Wilson',
      role: 'Resident DJ',
      department: 'artist',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
      bio: 'Electronic music specialist',
      social: {linkedin: '#' }
    },
    {
      id: 7,
      name: 'James Cooper',
      role: 'Lighting Designer',
      department: 'creative',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
      bio: 'Creating visual symphonies',
      social: {linkedin: '#' }
    },
    {
      id: 8,
      name: 'Sophia Lee',
      role: 'Stage Manager',
      department: 'production',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
      bio: 'Orchestrating flawless shows',
      social: {linkedin: '#' }
    },
    {
      id: 9,
      name: 'Ryan Foster',
      role: 'Audio Technician',
      department: 'sound',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop',
      bio: 'Crystal clear sound quality',
      social: {linkedin: '#' }
    },
    {
      id: 10,
      name: 'Mia Rodriguez',
      role: 'Team Lead',
      department: 'creative',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
      bio: 'Digital art meets reality',
      social: {linkedin: '#' }
    },
    {
      id: 11,
      name: 'Tyler Brooks',
      role: 'Systems Engineer',
      department: 'tech',
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop',
      bio: 'Building seamless experiences',
      social: {linkedin: '#' }
    },
    {
      id: 12,
      name: 'Nina Patel',
      role: 'Event Producer',
      department: 'production',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop',
      bio: 'Bringing visions to life',
      social: {linkedin: '#' }
    }
  ];

  const sortedMembers = [...teamMembers].sort((a, b) => {
    const roleComparison = a.role.localeCompare(b.role);
    if (roleComparison === 0) {
      return a.name.localeCompare(b.name);
    }
    return roleComparison;
  });

  const totalSlides = Math.ceil(sortedMembers.length / itemsPerView);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const getCurrentSlideMembers = () => {
    const start = currentIndex * itemsPerView;
    return sortedMembers.slice(start, start + itemsPerView);
  };

  return (
    <section className="relative bg-black text-white py-16 px-4 md:px-6 overflow-hidden z-0">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-pink-500/30 rounded-full animate-float-particle"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-cyan-400/20 rounded-full animate-float-particle-delayed"></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-purple-500/25 rounded-full animate-float-particle-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block relative">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-cyan-500/30 animate-pulse-slow"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 animate-fade-in relative px-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 animate-gradient-x">
                Our Team
              </span>
              <span className="text-cyan-400 animate-pulse-slow">.</span>
            </h2>
          </div>

          <div className="flex justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></div>
            <div className="w-32 md:w-40 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/50 animate-shimmer"></div>
            </div>
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>

          <p className="text-gray-300 text-base md:text-lg font-light tracking-wide max-w-2xl mx-auto px-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-300">
              Meet the passionate individuals who make the magic happen
            </span>
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:scale-110 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 md:right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:scale-110 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" />
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden px-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {getCurrentSlideMembers().map((member, index) => (
                <div
                  key={member.id}
                  className="group relative"
                  style={{
                    animation: `slideIn 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 group-hover:blur-2xl"></div>

                  {/* Card */}
                  <div className="relative bg-gradient-to-b from-slate-900/80 to-slate-950/90 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden group-hover:border-white/30 transition-all duration-500 h-full">
                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 animate-shine"></div>
                    </div>

                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10"></div>
                      
                      {/* Profile Image */}
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Hover overlay with gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-pink-500/40 via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                      {/* Department Badge */}
                      <div className="absolute top-4 right-4 z-20">
                        <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-cyan-400/30 group-hover:border-cyan-400 transition-colors duration-300">
                          <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                            {member.department}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Info Section */}
                    <div className="relative p-5 space-y-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-cyan-400 transition-all duration-300">
                        {member.name}
                      </h3>
                      
                      <p className="text-sm font-semibold text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                        {member.role}
                      </p>

                      <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                        {member.bio}
                      </p>

                      {/* Social Links */}
                      <div className="flex gap-3 pt-3">
                        <a 
                          href={member.social.linkedin}
                          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 hover:text-white hover:border-transparent transition-all duration-300 group-hover:scale-110"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-8">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? 'w-8 h-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500'
                  : 'w-3 h-3 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        @keyframes shine {
          from { transform: translateX(-100%) skewX(-12deg); }
          to { transform: translateX(200%) skewX(-12deg); }
        }

        .animate-shine {
          animation: shine 3s infinite;
        }

        @keyframes float-particle {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { transform: translateY(-30px) translateX(10px); opacity: 1; }
        }

        .animate-float-particle {
          animation: float-particle 3s ease-in-out infinite;
        }

        @keyframes float-particle-delayed {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { transform: translateY(30px) translateX(-10px); opacity: 1; }
        }

        .animate-float-particle-delayed {
          animation: float-particle-delayed 4s ease-in-out infinite;
        }

        @keyframes float-particle-slow {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
          50% { transform: translateY(-20px) translateX(-15px); opacity: 0.4; }
        }

        .animate-float-particle-slow {
          animation: float-particle-slow 5s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
}