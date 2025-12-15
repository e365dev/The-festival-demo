import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

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
      apple: null,
      bandcamp: "https://artist.bandcamp.com/album/echoes"
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
      apple: "https://music.apple.com/us/album/123456",
      bandcamp: null
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
      apple: null,
      bandcamp: "https://artist.bandcamp.com/album/solar-flare"
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
      apple: "https://music.apple.com/us/album/luminous-nights",
      bandcamp: null
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
      apple: null,
      bandcamp: "https://artist.bandcamp.com/album/aurora-dreams"
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
      apple: "https://music.apple.com/us/album/celestial-waves",
      bandcamp: null
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
      apple: null,
      bandcamp: "https://artist.bandcamp.com/album/nebula-echo"
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
      apple: "https://music.apple.com/us/album/gravity-pulse",
      bandcamp: null
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
      apple: null,
      bandcamp: "https://artist.bandcamp.com/album/starlit-skies"
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
      apple: "https://music.apple.com/us/album/harmonic-fusion",
      bandcamp: null
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
      apple: null,
      bandcamp: "https://artist.bandcamp.com/album/infinite-drift"
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
      apple: "https://music.apple.com/us/album/cosmic-afterglow",
      bandcamp: null
    }
  }
];

/* =========================================
   ✅ ALBUM PAGE
========================================= */
export default function AlbumsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    const selectedAlbum = albums.find(
      (item) => item.id === Number(id)
    );
    setAlbum(selectedAlbum || null);
  }, [id]);

  if (!album) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Album not found
      </div>
    );
  }

  /* ✅ SERVICES (AUTO HIDE IF NULL) */
  const services = [
    { label: "YouTube", action: "Play", url: album.services.youtube, icon: "/icons/youtube.svg" },
    { label: "Spotify", action: "Play", url: album.services.spotify, icon: "/icons/spotify.svg" },
    { label: "Apple Music", action: "Play", url: album.services.apple, icon: "/icons/apple-music.svg" },

    { divider: true },

    { label: "Bandcamp", action: "Go To", url: album.services.bandcamp, icon: "/icons/bandcamp.svg" }
  ];

  return (
    <section className="min-h-screen relative bg-black text-white overflow-hidden">

      {/* 🌌 Background */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${album.color} opacity-30 blur-[140px] animate-bg-pulse`}
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* 🔙 Back */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 z-20 text-xs uppercase tracking-widest text-gray-400 hover:text-white transition"
      >
        ← Back
      </button>

      {/* 🎵 Content */}
      <div className="relative z-10 flex flex-col items-center px-6 pt-24 pb-24 animate-page-enter">

        {/* Album Art */}
        <div className="relative mb-8 group">
          <div
            className={`absolute -inset-8 rounded-3xl bg-gradient-to-r ${album.bgGradient} blur-3xl opacity-40`}
          />
          <div className="relative w-56 h-56 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={album.image}
              alt={album.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-xl font-semibold tracking-wide text-center animate-fade-up">
          {album.title}
        </h1>

        <p className="text-sm text-gray-400 mt-1 mb-10 animate-fade-up delay-100">
          Choose music service
        </p>

        {/* 🎧 Services */}
        <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 space-y-2 animate-fade-up delay-200">
          {services.map((item, index) =>
            item.divider ? (
              <div key={index} className="my-3 h-px bg-white/10" />
            ) : (
              item.url && (
                <ServiceRow
                  key={index}
                  label={item.label}
                  action={item.action}
                  url={item.url}
                  icon={item.icon}
                />
              )
            )
          )}
        </div>
      </div>

      {/* 🎞 Animations */}
      <style jsx>{`
        @keyframes page-enter {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-page-enter {
          animation: page-enter 0.8s ease-out both;
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fade-up 0.8s ease-out both;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        @keyframes bg-pulse {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.4; }
        }
        .animate-bg-pulse {
          animation: bg-pulse 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

/* =========================================
   🔹 SERVICE ROW COMPONENT
========================================= */
function ServiceRow({ label, action, url, icon }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition group"
    >
      <div className="flex items-center gap-3">
        <img src={icon} alt={label} className="w-5 h-5" />
        <span className="text-sm font-medium group-hover:text-white transition">
          {label}
        </span>
      </div>

      <span className="px-4 py-1.5 text-xs rounded-lg bg-white/10 group-hover:bg-white/20 transition">
        {action}
      </span>
    </a>
  );
}
