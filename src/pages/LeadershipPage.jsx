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
      { threshold: 0.2, rootMargin: '200px 0px 200px 0px', }
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
        {/* Animated Background - PURPLE GRADIENT */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              background: 'radial-gradient(circle at 50% 50%, #a855f7 0%, #9333ea 25%, #000 70%)',
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

      {/* Section 1 - Moments */}
      <section 
        id="section1"
        className="relative py-12 px-4"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div 
              className={`relative transform transition-all duration-1000 ${
                isVisible.section1 ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden border-4 border-purple-500 shadow-2xl shadow-purple-500/50">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=450&fit=crop" 
                  alt="Silhouettes in warm concert glow"
                  className="w-full h-full object-cover aspect-video"
                />
              </div>
            </div>

            {/* Text */}
            <div 
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible.section1 ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
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
              
              <div className="h-1 w-24 mb-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
              
              <p className="text-lg text-gray-300 leading-relaxed">
                For 19 years, our mission has stayed the same—creating unforgettable experiences 
                that resonate through time. Every moment is crafted with passion, every memory 
                built with purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Fans */}
      <section 
        id="section2"
        className="relative py-12 px-4"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text - SLIDES IN FROM LEFT */}
            <div 
              className={`transform transition-all duration-1000 ${
                isVisible.section2 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  WE LIVE FOR THE FANS
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  WHO BELIEVE
                </span>
              </h2>
              
              <div className="h-1 w-24 mb-4 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500" />
              
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                THE Festival exists because of you. We don't follow the market's "push" formula. 
                We follow your voice. Your energy. Your wishlist.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Every lineup we pull is shaped by your messages, your demands, your dreams. 
                This festival is built by fans—for the fans—and your suggestions continue to be our north star.
              </p>
            </div>

            {/* Image - SLIDES IN FROM RIGHT */}
            <div 
              className={`relative transform transition-all duration-1000 ${
                isVisible.section2 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden border-4 border-cyan-500 shadow-2xl shadow-cyan-500/50">
                <div className="absolute inset-0 bg-gradient-to-tl from-cyan-600/20 to-transparent z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=450&fit=crop" 
                  alt="Crowd immersed in golden stage lights"
                  className="w-full h-full object-cover aspect-video"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Energy */}
      <section 
        id="section3"
        className="relative py-12 px-4"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div 
              className={`relative transform transition-all duration-1000 ${
                isVisible.section3 ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden border-4 border-pink-500 shadow-2xl shadow-pink-500/50">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-transparent z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=450&fit=crop" 
                  alt="Electric atmosphere on stage"
                  className="w-full h-full object-cover aspect-video"
                />
              </div>
            </div>

            {/* Text */}
            <div 
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible.section3 ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  WE LIVE FOR
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  THE ENERGY
                </span>
                <br />
                <span className="text-white">THAT UNITES US</span>
              </h2>
              
              <div className="h-1 w-24 mb-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />
              
              <p className="text-lg text-gray-300 leading-relaxed">
                When thousands of voices merge into one, when strangers become friends, when the music 
                moves through every soul—that's the magic we create. This is more than a festival; 
                it's a celebration of connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Artists */}
      <section 
        id="section4"
        className="relative py-12 px-4"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text - SLIDES IN FROM LEFT */}
            <div 
              className={`transform transition-all duration-1000 ${
                isVisible.section4 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                  WE LIVE FOR
                </span>
                <br />
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  THE ARTISTS
                </span>
                <br />
                <span className="text-white">WHO INSPIRE</span>
              </h2>
              
              <div className="h-1 w-24 mb-4 rounded-full bg-gradient-to-r from-orange-500 to-pink-500" />
              
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                From legendary headliners to breakthrough talents, we bring you the artists who 
                define generations. Each performance is a story, each set is history in the making.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                150+ artists have graced our stages, and each one has left an indelible mark on 
                our collective memory.
              </p>
            </div>

            {/* Image - SLIDES IN FROM RIGHT */}
            <div 
              className={`relative transform transition-all duration-1000 ${
                isVisible.section4 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden border-4 border-orange-500 shadow-2xl shadow-orange-500/50">
                <div className="absolute inset-0 bg-gradient-to-tl from-orange-600/20 to-transparent z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=450&fit=crop" 
                  alt="Artists performing under the stars"
                  className="w-full h-full object-cover aspect-video"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Legacy */}
      <section 
  id="section5"
  className="relative py-12 px-4"
>
  <div className="max-w-7xl mx-auto w-full">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      
      {/* Image */}
      <div 
        className={`relative transform transition-all duration-1000 ${
          isVisible.section5 ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
        }`}
      >
        <div className="relative rounded-2xl overflow-hidden border-4 border-blue-500 shadow-2xl shadow-blue-500/50">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=450&fit=crop"
            alt="Artists performing under the stars"
            className="w-full h-full object-cover aspect-video"
          />
        </div>
      </div>

      {/* Text */}
      <div 
        className={`transform transition-all duration-1000 delay-300 ${
          isVisible.section5 ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            WE LIVE FOR
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            THE LEGACY
          </span>
          <br />
          <span className="text-white">WE BUILD TOGETHER</span>
        </h2>
        
        <div className="h-1 w-24 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
        
        <p className="text-lg text-gray-300 leading-relaxed">
          19 years of pushing boundaries. 19 years of breaking barriers. 19 years of creating 
          a movement that's bigger than music—it's a way of life. With Bengaluru next and 
          pan-India on the horizon, our legacy continues to grow.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
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