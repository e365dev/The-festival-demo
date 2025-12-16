// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LavoNightclub from "./components/LavoNightclub";
// import BookPage from "./pages/BookPages";
// import ExplorePage from "./pages/ExplorePage";
// import EventsPages from "./pages/EventsPages";
// import AlbumsPage from "./pages/AlbumsPage";
// import GalleryPage from "./pages/GalleryPage"

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LavoNightclub />} />
//         <Route path="/bookingpage" element={<BookPage />} />
//         <Route path="/aboutus" element={<ExplorePage />} />
//         <Route path="/events" element={<EventsPages />} />
//         <Route path="/gallery" element={<GalleryPage />} />

//         {/* ✅ Dynamic routes for album navigation */}
//         <Route path="/albums/:id" element={<AlbumsPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;



import { BrowserRouter, Routes, Route } from "react-router-dom";

import LavoNightclub from "./components/LavoNightclub";
import BookPage from "./pages/BookPages";
import ExplorePage from "./pages/ExplorePage";
import EventsPages from "./pages/EventsPages";
import AlbumsPage from "./pages/AlbumsPage";
import GalleryPage from "./pages/GalleryPage";
import GalleryDetailPage from "./pages/GalleryDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LavoNightclub />} />
        <Route path="/bookingpage" element={<BookPage />} />
        <Route path="/aboutus" element={<ExplorePage />} />
        <Route path="/events" element={<EventsPages />} />

        {/* Gallery */}
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/gallery/card/:id" element={<GalleryDetailPage />} />

        {/* Albums */}
        <Route path="/albums/:id" element={<AlbumsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
