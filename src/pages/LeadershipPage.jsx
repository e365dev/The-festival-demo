import { useState, useEffect } from 'react';

export default function LeadershipPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('[id^="section"]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              background: 'radial-gradient(circle at 50% 50%, #ff6b35 0%, #f7931e 25%, #000 70%)',
              transform: `scale(${1 + scrollY * 0.0005})`,
            }}
          />
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <h1 
            className="text-6xl md:text-8xl font-bold mb-8 tracking-wider"
            style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 50%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              opacity: Math.max(0, 1 - scrollY * 0.003),
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          >
            WHAT WE LIVE FOR
          </h1>
          
          <div className="h-1 w-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400" />
          
          <div 
            className="mt-12 opacity-50 animate-bounce cursor-pointer"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-20px) translateX(10px); }
            50% { transform: translateY(-40px) translateX(-10px); }
            75% { transform: translateY(-20px) translateX(10px); }
          }
        `}</style>
      </section>

      {/* Moments Section */}
      <section 
        id="section1"
        className="relative min-h-screen flex items-center py-20 px-4"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div 
              className={`relative transform transition-all duration-1000 ${
                isVisible.section1 ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden border-4 border-purple-500 shadow-2xl shadow-purple-500/50">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent z-10" />
                <div className="aspect-video bg-gradient-to-br from-orange-600 to-orange-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                      <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-white/80">Silhouettes in warm concert glow</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div 
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible.section1 ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
              }`}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  WE LIVE FOR
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  MOMENTS THAT
                </span>
                <br />
                <span className="text-white">BECOME MEMORIES</span>
              </h2>
              
              <div className="h-1 w-24 mb-6 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
              
              <p className="text-xl text-gray-300 leading-relaxed">
                For 19 years, our mission has stayed the same—creating unforgettable experiences 
                that resonate through time. Every moment is crafted with passion, every memory 
                built with purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fans Section */}
      <section 
        id="section2"
        className="relative min-h-screen flex items-center py-20 px-4"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text (Left side now) */}
            <div 
              className={`transform transition-all duration-1000 ${
                isVisible.section2 ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
              }`}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  WE LIVE FOR THE FANS
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  WHO BELIEVE
                </span>
              </h2>
              
              <div className="h-1 w-24 mb-6 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500" />
              
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                THE Festival exists because of you. We don't follow the market's "push" formula. 
                We follow your voice. Your energy. Your wishlist.
              </p>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Every lineup we pull is shaped by your messages, your demands, your dreams. 
                This festival is built by fans—for the fans—and your suggestions continue to be our north star.
              </p>
            </div>

            {/* Image (Right side now) */}
            <div 
              className={`relative transform transition-all duration-1000 delay-300 ${
                isVisible.section2 ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden border-4 border-cyan-500 shadow-2xl shadow-cyan-500/50">
                <div className="absolute inset-0 bg-gradient-to-tl from-cyan-600/20 to-transparent z-10" />
                <div className="aspect-video bg-gradient-to-br from-amber-600 via-orange-700 to-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                      <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                    </div>
                    <p className="text-white/80">Crowd immersed in golden stage lights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        id="section3"
        className="relative py-32 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div 
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 transform transition-all duration-1000 ${
              isVisible.section3 ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
          >
            {[
              { number: '19', label: 'Years Strong' },
              { number: '150+', label: 'Artists' },
              { number: '100K+', label: 'Fans' },
              { number: '∞', label: 'Memories' },
            ].map((stat, i) => (
              <div 
                key={i}
                className="text-center p-8 rounded-xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30 backdrop-blur-sm hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            The Next Chapter Begins
          </h3>
          <p className="text-xl text-gray-300 mb-12">
            With Bengaluru in our path and pan-India ahead, join us as we continue creating 
            moments that become memories.
          </p>
          <button className="px-12 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/50">
            Be Part of the Journey
          </button>
        </div>
      </section>
    </div>
  );
}