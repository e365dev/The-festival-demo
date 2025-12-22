import React, { useState, useEffect, useRef } from 'react';
import { Facebook, Instagram, Youtube, Menu, X, Search } from 'lucide-react';
import { useNavigate } from "react-router-dom";

import AboutAndEvents from '../components/AboutAndEvents';
import SponsorsSection from '../components/SponsorsSection';
import AlbumSection from '../components/AlbumSection';
import GallerySection from '../components/GallerySection';
import TeamSection from '../components/TeamSection';
import Footer from '../components/Footer';

export default function LavoNightclub() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);


  const navigate = useNavigate();

  /* ===== SCROLL TO SECTION LOGIC ===== */
  const aboutRef = useRef(null);
  const eventsRef = useRef(null);
  const albumRef = useRef(null);
  const galleryRef = useRef(null);
  const teamRef = useRef(null);
  const associateRef = useRef(null);

  const scrollTo = (ref) => {
    setMobileMenuOpen(false);
    ref?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  /* ================================== */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* FIRST SECTION - HERO WITH VIDEO BACKGROUND */}
      <div className="relative min-h-screen w-full overflow-hidden">
        
        {/* Background Video */}
        <section className="absolute inset-0 h-screen overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src="video/video.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </section>

        {/* Enhanced Gradient Overlay - ROYAL PURPLE */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1420]/95 via-[#4b0082]/85 to-[#6a0dad]/75"></div>

        {/* Additional atmospheric effects - ROYAL PURPLE */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-700/25 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-violet-600/15 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        {/* CRITICAL: Bottom gradient fade to black for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-black/60 to-black z-[5] pointer-events-none"></div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* NAVBAR */}
          <header className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-700 ${isScrolled ? 'py-2 md:py-3 bg-slate-900/95 backdrop-blur-lg shadow-md' : 'py-6 md:py-8 bg-transparent'}`}>
            <div className={`flex-shrink-0 flex flex-col items-start transition-all duration-700 ${isScrolled ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full pointer-events-none'}`}>
              <img 
                src="image/FESTIVAL.png" 
                alt="Lavo Nightclub Logo" 
                className="h-16 md:h-20 w-auto object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* DESKTOP NAV - WITH SCROLL TO LOGIC */}
            <nav className="hidden lg:block animate-fade-in">
              <ul className="flex gap-7 xl:gap-9 text-white text-[15px] font-normal relative">
                <li className="animate-fade-in-stagger" style={{ animationDelay: '0s' }}>
                  <button onClick={() => scrollTo(aboutRef)} className="hover:text-purple-400 transition-all duration-300 relative group hover:-translate-y-1 inline-block">
                    About
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
                  </button>
                </li>
                <li className="animate-fade-in-stagger" style={{ animationDelay: '0.1s' }}>
                  <button onClick={() => scrollTo(eventsRef)} className="hover:text-purple-400 transition-all duration-300 relative group hover:-translate-y-1 inline-block">
                    Events
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
                  </button>
                </li>
                <li className="animate-fade-in-stagger" style={{ animationDelay: '0.2s' }}>
                  <button onClick={() => scrollTo(albumRef)} className="hover:text-purple-400 transition-all duration-300 relative group hover:-translate-y-1 inline-block">
                    Album
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
                  </button>
                </li>
                <li className="animate-fade-in-stagger" style={{ animationDelay: '0.3s' }}>
                  <button onClick={() => scrollTo(galleryRef)} className="hover:text-purple-400 transition-all duration-300 relative group hover:-translate-y-1 inline-block">
                    Gallery
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
                  </button>
                </li>
                <li className="animate-fade-in-stagger" style={{ animationDelay: '0.4s' }}>
                  <button onClick={() => scrollTo(teamRef)} className="hover:text-purple-400 transition-all duration-300 relative group hover:-translate-y-1 inline-block">
                    Team
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
                  </button>
                </li>
                <li className="animate-fade-in-stagger" style={{ animationDelay: '0.5s' }}>
                  <button onClick={() => scrollTo(associateRef)} className="hover:text-purple-400 transition-all duration-300 relative group hover:-translate-y-1 inline-block">
                    Associate
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
                  </button>
                </li>
                <li
  className="animate-fade-in-stagger relative"
  style={{ animationDelay: '0.6s' }}
>
  <button
    type="button"
    onClick={() => setResourcesOpen(prev => !prev)}
    className="hover:text-purple-400 transition-all duration-300 relative group hover:-translate-y-1 inline-block cursor-pointer"
  >
    Resources
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
  </button>

  {resourcesOpen && (
    <div className="absolute top-full left-0 mt-4 w-48 bg-slate-900/95 backdrop-blur-lg shadow-2xl rounded-sm z-50">
      <ul className="flex flex-col py-2 text-sm text-white">
        <li>
          <button
            className="w-full text-left px-5 py-3 hover:bg-purple-600 transition-all duration-200"
            onClick={() => {
              setResourcesOpen(false);
              navigate("/news");
            }}
          >
            News
          </button>
        </li>

        <li>
          <button
            className="w-full text-left px-5 py-3 hover:bg-purple-600 transition-all duration-200"
            onClick={() => {
              setResourcesOpen(false);
              navigate("/investor");
            }}
          >
            Investor
          </button>
        </li>

        <li>
          <button
            className="w-full text-left px-5 py-3 hover:bg-purple-600 transition-all duration-200"
            onClick={() => {
              setResourcesOpen(false);
              navigate("/leadership");
            }}
          >
            Leadership
          </button>
        </li>

        <li>
          <button
            className="w-full text-left px-5 py-3 hover:bg-purple-600 transition-all duration-200"
            onClick={() => {
              setResourcesOpen(false);
              navigate("/contact");
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </div>
  )}
</li>

              </ul>
            </nav>

            <div className="hidden md:flex items-center gap-3 animate-fade-in-right relative">
              {/* Search Bar Slide-in */}
              <div className={`absolute right-full mr-3 transition-all duration-300 ${searchOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-4 py-2.5 w-64 bg-white/95 text-slate-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-lg"
                  autoFocus={searchOpen}
                />
              </div>

              {/* Search Icon */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search"
                className="bg-white/95 text-slate-900 p-2.5 rounded-sm hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-lg animate-bounce-subtle"
              >
                <Search size={17} strokeWidth={2} />
              </button>

              {[
                { icon: Facebook, href: 'https://www.facebook.com/thefestivalindia/', label: 'Facebook' },
                { icon: Instagram, href: 'https://www.instagram.com/thefestival.in/?hl=en', label: 'Instagram' },
                { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/95 text-slate-900 p-2.5 rounded-sm hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-lg animate-bounce-subtle"
                >
                  <Icon size={17} strokeWidth={2} />
                </a>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </header>

          {/* MOBILE MENU - WITH SCROLL TO LOGIC */}
          {mobileMenuOpen && (
            <div className="lg:hidden fixed top-24 left-0 right-0 bg-slate-900/98 backdrop-blur-lg z-40 shadow-2xl animate-slide-down-mobile max-h-[calc(100vh-6rem)] overflow-y-auto">
              <nav className="px-6 py-8">
                <ul className="flex flex-col gap-5 text-white text-lg">
                  <li className="animate-fade-in-stagger" style={{ animationDelay: '0s' }}>
                    <button
                      onClick={() => scrollTo(aboutRef)}
                      className="block hover:text-purple-400 transition-all duration-300 hover:translate-x-2 transform"
                    >
                      About
                    </button>
                  </li>
                  <li className="animate-fade-in-stagger" style={{ animationDelay: '0.05s' }}>
                    <button
                      onClick={() => scrollTo(eventsRef)}
                      className="block hover:text-purple-400 transition-all duration-300 hover:translate-x-2 transform"
                    >
                      Events
                    </button>
                  </li>
                  <li className="animate-fade-in-stagger" style={{ animationDelay: '0.1s' }}>
                    <button
                      onClick={() => scrollTo(albumRef)}
                      className="block hover:text-purple-400 transition-all duration-300 hover:translate-x-2 transform"
                    >
                      Album
                    </button>
                  </li>
                  <li className="animate-fade-in-stagger" style={{ animationDelay: '0.15s' }}>
                    <button
                      onClick={() => scrollTo(galleryRef)}
                      className="block hover:text-purple-400 transition-all duration-300 hover:translate-x-2 transform"
                    >
                      Gallery
                    </button>
                  </li>
                  <li className="animate-fade-in-stagger" style={{ animationDelay: '0.2s' }}>
                    <button
                      onClick={() => scrollTo(teamRef)}
                      className="block hover:text-purple-400 transition-all duration-300 hover:translate-x-2 transform"
                    >
                      Team
                    </button>
                  </li>
                  <li className="animate-fade-in-stagger" style={{ animationDelay: '0.25s' }}>
                    <button
                      onClick={() => scrollTo(associateRef)}
                      className="block hover:text-purple-400 transition-all duration-300 hover:translate-x-2 transform"
                    >
                      Associate
                    </button>
                  </li>
                </ul>
                
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/20">
                  <button
                    onClick={() => setSearchOpen(!searchOpen)}
                    aria-label="Search"
                    className="bg-white text-slate-900 p-3 rounded-sm hover:bg-purple-600 hover:text-white transition-all duration-300"
                  >
                    <Search size={20} strokeWidth={2} />
                  </button>
                  
                  {[
                    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
                    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-slate-900 p-3 rounded-sm hover:bg-purple-600 hover:text-white transition-all duration-300"
                    >
                      <Icon size={20} strokeWidth={2} />
                    </a>
                  ))}
                </div>

                {/* Mobile Search Bar */}
                {searchOpen && (
                  <div className="mt-6 animate-slide-down">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full px-4 py-3 bg-white/95 text-slate-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                      autoFocus
                    />
                  </div>
                )}
              </nav>
            </div>
          )}

          <div className="flex-1 flex flex-col items-center justify-center text-center text-white px-4 py-12 pt-32 pb-40">
  <div
    className={`transition-all duration-700 ${
      isScrolled
        ? 'opacity-0 scale-75 -translate-y-20'
        : 'opacity-100 scale-100 translate-y-0'
    }`}
  >
    <img
      src="image/FESTIVAL.png"
      alt="Lavo Nightclub Logo"
      className="h-60 md:h-72 lg:h-88 w-auto object-contain mx-auto"
    />
  </div>
</div>

        </div>
        
        {/* Custom animations */}
        <style jsx>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fade-in 1s ease-out; }

          @keyframes fade-in-scale {
            from { opacity: 0; transform: scale(0.9) translateY(30px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }
          .animate-fade-in-scale { animation: fade-in-scale 1.2s ease-out; }

          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }

          @keyframes fade-in-left {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-fade-in-left { animation: fade-in-left 0.8s ease-out; }

          @keyframes fade-in-right {
            from { opacity: 0; transform: translateX(30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-fade-in-right { animation: fade-in-right 0.8s ease-out; }

          @keyframes slide-down {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slide-down { animation: slide-down 0.6s ease-out; }

          @keyframes slide-down-mobile {
            from { opacity: 0; transform: translateY(-100%); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slide-down-mobile { animation: slide-down-mobile 0.4s ease-out; }

          @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-20px) translateX(10px); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }

          @keyframes float-delayed {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(20px) translateX(-10px); }
          }
          .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }

          @keyframes bounce-subtle {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-3px); }
          }
          .animate-bounce-subtle { animation: bounce-subtle 2s ease-in-out infinite; }

          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 4px 20px rgba(106, 13, 173, 0.5); }
            50% { box-shadow: 0 4px 40px rgba(106, 13, 173, 0.8), 0 0 60px rgba(138, 43, 226, 0.4); }
          }

          @keyframes fade-in-stagger {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-stagger { animation: fade-in-stagger 0.5s ease-out forwards; opacity: 0; }

          @keyframes button-appear {
            0% { opacity: 0; transform: translateY(20px) scale(0.95); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }
          .animate-button-appear {
            animation: button-appear 0.6s ease-out 0.5s forwards, pulse-glow 2s ease-in-out 1.2s infinite;
            opacity: 0;
          }
        `}</style>
      </div>

      {/* SECTIONS WITH REFS */}
      <div ref={aboutRef}><AboutAndEvents /></div>
      <div ref={eventsRef}></div>
      <div ref={albumRef}><AlbumSection /></div>
      <div ref={galleryRef}><GallerySection /></div>
      <div ref={teamRef}><TeamSection /></div>
      <div ref={associateRef}><SponsorsSection /></div>
      <Footer />
      
    </>
  );
}