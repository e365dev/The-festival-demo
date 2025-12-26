// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Calendar, MapPin, Clock, Users, Eye } from "lucide-react";

// /* =========================================
//    EVENTS DATA (IN SAME FILE)
// ========================================= */
// const events = [
//   {
//     id: 1,
//     title: "Raajkutir Pet Talks in Association with The Furry",
//     venue: "Raajkutir Swabhumi, Kolkata",
//     date: "January 18",
//     time: "11AM",
//     status: "Under Review",
//     statusColor: "from-pink-500 via-purple-500 to-cyan-500",
//     attendees: 234,
//     views: 1420,
//     image:
//       "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200"
//   },
//   {
//     id: 2,
//     title: "Nick Carter - Who I Am Tour | Siliguri",
//     venue: "Utsodhaara Teesta Township, Siliguri",
//     date: "March 20",
//     time: "4PM Onwards",
//     status: "Cancelled",
//     statusColor: "from-red-500 via-pink-500 to-purple-500",
//     attendees: 189,
//     views: 892,
//     image:
//       "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200"
//   },
//   {
//     id: 3,
//     title: "Sunburn Arena ft. DJ Snake",
//     venue: "GMR Arena, Hyderabad",
//     date: "February 10",
//     time: "6PM",
//     status: "Live",
//     statusColor: "from-green-500 via-emerald-500 to-cyan-500",
//     attendees: 3456,
//     views: 8920,
//     image:
//       "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200"
//   },
//   {
//     id: 4,
//     title: "Comedy Night with Zakir Khan",
//     venue: "Phoenix Marketcity, Pune",
//     date: "January 25",
//     time: "7PM",
//     status: "Few Seats Left",
//     statusColor: "from-yellow-500 via-orange-500 to-red-500",
//     attendees: 567,
//     views: 2340,
//     image:
//       "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1200"
//   },
//   {
//     id: 5,
//     title: "Goa Sunset Beach Party",
//     venue: "Anjuna Beach, Goa",
//     date: "March 5",
//     time: "3PM",
//     status: "Live",
//     statusColor: "from-cyan-500 via-blue-500 to-purple-500",
//     attendees: 2134,
//     views: 5670,
//     image:
//       "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200"
//   }
// ];

// /* =========================================
//    EVENT DETAIL PAGE
// ========================================= */
// export default function EventDetailPage() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const event = events.find((e) => e.id === Number(id));

//   if (!event) {
//     return (
//       <div className="min-h-screen bg-black text-white flex items-center justify-center">
//         Event not found
//       </div>
//     );
//   }

//   return (
//     <section className="min-h-screen bg-black text-white px-6 py-24">
//       {/* Back */}
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-10 text-sm uppercase tracking-widest text-gray-400 hover:text-white"
//       >
//         ← Back to Events
//       </button>

//       {/* Hero */}
//       <div className="relative h-[60vh] rounded-3xl overflow-hidden mb-12">
//         <img
//           src={event.image}
//           alt={event.title}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

//         <div className="absolute bottom-8 left-8">
//           <span
//             className={`px-5 py-2 rounded-full bg-gradient-to-r ${event.statusColor} font-bold`}
//           >
//             {event.status}
//           </span>
//           <h1 className="text-4xl md:text-5xl font-bold mt-4">
//             {event.title}
//           </h1>
//         </div>
//       </div>

//       {/* Info */}
//       <div className="grid md:grid-cols-2 gap-10">
//         <div className="space-y-5">
//           <Info icon={<MapPin />} text={event.venue} />
//           <Info icon={<Calendar />} text={event.date} />
//           <Info icon={<Clock />} text={event.time} />
//         </div>

//         <div className="space-y-5">
//           <Info icon={<Users />} text={`${event.attendees} Attendees`} />
//           <Info icon={<Eye />} text={`${event.views} Views`} />
//         </div>
//       </div>
//     </section>
//   );
// }

// /* =========================================
//    INFO ROW
// ========================================= */
// function Info({ icon, text }) {
//   return (
//     <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-5">
//       <div className="text-purple-400">{icon}</div>
//       <span className="text-lg font-medium">{text}</span>
//     </div>
//   );
// }


import React, { useState } from "react";
import { Calendar, MapPin, Plus, X, ExternalLink, Check } from "lucide-react";

export default function EventDetailPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    eventName: "",
    landscapeImage: null,
    portraitImage: null,
    video: null,
    galleryImages: [],
    eventDescription: "",
    instagramLink: "",
    city: "",
    venueAddress: "",
    organizer: "",
    category: "",
    subcategory: "",
    gstin: "",
    language: "",
    minAge: "",
    ticketAge: "",
    venueType: "",
    seating: "",
    kidFriendly: "",
    petFriendly: "",
    gatesOpenEarly: false,
    eventInstructions: "",
    youtubeVideo: "",
    prohibitedItems: "",
    faqs: "",
    pointsOfContact: [{ name: "", email: "", phone: "" }],
    sendCopyTo: ""
  });

  const [showSections, setShowSections] = useState({
    eventInstructions: false,
    youtubeVideo: false,
    prohibitedItems: false,
    faqs: false
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const addPointOfContact = () => {
    setFormData({
      ...formData,
      pointsOfContact: [...formData.pointsOfContact, { name: "", email: "", phone: "" }]
    });
  };

  const updatePointOfContact = (index, field, value) => {
    const updated = [...formData.pointsOfContact];
    updated[index][field] = value;
    setFormData({ ...formData, pointsOfContact: updated });
  };

  const removePointOfContact = (index) => {
    const updated = formData.pointsOfContact.filter((_, i) => i !== index);
    setFormData({ ...formData, pointsOfContact: updated });
  };

  const handleFileUpload = (field, file) => {
    if (file) {
      handleInputChange(field, URL.createObjectURL(file));
    }
  };

  const toggleSection = (section) => {
    setShowSections({ ...showSections, [section]: !showSections[section] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Event created successfully!");
  };

  const canProceedStep1 = formData.eventName && formData.landscapeImage && formData.portraitImage;
  const canProceedStep2 = formData.eventDescription && formData.city && formData.organizer && formData.category;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-6">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Create an event</h1>
          <p className="text-slate-600">
            You are just a few steps away from listing your event on <span className="text-blue-600 font-semibold">District</span>!
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-8 gap-3">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                  step >= num
                    ? "bg-blue-600 text-white"
                    : "bg-white text-slate-400 border-2 border-slate-300"
                }`}
              >
                {num}
              </div>
              {num < 3 && (
                <div
                  className={`w-16 h-1 mx-2 rounded ${
                    step > num ? "bg-blue-600" : "bg-slate-300"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Basic Details */}
          {step === 1 && (
            <div className="bg-white rounded-2xl shadow-sm p-8 space-y-8">
              {/* Event Name */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Event Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your event's name"
                  value={formData.eventName}
                  onChange={(e) => handleInputChange("eventName", e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  required
                />
              </div>

              {/* Event Card Images */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      Event card images <span className="text-red-500">*</span>
                    </h3>
                    <p className="text-sm text-slate-600">
                      Ensure images follow our event card guidelines and are provided in both formats.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Card guidelines <ExternalLink className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-2 border-dashed border-slate-300 rounded-xl p-6">
                    <h4 className="font-medium text-slate-900 mb-1">Landscape for website</h4>
                    <p className="text-sm text-slate-600 mb-3">16:9 aspect ratio (1600px by 900px)</p>
                    <p className="text-xs text-slate-500 mb-4">Max Size: 1.5MB</p>
                    <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors">
                      <span>Upload</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload("landscapeImage", e.target.files[0])}
                        className="hidden"
                      />
                    </label>
                    {formData.landscapeImage && (
                      <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                        <Check className="w-4 h-4" /> Image uploaded
                      </p>
                    )}
                  </div>

                  <div className="border-2 border-dashed border-slate-300 rounded-xl p-6">
                    <h4 className="font-medium text-slate-900 mb-1">Portrait for App</h4>
                    <p className="text-sm text-slate-600 mb-3">3:4 aspect ratio (900px by 1200px)</p>
                    <p className="text-xs text-slate-500 mb-4">Max Size: 1.5MB</p>
                    <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors">
                      <span>Upload</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload("portraitImage", e.target.files[0])}
                        className="hidden"
                      />
                    </label>
                    {formData.portraitImage && (
                      <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                        <Check className="w-4 h-4" /> Image uploaded
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Video Sneak Peek */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Video sneak peek</h3>
                    <p className="text-sm text-slate-600">
                      Your event cards can now feature videos on District.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Video guidelines <ExternalLink className="w-4 h-4" />
                  </button>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                    <div>
                      <p className="text-slate-600">Format</p>
                      <p className="font-medium">.mov or .mp4</p>
                    </div>
                    <div>
                      <p className="text-slate-600">Dimensions</p>
                      <p className="font-medium">3:4 ratio</p>
                    </div>
                    <div>
                      <p className="text-slate-600">Duration</p>
                      <p className="font-medium">10-60 secs</p>
                    </div>
                    <div>
                      <p className="text-slate-600">Max Size</p>
                      <p className="font-medium">5MB</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 mb-4">
                    Give attendees a preview before they buy tickets. Upload a video in the above specified specs.
                  </p>
                  <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-lg transition-colors">
                    <span>Upload</span>
                    <input
                      type="file"
                      accept="video/*"
                      onChange={(e) => handleFileUpload("video", e.target.files[0])}
                      className="hidden"
                    />
                  </label>
                  {formData.video && (
                    <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                      <Check className="w-4 h-4" /> Video uploaded
                    </p>
                  )}
                  <div className="mt-4 bg-blue-100 rounded-lg p-3">
                    <p className="text-sm text-blue-900">
                      <strong>Did you know?</strong> Video cards get 10% higher CTR than photo cards
                    </p>
                  </div>
                </div>
              </div>

              {/* Gallery */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Gallery</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Your event card now features a gallery - add multiple images and videos to bring your event to life!
                </p>
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-6">
                  <div className="flex gap-6 text-sm mb-4">
                    <div>
                      <p className="text-slate-600">Format</p>
                      <p className="font-medium">jpeg, png</p>
                    </div>
                    <div>
                      <p className="text-slate-600">Max size per image</p>
                      <p className="font-medium">1.5MB</p>
                    </div>
                  </div>
                  <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors">
                    <span>Upload</span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) => handleInputChange("galleryImages", Array.from(e.target.files))}
                      className="hidden"
                    />
                  </label>
                  {formData.galleryImages.length > 0 && (
                    <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                      <Check className="w-4 h-4" /> {formData.galleryImages.length} image(s) uploaded
                    </p>
                  )}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  disabled={!canProceedStep1}
                  className={`px-8 py-3 rounded-lg transition-colors ${
                    canProceedStep1
                      ? "bg-slate-900 text-white hover:bg-slate-800"
                      : "bg-slate-300 text-slate-500 cursor-not-allowed"
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Event Details */}
          {step === 2 && (
            <div className="bg-white rounded-2xl shadow-sm p-8 space-y-8">
              {/* Event Description */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-slate-700">
                    Event Description <span className="text-red-500">*</span>
                  </label>
                  <button
                    type="button"
                    className="flex items-center gap-2 px-3 py-1 text-sm text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Event description guidelines <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
                <div className="border border-slate-300 rounded-lg">
                  <div className="flex gap-2 p-3 border-b border-slate-300">
                    <button type="button" className="p-2 hover:bg-slate-100 rounded">
                      <strong>B</strong>
                    </button>
                    <button type="button" className="p-2 hover:bg-slate-100 rounded">
                      <em>I</em>
                    </button>
                    <button type="button" className="p-2 hover:bg-slate-100 rounded">
                      <u>U</u>
                    </button>
                  </div>
                  <textarea
                    placeholder="Your event's description"
                    value={formData.eventDescription}
                    onChange={(e) => handleInputChange("eventDescription", e.target.value)}
                    className="w-full px-4 py-3 min-h-[200px] focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Instagram Link */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Instagram Link
                </label>
                <input
                  type="url"
                  placeholder="Enter Valid Instagram Link"
                  value={formData.instagramLink}
                  onChange={(e) => handleInputChange("instagramLink", e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              {/* Location */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  Location <span className="text-red-500">*</span>
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Help people in the area discover your event and let attendees know where to show up.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      City <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      required
                    >
                      <option value="">Select city</option>
                      <option value="kolkata">Kolkata</option>
                      <option value="mumbai">Mumbai</option>
                      <option value="delhi">Delhi</option>
                      <option value="bangalore">Bangalore</option>
                      <option value="hyderabad">Hyderabad</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Search and select your venue address
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search address"
                        value={formData.venueAddress}
                        onChange={(e) => handleInputChange("venueAddress", e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Show Map ▼
                  </button>
                </div>
              </div>

              {/* Organizer & Category */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Organiser <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.organizer}
                    onChange={(e) => handleInputChange("organizer", e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    required
                  >
                    <option value="">Select organizer</option>
                    <option value="org1">Organization 1</option>
                    <option value="org2">Organization 2</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Category <span className="text-red-500">*</span>
                    <span className="text-xs text-slate-500 ml-2">(Upto 2)</span>
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => handleInputChange("category", e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    required
                  >
                    <option value="">Select category</option>
                    <option value="music">Music</option>
                    <option value="comedy">Comedy</option>
                    <option value="celebrations">Celebrations</option>
                    <option value="sports">Sports</option>
                  </select>
                </div>
              </div>

              {/* GSTIN & Subcategory */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    GSTIN (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Your GSTIN"
                    value={formData.gstin}
                    onChange={(e) => handleInputChange("gstin", e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Subcategory
                    <span className="text-xs text-slate-500 ml-2">(select a category)</span>
                  </label>
                  <select
                    value={formData.subcategory}
                    onChange={(e) => handleInputChange("subcategory", e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:bg-slate-100 disabled:cursor-not-allowed"
                    disabled={!formData.category}
                  >
                    <option value="">Select subcategory</option>
                    <option value="sub1">Subcategory 1</option>
                    <option value="sub2">Subcategory 2</option>
                  </select>
                </div>
              </div>

              {/* Festive Events Info */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-slate-700">
                  <strong>Listing festive events?</strong><br />
                  Mark your category as Celebrations and choose amongst New Year, Christmas and more as your sub-category.
                </p>
              </div>

              {/* Navigation */}
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-8 py-3 bg-slate-200 text-slate-900 rounded-lg hover:bg-slate-300 transition-colors"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  disabled={!canProceedStep2}
                  className={`px-8 py-3 rounded-lg transition-colors ${
                    canProceedStep2
                      ? "bg-slate-900 text-white hover:bg-slate-800"
                      : "bg-slate-300 text-slate-500 cursor-not-allowed"
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Event Guide & Contacts */}
          {step === 3 && (
            <div className="bg-white rounded-2xl shadow-sm p-8 space-y-8">
              {/* Event Guide */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Event Guide</h2>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Which languages will your event be performed in? <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.language}
                        onChange={(e) => handleInputChange("language", e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        required
                      >
                        <option value="">Select language</option>
                        <option value="english">English</option>
                        <option value="hindi">Hindi</option>
                        <option value="bengali">Bengali</option>
                        <option value="multiple">Multiple Languages</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        What is the minimum age allowed for entry? <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-2">
                        <select
                          value={formData.minAge}
                          onChange={(e) => handleInputChange("minAge", e.target.value)}
                          className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                          required
                        >
                          <option value="">Select age</option>
                          {[...Array(18)].map((_, i) => (
                            <option key={i} value={i + 1}>{i + 1}</option>
                          ))}
                        </select>
                        <span className="px-4 py-3 bg-slate-100 border border-slate-300 rounded-lg text-slate-700">
                          & above
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Above what age is a ticket required (paid entry)? <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-2">
                        <select
                          value={formData.ticketAge}
                          onChange={(e) => handleInputChange("ticketAge", e.target.value)}
                          className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                          required
                        >
                          <option value="">Select age</option>
                          {[...Array(18)].map((_, i) => (
                            <option key={i} value={i + 1}>{i + 1}</option>
                          ))}
                        </select>
                        <span className="px-4 py-3 bg-slate-100 border border-slate-300 rounded-lg text-slate-700">
                          & above
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Is your venue indoor or outdoor? <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.venueType}
                        onChange={(e) => handleInputChange("venueType", e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        required
                      >
                        <option value="">Select venue type</option>
                        <option value="indoor">Indoor</option>
                        <option value="outdoor">Outdoor</option>
                        <option value="both">Both</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Will your audience be seated or standing? <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.seating}
                        onChange={(e) => handleInputChange("seating", e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        required
                      >
                        <option value="">Select option</option>
                        <option value="seated">Seated</option>
                        <option value="standing">Standing</option>
                        <option value="both">Both</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Is your event kid-friendly? <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.kidFriendly}
                        onChange={(e) => handleInputChange("kidFriendly", e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        required
                      >
                        <option value="">Select option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Is your event pet-friendly? <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.petFriendly}
                        onChange={(e) => handleInputChange("petFriendly", e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        required
                      >
                        <option value="">Select option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Do gates open before the start time of the event? <span className="text-red-500">*</span>
                      </label>
                      <label className="flex items-center gap-3 px-4 py-3 border border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50">
                        <input
                          type="checkbox"
                          checked={formData.gatesOpenEarly}
                          onChange={(e) => handleInputChange("gatesOpenEarly", e.target.checked)}
                          className="w-5 h-5 text-blue-600"
                        />
                        <span className="text-slate-700">Yes, gates open early</span>
                      </label>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-600 mt-6">
                  Don't see an option that describes your event? Write to{" "}
                  <a href="mailto:events.servicing@district.in" className="text-blue-600 hover:underline">
                    events.servicing@district.in
                  </a>{" "}
                  and we'll sort you out.
                </p>
              </div>

              {/* Add More Sections */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Add more sections</h3>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => toggleSection("eventInstructions")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      showSections.eventInstructions
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                    }`}
                  >
                    Event Instructions {showSections.eventInstructions ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleSection("youtubeVideo")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      showSections.youtubeVideo
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                    }`}
                  >
                    Youtube Video {showSections.youtubeVideo ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleSection("prohibitedItems")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      showSections.prohibitedItems
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                    }`}
                  >
                    Prohibited Items {showSections.prohibitedItems ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleSection("faqs")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      showSections.faqs
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                    }`}
                  >
                    FAQs {showSections.faqs ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </button>
                </div>

                {/* Optional Sections */}
                <div className="mt-6 space-y-6">
                  {showSections.eventInstructions && (
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Event Instructions
                      </label>
                      <textarea
                        placeholder="Add instructions for attendees"
                        value={formData.eventInstructions}
                        onChange={(e) => handleInputChange("eventInstructions", e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none min-h-[100px]"
                      />
                    </div>
                  )}

                  {showSections.youtubeVideo && (
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        YouTube Video URL
                      </label>
                      <input
                        type="url"
                        placeholder="https://www.youtube.com/watch?v=..."
                        value={formData.youtubeVideo}
                        onChange={(e) => handleInputChange("youtubeVideo", e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      />
                    </div>
                  )}

                  {showSections.prohibitedItems && (
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Prohibited Items
                      </label>
                      <textarea
                        placeholder="List items not allowed at the event"
                        value={formData.prohibitedItems}
                        onChange={(e) => handleInputChange("prohibitedItems", e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none min-h-[100px]"
                      />
                    </div>
                  )}

                  {showSections.faqs && (
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Frequently Asked Questions
                      </label>
                      <textarea
                        placeholder="Add FAQs for your event"
                        value={formData.faqs}
                        onChange={(e) => handleInputChange("faqs", e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none min-h-[100px]"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Point of Contact */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  Point of Contact <span className="text-red-500">*</span>
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Please add POCs with whom event feedback will be shared
                </p>

                <div className="space-y-4">
                  {formData.pointsOfContact.map((contact, index) => (
                    <div key={index} className="relative">
                      <div className="grid md:grid-cols-3 gap-4">
                        <input
                          type="text"
                          placeholder="Name"
                          value={contact.name}
                          onChange={(e) => updatePointOfContact(index, "name", e.target.value)}
                          className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                          required
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          value={contact.email}
                          onChange={(e) => updatePointOfContact(index, "email", e.target.value)}
                          className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                          required
                        />
                        <input
                          type="tel"
                          placeholder="Phone"
                          value={contact.phone}
                          onChange={(e) => updatePointOfContact(index, "phone", e.target.value)}
                          className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                          required
                        />
                      </div>
                      {formData.pointsOfContact.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removePointOfContact(index)}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full hover:bg-red-600 flex items-center justify-center transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={addPointOfContact}
                    className="flex items-center gap-2 px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    <Plus className="w-4 h-4" /> Add
                  </button>
                </div>
              </div>

              {/* Send Copy To */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Send a copy of every sale to
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  value={formData.sendCopyTo}
                  onChange={(e) => handleInputChange("sendCopyTo", e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              {/* Navigation */}
              <div className="flex justify-between pt-6">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-8 py-3 bg-slate-200 text-slate-900 rounded-lg hover:bg-slate-300 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Submit Event
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}