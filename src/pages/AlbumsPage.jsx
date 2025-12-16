import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, Play, ExternalLink, Download, Sparkles } from "lucide-react";

/* =========================================
   ✅ SINGLE SOURCE OF TRUTH (DATA)
========================================= */
const albums = [
  {
    id: 1,
    title: "Echoes of Eternity",
    image: "/image/vinyl.png",
    color: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
    bgGradient: "from-pink-500 via-purple-500 to-cyan-500",
    services: {
      youtube: "https://www.youtube.com/watch?v=QVxv3q_OVb8",
      spotify: "https://open.spotify.com/album/XYZ111",
      apple: "https://music.apple.com/album/echoes-of-eternity",
      bandcamp: "https://artist.bandcamp.com/album/echoes",

      officialStore: "https://store.example.com/echoes-of-eternity",
      emp: "https://www.emp-shop.com/echoes-of-eternity",
      impericon: "https://www.impericon.com/echoes-of-eternity",
      burningShed: "https://burningshed.com/echoes-of-eternity",

      youtubeMusic: "https://music.youtube.com/echoes-of-eternity",
      deezer: "https://www.deezer.com/album/echoes-of-eternity",
      tidal: "https://tidal.com/browse/album/echoes-of-eternity",
      amazon: "https://music.amazon.com/albums/echoes-of-eternity",
      itunes: "https://www.apple.com/itunes/echoes-of-eternity"
    }
  },
  {
    id: 2,
    title: "Midnight Horizons",
    image: "/image/vinyl.png",
    color: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
    bgGradient: "from-pink-500 via-purple-500 to-cyan-500",
    services: {
      youtube: "https://www.youtube.com/watch?v=DEF456",
      spotify: "https://open.spotify.com/album/XYZ222",
      apple: "https://music.apple.com/album/midnight-horizons",
      bandcamp: "https://artist.bandcamp.com/album/midnight-horizons",

      officialStore: "https://store.example.com/midnight-horizons",
      emp: "https://www.emp-shop.com/midnight-horizons",
      impericon: "https://www.impericon.com/midnight-horizons",
      burningShed: "https://burningshed.com/midnight-horizons",

      youtubeMusic: "https://music.youtube.com/midnight-horizons",
      deezer: "https://www.deezer.com/album/midnight-horizons",
      tidal: "https://tidal.com/browse/album/midnight-horizons",
      amazon: "https://music.amazon.com/albums/midnight-horizons",
      itunes: "https://www.apple.com/itunes/midnight-horizons"
    }
  },
  {
    id: 3,
    title: "Solar Flare",
    image: "/image/vinyl.png",
    color: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
    bgGradient: "from-pink-500 via-purple-500 to-cyan-500",
    services: {
      youtube: "https://www.youtube.com/watch?v=SOLAR01",
      spotify: "https://open.spotify.com/album/SOLAR01",
      apple: "https://music.apple.com/album/solar-flare",
      bandcamp: "https://artist.bandcamp.com/album/solar-flare",

      officialStore: "https://store.example.com/solar-flare",
      emp: "https://www.emp-shop.com/solar-flare",
      impericon: "https://www.impericon.com/solar-flare",
      burningShed: "https://burningshed.com/solar-flare",

      youtubeMusic: "https://music.youtube.com/solar-flare",
      deezer: "https://www.deezer.com/album/solar-flare",
      tidal: "https://tidal.com/browse/album/solar-flare",
      amazon: "https://music.amazon.com/albums/solar-flare",
      itunes: "https://www.apple.com/itunes/solar-flare"
    }
  },
  {
    id: 4,
    title: "Luminous Nights",
    image: "/image/vinyl.png",
    color: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
    bgGradient: "from-pink-500 via-purple-500 to-cyan-500",
    services: {
      youtube: "https://www.youtube.com/watch?v=LUMI01",
      spotify: "https://open.spotify.com/album/LUMI01",
      apple: "https://music.apple.com/album/luminous-nights",
      bandcamp: "https://artist.bandcamp.com/album/luminous-nights",

      officialStore: "https://store.example.com/luminous-nights",
      emp: "https://www.emp-shop.com/luminous-nights",
      impericon: "https://www.impericon.com/luminous-nights",
      burningShed: "https://burningshed.com/luminous-nights",

      youtubeMusic: "https://music.youtube.com/luminous-nights",
      deezer: "https://www.deezer.com/album/luminous-nights",
      tidal: "https://tidal.com/browse/album/luminous-nights",
      amazon: "https://music.amazon.com/albums/luminous-nights",
      itunes: "https://www.apple.com/itunes/luminous-nights"
    }
  },
  {
    id: 5,
    title: "Aurora Dreams",
    image: "/image/vinyl.png",
    color: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
    bgGradient: "from-pink-500 via-purple-500 to-cyan-500",
    services: {
      youtube: "https://www.youtube.com/watch?v=AURORA01",
      spotify: "https://open.spotify.com/album/AURORA01",
      apple: "https://music.apple.com/album/aurora-dreams",
      bandcamp: "https://artist.bandcamp.com/album/aurora-dreams",

      officialStore: "https://store.example.com/aurora-dreams",
      emp: "https://www.emp-shop.com/aurora-dreams",
      impericon: "https://www.impericon.com/aurora-dreams",
      burningShed: "https://burningshed.com/aurora-dreams",

      youtubeMusic: "https://music.youtube.com/aurora-dreams",
      deezer: "https://www.deezer.com/album/aurora-dreams",
      tidal: "https://tidal.com/browse/album/aurora-dreams",
      amazon: "https://music.amazon.com/albums/aurora-dreams",
      itunes: "https://www.apple.com/itunes/aurora-dreams"
    }
  },
  {
    id: 6,
    title: "Celestial Waves",
    image: "/image/vinyl.png",
    color: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
    bgGradient: "from-pink-500 via-purple-500 to-cyan-500",
    services: {
      youtube: "https://www.youtube.com/watch?v=CELEST01",
      spotify: "https://open.spotify.com/album/CELEST01",
      apple: "https://music.apple.com/album/celestial-waves",
      bandcamp: "https://artist.bandcamp.com/album/celestial-waves",

      officialStore: "https://store.example.com/celestial-waves",
      emp: "https://www.emp-shop.com/celestial-waves",
      impericon: "https://www.impericon.com/celestial-waves",
      burningShed: "https://burningshed.com/celestial-waves",

      youtubeMusic: "https://music.youtube.com/celestial-waves",
      deezer: "https://www.deezer.com/album/celestial-waves",
      tidal: "https://tidal.com/browse/album/celestial-waves",
      amazon: "https://music.amazon.com/albums/celestial-waves",
      itunes: "https://www.apple.com/itunes/celestial-waves"
    }
  },
  {
    id: 7,
    title: "Nebula Echo",
    image: "/image/vinyl.png",
    color: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
    bgGradient: "from-pink-500 via-purple-500 to-cyan-500",
    services: {
      youtube: "https://www.youtube.com/watch?v=NEBULA01",
      spotify: "https://open.spotify.com/album/NEBULA01",
      apple: "https://music.apple.com/album/nebula-echo",
      bandcamp: "https://artist.bandcamp.com/album/nebula-echo",

      officialStore: "https://store.example.com/nebula-echo",
      emp: "https://www.emp-shop.com/nebula-echo",
      impericon: "https://www.impericon.com/nebula-echo",
      burningShed: "https://burningshed.com/nebula-echo",

      youtubeMusic: "https://music.youtube.com/nebula-echo",
      deezer: "https://www.deezer.com/album/nebula-echo",
      tidal: "https://tidal.com/browse/album/nebula-echo",
      amazon: "https://music.amazon.com/albums/nebula-echo",
      itunes: "https://www.apple.com/itunes/nebula-echo"
    }
  },
  {
    id: 8,
    title: "Gravity Pulse",
    image: "/image/vinyl.png",
    color: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
    bgGradient: "from-pink-500 via-purple-500 to-cyan-500",
    services: {
      youtube: "https://www.youtube.com/watch?v=GRAV01",
      spotify: "https://open.spotify.com/album/GRAV01",
      apple: "https://music.apple.com/album/gravity-pulse",
      bandcamp: "https://artist.bandcamp.com/album/gravity-pulse",

      officialStore: "https://store.example.com/gravity-pulse",
      emp: "https://www.emp-shop.com/gravity-pulse",
      impericon: "https://www.impericon.com/gravity-pulse",
      burningShed: "https://burningshed.com/gravity-pulse",

      youtubeMusic: "https://music.youtube.com/gravity-pulse",
      deezer: "https://www.deezer.com/album/gravity-pulse",
      tidal: "https://tidal.com/browse/album/gravity-pulse",
      amazon: "https://music.amazon.com/albums/gravity-pulse",
      itunes: "https://www.apple.com/itunes/gravity-pulse"
    }
  },
  {
    id: 9,
    title: "Starlit Skies",
    image: "/image/vinyl.png",
    color: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
    bgGradient: "from-pink-500 via-purple-500 to-cyan-500",
    services: {
      youtube: "https://www.youtube.com/watch?v=STAR01",
      spotify: "https://open.spotify.com/album/STAR01",
      apple: "https://music.apple.com/album/starlit-skies",
      bandcamp: "https://artist.bandcamp.com/album/starlit-skies",

      officialStore: "https://store.example.com/starlit-skies",
      emp: "https://www.emp-shop.com/starlit-skies",
      impericon: "https://www.impericon.com/starlit-skies",
      burningShed: "https://burningshed.com/starlit-skies",

      youtubeMusic: "https://music.youtube.com/starlit-skies",
      deezer: "https://www.deezer.com/album/starlit-skies",
      tidal: "https://tidal.com/browse/album/starlit-skies",
      amazon: "https://music.amazon.com/albums/starlit-skies",
      itunes: "https://www.apple.com/itunes/starlit-skies"
    }
  },
  {
    id: 10,
    title: "Harmonic Fusion",
    image: "/image/vinyl.png",
    color: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
    bgGradient: "from-pink-500 via-purple-500 to-cyan-500",
    services: {
      youtube: "https://www.youtube.com/watch?v=HARM01",
      spotify: "https://open.spotify.com/album/HARM01",
      apple: "https://music.apple.com/album/harmonic-fusion",
      bandcamp: "https://artist.bandcamp.com/album/harmonic-fusion",

      officialStore: "https://store.example.com/harmonic-fusion",
      emp: "https://www.emp-shop.com/harmonic-fusion",
      impericon: "https://www.impericon.com/harmonic-fusion",
      burningShed: "https://burningshed.com/harmonic-fusion",

      youtubeMusic: "https://music.youtube.com/harmonic-fusion",
      deezer: "https://www.deezer.com/album/harmonic-fusion",
      tidal: "https://tidal.com/browse/album/harmonic-fusion",
      amazon: "https://music.amazon.com/albums/harmonic-fusion",
      itunes: "https://www.apple.com/itunes/harmonic-fusion"
    }
  },
  {
    id: 11,
    title: "Infinite Drift",
    image: "/image/vinyl.png",
    color: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
    bgGradient: "from-pink-500 via-purple-500 to-cyan-500",
    services: {
      youtube: "https://www.youtube.com/watch?v=DRIFT01",
      spotify: "https://open.spotify.com/album/DRIFT01",
      apple: "https://music.apple.com/album/infinite-drift",
      bandcamp: "https://artist.bandcamp.com/album/infinite-drift",

      officialStore: "https://store.example.com/infinite-drift",
      emp: "https://www.emp-shop.com/infinite-drift",
      impericon: "https://www.impericon.com/infinite-drift",
      burningShed: "https://burningshed.com/infinite-drift",

      youtubeMusic: "https://music.youtube.com/infinite-drift",
      deezer: "https://www.deezer.com/album/infinite-drift",
      tidal: "https://tidal.com/browse/album/infinite-drift",
      amazon: "https://music.amazon.com/albums/infinite-drift",
      itunes: "https://www.apple.com/itunes/infinite-drift"
    }
  },
  {
    id: 12,
    title: "Cosmic Afterglow",
    image: "/image/vinyl.png",
    color: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
    bgGradient: "from-pink-500 via-purple-500 to-cyan-500",
    services: {
      youtube: "https://www.youtube.com/watch?v=COSMIC01",
      spotify: "https://open.spotify.com/album/COSMIC01",
      apple: "https://music.apple.com/album/cosmic-afterglow",
      bandcamp: "https://artist.bandcamp.com/album/cosmic-afterglow",

      officialStore: "https://store.example.com/cosmic-afterglow",
      emp: "https://www.emp-shop.com/cosmic-afterglow",
      impericon: "https://www.impericon.com/cosmic-afterglow",
      burningShed: "https://burningshed.com/cosmic-afterglow",

      youtubeMusic: "https://music.youtube.com/cosmic-afterglow",
      deezer: "https://www.deezer.com/album/cosmic-afterglow",
      tidal: "https://tidal.com/browse/album/cosmic-afterglow",
      amazon: "https://music.amazon.com/albums/cosmic-afterglow",
      itunes: "https://www.apple.com/itunes/cosmic-afterglow"
    }
  }
];

/* =========================================
   ✅ ALBUM PAGE (LOGIC ALIGNED)
========================================= */
export default function AlbumsPage() {
  const { id } = useParams();               // 🔑 ROUTE PARAM
  const navigate = useNavigate();

  const [album, setAlbum] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const foundAlbum = albums.find(
      (item) => item.id === Number(id)
    );

    if (foundAlbum) {
      setAlbum(foundAlbum);
      setTimeout(() => setIsLoaded(true), 120);
    } else {
      setAlbum(null);
    }
  }, [id]);

   /* 📏 SCROLL PROGRESS */
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  /* ❌ ALBUM NOT FOUND */
  if (!album) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center space-y-3">
          <p className="text-lg">Album not found</p>
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-gray-400 hover:text-white transition"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const getActionIcon = (action) => {
    switch (action) {
      case "Play":
        return <Play className="w-3.5 h-3.5" />;
      case "Download":
        return <Download className="w-3.5 h-3.5" />;
      default:
        return <ExternalLink className="w-3.5 h-3.5" />;
    }
  };

  /* ✅ SERVICE CONFIG (ALIGNED WITH PREVIOUS LOGIC) */
  const services = [
    { label: "YouTube", action: "Play", url: album.services.youtube, category: "stream" },
    { label: "Spotify", action: "Play", url: album.services.spotify, category: "stream" },
    { label: "Apple Music", action: "Play", url: album.services.apple, category: "stream" },

    { divider: true, label: "Shop Physical & Digital" },

    { label: "Official Store", action: "Go To", url: album.services.officialStore, category: "shop" },
    { label: "Bandcamp", action: "Go To", url: album.services.bandcamp, category: "shop" },
    { label: "EMP", action: "Go To", url: album.services.emp, category: "shop" },
    { label: "Impericon", action: "Go To", url: album.services.impericon, category: "shop" },
    { label: "Burning Shed", action: "Go To", url: album.services.burningShed, category: "shop" },

    { divider: true, label: "More Streaming Options" },

    { label: "YouTube Music", action: "Play", url: album.services.youtubeMusic, category: "stream" },
    { label: "Deezer", action: "Play", url: album.services.deezer, category: "stream" },
    { label: "TIDAL", action: "Play", url: album.services.tidal, category: "stream" },
    { label: "Amazon Music", action: "Play", url: album.services.amazon, category: "stream" },

    { divider: true, label: "Download" },

    { label: "iTunes Store", action: "Download", url: album.services.itunes, category: "download" }
  ];

  return (
    <section className="min-h-screen relative bg-black text-white overflow-hidden">
         <div className="fixed top-0 left-0 w-full h-1 bg-slate-900 z-50">
        <div
          className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 transition-[width] duration-200 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 🔙 BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
      >
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-xs uppercase tracking-widest">Back</span>
      </button>

      {/* 🎵 Content */}
      <div className={`relative z-10 flex flex-col items-center px-6 pt-24 pb-24 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Album Art with Enhanced Hover Effect */}
        <div className="relative mb-10 group cursor-pointer">
          {/* Glow effect */}
          <div className={`absolute -inset-12 rounded-[2rem] bg-gradient-to-r ${album.bgGradient} blur-[60px] opacity-0 group-hover:opacity-50 transition-all duration-700`} />
          
          {/* Rotating ring */}
          <div className="absolute -inset-2 rounded-[1.5rem] border-2 border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow" />
          
          {/* Album container */}
          <div className="relative w-72 h-72 rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
            <img
              src={album.image}
              alt={album.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
              <div className="flex items-center gap-2 text-white">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span className="text-sm font-medium">View Album Art</span>
              </div>
            </div>
          </div>

          {/* Floating particles effect */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 bg-white/30 rounded-full animate-float-particle opacity-0 group-hover:opacity-100`}
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 3) * 20}%`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Title with stagger animation */}
        <h1 className={`text-3xl font-bold tracking-tight text-center mb-2 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {album.title}
        </h1>

        <p className={`text-sm text-gray-400 mb-12 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Choose where to listen
        </p>

        {/* 🎧 Enhanced Services List */}
        <div className={`w-full max-w-md transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl p-5 shadow-2xl">
            {services.map((item, index) =>
              item.divider ? (
                <div key={index} className="my-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    {item.label && (
                      <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                        {item.label}
                      </span>
                    )}
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </div>
                </div>
              ) : item.url ? (
                <ServiceRow
                  key={index}
                  label={item.label}
                  action={item.action}
                  url={item.url}
                  category={item.category}
                  icon={getActionIcon(item.action)}
                  isHovered={hoveredService === index}
                  onHover={() => setHoveredService(index)}
                  onLeave={() => setHoveredService(null)}
                  delay={index * 30}
                />
              ) : null
            )}
          </div>
        </div>
      </div>

      {/* 🎞 Enhanced Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 25s ease-in-out infinite;
          animation-delay: -5s;
        }
        @keyframes float-particle {
          0%, 100% { transform: translateY(0) translateX(0) scale(0); opacity: 0; }
          50% { transform: translateY(-30px) translateX(10px) scale(1); opacity: 1; }
        }
        .animate-float-particle {
          animation: float-particle 3s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
}

/* =========================================
   🔹 SERVICE ROW (UNCHANGED)
========================================= */
function ServiceRow({
  label,
  action,
  url,
  category,
  icon,
  isHovered,
  onHover,
  onLeave,
  delay
}) {
  const getCategoryColor = (cat) => {
    switch (cat) {
      case "stream": return "from-purple-500/20 to-pink-500/20";
      case "shop": return "from-cyan-500/20 to-blue-500/20";
      case "download": return "from-green-500/20 to-emerald-500/20";
      default: return "from-gray-500/20 to-gray-600/20";
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="flex items-center justify-between px-5 py-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.08] border border-white/5 hover:border-white/20 transition-all duration-300 group mb-2 last:mb-0 relative overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* YOUR ORIGINAL UI — UNCHANGED */}
      <div className={`absolute inset-0 bg-gradient-to-r ${getCategoryColor(category)} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="relative z-10 flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
          {icon}
        </div>
        <div>
          <span className="text-sm font-medium">{label}</span>
          <span className="block text-xs text-gray-500">{action}</span>
        </div>
      </div>
      <div className="relative z-10 text-xs px-4 py-2 rounded-xl bg-white/5">
        {action}
      </div>
    </a>
  );
}
