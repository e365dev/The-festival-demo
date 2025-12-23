// import React, { useState, useEffect } from 'react';
// import { Search, Plus, Settings, Menu, Calendar, MapPin, TrendingUp, Users, Clock, Sparkles, Filter, Eye } from 'lucide-react';
// import { useNavigate } from "react-router-dom";


// export default function EventDashboard() {
//   const [events, setEvents] = useState([
//    {
//     id: 1,
//     title: "Raajkutir Pet Talks in Association with The Furry",
//     venue: "Raajkutir Swabhumi, Kolkata",
//     date: "January 18",
//     time: "11AM",
//     status: "Under Review",
//     statusColor: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
//     attendees: 234,
//     views: 1420,
//     image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop"
//   },
//   {
//     id: 2,
//     title: "Nick Carter - Who I Am Tour | Siliguri",
//     venue: "Utsodhaara Teesta Township, Siliguri",
//     date: "March 20",
//     time: "4PM Onwards",
//     status: "Cancelled",
//     statusColor: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
//     attendees: 189,
//     views: 892,
//     image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop"
//   },
//   {
//     id: 3,
//     title: "Sunburn Arena ft. DJ Snake",
//     venue: "GMR Arena, Hyderabad",
//     date: "February 10",
//     time: "6PM",
//     status: "Live",
//     statusColor: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
//     attendees: 3456,
//     views: 8920,
//     image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop"
//   },
//   {
//     id: 4,
//     title: "Comedy Night with Zakir Khan",
//     venue: "Phoenix Marketcity, Pune",
//     date: "January 25",
//     time: "7PM",
//     status: "Few Seats Left",
//     statusColor: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
//     attendees: 567,
//     views: 2340,
//     image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=400&h=300&fit=crop"
//   },
//   {
//     id: 5,
//     title: "Goa Sunset Beach Party",
//     venue: "Anjuna Beach, Goa",
//     date: "March 5",
//     time: "3PM",
//     status: "Live",
//     statusColor: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
//     attendees: 2134,
//     views: 5670,
//     image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"
//   },
//   {
//     id: 6,
//     title: "Startup Founders Meetup 2025",
//     venue: "WeWork Galaxy, Bengaluru",
//     date: "January 30",
//     time: "10AM",
//     status: "Open",
//     statusColor: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
//     attendees: 456,
//     views: 1890,
//     image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop"
//   },
//   {
//     id: 7,
//     title: "Classical Music Evening – Raga Nights",
//     venue: "NCPA, Mumbai",
//     date: "February 14",
//     time: "6:30PM",
//     status: "Live",
//     statusColor: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
//     attendees: 678,
//     views: 2890,
//     image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=300&fit=crop"
//   },
//   {
//     id: 8,
//     title: "Food Carnival & Street Fest",
//     venue: "Eco Park, New Town Kolkata",
//     date: "March 12",
//     time: "12PM",
//     status: "Selling Fast",
//     statusColor: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
//     attendees: 1234,
//     views: 4560,
//     image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400&h=300&fit=crop"
//   },
//   {
//     id: 9,
//     title: "Photography Walk – Old Delhi",
//     venue: "Chandni Chowk, Delhi",
//     date: "January 22",
//     time: "6AM",
//     status: "Open",
//     statusColor: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
//     attendees: 345,
//     views: 1230,
//     image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&h=300&fit=crop"
//   },
//   {
//     id: 10,
//     title: "Techno Warehouse Night",
//     venue: "Secret Location, Mumbai",
//     date: "February 29",
//     time: "10PM",
//     status: "Under Review",
//     statusColor: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
//     attendees: 789,
//     views: 2340,
//     image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop"
//   },
//   {
//     id: 11,
//     title: "Yoga & Mindfulness Retreat",
//     venue: "Rishikesh Ghat, Uttarakhand",
//     date: "March 18",
//     time: "7AM",
//     status: "Confirmed",
//     statusColor: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
//     attendees: 567,
//     views: 1890,
//     image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop"
//   }
//   ]);

 
//   const [searchQuery, setSearchQuery] = useState("");
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [filterOpen, setFilterOpen] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//   const handleScroll = () => {
//     const scrollTop = window.scrollY;
//     const docHeight =
//       document.documentElement.scrollHeight -
//       document.documentElement.clientHeight;

//     const progress = (scrollTop / docHeight) * 100;
//     setScrollProgress(progress);
//   };

//   window.addEventListener("scroll", handleScroll);
//   return () => window.removeEventListener("scroll", handleScroll);
// }, []);

//   useEffect(() => {
//     setTimeout(() => setIsLoaded(true), 100);
//   }, []);

//   const filteredEvents = events.filter(event =>
//     event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     event.venue.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const totalAttendees = events.reduce((sum, event) => sum + event.attendees, 0);
//   const totalViews = events.reduce((sum, event) => sum + event.views, 0);
//   const liveEvents = events.filter(e => e.status === "Live").length;

//   return (
//     <div className="min-h-screen bg-black relative overflow-hidden">

//       {/* Scroll Progress Bar */}
//       <div className="fixed top-0 left-0 w-full h-[3px] z-[9999] bg-white/10">
//         <div
//           className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 transition-all duration-150"
//           style={{ width: `${scrollProgress}%` }}
//         />
//       </div>

//       {/* Animated Background */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] animate-float" />
//         <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] animate-float-delayed" />
//         <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[150px] animate-pulse-slow" />
//       </div>

//       {/* Header */}
//       <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-2xl border-b border-white/10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             <div className="flex items-center gap-4">
//               <button 
//                 onClick={() => setMenuOpen(!menuOpen)}
//                 className="p-2.5 hover:bg-white/10 rounded-xl transition-all duration-300 group border border-white/5 hover:border-white/20"
//               >
//                 <Menu className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
//               </button>
//               <div className="flex items-center">
//                 <img
//                   src="/image/FESTIVAL.png"
//                   alt="distrikt by zomato"
//                   className="h-12 w-auto object-contain"
//                 />
//               </div>
//             </div>

//             {/* Quick Stats */}
//             <div className="hidden lg:flex items-center gap-6">
//               <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
//                 <TrendingUp className="w-4 h-4 text-green-400" />
//                 <span className="text-sm font-medium text-white">{liveEvents} Live</span>
//               </div>
//               <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
//                 <Users className="w-4 h-4 text-purple-400" />
//                 <span className="text-sm font-medium text-white">{totalAttendees.toLocaleString()}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Page Header with Stats */}
//         <div className={`mb-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
//           <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
//             <div>
//               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-4">
//                 <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
//                 <span className="text-xs uppercase tracking-widest text-gray-400">Event Management</span>
//               </div>
//               <h2 className="text-5xl md:text-6xl font-bold mb-3">
//                 <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
//                   Your Events
//                 </span>
//               </h2>
//               <p className="text-gray-400 text-lg">Manage and monitor all your events in one place</p>
//             </div>
            
//             <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-2xl transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 border border-white/20">
//               <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
//               Create Event
//             </button>
//           </div>

//           {/* Stats Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//             <StatCard
//               icon={<Calendar className="w-6 h-6" />}
//               label="Total Events"
//               value={events.length}
//               gradient="from-purple-500/20 to-pink-500/20"
//               iconColor="text-purple-400"
//               delay="100"
//             />
//             <StatCard
//               icon={<Users className="w-6 h-6" />}
//               label="Total Attendees"
//               value={totalAttendees.toLocaleString()}
//               gradient="from-cyan-500/20 to-blue-500/20"
//               iconColor="text-cyan-400"
//               delay="200"
//             />
//             <StatCard
//               icon={<Eye className="w-6 h-6" />}
//               label="Total Views"
//               value={totalViews.toLocaleString()}
//               gradient="from-pink-500/20 to-red-500/20"
//               iconColor="text-pink-400"
//               delay="300"
//             />
//           </div>
//         </div>

//         {/* Search and Filter Bar */}
//         <div className={`mb-8 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
//           <div className="flex flex-col sm:flex-row gap-4">
//             <div className="relative flex-1">
//               <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//               <input
//                 type="text"
//                 placeholder="Search events by title or venue..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-14 pr-5 py-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
//               />
//             </div>
//             <button
//               onClick={() => setFilterOpen(!filterOpen)}
//               className="inline-flex items-center gap-3 px-6 py-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all group"
//             >
//               <Filter className="w-5 h-5 text-purple-400 group-hover:rotate-180 transition-transform duration-500" />
//               <span className="font-medium">Filter</span>
//             </button>
//           </div>
//         </div>

//         {/* Events List */}
//         <div className="space-y-6">
//           {filteredEvents.map((event, index) => (
//             <EventCard key={event.id} event={event} index={index} isLoaded={isLoaded} />
//           ))}
//         </div>

//         {/* Empty State */}
//         {filteredEvents.length === 0 && (
//           <div className="text-center py-20 animate-fade-in">
//             <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-6">
//               <Search className="w-12 h-12 text-gray-400" />
//             </div>
//             <h3 className="text-2xl font-bold text-white mb-3">No events found</h3>
//             <p className="text-gray-400 text-lg">Try adjusting your search query or filters</p>
//           </div>
//         )}
//       </main>

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
//         @keyframes pulse-slow {
//           0%, 100% { opacity: 0.3; transform: scale(1); }
//           50% { opacity: 0.5; transform: scale(1.1); }
//         }
//         .animate-pulse-slow {
//           animation: pulse-slow 10s ease-in-out infinite;
//         }
//         @keyframes fade-in {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         .animate-fade-in {
//           animation: fade-in 0.5s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// }

// /* =========================================
//    STAT CARD COMPONENT
// ========================================= */
// function StatCard({ icon, label, value, gradient, iconColor, delay }) {
//   return (
//     <div 
//       className={`relative overflow-hidden rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 group`}
//       style={{ animationDelay: `${delay}ms` }}
//     >
//       {/* Gradient background */}
//       <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
//       {/* Shine effect */}
//       <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
//       <div className="relative flex items-center justify-between">
//         <div>
//           <p className="text-gray-400 text-sm mb-2 uppercase tracking-wider">{label}</p>
//           <p className="text-3xl font-bold text-white">{value}</p>
//         </div>
//         <div className={`${iconColor} transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
//           {icon}
//         </div>
//       </div>
//     </div>
//   );
// }

// /* =========================================
//    EVENT CARD COMPONENT
// ========================================= */
// function EventCard({ event, index, isLoaded }) {
//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate();

//   return (
//     <div
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       className={`group relative bg-white/[0.03] backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
//       style={{ transitionDelay: `${300 + index * 100}ms` }}
//     >
//       {/* Gradient overlay */}
//       <div className={`absolute inset-0 bg-gradient-to-br ${event.statusColor.replace('from-', 'from-').replace('to-', 'to-')}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
//       {/* Shine effect */}
//       <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

//       <div className="relative flex flex-col md:flex-row">
//         {/* Event Image */}
//         <div className="relative w-full md:w-80 h-64 md:h-auto overflow-hidden">
//           <img
//             src={event.image}
//             alt={event.title}
//             className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
//           />
//           {/* Gradient overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          
//           {/* Status badge */}
//           <div className="absolute top-6 left-6">
//             <span className={`px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${event.statusColor} shadow-xl backdrop-blur-xl border border-white/20`}>
//               {event.status}
//             </span>
//           </div>

//           {/* Quick stats on image */}
//           <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4">
//             <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-xl border border-white/20">
//               <Users className="w-4 h-4 text-purple-400" />
//               <span className="text-sm font-medium text-white">{event.attendees}</span>
//             </div>
//             <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-xl border border-white/20">
//               <Eye className="w-4 h-4 text-cyan-400" />
//               <span className="text-sm font-medium text-white">{event.views}</span>
//             </div>
//           </div>
//         </div>

//         {/* Event Details */}
//         <div className="flex-1 p-8 flex flex-col justify-between">
//           <div>
//             <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
//               {event.title}
//             </h3>

//             <div className="space-y-4 mb-8">
//               <div className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
//                 <div className="p-2 rounded-lg bg-white/5 border border-white/10">
//                   <MapPin className="w-5 h-5 text-purple-400" />
//                 </div>
//                 <span className="text-base font-medium">{event.venue}</span>
//               </div>
              
//               <div className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
//                 <div className="p-2 rounded-lg bg-white/5 border border-white/10">
//                   <Calendar className="w-5 h-5 text-cyan-400" />
//                 </div>
//                 <span className="text-base font-medium">{event.date}</span>
//               </div>

//               <div className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
//                 <div className="p-2 rounded-lg bg-white/5 border border-white/10">
//                   <Clock className="w-5 h-5 text-pink-400" />
//                 </div>
//                 <span className="text-base font-medium">{event.time}</span>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-wrap gap-4">
//             {/* <button className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white rounded-xl transition-all transform hover:scale-105 border border-white/20 hover:border-white/40 group/btn">
//               <Settings className="w-5 h-5 group-hover/btn:rotate-90 transition-transform duration-300" />
//               <span className="font-semibold">Manage Event</span>
//             </button> */}
            
//             <button
//               onClick={() => navigate(`/event/card/${event.id}`)}
//               className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white rounded-xl transition-all transform hover:scale-105 border border-white/20 hover:border-white/40"
//             >
//               <Settings className="w-5 h-5" />
//               <span className="font-semibold">Manage Event</span>
//             </button>


//             <button className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 text-white rounded-xl transition-all transform hover:scale-105 border border-purple-500/30 hover:border-purple-500/50">
//               <TrendingUp className="w-5 h-5" />
//               <span className="font-semibold">View Analytics</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Corner accent */}
//       <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//     </div>
//   );
// }





import React, { useState, useEffect } from 'react';
import { Search, Plus, Settings, Menu, Calendar, MapPin, TrendingUp, Users, Clock, Sparkles, Filter, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function EventDashboard() {
  const [events, setEvents] = useState([
   {
    id: 1,
    title: "Raajkutir Pet Talks in Association with The Furry",
    venue: "Raajkutir Swabhumi, Kolkata",
    date: "January 18",
    time: "11AM",
    status: "Under Review",
    statusColor: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
    attendees: 234,
    views: 1420,
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Nick Carter - Who I Am Tour | Siliguri",
    venue: "Utsodhaara Teesta Township, Siliguri",
    date: "March 20",
    time: "4PM Onwards",
    status: "Cancelled",
    statusColor: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
    attendees: 189,
    views: 892,
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Sunburn Arena ft. DJ Snake",
    venue: "GMR Arena, Hyderabad",
    date: "February 10",
    time: "6PM",
    status: "Live",
    statusColor: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
    attendees: 3456,
    views: 8920,
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Comedy Night with Zakir Khan",
    venue: "Phoenix Marketcity, Pune",
    date: "January 25",
    time: "7PM",
    status: "Few Seats Left",
    statusColor: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
    attendees: 567,
    views: 2340,
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    title: "Goa Sunset Beach Party",
    venue: "Anjuna Beach, Goa",
    date: "March 5",
    time: "3PM",
    status: "Live",
    statusColor: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
    attendees: 2134,
    views: 5670,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    title: "Startup Founders Meetup 2025",
    venue: "WeWork Galaxy, Bengaluru",
    date: "January 30",
    time: "10AM",
    status: "Open",
    statusColor: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
    attendees: 456,
    views: 1890,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop"
  },
  {
    id: 7,
    title: "Classical Music Evening – Raga Nights",
    venue: "NCPA, Mumbai",
    date: "February 14",
    time: "6:30PM",
    status: "Live",
    statusColor: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
    attendees: 678,
    views: 2890,
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=300&fit=crop"
  },
  {
    id: 8,
    title: "Food Carnival & Street Fest",
    venue: "Eco Park, New Town Kolkata",
    date: "March 12",
    time: "12PM",
    status: "Selling Fast",
    statusColor: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
    attendees: 1234,
    views: 4560,
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400&h=300&fit=crop"
  },
  {
    id: 9,
    title: "Photography Walk – Old Delhi",
    venue: "Chandni Chowk, Delhi",
    date: "January 22",
    time: "6AM",
    status: "Open",
    statusColor: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
    attendees: 345,
    views: 1230,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&h=300&fit=crop"
  },
  {
    id: 10,
    title: "Techno Warehouse Night",
    venue: "Secret Location, Mumbai",
    date: "February 29",
    time: "10PM",
    status: "Under Review",
    statusColor: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
    attendees: 789,
    views: 2340,
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop"
  },
  {
    id: 11,
    title: "Yoga & Mindfulness Retreat",
    venue: "Rishikesh Ghat, Uttarakhand",
    date: "March 18",
    time: "7AM",
    status: "Confirmed",
    statusColor: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
    attendees: 567,
    views: 1890,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop"
  }
  ]);

 
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [calendarOpen, setCalendarOpen] = useState(false);

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

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.venue.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalAttendees = events.reduce((sum, event) => sum + event.attendees, 0);
  const totalViews = events.reduce((sum, event) => sum + event.views, 0);
  const liveEvents = events.filter(e => e.status === "Live").length;

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-[9999] bg-white/10">
        <div
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] animate-float" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[150px] animate-pulse-slow" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-2xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2.5 hover:bg-white/10 rounded-xl transition-all duration-300 group border border-white/5 hover:border-white/20"
              >
                <Menu className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
              <div className="flex items-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Event Manager
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="hidden lg:flex items-center gap-6">
              <button
                onClick={() => setCalendarOpen(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 border border-purple-500/30 hover:border-purple-500/50 transition-all"
              >
                <Calendar className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-white">Calendar</span>
              </button>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium text-white">{liveEvents} Live</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Users className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-white">{totalAttendees.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Calendar Modal */}
      {calendarOpen && (
        <CalendarModal 
          events={events} 
          onClose={() => setCalendarOpen(false)} 
        />
      )}

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header with Stats */}
        <div className={`mb-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-4">
                <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
                <span className="text-xs uppercase tracking-widest text-gray-400">Event Management</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-3">
                <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                  Your Events
                </span>
              </h2>
              <p className="text-gray-400 text-lg">Manage and monitor all your events in one place</p>
            </div>
            
            <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-2xl transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 border border-white/20">
              <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              Create Event
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard
              icon={<Calendar className="w-6 h-6" />}
              label="Total Events"
              value={events.length}
              gradient="from-purple-500/20 to-pink-500/20"
              iconColor="text-purple-400"
              delay="100"
            />
            <StatCard
              icon={<Users className="w-6 h-6" />}
              label="Total Attendees"
              value={totalAttendees.toLocaleString()}
              gradient="from-cyan-500/20 to-blue-500/20"
              iconColor="text-cyan-400"
              delay="200"
            />
            <StatCard
              icon={<Eye className="w-6 h-6" />}
              label="Total Views"
              value={totalViews.toLocaleString()}
              gradient="from-pink-500/20 to-red-500/20"
              iconColor="text-pink-400"
              delay="300"
            />
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className={`mb-8 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search events by title or venue..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-5 py-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
              />
            </div>
            <button
              onClick={() => setCalendarOpen(true)}
              className="lg:hidden inline-flex items-center gap-3 px-6 py-5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 border border-purple-500/30 hover:border-purple-500/50 rounded-2xl transition-all group"
            >
              <Calendar className="w-5 h-5 text-purple-400" />
              <span className="font-medium">Calendar</span>
            </button>
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="inline-flex items-center gap-3 px-6 py-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all group"
            >
              <Filter className="w-5 h-5 text-purple-400 group-hover:rotate-180 transition-transform duration-500" />
              <span className="font-medium">Filter</span>
            </button>
          </div>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {filteredEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} isLoaded={isLoaded} />
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-20 animate-fade-in">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">No events found</h3>
            <p className="text-gray-400 text-lg">Try adjusting your search query or filters</p>
          </div>
        )}
      </main>

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
          animation-delay: -8s;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 10s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}

/* =========================================
   CALENDAR MODAL COMPONENT
========================================= */
function CalendarModal({ events, onClose }) {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 0, 1));
  const [selectedDate, setSelectedDate] = useState(null);

  /* =======================
     BUILD EVENTS MAP
  ======================= */
  const eventsByDate = {};
  events.forEach(event => {
    const [month, dayStr] = event.date.split(' ');
    const day = parseInt(dayStr);
    const monthIndex = [
      'January','February','March','April','May','June',
      'July','August','September','October','November','December'
    ].indexOf(month);

    const key = `2025-${monthIndex}-${day}`;
    if (!eventsByDate[key]) eventsByDate[key] = [];
    eventsByDate[key].push(event);
  });

  const monthNames = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
  ];

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    setSelectedDate(null);
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    setSelectedDate(null);
  };

  const getEventsForDay = (day) => {
    const key = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${day}`;
    return eventsByDate[key] || [];
  };

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-auto bg-black/90 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl">

        {/* HEADER */}
        <div className="sticky top-0 z-10 bg-black/95 backdrop-blur-xl border-b border-white/10 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Event Calendar
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-xl border border-white/10">
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <button onClick={prevMonth} className="p-2 hover:bg-white/10 rounded-xl border border-white/10">
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <div className="text-xl font-bold text-white">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </div>
            <button onClick={nextMonth} className="p-2 hover:bg-white/10 rounded-xl border border-white/10">
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        <div className="p-6">

          {/* DAY HEADERS */}
          <div className="grid grid-cols-7 gap-2 mb-2">
            {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => (
              <div key={d} className="text-center text-sm font-semibold text-gray-400 py-2">
                {d}
              </div>
            ))}
          </div>

          {/* =======================
              UPDATED CALENDAR DAYS
          ======================= */}
          <div className="grid grid-cols-7 gap-2">
            {days.map((day, index) => {
              const dayEvents = day ? getEventsForDay(day) : [];
              const hasEvents = dayEvents.length > 0;
              const isSelected = selectedDate === day;
              const firstEvent = dayEvents[0];

              return (
                <button
                  key={index}
                  onClick={() => day && setSelectedDate(isSelected ? null : day)}
                  disabled={!day}
                  className={`
                    relative aspect-square rounded-xl transition-all overflow-hidden group/day
                    ${!day ? 'invisible' : ''}
                    ${hasEvents
                      ? 'border-purple-500/50 hover:border-purple-500/70 hover:scale-105'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                    }
                    ${isSelected ? 'ring-2 ring-purple-500 scale-95' : ''}
                    border
                  `}
                >
                  {hasEvents && firstEvent ? (
                    <>
                      <img
                        src={firstEvent.image}
                        alt={firstEvent.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover/day:opacity-60 transition-opacity"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                      <div className="relative z-10 p-2 h-full flex flex-col justify-between">
                        <div className="text-sm font-bold text-white">{day}</div>

                        {dayEvents.length > 1 && (
                          <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center text-[10px] font-bold text-white">
                            {dayEvents.length}
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    <div className="p-2">
                      <div className="text-sm font-semibold text-white">{day}</div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* SELECTED DATE EVENTS (unchanged) */}
          {selectedDate && (
            <div className="mt-6">
              <h3 className="text-xl font-bold text-white mb-4">
                Events on {monthNames[currentDate.getMonth()]} {selectedDate}
              </h3>

              <div className="space-y-3">
                {getEventsForDay(selectedDate).map(event => (
                  <div key={event.id} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                    <div className="flex gap-4">
                      <img src={event.image} className="w-20 h-20 rounded-lg object-cover" />
                      <div>
                        <h4 className="font-semibold text-white">{event.title}</h4>
                        <div className="text-sm text-gray-400">{event.time} • {event.venue}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}


/* =========================================
   STAT CARD COMPONENT
========================================= */
function StatCard({ icon, label, value, gradient, iconColor, delay }) {
  return (
    <div 
      className={`relative overflow-hidden rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 group`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Shine effect */}
      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm mb-2 uppercase tracking-wider">{label}</p>
          <p className="text-3xl font-bold text-white">{value}</p>
        </div>
        <div className={`${iconColor} transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
          {icon}
        </div>
      </div>
    </div>
  );
}

/* =========================================
   EVENT CARD COMPONENT
========================================= */
function EventCard({ event, index, isLoaded }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative bg-white/[0.03] backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${300 + index * 100}ms` }}
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${event.statusColor.replace('from-', 'from-').replace('to-', 'to-')}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Shine effect */}
      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative flex flex-col md:flex-row">
        {/* Event Image */}
        <div className="relative w-full md:w-80 h-64 md:h-auto overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          
          {/* Status badge */}
          <div className="absolute top-6 left-6">
            <span className={`px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${event.statusColor} shadow-xl backdrop-blur-xl border border-white/20`}>
              {event.status}
            </span>
          </div>

          {/* Quick stats on image */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-xl border border-white/20">
              <Users className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-white">{event.attendees}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-xl border border-white/20">
              <Eye className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-white">{event.views}</span>
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="flex-1 p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
              {event.title}
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <span className="text-base font-medium">{event.venue}</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="text-base font-medium">{event.date}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <Clock className="w-5 h-5 text-pink-400" />
                </div>
                <span className="text-base font-medium">{event.time}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {/* <button className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white rounded-xl transition-all transform hover:scale-105 border border-white/20 hover:border-white/40 group/btn">
              <Settings className="w-5 h-5 group-hover/btn:rotate-90 transition-transform duration-300" />
              <span className="font-semibold">Manage Event</span>
            </button> */}
            
            <button
              onClick={() => navigate(`/event/card/${event.id}`)}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white rounded-xl transition-all transform hover:scale-105 border border-white/20 hover:border-white/40"
            >
              <Settings className="w-5 h-5" />
              <span className="font-semibold">Manage Event</span>
            </button>


            <button className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 text-white rounded-xl transition-all transform hover:scale-105 border border-purple-500/30 hover:border-purple-500/50">
              <TrendingUp className="w-5 h-5" />
              <span className="font-semibold">View Analytics</span>
            </button>
          </div>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
 )
};