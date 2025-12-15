// import React from 'react';
// import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

// export default function Footer() {
//   return (
//     <footer className="relative bg-black text-white overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute inset-0" style={{
//           backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
//           backgroundSize: '50px 50px',
//           animation: 'gridMove 20s linear infinite'
//         }}></div>
//       </div>

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/5 to-cyan-500/5"></div>

//       {/* Floating Particles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-2 h-2 bg-pink-500/30 rounded-full animate-float-particle"></div>
//         <div className="absolute top-40 right-20 w-3 h-3 bg-cyan-400/20 rounded-full animate-float-particle-delayed"></div>
//         <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-purple-500/25 rounded-full animate-float-particle-slow"></div>
//       </div>

//       {/* Main Footer Content */}
//       <div className="relative max-w-7xl mx-auto px-6 py-16">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
//           {/* Left Side - Logo & About */}
//           <div className="space-y-8 animate-fade-in-left">
//             {/* Logo */}
//             <div className="group">
//               <div className="inline-block relative">
//                 <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 <h2 className="text-4xl md:text-5xl font-black relative">
//                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 animate-gradient-x">
//                     The Festival
//                   </span>
//                   <span className="text-cyan-400 animate-pulse-slow">.</span>
//                 </h2>
//               </div>
//             </div>

//             {/* About Content */}
//             <div className="space-y-4">
//               <p className="text-gray-300 leading-relaxed text-lg">
//                 Experience the ultimate music festival journey. Since 2012, we've been creating unforgettable moments that bring together music lovers, world-class artists, and cutting-edge production.
//               </p>
//               <p className="text-gray-400 leading-relaxed">
//                 Join us in celebrating the power of music and community. Where every beat tells a story, and every moment becomes a memory.
//               </p>
//             </div>

//             {/* Social Media Links */}
//             <div className="space-y-4">
//               <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
//                 Follow Us
//               </h3>
//               <div className="flex gap-4">
//                 <a 
//                   href="#" 
//                   className="group w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110"
//                 >
//                   <Facebook size={20} />
//                 </a>
//                 <a 
//                   href="#" 
//                   className="group w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110"
//                 >
//                   <Twitter size={20} />
//                 </a>
//                 <a 
//                   href="#" 
//                   className="group w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-red-500 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110"
//                 >
//                   <Instagram size={20} />
//                 </a>
//                 <a 
//                   href="#" 
//                   className="group w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110"
//                 >
//                   <Youtube size={20} />
//                 </a>
//                 <a 
//                   href="#" 
//                   className="group w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110"
//                 >
//                   <Linkedin size={20} />
//                 </a>
//               </div>
//             </div>

//             {/* Quick Links */}
//             <div className="space-y-4">
//               <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
//                 Quick Links
//               </h3>
//               <div className="grid grid-cols-2 gap-3">
//                 <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
//                   <span className="w-1.5 h-1.5 rounded-full bg-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                   About Us
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
//                   <span className="w-1.5 h-1.5 rounded-full bg-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                   Events
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
//                   <span className="w-1.5 h-1.5 rounded-full bg-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                   Artists
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
//                   <span className="w-1.5 h-1.5 rounded-full bg-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                   Tickets
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
//                   <span className="w-1.5 h-1.5 rounded-full bg-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                   Gallery
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
//                   <span className="w-1.5 h-1.5 rounded-full bg-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                   Contact
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Map & Contact */}
//           <div className="space-y-8 animate-fade-in-right">
//             {/* Google Map */}
//             <div className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-pink-500/50 transition-all duration-500">
//               <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1489276805654!2d88.36388931495623!3d22.57264998517315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277b027a7e8b1%3A0xdba35e3186c5b889!2sVictoria%20Memorial!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
//                 width="100%"
//                 height="300"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 className="relative z-0"
//               ></iframe>
//             </div>

//             {/* Contact Details */}
//             <div className="bg-gradient-to-b from-slate-900/60 to-slate-950/60 backdrop-blur-xl rounded-2xl border border-white/10 p-8 space-y-6 hover:border-pink-500/30 transition-all duration-500">
//               <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
//                 Get In Touch
//               </h3>

//               {/* Address */}
//               <div className="flex gap-4 group">
//                 <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 group-hover:border-pink-500 transition-colors duration-300">
//                   <MapPin size={20} className="text-pink-400" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-white mb-1">Address</h4>
//                   <p className="text-gray-400 text-sm leading-relaxed">
//                     123 Festival Avenue, Music District<br />
//                     Kolkata, West Bengal 700001<br />
//                     India
//                   </p>
//                 </div>
//               </div>

//               {/* Phone */}
//               <div className="flex gap-4 group">
//                 <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 group-hover:border-cyan-500 transition-colors duration-300">
//                   <Phone size={20} className="text-cyan-400" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-white mb-1">Phone</h4>
//                   <p className="text-gray-400 text-sm">+91 98765 43210</p>
//                   <p className="text-gray-400 text-sm">+91 98765 43211</p>
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="flex gap-4 group">
//                 <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 group-hover:border-purple-500 transition-colors duration-300">
//                   <Mail size={20} className="text-purple-400" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-white mb-1">Email</h4>
//                   <p className="text-gray-400 text-sm">info@thefestival.com</p>
//                   <p className="text-gray-400 text-sm">support@thefestival.com</p>
//                 </div>
//               </div>

//               {/* Working Hours */}
//               <div className="flex gap-4 group">
//                 <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500/20 to-cyan-500/20 border border-pink-500/30 group-hover:border-pink-500 transition-colors duration-300">
//                   <Clock size={20} className="text-pink-400" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-white mb-1">Working Hours</h4>
//                   <p className="text-gray-400 text-sm">Monday - Friday: 10:00 AM - 8:00 PM</p>
//                   <p className="text-gray-400 text-sm">Saturday - Sunday: 11:00 AM - 6:00 PM</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* Bottom Bar */}
//       <div className="relative border-t border-white/10 bg-black/50 backdrop-blur-sm">
//         <div className="max-w-7xl mx-auto px-6 py-6">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-gray-400 text-sm">
//               © 2024 The Festival. All rights reserved.
//             </p>
//             <div className="flex gap-6 text-sm">
//               <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
//                 Privacy Policy
//               </a>
//               <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
//                 Terms of Service
//               </a>
//               <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
//                 Cookie Policy
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes gridMove {
//           0% { transform: translate(0, 0); }
//           100% { transform: translate(50px, 50px); }
//         }

//         @keyframes float-particle {
//           0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
//           50% { transform: translateY(-30px) translateX(10px); opacity: 1; }
//         }

//         .animate-float-particle {
//           animation: float-particle 3s ease-in-out infinite;
//         }

//         @keyframes float-particle-delayed {
//           0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
//           50% { transform: translateY(30px) translateX(-10px); opacity: 1; }
//         }

//         .animate-float-particle-delayed {
//           animation: float-particle-delayed 4s ease-in-out infinite;
//         }

//         @keyframes float-particle-slow {
//           0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
//           50% { transform: translateY(-20px) translateX(-15px); opacity: 0.4; }
//         }

//         .animate-float-particle-slow {
//           animation: float-particle-slow 5s ease-in-out infinite;
//         }

//         @keyframes pulse-slow {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0.6; }
//         }

//         .animate-pulse-slow {
//           animation: pulse-slow 3s ease-in-out infinite;
//         }

//         @keyframes gradient-x {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }

//         .animate-gradient-x {
//           background-size: 200% auto;
//           animation: gradient-x 3s ease infinite;
//         }

//         @keyframes fade-in-left {
//           from { opacity: 0; transform: translateX(-30px); }
//           to { opacity: 1; transform: translateX(0); }
//         }

//         .animate-fade-in-left {
//           animation: fade-in-left 0.8s ease-out;
//         }

//         @keyframes fade-in-right {
//           from { opacity: 0; transform: translateX(30px); }
//           to { opacity: 1; transform: translateX(0); }
//         }

//         .animate-fade-in-right {
//           animation: fade-in-right 0.8s ease-out;
//         }
//       `}</style>
//     </footer>
//   );
// }




import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/5 to-cyan-500/5"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-pink-500/30 rounded-full animate-float-particle"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-cyan-400/20 rounded-full animate-float-particle-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-purple-500/25 rounded-full animate-float-particle-slow"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-8 lg:gap-12">
          
          {/* Left Side - Logo & About */}
          <div className="space-y-6 animate-fade-in-left">
            {/* Logo */}
            <div className="group">
              <div className="inline-block relative">
                <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h2 className="text-3xl md:text-4xl font-black relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 animate-gradient-x">
                    The Festival
                  </span>
                  <span className="text-cyan-400 animate-pulse-slow">.</span>
                </h2>
              </div>
            </div>

            {/* About Content */}
            <p className="text-gray-300 leading-relaxed text-sm">
              Experience the ultimate music festival journey. Since 2012, we've been creating unforgettable moments that bring together music lovers, world-class artists, and cutting-edge production.
            </p>

            {/* Social Media & Quick Links Combined */}
            <div className="grid grid-cols-2 gap-6">
              {/* Social Media */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
                  Follow Us
                </h3>
                <div className="flex gap-2 flex-wrap">
                  <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110">
                    <Facebook size={16} />
                  </a>
                  <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110">
                    <Twitter size={16} />
                  </a>
                  <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-red-500 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110">
                    <Instagram size={16} />
                  </a>
                  <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110">
                    <Youtube size={16} />
                  </a>
                  <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110">
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Quick Links
                </h3>
                <div className="space-y-1.5">
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group text-sm">
                    <span className="w-1 h-1 rounded-full bg-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    About Us
                  </a>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group text-sm">
                    <span className="w-1 h-1 rounded-full bg-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Events
                  </a>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group text-sm">
                    <span className="w-1 h-1 rounded-full bg-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Map & Contact */}
          <div className="space-y-6 animate-fade-in-right">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Google Map */}
              <div className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-pink-500/50 transition-all duration-500 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1489276805654!2d88.36388931495623!3d22.57264998517315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277b027a7e8b1%3A0xdba35e3186c5b889!2sVictoria%20Memorial!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '250px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="relative z-0"
                ></iframe>
              </div>

              {/* Contact Details */}
              <div className="bg-gradient-to-b from-slate-900/60 to-slate-950/60 backdrop-blur-xl rounded-xl border border-white/10 p-6 space-y-4 hover:border-pink-500/30 transition-all duration-500 h-full">
                <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
                  Get In Touch
                </h3>

                {/* Address */}
                <div className="flex gap-3 group">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 group-hover:border-pink-500 transition-colors duration-300">
                    <MapPin size={14} className="text-pink-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-xs mb-0.5">Address</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      123 Festival Ave, Kolkata 700001
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-3 group">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 group-hover:border-cyan-500 transition-colors duration-300">
                    <Phone size={14} className="text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-xs mb-0.5">Phone</h4>
                    <p className="text-gray-400 text-xs">+91 98765 43210</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-3 group">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 group-hover:border-purple-500 transition-colors duration-300">
                    <Mail size={14} className="text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-xs mb-0.5">Email</h4>
                    <p className="text-gray-400 text-xs">info@thefestival.com</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex gap-3 group">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500/20 to-cyan-500/20 border border-pink-500/30 group-hover:border-pink-500 transition-colors duration-300">
                    <Clock size={14} className="text-pink-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-xs mb-0.5">Hours</h4>
                    <p className="text-gray-400 text-xs">Mon-Fri: 10AM - 8PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-gray-400 text-xs">
              © 2024 The Festival. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
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

        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out;
        }

        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out;
        }
      `}</style>
    </footer>
  );
}




