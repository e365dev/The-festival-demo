// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import LavoNightclub from "./components/LavoNightclub";
// import BookPage from "./pages/BookPages";
// import ExplorePage from "./pages/ExplorePage";
// import EventsPages from "./pages/EventsPages";
// import AlbumsPage from "./pages/AlbumsPage";
// import GalleryPage from "./pages/GalleryPage";
// import GalleryDetailPage from "./pages/GalleryDetailPage";
// import EventDetailPage from "./pages/EventDetailPage";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LavoNightclub />} />
//         <Route path="/bookingpage" element={<BookPage />} />
//         <Route path="/aboutus" element={<ExplorePage />} />
//         <Route path="/events" element={<EventsPages />} />
//         <Route path="/event/card/:id" element={<EventDetailPage />} />

//         {/* Gallery */}
//         <Route path="/gallery" element={<GalleryPage />} />
//         <Route path="/gallery/card/:id" element={<GalleryDetailPage />} />

//         {/* Albums */}
//         <Route path="/albums/:id" element={<AlbumsPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;




import { BrowserRouter, Routes, Route } from "react-router-dom";

import LavoNightclub from "./components/LavoNightclub";
import ExplorePage from "./pages/ExplorePage";
import EventsPages from "./pages/EventsPages";
import AlbumsPage from "./pages/AlbumsPage";
import GalleryPage from "./pages/GalleryPage";
import GalleryDetailPage from "./pages/GalleryDetailPage";
import EventDetailPage from "./pages/EventDetailPage";

/* ✅ ADD THESE (or replace later with real pages) */
// import NewsPage from "./pages/NewsPage";
// import InvestorPage from "./pages/InvestorPage";
import LeadershipPage from "./pages/LeadershipPage";
// import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LavoNightclub />} />
        <Route path="/aboutus" element={<ExplorePage />} />
        <Route path="/events" element={<EventsPages />} />
        <Route path="/event/card/:id" element={<EventDetailPage />} />

        {/* Gallery */}
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/gallery/card/:id" element={<GalleryDetailPage />} />

        {/* Albums */}
        <Route path="/albums/:id" element={<AlbumsPage />} />

        {/* ✅ Resources dropdown routes */}
        {/* <Route path="/news" element={<NewsPage />} />
        <Route path="/investor" element={<InvestorPage />} /> */}
        <Route path="/leadership" element={<LeadershipPage />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
