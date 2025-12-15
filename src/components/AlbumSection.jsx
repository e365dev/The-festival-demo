import React, { useState, useEffect, useRef } from 'react';

export default function AlbumSection() {
  const albums = [
    {
      id: 1,
      title: 'QUARANTIÈME: LIVE À PARIS',
      subtitle: '(DELUXE EDITION)',
      image: 'image/vinyl.png',
      color: 'from-pink-500/20 via-purple-500/20 to-cyan-500/20',
      accent: 'pink',
      textColor: 'text-pink-400',
      textHoverColor: 'group-hover:text-pink-300',
      bgGradient: 'from-pink-500 via-purple-500 to-cyan-500',
      shadowColor: 'shadow-pink-500/50'
    },
    {
      id: 2,
      title: 'QUARANTIÈME: LIVE À PARIS',
      subtitle: '(SPECIAL EDITION)',
      image: 'image/vinyl.png',
      color: 'from-pink-500/20 via-purple-500/20 to-cyan-500/20',
      accent: 'purple',
      textColor: 'text-purple-400',
      textHoverColor: 'group-hover:text-purple-300',
      bgGradient: 'from-pink-500 via-purple-500 to-cyan-500',
      shadowColor: 'shadow-purple-500/50'
    },
    {
      id: 3,
      title: 'QUARANTIÈME: LIVE À PARIS',
      subtitle: '(ORANGE 4LP VINYL)',
      image: 'image/vinyl.png',
      color: 'from-pink-500/20 via-purple-500/20 to-cyan-500/20',
      accent: 'cyan',
      textColor: 'text-cyan-400',
      textHoverColor: 'group-hover:text-cyan-300',
      bgGradient: 'from-pink-500 via-purple-500 to-cyan-500',
      shadowColor: 'shadow-cyan-500/50'
    },
    {
      id: 4,
      title: 'QUARANTIÈME: LIVE À PARIS',
      subtitle: '(DELUXE EDITION)',
      image: 'image/vinyl.png',
      color: 'from-pink-500/20 via-purple-500/20 to-cyan-500/20',
      accent: 'pink',
      textColor: 'text-pink-400',
      textHoverColor: 'group-hover:text-pink-300',
      bgGradient: 'from-pink-500 via-purple-500 to-cyan-500',
      shadowColor: 'shadow-pink-500/50'
    },
    {
      id: 5,
      title: 'QUARANTIÈME: LIVE À PARIS',
      subtitle: '(SPECIAL EDITION)',
      image: 'image/vinyl.png',
      color: 'from-pink-500/20 via-purple-500/20 to-cyan-500/20',
      accent: 'purple',
      textColor: 'text-purple-400',
      textHoverColor: 'group-hover:text-purple-300',
      bgGradient: 'from-pink-500 via-purple-500 to-cyan-500',
      shadowColor: 'shadow-purple-500/50'
    }
  ];

  const [cardTabs, setCardTabs] = useState(
    albums.reduce((acc, album) => ({ ...acc, [album.id]: 'albums' }), {})
  );
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardTransforms, setCardTransforms] = useState({});
  const cardRefs = useRef({});

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % albums.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [albums.length]);

  const handleTabChange = (albumId, tab) => {
    setCardTabs(prev => ({ ...prev, [albumId]: tab }));
  };

  // 3D Tilt effect on mouse move
  const handleMouseMove = (e, albumId) => {
    const card = cardRefs.current[albumId];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    setCardTransforms(prev => ({
      ...prev,
      [albumId]: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
    }));
  };

  const handleMouseLeave = (albumId) => {
    setCardTransforms(prev => ({
      ...prev,
      [albumId]: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    }));
  };

  // Get visible cards based on current index
  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(albums[(currentIndex + i) % albums.length]);
    }
    return visible;
  };

  const visibleCards = getVisibleCards();

  return (
    <section className="relative min-h-screen py-20 px-4 md:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-cyan-500/30 animate-pulse-slow"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 animate-fade-in">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 animate-gradient-x">
                Album
              </span>
              <span className="text-cyan-400 animate-pulse-slow">.</span>
            </h2>
          </div>

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

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mb-8">
          {albums.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500' 
                  : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Cards Grid - All same size */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleCards.map((album, index) => (
              <div
                key={`${album.id}-${currentIndex}-${index}`}
                ref={el => cardRefs.current[album.id] = el}
                className="group relative"
                style={{
                  animation: `slideIn 0.6s ease-out ${index * 0.1}s forwards`,
                  opacity: 0,
                  transform: cardTransforms[album.id] || 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                  transition: 'transform 0.1s ease-out'
                }}
                onMouseMove={(e) => handleMouseMove(e, album.id)}
                onMouseLeave={() => handleMouseLeave(album.id)}
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${album.color} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 group-hover:blur-2xl`}></div>

                <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden group-hover:border-white/30 transition-all duration-500 h-full">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 animate-shine"></div>
                  </div>

                  {/* CD Section */}
                  <div className="relative h-80 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gray-700/50"></div>
                    <div className={`absolute inset-20 rounded-full bg-gradient-to-r ${album.color} blur-3xl opacity-50 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110`}></div>

                    {/* Rotating CD */}
                    <div className="rotating-cd relative z-10 w-64 h-64">
                      <img src={album.image} alt={album.title} className="w-full h-full object-contain drop-shadow-2xl" />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500 rounded-full mix-blend-overlay"></div>
                    </div>

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-float-particle"></div>
                      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-float-particle" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-float-particle" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="relative p-6 border-t border-white/5">
                    <h3 className="text-white text-lg font-bold mb-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300 line-clamp-2">
                      {album.title}
                    </h3>
                    <p className={`text-sm font-medium mb-4 ${album.textColor} ${album.textHoverColor} transition-colors`}>
                      {album.subtitle}
                    </p>

                    <div className="flex gap-3">
                      <button
                        onClick={() => handleTabChange(album.id, 'photos')}
                        className={`flex-1 relative px-3 py-2.5 text-xs font-bold uppercase tracking-widest overflow-hidden rounded-xl transition-all duration-300 group/btn ${
                          cardTabs[album.id] === 'photos'
                            ? `bg-gradient-to-r ${album.bgGradient} text-white shadow-lg ${album.shadowColor}`
                            : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <span className="relative z-10">Photos</span>
                        {cardTabs[album.id] === 'photos' && (
                          <div className="absolute inset-0 bg-white/20 animate-pulse-soft"></div>
                        )}
                      </button>
                      <button
                        onClick={() => handleTabChange(album.id, 'albums')}
                        className={`flex-1 relative px-3 py-2.5 text-xs font-bold uppercase tracking-widest overflow-hidden rounded-xl transition-all duration-300 group/btn ${
                          cardTabs[album.id] === 'albums'
                            ? `bg-gradient-to-r ${album.bgGradient} text-white shadow-lg ${album.shadowColor}`
                            : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <span className="relative z-10">Albums</span>
                        {cardTabs[album.id] === 'albums' && (
                          <div className="absolute inset-0 bg-white/20 animate-pulse-soft"></div>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from { 
            opacity: 0; 
            transform: translateX(100px) scale(0.9);
          }
          to { 
            opacity: 1; 
            transform: translateX(0) scale(1);
          }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .rotating-cd {
          animation: rotate 3.5s linear infinite;
        }

        .group:hover .rotating-cd {
          animation-duration: 3s;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-shimmer {
          animation: shimmer 0.8s infinite;
        }

        @keyframes shine {
          from { transform: translateX(-100%) skewX(-12deg); }
          to { transform: translateX(200%) skewX(-12deg); }
        }

        .animate-shine {
          animation: shine 0.8s infinite;
        }

        @keyframes float-particle {
          0%,100% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { transform: translateY(-30px) translateX(10px); opacity: 1; }
        }

        .animate-float-particle {
          animation: float-particle 1s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        .animate-pulse-slow {
          animation: pulse-slow 1s ease-in-out infinite;
        }

        @keyframes pulse-soft {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }

        .animate-pulse-soft {
          animation: pulse-soft 0.5s ease-in-out infinite;
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </section>
  );
}









