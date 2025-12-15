import React from "react";

export default function SponsorsSection() {
  const sponsors = [
    { id: 1, name: "Johnson & Johnson", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Johnson_%26_Johnson_Logo.svg" },
    { id: 2, name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
    { id: 3, name: "AAOS", logo: "https://upload.wikimedia.org/wikipedia/commons/4/49/American_Academy_of_Orthopaedic_Surgeons_logo.svg" },
    { id: 4, name: "Lenovo", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg" },
    { id: 5, name: "Novo Nordisk", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Novo_Nordisk_logo.svg" },
    { id: 6, name: "Tech Mahindra", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Tech_Mahindra_New_Logo.svg" },
    { id: 7, name: "GSK", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/GSK_logo_2022.svg" },
    { id: 8, name: "Hitachi", logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Hitachi_logo.svg" },
    { id: 9, name: "BSE", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Bombay_Stock_Exchange_Logo.svg" },
    { id: 10, name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { id: 11, name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { id: 12, name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-600/5 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/5 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400">
              Our Happy Associates
            </span>
            <span className="text-cyan-400">.</span>
          </h2>
        </div>

        {/* Infinite Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-sponsor-marquee hover:pause-scroll will-change-transform">
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div key={index} className="mx-8 flex-shrink-0 group">
                <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-xl border border-slate-800 hover:border-pink-500/50 transition-all duration-300 hover:scale-110">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-20 h-20 md:w-24 md:h-24 object-contain 
                               filter grayscale hover:grayscale-0 
                               brightness-90 contrast-125 
                               opacity-60 group-hover:opacity-100 
                               transition-all duration-300"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        sponsor.name
                      )}&size=128&background=ec4899&color=fff&bold=true`;
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes sponsor-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-sponsor-marquee {
          animation: sponsor-marquee 45s linear infinite;
        }

        .pause-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
