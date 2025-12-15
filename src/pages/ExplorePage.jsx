// import React, { useState, useEffect } from 'react';

// export default function ExplorePage() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     setIsVisible(true);

//     const handleScroll = () => {
//       const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
//       const currentProgress = (window.scrollY / totalScroll) * 100;
//       setScrollProgress(currentProgress);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen bg-black text-white relative overflow-hidden">
//       {/* Animated background particles */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//         <div className="absolute top-20 left-10 w-2 h-2 bg-pink-500/30 rounded-full animate-float-particle"></div>
//         <div className="absolute top-40 right-20 w-3 h-3 bg-cyan-400/20 rounded-full animate-float-particle-delayed"></div>
//         <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-red-500/25 rounded-full animate-float-particle-slow"></div>
//         <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-pink-400/30 rounded-full animate-float-particle"></div>
//         <div className="absolute bottom-20 right-1/4 w-3 h-3 bg-purple-500/25 rounded-full animate-float-particle-delayed"></div>
//       </div>

//       {/* Scroll Progress Bar */}
//       <div className="fixed top-0 left-0 w-full h-1 bg-slate-900 z-50">
//         <div 
//           className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 transition-all duration-300"
//           style={{ width: `${scrollProgress}%` }}
//         ></div>
//       </div>

//       {/* Hero Video Section */}
//       <section className="relative h-[70vh] w-full overflow-hidden">
//         <video
//           className="absolute inset-0 w-full h-full object-cover"
//           autoPlay
//           loop
//           muted
//           playsInline
//         >
//           <source src="/video/video.mp4" type="video/mp4" />
//         </video>

//         {/* Overlay with gradient */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black flex items-center justify-center">
//           <div className="text-center px-6">
//             <h1 className={`text-6xl md:text-8xl font-black tracking-wider mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 animate-gradient-x">
//                 WHAT WE LIVE FOR
//               </span>
//             </h1>
            
//             {/* Animated underline */}
//             <div className="flex justify-center gap-2">
//               <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></div>
//               <div className="w-40 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 relative overflow-hidden rounded-full">
//                 <div className="absolute inset-0 bg-white/50 animate-shimmer"></div>
//               </div>
//               <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
//             </div>
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-gradient-to-b from-pink-500 to-transparent rounded-full mt-2 animate-scroll-down"></div>
//           </div>
//         </div>
//       </section>

//       {/* Mission Statement */}
//       <div className="max-w-5xl mx-auto px-6 py-20 text-center relative z-10">
//         <div className="relative inline-block mb-12">
//           <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 animate-pulse-slow"></div>
//           <h2 className="text-5xl md:text-6xl font-black tracking-wide relative">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 animate-gradient-x">
//              WE LIVE FOR MOMENTS THAT BECOME MEMORIES
//             </span>
//           </h2>
//         </div>
        
//         <p className="text-lg md:text-xl leading-relaxed text-gray-300 animate-fade-in-up">
//           For 19 years, our mission has stayed the same—<br/>
//           to create those rare, electric moments when an entire crowd<br/>
//           sings the same line, moves to the same beat,<br/>
//           and feels the same rush.<br/><br/>

//           What began as an impossible dream in 2006<br/>
//           has now become Kolkata’s most iconic music festival,<br/>
//           shaping the city’s concert culture one historic night at a time.

//         </p>

//         {/* Decorative elements */}
//         <div className="flex justify-center gap-3 mt-8">
//           <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-transparent rounded-full"></div>
//           <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full"></div>
//           <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-transparent rounded-full"></div>
//         </div>
//       </div>

//       {/* Content Sections */}
//       <div className="max-w-7xl mx-auto px-6 py-12 space-y-32 relative z-10">
//         {/* Section 1 - Image Left */}
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div className="group relative overflow-hidden rounded-2xl animate-slide-in-left">
//             <div className="absolute inset-0 bg-gradient-to-br from-pink-600/40 to-transparent z-10 group-hover:opacity-70 transition-opacity duration-500"></div>
//             <img 
//               src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop" 
//               alt="Live Concert"
//               className="w-full aspect-video object-cover transform group-hover:scale-110 transition-transform duration-700"
//             />
//             <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
//               <div className="absolute inset-0 rounded-2xl shadow-[0_0_40px_rgba(236,72,153,0.6)] animate-pulse-glow"></div>
//             </div>
//           </div>
//           <div className="animate-slide-in-right">
//             <h3 className="text-4xl md:text-5xl font-black mb-6">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
//                 WE LIVE FOR A LEGACY BUILT ON STAGES
//               </span>
//             </h3>
//             <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-6"></div>
//             <p className="text-lg text-gray-300 leading-relaxed">
//               From our first show in 2012 with Poets of the Fall to 21 spectacular gigs featuring legends like Bryan Adams, MLTR, Karnivool, Infected Mushroom, The Aristocrats, Bumblefoot and over 150 incredible artists—every edition has pushed Kolkata, Guwahati and Imphal closer to the global music map.
// And now, with Bengaluru in our path and pan-India ahead, the next chapter is just beginning.
//             </p>
//           </div>
//         </div>

//         {/* Section 2 - Image Right */}
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div className="order-2 md:order-1 animate-slide-in-left">
//             <h3 className="text-4xl md:text-5xl font-black mb-6">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
//                WE LIVE FOR THE FANS WHO BELIEVE
//               </span>
//             </h3>
//             <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-6"></div>
//             <p className="text-lg text-gray-300 leading-relaxed">
//               THE Festival exists because of you.
// We don’t follow the market’s “push” formula. We follow your voice. Your energy. Your wishlist.
// Every lineup we pull is shaped by your messages, your demands, your dreams. This festival is built by fans—for the fans—and your suggestions continue to be our north star.
//             </p>
//           </div>
//           <div className="order-1 md:order-2 group relative overflow-hidden rounded-2xl animate-slide-in-right">
//             <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/40 to-transparent z-10 group-hover:opacity-70 transition-opacity duration-500"></div>
//             <img 
//               src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop" 
//               alt="Festival Crowd"
//               className="w-full aspect-video object-cover transform group-hover:scale-110 transition-transform duration-700"
//             />
//             <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
//               <div className="absolute inset-0 rounded-2xl shadow-[0_0_40px_rgba(34,211,238,0.6)] animate-pulse-glow"></div>
//             </div>
//           </div>
//         </div>

//         {/* Section 3 - Image Left */}
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div className="group relative overflow-hidden rounded-2xl animate-slide-in-left">
//             <div className="absolute inset-0 bg-gradient-to-br from-pink-600/40 to-transparent z-10 group-hover:opacity-70 transition-opacity duration-500"></div>
//             <img 
//               src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop" 
//               alt="Artist Performance"
//               className="w-full aspect-video object-cover transform group-hover:scale-110 transition-transform duration-700"
//             />
//             <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
//               <div className="absolute inset-0 rounded-2xl shadow-[0_0_40px_rgba(236,72,153,0.6)] animate-pulse-glow"></div>
//             </div>
//           </div>
//           <div className="animate-slide-in-right">
//             <h3 className="text-4xl md:text-5xl font-black mb-6">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-orange-500">
//                WE LIVE FOR ARTISTS WHO INSPIRE US
//               </span>
//             </h3>
//             <div className="h-1 w-24 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 rounded-full mb-6"></div>
//             <p className="text-lg text-gray-300 leading-relaxed">
//              Our festival is built on deep respect for artists—their craft, their effort, and their courage to create.
// We work to build stages where sound feels sacred, hospitality feels human, and the performance becomes a story fans remember forever.
//             </p>
//           </div>
//         </div>

//         {/* Section 4 - Image Right */}
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div className="order-2 md:order-1 animate-slide-in-left">
//             <h3 className="text-4xl md:text-5xl font-black mb-6">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500">
//                WE LIVE FOR THE FULL EXPERIENCE
//               </span>
//             </h3>
//             <div className="h-1 w-24 bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500 rounded-full mb-6"></div>
//             <p className="text-lg text-gray-300 leading-relaxed">
//              What happens beyond the stage matters as much as what happens on it.
// Great food, cold drinks, new friendships, inside jokes, selfies, groupfies, mosh pits, dance floors—this is where strangers become a community and nights become memories.

//             </p>
//           </div>
//           <div className="order-1 md:order-2 group relative overflow-hidden rounded-2xl animate-slide-in-right">
//             <div className="absolute inset-0 bg-gradient-to-br from-green-600/40 to-transparent z-10 group-hover:opacity-70 transition-opacity duration-500"></div>
//             <img 
//               src="https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=600&fit=crop" 
//               alt="Festival Stage"
//               className="w-full aspect-video object-cover transform group-hover:scale-110 transition-transform duration-700"
//             />
//             <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
//               <div className="absolute inset-0 rounded-2xl shadow-[0_0_40px_rgba(34,197,94,0.6)] animate-pulse-glow"></div>
//             </div>
//           </div>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div className="group relative overflow-hidden rounded-2xl animate-slide-in-left">
//             <div className="absolute inset-0 bg-gradient-to-br from-pink-600/40 to-transparent z-10 group-hover:opacity-70 transition-opacity duration-500"></div>
//             <img 
//               src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop" 
//               alt="Live Concert"
//               className="w-full aspect-video object-cover transform group-hover:scale-110 transition-transform duration-700"
//             />
//             <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
//               <div className="absolute inset-0 rounded-2xl shadow-[0_0_40px_rgba(236,72,153,0.6)] animate-pulse-glow"></div>
//             </div>
//           </div>
//           <div className="animate-slide-in-right">
//             <h3 className="text-4xl md:text-5xl font-black mb-6">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
//                 WE LIVE FOR RESPONSIBLE FUN
//               </span>
//             </h3>
//             <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-6"></div>
//             <p className="text-lg text-gray-300 leading-relaxed">
//              Parking, shuttles, venue safety—these aren’t rules, they’re part of the experience.
// Celebrate hard, party smart, and help us keep the venue clean. Use the bins, respect the space, and don’t even think of driving drunk—we warn you because we care.
//             </p>
//           </div>
//         </div>
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div className="order-2 md:order-1 animate-slide-in-left">
//             <h3 className="text-4xl md:text-5xl font-black mb-6">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
//                WE LIVE FOR A GREENER, BETTER WORLD
//               </span>
//             </h3>
//             <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-6"></div>
//             <p className="text-lg text-gray-300 leading-relaxed">
//              arge concerts need large permissions. Keeping the venue clean and respectful helps us bring more world-class acts to the city.
// Those who litter? Well, let’s just say our giant blue-and-white dustbin is always hungry.
//             </p>
//           </div>
//           <div className="order-1 md:order-2 group relative overflow-hidden rounded-2xl animate-slide-in-right">
//             <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/40 to-transparent z-10 group-hover:opacity-70 transition-opacity duration-500"></div>
//             <img 
//               src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop" 
//               alt="Festival Crowd"
//               className="w-full aspect-video object-cover transform group-hover:scale-110 transition-transform duration-700"
//             />
//             <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
//               <div className="absolute inset-0 rounded-2xl shadow-[0_0_40px_rgba(34,211,238,0.6)] animate-pulse-glow"></div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer CTA */}
//       <div className="relative bg-gradient-to-b from-black via-slate-900 to-black py-24 text-center overflow-hidden mt-20">
//         {/* Animated background elements */}
//         <div className="absolute top-20 left-20 w-72 h-72 bg-pink-600/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>
//         <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse-slower pointer-events-none"></div>
        
//         <div className="relative z-10">
//           <div className="inline-block relative mb-8">
//             <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-cyan-500/30 animate-pulse-slow"></div>
//             <h2 className="text-5xl md:text-6xl font-black mb-6 relative">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 animate-gradient-x">
//                 JOIN THE MOVEMENT
//               </span>
//             </h2>
//           </div>
          
//           <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto px-6">
//             Be part of the team that's shaping the future of live entertainment
//           </p>
          
//           <button className="group relative bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-500 text-white px-12 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 overflow-hidden">
//             <span className="relative z-10">EXPLORE CAREERS</span>
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
//           </button>

//           {/* Decorative sound bars - Horizontal Waveform */}
//           <div className="flex items-center justify-center gap-1 mt-12">
//             <div className="h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full animate-wave-1" style={{width: '60px'}}></div>
//             <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full animate-wave-2" style={{width: '80px'}}></div>
//             <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full animate-wave-3" style={{width: '50px'}}></div>
//             <div className="h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full animate-wave-4" style={{width: '70px'}}></div>
//             <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full animate-wave-5" style={{width: '55px'}}></div>
//             <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full animate-wave-6" style={{width: '65px'}}></div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes gradient-x {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }

//         .animate-gradient-x {
//           background-size: 200% 200%;
//           animation: gradient-x 3s ease infinite;
//         }

//         @keyframes shimmer {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }

//         .animate-shimmer {
//           animation: shimmer 2s infinite;
//         }

//         @keyframes float-particle {
//           0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
//           50% { transform: translateY(-30px) translateX(10px); opacity: 1; }
//         }

//         .animate-float-particle {
//           animation: float-particle 4s ease-in-out infinite;
//         }

//         @keyframes float-particle-delayed {
//           0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
//           50% { transform: translateY(30px) translateX(-10px); opacity: 1; }
//         }

//         .animate-float-particle-delayed {
//           animation: float-particle-delayed 5s ease-in-out infinite;
//         }

//         @keyframes float-particle-slow {
//           0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
//           50% { transform: translateY(-20px) translateX(-15px); opacity: 0.6; }
//         }

//         .animate-float-particle-slow {
//           animation: float-particle-slow 6s ease-in-out infinite;
//         }

//         @keyframes pulse-slow {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0.5; }
//         }

//         .animate-pulse-slow {
//           animation: pulse-slow 3s ease-in-out infinite;
//         }

//         @keyframes pulse-slower {
//           0%, 100% { opacity: 0.3; }
//           50% { opacity: 0.6; }
//         }

//         .animate-pulse-slower {
//           animation: pulse-slower 4s ease-in-out infinite;
//         }

//         @keyframes pulse-glow {
//           0%, 100% { opacity: 0.5; }
//           50% { opacity: 1; }
//         }

//         .animate-pulse-glow {
//           animation: pulse-glow 2s ease-in-out infinite;
//         }

//         @keyframes scroll-down {
//           0% { transform: translateY(0); opacity: 1; }
//           100% { transform: translateY(20px); opacity: 0; }
//         }

//         .animate-scroll-down {
//           animation: scroll-down 1.5s ease-in-out infinite;
//         }

//         @keyframes slide-in-left {
//           from { opacity: 0; transform: translateX(-50px); }
//           to { opacity: 1; transform: translateX(0); }
//         }

//         .animate-slide-in-left {
//           animation: slide-in-left 1s ease-out;
//         }

//         @keyframes slide-in-right {
//           from { opacity: 0; transform: translateX(50px); }
//           to { opacity: 1; transform: translateX(0); }
//         }

//         .animate-slide-in-right {
//           animation: slide-in-right 1s ease-out;
//         }

//         @keyframes fade-in-up {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         .animate-fade-in-up {
//           animation: fade-in-up 1s ease-out;
//         }

//         @keyframes sound-bar-1 {
//           0%, 100% { height: 32px; }
//           50% { height: 48px; }
//         }

//         @keyframes sound-bar-2 {
//           0%, 100% { height: 40px; }
//           50% { height: 56px; }
//         }

//         @keyframes sound-bar-3 {
//           0%, 100% { height: 24px; }
//           50% { height: 40px; }
//         }

//         @keyframes sound-bar-4 {
//           0%, 100% { height: 36px; }
//           50% { height: 52px; }
//         }

//         @keyframes sound-bar-5 {
//           0%, 100% { height: 28px; }
//           50% { height: 44px; }
//         }

//         @keyframes sound-bar-6 {
//           0%, 100% { height: 32px; }
//           50% { height: 48px; }
//         }

//         .animate-sound-bar-1 {
//           animation: sound-bar-1 0.6s ease-in-out infinite;
//         }

//         .animate-sound-bar-2 {
//           animation: sound-bar-2 0.5s ease-in-out infinite 0.1s;
//         }

//         .animate-sound-bar-3 {
//           animation: sound-bar-3 0.7s ease-in-out infinite 0.2s;
//         }

//         .animate-sound-bar-4 {
//           animation: sound-bar-4 0.55s ease-in-out infinite 0.15s;
//         }

//         .animate-sound-bar-5 {
//           animation: sound-bar-5 0.65s ease-in-out infinite 0.25s;
//         }

//         .animate-sound-bar-6 {
//           animation: sound-bar-6 0.6s ease-in-out infinite 0.3s;
//         }
//         @keyframes wave-1 {
//           0%, 100% { width: 60px; opacity: 0.8; }
//           50% { width: 80px; opacity: 1; }
//         }

//         @keyframes wave-2 {
//           0%, 100% { width: 80px; opacity: 0.8; }
//           50% { width: 100px; opacity: 1; }
//         }

//         @keyframes wave-3 {
//           0%, 100% { width: 50px; opacity: 0.8; }
//           50% { width: 70px; opacity: 1; }
//         }

//         @keyframes wave-4 {
//           0%, 100% { width: 70px; opacity: 0.8; }
//           50% { width: 90px; opacity: 1; }
//         }

//         @keyframes wave-5 {
//           0%, 100% { width: 55px; opacity: 0.8; }
//           50% { width: 75px; opacity: 1; }
//         }

//         @keyframes wave-6 {
//           0%, 100% { width: 65px; opacity: 0.8; }
//           50% { width: 85px; opacity: 1; }
//         }

//         .animate-wave-1 {
//           animation: wave-1 0.6s ease-in-out infinite;
//         }

//         .animate-wave-2 {
//           animation: wave-2 0.5s ease-in-out infinite 0.1s;
//         }

//         .animate-wave-3 {
//           animation: wave-3 0.7s ease-in-out infinite 0.2s;
//         }

//         .animate-wave-4 {
//           animation: wave-4 0.55s ease-in-out infinite 0.15s;
//         }

//         .animate-wave-5 {
//           animation: wave-5 0.65s ease-in-out infinite 0.25s;
//         }

//         .animate-wave-6 {
//           animation: wave-6 0.6s ease-in-out infinite 0.3s;
//         }
//       `}</style>
//     </div>
//   );
// }















// import React, { useState, useEffect } from 'react';

// export default function ExplorePage() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     setIsVisible(true);

//     const handleScroll = () => {
//       const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
//       const currentProgress = (window.scrollY / totalScroll) * 100;
//       setScrollProgress(currentProgress);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen bg-black text-white relative overflow-hidden">
//       {/* Animated background particles */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//         <div className="absolute top-20 left-10 w-2 h-2 bg-pink-500/30 rounded-full animate-float-particle"></div>
//         <div className="absolute top-40 right-20 w-3 h-3 bg-cyan-400/20 rounded-full animate-float-particle-delayed"></div>
//         <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-red-500/25 rounded-full animate-float-particle-slow"></div>
//         <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-pink-400/30 rounded-full animate-float-particle"></div>
//         <div className="absolute bottom-20 right-1/4 w-3 h-3 bg-purple-500/25 rounded-full animate-float-particle-delayed"></div>
//       </div>

//       {/* Scroll Progress Bar */}
//       <div className="fixed top-0 left-0 w-full h-1 bg-slate-900 z-50">
//         <div 
//           className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 transition-all duration-300"
//           style={{ width: `${scrollProgress}%` }}
//         ></div>
//       </div>

//       {/* Hero Video Section */}
//       <section className="relative h-[70vh] w-full overflow-hidden">
//         <video
//           className="absolute inset-0 w-full h-full object-cover"
//           autoPlay
//           loop
//           muted
//           playsInline
//         >
//           <source src="/video/video.mp4" type="video/mp4" />
//         </video>

//         {/* Overlay with gradient */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black flex items-center justify-center">
//           <div className="text-center px-6">
//             <h1 className={`text-6xl md:text-8xl font-black tracking-wider mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 animate-gradient-x">
//                 WHAT WE LIVE FOR
//               </span>
//             </h1>
            
//             {/* Animated underline */}
//             <div className="flex justify-center gap-2">
//               <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></div>
//               <div className="w-40 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 relative overflow-hidden rounded-full">
//                 <div className="absolute inset-0 bg-white/50 animate-shimmer"></div>
//               </div>
//               <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
//             </div>
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-gradient-to-b from-pink-500 to-transparent rounded-full mt-2 animate-scroll-down"></div>
//           </div>
//         </div>
//       </section>

//       {/* Mission Statement */}
//       <div className="max-w-5xl mx-auto px-6 py-20 text-center relative z-10">
//         <div className="relative inline-block mb-12">
//           <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 animate-pulse-slow"></div>
//           <h2 className="text-5xl md:text-6xl font-black tracking-wide relative">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 animate-gradient-x">
//              WE LIVE FOR MOMENTS THAT BECOME MEMORIES
//             </span>
//           </h2>
//         </div>
        
//         <p className="text-lg md:text-xl leading-relaxed text-gray-300 animate-fade-in-up">
//           For 19 years, our mission has stayed the same—<br/>
//           to create those rare, electric moments when an entire crowd<br/>
//           sings the same line, moves to the same beat,<br/>
//           and feels the same rush.<br/><br/>

//           What began as an impossible dream in 2006<br/>
//           has now become Kolkata’s most iconic music festival,<br/>
//           shaping the city’s concert culture one historic night at a time.

//         </p>

//         {/* Decorative elements */}
//         <div className="flex justify-center gap-3 mt-8">
//           <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-transparent rounded-full"></div>
//           <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full"></div>
//           <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-transparent rounded-full"></div>
//         </div>
//       </div>

//       {/* Content Sections */}
//       {/* Content Sections - Modern Card Layout */}
//       <div className="max-w-6xl mx-auto px-6 py-12 space-y-20 relative z-10">
        
//         {/* Card 1 */}
//         <div className="space-y-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-center">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
//               WE LIVE FOR A LEGACY BUILT ON STAGES
//             </span>
//           </h2>
//           <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-slate-800/50 hover:border-pink-500/30 transition-all duration-500">
//             <div className="grid md:grid-cols-2 gap-0">
//               <div className="relative overflow-hidden h-80 md:h-auto">
//                 <img 
//                   src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop" 
//                   alt="Live Concert"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="p-8 md:p-10 flex flex-col justify-center">
//                 <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-6"></div>
//                 <p className="text-gray-300 text-lg leading-relaxed">
//                   From our first show in 2012 with Poets of the Fall to 21 spectacular gigs featuring legends like Bryan Adams, MLTR, Karnivool, Infected Mushroom, The Aristocrats, Bumblefoot and over 150 incredible artists—every edition has pushed Kolkata, Guwahati and Imphal closer to the global music map. And now, with Bengaluru in our path and pan-India ahead, the next chapter is just beginning.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div className="space-y-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-center">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
//               WE LIVE FOR THE FANS WHO BELIEVE
//             </span>
//           </h2>
//           <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-slate-800/50 hover:border-purple-500/30 transition-all duration-500">
//             <div className="grid md:grid-cols-2 gap-0">
//               <div className="relative overflow-hidden h-80 md:h-auto">
//                 <img 
//                   src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop" 
//                   alt="Festival Crowd"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="p-8 md:p-10 flex flex-col justify-center">
//                 <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-6"></div>
//                 <p className="text-gray-300 text-lg leading-relaxed">
//                   THE Festival exists because of you. We don't follow the market's "push" formula. We follow your voice. Your energy. Your wishlist. Every lineup we pull is shaped by your messages, your demands, your dreams. This festival is built by fans—for the fans—and your suggestions continue to be our north star.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Card 3 */}
//         <div className="space-y-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-center">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-orange-500">
//               WE LIVE FOR ARTISTS WHO INSPIRE US
//             </span>
//           </h2>
//           <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-slate-800/50 hover:border-red-500/30 transition-all duration-500">
//             <div className="grid md:grid-cols-2 gap-0">
//               <div className="relative overflow-hidden h-80 md:h-auto">
//                 <img 
//                   src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop" 
//                   alt="Artist Performance"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="p-8 md:p-10 flex flex-col justify-center">
//                 <div className="h-1 w-20 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 rounded-full mb-6"></div>
//                 <p className="text-gray-300 text-lg leading-relaxed">
//                   Our festival is built on deep respect for artists—their craft, their effort, and their courage to create. We work to build stages where sound feels sacred, hospitality feels human, and the performance becomes a story fans remember forever.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Card 4 */}
//         <div className="space-y-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-center">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500">
//               WE LIVE FOR THE FULL EXPERIENCE
//             </span>
//           </h2>
//           <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-slate-800/50 hover:border-cyan-500/30 transition-all duration-500">
//             <div className="grid md:grid-cols-2 gap-0">
//               <div className="relative overflow-hidden h-80 md:h-auto">
//                 <img 
//                   src="https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=600&fit=crop" 
//                   alt="Festival Stage"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="p-8 md:p-10 flex flex-col justify-center">
//                 <div className="h-1 w-20 bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500 rounded-full mb-6"></div>
//                 <p className="text-gray-300 text-lg leading-relaxed">
//                   What happens beyond the stage matters as much as what happens on it. Great food, cold drinks, new friendships, inside jokes, selfies, groupfies, mosh pits, dance floors—this is where strangers become a community and nights become memories.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Card 5 */}
//         <div className="space-y-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-center">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
//               WE LIVE FOR RESPONSIBLE FUN
//             </span>
//           </h2>
//           <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-slate-800/50 hover:border-pink-500/30 transition-all duration-500">
//             <div className="grid md:grid-cols-2 gap-0">
//               <div className="relative overflow-hidden h-80 md:h-auto">
//                 <img 
//                   src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop" 
//                   alt="Live Concert"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="p-8 md:p-10 flex flex-col justify-center">
//                 <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-6"></div>
//                 <p className="text-gray-300 text-lg leading-relaxed">
//                   Parking, shuttles, venue safety—these aren't rules, they're part of the experience. Celebrate hard, party smart, and help us keep the venue clean. Use the bins, respect the space, and don't even think of driving drunk—we warn you because we care.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Card 6 */}
//         <div className="space-y-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-center">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
//               WE LIVE FOR A GREENER, BETTER WORLD
//             </span>
//           </h2>
//           <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-slate-800/50 hover:border-cyan-500/30 transition-all duration-500">
//             <div className="grid md:grid-cols-2 gap-0">
//               <div className="relative overflow-hidden h-80 md:h-auto">
//                 <img 
//                   src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop" 
//                   alt="Festival Crowd"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="p-8 md:p-10 flex flex-col justify-center">
//                 <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-6"></div>
//                 <p className="text-gray-300 text-lg leading-relaxed">
//                   Large concerts need large permissions. Keeping the venue clean and respectful helps us bring more world-class acts to the city. Those who litter? Well, let's just say our giant blue-and-white dustbin is always hungry.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* Footer CTA */}
//       <div className="relative bg-gradient-to-b from-black via-slate-900 to-black py-24 text-center overflow-hidden mt-20">
//         {/* Animated background elements */}
//         <div className="absolute top-20 left-20 w-72 h-72 bg-pink-600/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>
//         <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse-slower pointer-events-none"></div>
        
//         <div className="relative z-10">
//           <div className="inline-block relative mb-8">
//             <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-cyan-500/30 animate-pulse-slow"></div>
//             <h2 className="text-5xl md:text-6xl font-black mb-6 relative">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 animate-gradient-x">
//                 JOIN THE MOVEMENT
//               </span>
//             </h2>
//           </div>
          
//           <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto px-6">
//             Be part of the team that's shaping the future of live entertainment
//           </p>
          
//           <button className="group relative bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-500 text-white px-12 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 overflow-hidden">
//             <span className="relative z-10">EXPLORE CAREERS</span>
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
//           </button>

//           {/* Decorative sound bars - Horizontal Waveform */}
//           <div className="flex items-center justify-center gap-1 mt-12">
//             <div className="h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full animate-wave-1" style={{width: '60px'}}></div>
//             <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full animate-wave-2" style={{width: '80px'}}></div>
//             <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full animate-wave-3" style={{width: '50px'}}></div>
//             <div className="h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full animate-wave-4" style={{width: '70px'}}></div>
//             <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full animate-wave-5" style={{width: '55px'}}></div>
//             <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full animate-wave-6" style={{width: '65px'}}></div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes gradient-x {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }

//         .animate-gradient-x {
//           background-size: 200% 200%;
//           animation: gradient-x 3s ease infinite;
//         }

//         @keyframes shimmer {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }

//         .animate-shimmer {
//           animation: shimmer 2s infinite;
//         }

//         @keyframes float-particle {
//           0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
//           50% { transform: translateY(-30px) translateX(10px); opacity: 1; }
//         }

//         .animate-float-particle {
//           animation: float-particle 4s ease-in-out infinite;
//         }

//         @keyframes float-particle-delayed {
//           0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
//           50% { transform: translateY(30px) translateX(-10px); opacity: 1; }
//         }

//         .animate-float-particle-delayed {
//           animation: float-particle-delayed 5s ease-in-out infinite;
//         }

//         @keyframes float-particle-slow {
//           0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
//           50% { transform: translateY(-20px) translateX(-15px); opacity: 0.6; }
//         }

//         .animate-float-particle-slow {
//           animation: float-particle-slow 6s ease-in-out infinite;
//         }

//         @keyframes pulse-slow {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0.5; }
//         }

//         .animate-pulse-slow {
//           animation: pulse-slow 3s ease-in-out infinite;
//         }

//         @keyframes pulse-slower {
//           0%, 100% { opacity: 0.3; }
//           50% { opacity: 0.6; }
//         }

//         .animate-pulse-slower {
//           animation: pulse-slower 4s ease-in-out infinite;
//         }

//         @keyframes pulse-glow {
//           0%, 100% { opacity: 0.5; }
//           50% { opacity: 1; }
//         }

//         .animate-pulse-glow {
//           animation: pulse-glow 2s ease-in-out infinite;
//         }

//         @keyframes scroll-down {
//           0% { transform: translateY(0); opacity: 1; }
//           100% { transform: translateY(20px); opacity: 0; }
//         }

//         .animate-scroll-down {
//           animation: scroll-down 1.5s ease-in-out infinite;
//         }

//         @keyframes slide-in-left {
//           from { opacity: 0; transform: translateX(-50px); }
//           to { opacity: 1; transform: translateX(0); }
//         }

//         .animate-slide-in-left {
//           animation: slide-in-left 1s ease-out;
//         }

//         @keyframes slide-in-right {
//           from { opacity: 0; transform: translateX(50px); }
//           to { opacity: 1; transform: translateX(0); }
//         }

//         .animate-slide-in-right {
//           animation: slide-in-right 1s ease-out;
//         }

//         @keyframes fade-in-up {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         .animate-fade-in-up {
//           animation: fade-in-up 1s ease-out;
//         }

//         @keyframes sound-bar-1 {
//           0%, 100% { height: 32px; }
//           50% { height: 48px; }
//         }

//         @keyframes sound-bar-2 {
//           0%, 100% { height: 40px; }
//           50% { height: 56px; }
//         }

//         @keyframes sound-bar-3 {
//           0%, 100% { height: 24px; }
//           50% { height: 40px; }
//         }

//         @keyframes sound-bar-4 {
//           0%, 100% { height: 36px; }
//           50% { height: 52px; }
//         }

//         @keyframes sound-bar-5 {
//           0%, 100% { height: 28px; }
//           50% { height: 44px; }
//         }

//         @keyframes sound-bar-6 {
//           0%, 100% { height: 32px; }
//           50% { height: 48px; }
//         }

//         .animate-sound-bar-1 {
//           animation: sound-bar-1 0.6s ease-in-out infinite;
//         }

//         .animate-sound-bar-2 {
//           animation: sound-bar-2 0.5s ease-in-out infinite 0.1s;
//         }

//         .animate-sound-bar-3 {
//           animation: sound-bar-3 0.7s ease-in-out infinite 0.2s;
//         }

//         .animate-sound-bar-4 {
//           animation: sound-bar-4 0.55s ease-in-out infinite 0.15s;
//         }

//         .animate-sound-bar-5 {
//           animation: sound-bar-5 0.65s ease-in-out infinite 0.25s;
//         }

//         .animate-sound-bar-6 {
//           animation: sound-bar-6 0.6s ease-in-out infinite 0.3s;
//         }
//         @keyframes wave-1 {
//           0%, 100% { width: 60px; opacity: 0.8; }
//           50% { width: 80px; opacity: 1; }
//         }

//         @keyframes wave-2 {
//           0%, 100% { width: 80px; opacity: 0.8; }
//           50% { width: 100px; opacity: 1; }
//         }

//         @keyframes wave-3 {
//           0%, 100% { width: 50px; opacity: 0.8; }
//           50% { width: 70px; opacity: 1; }
//         }

//         @keyframes wave-4 {
//           0%, 100% { width: 70px; opacity: 0.8; }
//           50% { width: 90px; opacity: 1; }
//         }

//         @keyframes wave-5 {
//           0%, 100% { width: 55px; opacity: 0.8; }
//           50% { width: 75px; opacity: 1; }
//         }

//         @keyframes wave-6 {
//           0%, 100% { width: 65px; opacity: 0.8; }
//           50% { width: 85px; opacity: 1; }
//         }

//         .animate-wave-1 {
//           animation: wave-1 0.6s ease-in-out infinite;
//         }

//         .animate-wave-2 {
//           animation: wave-2 0.5s ease-in-out infinite 0.1s;
//         }

//         .animate-wave-3 {
//           animation: wave-3 0.7s ease-in-out infinite 0.2s;
//         }

//         .animate-wave-4 {
//           animation: wave-4 0.55s ease-in-out infinite 0.15s;
//         }

//         .animate-wave-5 {
//           animation: wave-5 0.65s ease-in-out infinite 0.25s;
//         }

//         .animate-wave-6 {
//           animation: wave-6 0.6s ease-in-out infinite 0.3s;
//         }
//       `}</style>
//     </div>
//   );
// }


















import React, { useState, useEffect, useRef } from 'react';

export default function ExplorePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);

      // Check which cards are in viewport
      cardRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
          
          if (isInView && !visibleCards.includes(index)) {
            setVisibleCards(prev => [...prev, index]);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleCards]);

  const cards = [
    {
      title: "WE LIVE FOR A LEGACY BUILT ON STAGES",
      gradient: "from-pink-500 to-purple-500",
      borderColor: "pink-500",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop",
      content: "From our first show in 2012 with Poets of the Fall to 21 spectacular gigs featuring legends like Bryan Adams, MLTR, Karnivool, Infected Mushroom, The Aristocrats, Bumblefoot and over 150 incredible artists—every edition has pushed Kolkata, Guwahati and Imphal closer to the global music map. And now, with Bengaluru in our path and pan-India ahead, the next chapter is just beginning."
    },
    {
      title: "WE LIVE FOR THE FANS WHO BELIEVE",
      gradient: "from-purple-500 to-cyan-500",
      borderColor: "purple-500",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop",
      content: "THE Festival exists because of you. We don't follow the market's \"push\" formula. We follow your voice. Your energy. Your wishlist. Every lineup we pull is shaped by your messages, your demands, your dreams. This festival is built by fans—for the fans—and your suggestions continue to be our north star."
    },
    {
      title: "WE LIVE FOR ARTISTS WHO INSPIRE US",
      gradient: "from-pink-500 via-red-500 to-orange-500",
      borderColor: "red-500",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop",
      content: "Our festival is built on deep respect for artists—their craft, their effort, and their courage to create. We work to build stages where sound feels sacred, hospitality feels human, and the performance becomes a story fans remember forever."
    },
    {
      title: "WE LIVE FOR THE FULL EXPERIENCE",
      gradient: "from-green-400 via-cyan-500 to-blue-500",
      borderColor: "cyan-500",
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=600&fit=crop",
      content: "What happens beyond the stage matters as much as what happens on it. Great food, cold drinks, new friendships, inside jokes, selfies, groupfies, mosh pits, dance floors—this is where strangers become a community and nights become memories."
    },
    {
      title: "WE LIVE FOR RESPONSIBLE FUN",
      gradient: "from-pink-500 to-purple-500",
      borderColor: "pink-500",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop",
      content: "Parking, shuttles, venue safety—these aren't rules, they're part of the experience. Celebrate hard, party smart, and help us keep the venue clean. Use the bins, respect the space, and don't even think of driving drunk—we warn you because we care."
    },
    {
      title: "WE LIVE FOR A GREENER, BETTER WORLD",
      gradient: "from-purple-500 to-cyan-500",
      borderColor: "cyan-500",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop",
      content: "Large concerts need large permissions. Keeping the venue clean and respectful helps us bring more world-class acts to the city. Those who litter? Well, let's just say our giant blue-and-white dustbin is always hungry."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-pink-500/30 rounded-full animate-float-particle"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-cyan-400/20 rounded-full animate-float-particle-delayed"></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-red-500/25 rounded-full animate-float-particle-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-pink-400/30 rounded-full animate-float-particle"></div>
        <div className="absolute bottom-20 right-1/4 w-3 h-3 bg-purple-500/25 rounded-full animate-float-particle-delayed"></div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-900 z-50">
        <div 
          className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Hero Video Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/video.mp4" type="video/mp4" />
        </video>

        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className={`text-6xl md:text-8xl font-black tracking-wider mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 animate-gradient-x">
                WHAT WE LIVE FOR
              </span>
            </h1>
            
            {/* Animated underline */}
            <div className="flex justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></div>
              <div className="w-40 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 relative overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-white/50 animate-shimmer"></div>
              </div>
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-pink-500 to-transparent rounded-full mt-2 animate-scroll-down"></div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <div className="max-w-5xl mx-auto px-6 py-20 text-center relative z-10">
        <div className="relative inline-block mb-12">
          <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 animate-pulse-slow"></div>
          <h2 className="text-5xl md:text-6xl font-black tracking-wide relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 animate-gradient-x">
             WE LIVE FOR MOMENTS THAT BECOME MEMORIES
            </span>
          </h2>
        </div>
        
        <p className="text-lg md:text-xl leading-relaxed text-gray-300 animate-fade-in-up">
          For 19 years, our mission has stayed the same—<br/>
          to create those rare, electric moments when an entire crowd<br/>
          sings the same line, moves to the same beat,<br/>
          and feels the same rush.<br/><br/>

          What began as an impossible dream in 2006<br/>
          has now become Kolkata's most iconic music festival,<br/>
          shaping the city's concert culture one historic night at a time.
        </p>

        {/* Decorative elements */}
        <div className="flex justify-center gap-3 mt-8">
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-transparent rounded-full"></div>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full"></div>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-transparent rounded-full"></div>
        </div>
      </div>

      {/* Content Sections - Animated Card Layout */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-20 relative z-10">
        {cards.map((card, index) => (
          <div 
            key={index}
            ref={el => cardRefs.current[index] = el}
            className={`space-y-6 transition-all duration-1000 ${
              visibleCards.includes(index) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-20'
            }`}
            style={{ transitionDelay: `${(index % 3) * 150}ms` }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold text-center transition-all duration-700 ${
              visibleCards.includes(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${card.gradient}`}>
                {card.title}
              </span>
            </h2>
            
            <div className={`bg-slate-900/50 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-slate-800/50 hover:border-${card.borderColor}/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(236,72,153,0.3)] group`}>
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative overflow-hidden h-80 md:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-transparent z-10 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <img 
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Animated corner accent */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-pink-500/50 group-hover:w-32 group-hover:h-32 transition-all duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-cyan-500/50 group-hover:w-32 group-hover:h-32 transition-all duration-500"></div>
                </div>
                
                <div className="p-8 md:p-10 flex flex-col justify-center relative overflow-hidden">
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  
                  <div className={`h-1 w-20 bg-gradient-to-r ${card.gradient} rounded-full mb-6 group-hover:w-32 transition-all duration-500`}></div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed relative z-10 group-hover:text-white transition-colors duration-300">
                    {card.content}
                  </p>
                  
                  {/* Decorative elements */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <div className="flex gap-1">
                      <div className="w-1 h-8 bg-pink-500 rounded-full animate-sound-bar-1"></div>
                      <div className="w-1 h-8 bg-purple-500 rounded-full animate-sound-bar-2"></div>
                      <div className="w-1 h-8 bg-cyan-500 rounded-full animate-sound-bar-3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="relative bg-gradient-to-b from-black via-slate-900 to-black py-24 text-center overflow-hidden mt-20">
        {/* Animated background elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-pink-600/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse-slower pointer-events-none"></div>
        
        <div className="relative z-10">
          <div className="inline-block relative mb-8">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-cyan-500/30 animate-pulse-slow"></div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 animate-gradient-x">
                JOIN THE MOVEMENT
              </span>
            </h2>
          </div>
          
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto px-6">
            Be part of the team that's shaping the future of live entertainment
          </p>
          
          <button className="group relative bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-500 text-white px-12 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 overflow-hidden hover:scale-105">
            <span className="relative z-10">EXPLORE CAREERS</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>

          {/* Decorative sound bars */}
          <div className="flex items-center justify-center gap-1 mt-12">
            <div className="h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full animate-wave-1" style={{width: '60px'}}></div>
            <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full animate-wave-2" style={{width: '80px'}}></div>
            <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full animate-wave-3" style={{width: '50px'}}></div>
            <div className="h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full animate-wave-4" style={{width: '70px'}}></div>
            <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full animate-wave-5" style={{width: '55px'}}></div>
            <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full animate-wave-6" style={{width: '65px'}}></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        @keyframes float-particle {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { transform: translateY(-30px) translateX(10px); opacity: 1; }
        }

        .animate-float-particle {
          animation: float-particle 4s ease-in-out infinite;
        }

        @keyframes float-particle-delayed {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { transform: translateY(30px) translateX(-10px); opacity: 1; }
        }

        .animate-float-particle-delayed {
          animation: float-particle-delayed 5s ease-in-out infinite;
        }

        @keyframes float-particle-slow {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
          50% { transform: translateY(-20px) translateX(-15px); opacity: 0.6; }
        }

        .animate-float-particle-slow {
          animation: float-particle-slow 6s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        @keyframes pulse-slower {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        .animate-pulse-slower {
          animation: pulse-slower 4s ease-in-out infinite;
        }

        @keyframes scroll-down {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(20px); opacity: 0; }
        }

        .animate-scroll-down {
          animation: scroll-down 1.5s ease-in-out infinite;
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        @keyframes sound-bar-1 {
          0%, 100% { height: 32px; }
          50% { height: 48px; }
        }

        @keyframes sound-bar-2 {
          0%, 100% { height: 40px; }
          50% { height: 56px; }
        }

        @keyframes sound-bar-3 {
          0%, 100% { height: 24px; }
          50% { height: 40px; }
        }

        .animate-sound-bar-1 {
          animation: sound-bar-1 0.6s ease-in-out infinite;
        }

        .animate-sound-bar-2 {
          animation: sound-bar-2 0.5s ease-in-out infinite 0.1s;
        }

        .animate-sound-bar-3 {
          animation: sound-bar-3 0.7s ease-in-out infinite 0.2s;
        }

        @keyframes wave-1 {
          0%, 100% { width: 60px; opacity: 0.8; }
          50% { width: 80px; opacity: 1; }
        }

        @keyframes wave-2 {
          0%, 100% { width: 80px; opacity: 0.8; }
          50% { width: 100px; opacity: 1; }
        }

        @keyframes wave-3 {
          0%, 100% { width: 50px; opacity: 0.8; }
          50% { width: 70px; opacity: 1; }
        }

        @keyframes wave-4 {
          0%, 100% { width: 70px; opacity: 0.8; }
          50% { width: 90px; opacity: 1; }
        }

        @keyframes wave-5 {
          0%, 100% { width: 55px; opacity: 0.8; }
          50% { width: 75px; opacity: 1; }
        }

        @keyframes wave-6 {
          0%, 100% { width: 65px; opacity: 0.8; }
          50% { width: 85px; opacity: 1; }
        }

        .animate-wave-1 {
          animation: wave-1 0.6s ease-in-out infinite;
        }

        .animate-wave-2 {
          animation: wave-2 0.5s ease-in-out infinite 0.1s;
        }

        .animate-wave-3 {
          animation: wave-3 0.7s ease-in-out infinite 0.2s;
        }

        .animate-wave-4 {
          animation: wave-4 0.55s ease-in-out infinite 0.15s;
        }

        .animate-wave-5 {
          animation: wave-5 0.65s ease-in-out infinite 0.25s;
        }

        .animate-wave-6 {
          animation: wave-6 0.6s ease-in-out infinite 0.3s;
        }
      `}</style>
    </div>
  );
}