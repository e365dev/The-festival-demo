// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// /* =========================================
//    GALLERY DATA (SOURCE OF TRUTH)
// ========================================= */
// const galleries = [
//   {
//     id: 1,
//     title: "DREAMSONIC 2023",
//     year: "2023",
//     location: "World Tour",
//     cover: "/image/gallery1.jpeg",
//     images: [
//       "/image/gallery1.jpeg",
//       "/image/gallery2.jpeg",
//       "/image/gallery3.jpeg"
//     ]
//   },
//   {
//     id: 2,
//     title: "TOP OF THE WORLD TOUR 2022",
//     year: "2022",
//     location: "Global Tour",
//     cover:
//       "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80",
//     images: [
//       "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
//       "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80"
//     ]
//   }
// ];

// /* =========================================
//    GALLERY DETAIL PAGE
// ========================================= */
// export default function GalleryDetailPage() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//       const handleScroll = () => {
//         const scrollTop = window.scrollY;
//         const docHeight =
//           document.documentElement.scrollHeight -
//           document.documentElement.clientHeight;
  
//         const progress = (scrollTop / docHeight) * 100;
//         setScrollProgress(progress);
//       };
  
//       window.addEventListener("scroll", handleScroll);
//       handleScroll(); // initial call
  
//       return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//   const gallery = galleries.find(
//     (item) => item.id === Number(id)
//   );

//   if (!gallery) {
//     return (
//       <div className="min-h-screen bg-black text-white flex items-center justify-center">
//         Gallery not found
//       </div>
//     );
//   }

//   return (
//     <section className="min-h-screen bg-black text-white px-6 py-24">
//         <div className="fixed top-0 left-0 w-full h-1 bg-slate-900 z-50">
//             <div className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 transition-[width] duration-200 ease-out"
//                 style={{ width: `${scrollProgress}%` }}
//              />
//         </div>
//       {/* 🔙 Back Button */}
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-10 text-xs uppercase tracking-widest text-gray-400 hover:text-white transition"
//       >
//         ← Back to Gallery
//       </button>

//       {/* 🖼 Header */}
//       <h1 className="text-4xl md:text-5xl font-bold mb-2">
//         {gallery.title}
//       </h1>
//       <p className="text-gray-400 mb-12">
//         {gallery.year} • {gallery.location}
//       </p>

//       {/* 📸 Photos Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {gallery.images.map((img, index) => (
//           <div
//             key={index}
//             className="relative aspect-[4/5] overflow-hidden rounded-2xl group"
//           >
//             <img
//               src={img}
//               alt={`gallery-${index}`}
//               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


// import React, { useState, useEffect } from "react";
// import { ChevronLeft, Calendar, MapPin, Image, ZoomIn, Download, Share2 } from "lucide-react";

// /* =========================================
//    GALLERY DATA (SOURCE OF TRUTH)
// ========================================= */
// const galleries = [
//   {
//     id: 1,
//     title: "DREAMSONIC 2023",
//     year: "2023",
//     location: "World Tour",
//     cover: "/image/gallery1.jpeg",
//     images: [
//       "/image/gallery1.jpeg",
//       "/image/gallery2.jpeg",
//       "/image/gallery3.jpeg"
//     ]
//   },
//   {
//     id: 2,
//     title: "TOP OF THE WORLD TOUR 2022",
//     year: "2022",
//     location: "Global Tour",
//     cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80",
//     images: [
//       "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
//       "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80"
//     ]
//   }
// ];

// /* =========================================
//    GALLERY DETAIL PAGE
// ========================================= */
// export default function GalleryDetailPage() {
//   const id = 1; // Simulating useParams
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const docHeight =
//         document.documentElement.scrollHeight -
//         document.documentElement.clientHeight;

//       const progress = (scrollTop / docHeight) * 100;
//       setScrollProgress(progress);
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     setTimeout(() => setIsLoaded(true), 100);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const gallery = galleries.find((item) => item.id === Number(id));

//   if (!gallery) {
//     return (
//       <div className="min-h-screen bg-black text-white flex items-center justify-center">
//         <div className="text-center space-y-4">
//           <div className="text-6xl">📸</div>
//           <p className="text-xl">Gallery not found</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <section className="min-h-screen bg-black text-white relative overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] animate-float" />
//         <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] animate-float-delayed" />
        
//         {/* Grid overlay */}
//         <div className="absolute inset-0 opacity-[0.015]" style={{
//           backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
//           backgroundSize: '80px 80px'
//         }} />
//       </div>

//       {/* Progress Bar */}
//       <div className="fixed top-0 left-0 w-full h-1 bg-white/5 z-50 backdrop-blur-xl">
//         <div
//           className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 transition-[width] duration-200 ease-out shadow-[0_0_20px_rgba(168,85,247,0.5)]"
//           style={{ width: `${scrollProgress}%` }}
//         />
//       </div>

//       <div className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
//         {/* Back Button */}
//         <button
//           onClick={() => window.history.back()}
//           className={`mb-12 flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
//         >
//           <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
//           <span className="text-xs uppercase tracking-widest">Back to Galleries</span>
//         </button>

//         {/* Header Section */}
//         <div className={`mb-16 transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
//           <div className="flex flex-wrap items-start justify-between gap-6 mb-6">
//             <div className="space-y-4">
//               {/* Title */}
//               <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
//                 <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
//                   {gallery.title}
//                 </span>
//               </h1>

//               {/* Meta Info */}
//               <div className="flex flex-wrap items-center gap-4">
//                 <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
//                   <Calendar className="w-4 h-4 text-purple-400" />
//                   <span className="text-sm font-medium">{gallery.year}</span>
//                 </div>
                
//                 <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
//                   <MapPin className="w-4 h-4 text-cyan-400" />
//                   <span className="text-sm font-medium">{gallery.location}</span>
//                 </div>

//                 <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
//                   <Image className="w-4 h-4 text-pink-400" />
//                   <span className="text-sm font-medium">{gallery.images.length} Photos</span>
//                 </div>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex items-center gap-3">
//               <button className="p-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 group">
//                 <Share2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
//               </button>
//               <button className="p-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 group">
//                 <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
//               </button>
//             </div>
//           </div>

//           {/* Decorative line */}
//           <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
//         </div>

//         {/* Photos Grid */}
//         <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
//           {gallery.images.map((img, index) => (
//             <PhotoCard
//               key={index}
//               image={img}
//               index={index}
//               onClick={() => setSelectedImage(img)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Lightbox Modal */}
//       {selectedImage && (
//         <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
//       )}

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translate(0, 0) scale(1); }
//           33% { transform: translate(30px, -30px) scale(1.05); }
//           66% { transform: translate(-20px, 20px) scale(0.95); }
//         }
//         .animate-float {
//           animation: float 20s ease-in-out infinite;
//         }
//         .animate-float-delayed {
//           animation: float 25s ease-in-out infinite;
//           animation-delay: -8s;
//         }
//       `}</style>
//     </section>
//   );
// }

// /* =========================================
//    PHOTO CARD COMPONENT
// ========================================= */
// function PhotoCard({ image, index, onClick }) {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), index * 100);
//     return () => clearTimeout(timer);
//   }, [index]);

//   return (
//     <div
//       onClick={onClick}
//       className={`relative aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
//     >
//       {/* Image */}
//       <img
//         src={image}
//         alt={`gallery-${index}`}
//         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//       />

//       {/* Gradient overlays */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
//       <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//       {/* Border effect */}
//       <div className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/20 transition-all duration-500" />

//       {/* Shine effect */}
//       <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

//       {/* Hover overlay with icon */}
//       <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
//         <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
//           <ZoomIn className="w-6 h-6" />
//         </div>
//       </div>

//       {/* Photo number badge */}
//       <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-xl border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300">
//         <span className="text-xs font-medium">#{index + 1}</span>
//       </div>

//       {/* Corner accent */}
//       <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//     </div>
//   );
// }

// /* =========================================
//    LIGHTBOX COMPONENT
// ========================================= */
// function Lightbox({ image, onClose }) {
//   useEffect(() => {
//     document.body.style.overflow = 'hidden';
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, []);

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-fade-in"
//       onClick={onClose}
//     >
//       {/* Close button */}
//       <button
//         className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center group z-10"
//         onClick={onClose}
//       >
//         <span className="text-2xl group-hover:rotate-90 transition-transform duration-300">×</span>
//       </button>

//       {/* Image container */}
//       <div className="relative max-w-6xl w-full animate-scale-in" onClick={(e) => e.stopPropagation()}>
//         <img
//           src={image}
//           alt="Full size"
//           className="w-full h-auto rounded-2xl shadow-2xl"
//         />
        
//         {/* Download button */}
//         <button className="absolute bottom-6 right-6 px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-2 group">
//           <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
//           <span className="text-sm font-medium">Download</span>
//         </button>
//       </div>

//       <style jsx>{`
//         @keyframes fade-in {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes scale-in {
//           from { opacity: 0; transform: scale(0.9); }
//           to { opacity: 1; transform: scale(1); }
//         }
//         .animate-fade-in {
//           animation: fade-in 0.3s ease-out;
//         }
//         .animate-scale-in {
//           animation: scale-in 0.4s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// }




import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  Calendar,
  MapPin,
  Image,
  ZoomIn,
  Download,
  Share2
} from "lucide-react";

/* =========================================
   GALLERY DATA (SOURCE OF TRUTH)
========================================= */
const galleries = [
  {
    id: 1,
    title: "DREAMSONIC 2023",
    year: "2023",
    location: "World Tour",
    cover: "/image/gallery1.jpeg",
    images: [
      "/image/gallery1.jpeg",
      "/image/gallery2.jpeg",
      "/image/gallery3.jpeg"
    ]
  },
  {
    id: 2,
    title: "TOP OF THE WORLD TOUR 2022",
    year: "2022",
    location: "Global Tour",
    cover:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80"
    ]
  }
];

/* =========================================
   GALLERY DETAIL PAGE
========================================= */
export default function GalleryDetailPage() {
  const { id } = useParams();                 // ✅ REAL ROUTE PARAM
  const navigate = useNavigate();             // ✅ REAL NAVIGATION

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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
    handleScroll();

    setTimeout(() => setIsLoaded(true), 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const gallery = galleries.find(
    (item) => item.id === Number(id)
  );

  if (!gallery) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-6xl">📸</div>
          <p className="text-xl">Gallery not found</p>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] animate-float" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] animate-float-delayed" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }}
        />
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/5 z-50 backdrop-blur-xl">
        <div
          className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 transition-[width] duration-200 ease-out shadow-[0_0_20px_rgba(168,85,247,0.5)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}   // ✅ FIXED
          className={`mb-12 flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group ${
            isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4"
          }`}
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs uppercase tracking-widest">
            Back to Galleries
          </span>
        </button>

        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 delay-100 ${
            isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              {gallery.title}
            </span>
          </h1>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
              <Calendar className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium">{gallery.year}</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium">{gallery.location}</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
              <Image className="w-4 h-4 text-pink-400" />
              <span className="text-sm font-medium">
                {gallery.images.length} Photos
              </span>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        {/* Photos Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          {gallery.images.map((img, index) => (
            <PhotoCard
              key={index}
              image={img}
              index={index}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      {selectedImage && (
        <Lightbox
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
}

/* =========================================
   PHOTO CARD COMPONENT
========================================= */
function PhotoCard({ image, index, onClick }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      onClick={onClick}
      className={`relative aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer group transition-all duration-700 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
    >
      <img
        src={image}
        alt={`gallery-${index}`}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/20 transition-all duration-500" />
      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
          <ZoomIn className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}

/* =========================================
   LIGHTBOX COMPONENT
========================================= */
function Lightbox({ image, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
      onClick={onClose}
    >
      <button
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
        onClick={onClose}
      >
        ×
      </button>

      <div
        className="relative max-w-6xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={image} alt="Full size" className="w-full rounded-2xl" />
      </div>
    </div>
  );
}
