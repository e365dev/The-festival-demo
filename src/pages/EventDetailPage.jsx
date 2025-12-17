import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Calendar, MapPin, Clock, Users, Eye } from "lucide-react";

/* =========================================
   EVENTS DATA (IN SAME FILE)
========================================= */
const events = [
  {
    id: 1,
    title: "Raajkutir Pet Talks in Association with The Furry",
    venue: "Raajkutir Swabhumi, Kolkata",
    date: "January 18",
    time: "11AM",
    status: "Under Review",
    statusColor: "from-pink-500 via-purple-500 to-cyan-500",
    attendees: 234,
    views: 1420,
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200"
  },
  {
    id: 2,
    title: "Nick Carter - Who I Am Tour | Siliguri",
    venue: "Utsodhaara Teesta Township, Siliguri",
    date: "March 20",
    time: "4PM Onwards",
    status: "Cancelled",
    statusColor: "from-red-500 via-pink-500 to-purple-500",
    attendees: 189,
    views: 892,
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200"
  },
  {
    id: 3,
    title: "Sunburn Arena ft. DJ Snake",
    venue: "GMR Arena, Hyderabad",
    date: "February 10",
    time: "6PM",
    status: "Live",
    statusColor: "from-green-500 via-emerald-500 to-cyan-500",
    attendees: 3456,
    views: 8920,
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200"
  },
  {
    id: 4,
    title: "Comedy Night with Zakir Khan",
    venue: "Phoenix Marketcity, Pune",
    date: "January 25",
    time: "7PM",
    status: "Few Seats Left",
    statusColor: "from-yellow-500 via-orange-500 to-red-500",
    attendees: 567,
    views: 2340,
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1200"
  },
  {
    id: 5,
    title: "Goa Sunset Beach Party",
    venue: "Anjuna Beach, Goa",
    date: "March 5",
    time: "3PM",
    status: "Live",
    statusColor: "from-cyan-500 via-blue-500 to-purple-500",
    attendees: 2134,
    views: 5670,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200"
  }
];

/* =========================================
   EVENT DETAIL PAGE
========================================= */
export default function EventDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = events.find((e) => e.id === Number(id));

  if (!event) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Event not found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white px-6 py-24">
      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        className="mb-10 text-sm uppercase tracking-widest text-gray-400 hover:text-white"
      >
        ← Back to Events
      </button>

      {/* Hero */}
      <div className="relative h-[60vh] rounded-3xl overflow-hidden mb-12">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        <div className="absolute bottom-8 left-8">
          <span
            className={`px-5 py-2 rounded-full bg-gradient-to-r ${event.statusColor} font-bold`}
          >
            {event.status}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            {event.title}
          </h1>
        </div>
      </div>

      {/* Info */}
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-5">
          <Info icon={<MapPin />} text={event.venue} />
          <Info icon={<Calendar />} text={event.date} />
          <Info icon={<Clock />} text={event.time} />
        </div>

        <div className="space-y-5">
          <Info icon={<Users />} text={`${event.attendees} Attendees`} />
          <Info icon={<Eye />} text={`${event.views} Views`} />
        </div>
      </div>
    </section>
  );
}

/* =========================================
   INFO ROW
========================================= */
function Info({ icon, text }) {
  return (
    <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-5">
      <div className="text-purple-400">{icon}</div>
      <span className="text-lg font-medium">{text}</span>
    </div>
  );
}
