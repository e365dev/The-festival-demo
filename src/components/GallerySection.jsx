import React, { useState, useEffect } from 'react';

export default function GallerySection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeImages, setActiveImages] = useState({});

  // Gallery data with multiple images per card
  const galleryCards = [
    {
      id: 1,
      images: [
        'image/gallery1.jpeg',
        'image/gallery2.jpeg',
        'image/gallery3.jpeg',
      ],
      title: 'Summer Vibes 2024'
    },
    {
      id: 2,
      images: [
        'image/gallery4.jpeg',
        'image/gallery5.jpeg',
        'image/gallery6.jpeg',
      ],
      title: 'Night Life Experience'
    },
    {
      id: 3,
      images: [
        'image/gallery7.jpeg',
        'image/gallery8.jpeg',
        'image/gallery9.jpeg',
      ],
      title: 'VIP Lounge'
    },
    {
      id: 4,
      images: [
        'image/gallery10.jpeg',
        'image/gallery11.jpeg',
        'image/gallery12.jpeg',
      ],
      title: 'Dance Floor Energy'
    },
    {
      id: 5,
      images: [
        'image/gallery1.jpeg',
        'image/gallery12.jpeg',
        'image/gallery5.jpeg',
      ],
      title: 'Special Events'
    },
    {
      id: 6,
      images: [
        'image/gallery7.jpeg',
        'image/gallery3.jpeg',
        'image/gallery9.jpeg',
      ],
      title: 'Exclusive Moments'
    }
  ];

  // Initialize active image index for each card
  useEffect(() => {
    const initial = {};
    galleryCards.forEach(card => {
      initial[card.id] = 0;
    });
    setActiveImages(initial);
  }, []);

  // Image slideshow effect when hovering on card
  useEffect(() => {
    if (hoveredCard !== null) {
      const interval = setInterval(() => {
        setActiveImages(prev => {
          const card = galleryCards.find(c => c.id === hoveredCard);
          const newIndex = (prev[hoveredCard] + 1) % card.images.length;
          return { ...prev, [hoveredCard]: newIndex };
        });
      }, 1500); // Change image every 1.5 seconds

      return () => clearInterval(interval);
    }
  }, [hoveredCard]);

  return (
    <section className="relative bg-gradient-to-b from-black via-zinc-950 to-black py-20 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-purple-700/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-700/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-cyan-500/30 animate-pulse-slow"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 animate-fade-in">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 animate-gradient-x">
                Gallery Section
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

        {/* Vertical Scrolling Gallery */}
        <div className="relative h-[600px] overflow-hidden rounded-2xl">
          {/* Scrolling Container 1 (Top to Bottom) */}
          <div className={`scroll-container-down ${hoveredCard !== null ? 'paused' : ''}`}>
            <div className="flex flex-col gap-6 pb-6">
              {[...galleryCards, ...galleryCards].map((card, index) => (
                <div
                  key={`down-${card.id}-${index}`}
                  className="gallery-card group"
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative h-80 overflow-hidden rounded-t-xl">
                    {card.images.map((image, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={image}
                        alt={`${card.title} - ${imgIndex + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                          activeImages[card.id] === imgIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-xl font-bold drop-shadow-lg">{card.title}</h3>
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-b from-zinc-900/90 to-black/90 backdrop-blur-sm rounded-b-xl border-t border-white/10">
                    <button className="w-full group/btn relative px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:from-pink-700 hover:to-purple-700 hover:shadow-lg hover:shadow-pink-600/50 overflow-hidden rounded-lg">
                      <span className="relative z-10">Show More</span>
                      <span className="absolute inset-0 bg-white/20 translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300"></span>
                    </button>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-600/20 via-purple-600/10 to-transparent rounded-xl"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scrolling Container 2 (Bottom to Top) */}
          <div className={`scroll-container-up ${hoveredCard !== null ? 'paused' : ''}`}>
            <div className="flex flex-col gap-6 pb-6">
              {[...galleryCards.slice().reverse(), ...galleryCards.slice().reverse()].map((card, index) => (
                <div
                  key={`up-${card.id}-${index}`}
                  className="gallery-card group"
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative h-80 overflow-hidden rounded-t-xl">
                    {card.images.map((image, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={image}
                        alt={`${card.title} - ${imgIndex + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                          activeImages[card.id] === imgIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-xl font-bold drop-shadow-lg">{card.title}</h3>
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-b from-zinc-900/90 to-black/90 backdrop-blur-sm rounded-b-xl border-t border-white/10">
                    <button className="w-full group/btn relative px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:from-pink-700 hover:to-purple-700 hover:shadow-lg hover:shadow-pink-600/50 overflow-hidden rounded-lg">
                      <span className="relative z-10">Show More</span>
                      <span className="absolute inset-0 bg-white/20 translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300"></span>
                    </button>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-600/20 via-purple-600/10 to-transparent rounded-xl"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Fade Masks */}
          {/* Top mask removed to avoid covering navbar */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-10"></div>
        </div>

        <div className="flex justify-center mt-16 z-0 relative">
          <button className="relative bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold text-lg px-10 py-4 rounded-md 
            hover:bg-cyan-400 hover:text-black transition-all duration-300 
            shadow-lg shadow-cyan-400/0 hover:shadow-cyan-400/40 overflow-hidden group">
            <span className="relative z-10 tracking-wide">FOR MORE ALBUM</span>
            <div className="absolute inset-0 bg-cyan-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[900ms]"></div>
          </button>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        @keyframes scroll-down {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scroll-up {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .scroll-container-down {
          animation: scroll-down 40s linear infinite;
          position: absolute;
          left: 0;
          width: 48%;
          top: 0;
        }
        .scroll-container-up {
          animation: scroll-up 40s linear infinite;
          position: absolute;
          right: 0;
          width: 48%;
          top: 0;
        }
        .scroll-container-down.paused,
        .scroll-container-up.paused {
          animation-play-state: paused;
        }
        .gallery-card {
          position: relative;
          background: linear-gradient(to bottom, rgba(24, 24, 27, 0.6), rgba(0, 0, 0, 0.6));
          backdrop-filter: blur(8px);
          border-radius: 0.75rem;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .gallery-card:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 40px rgba(236, 72, 153, 0.3);
          border-color: rgba(236, 72, 153, 0.3);
        }
        @media (max-width: 768px) {
          .scroll-container-down,
          .scroll-container-up {
            width: 100%;
            position: relative;
            animation: scroll-down 30s linear infinite;
          }
          .scroll-container-up { display: none; }
        }
      `}</style>
    </section>
  );
}
