// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LavoNightclub from "./components/LavoNightclub";
// import BookPage from "./pages/BookPages";
// import ExplorePage from "./pages/ExplorePage";
// import EventsPages from "./pages/EventsPages";
// import PhotoPage from "./pages/PhotoPage";
// import AlbumsPage from "./pages/AlbumsPage";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LavoNightclub />} />
//         <Route path="/bookingpage" element={<BookPage />} />
//         <Route path="/aboutus" element={<ExplorePage />} />
//         <Route path="/events" element={<EventsPages />} />

//         {/* ✅ MATCHES NAVIGATION */}
//         <Route path="/photos" element={<PhotoPage />} />
//         <Route path="/albums" element={<AlbumsPage />} />
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LavoNightclub />} />
        <Route path="/bookingpage" element={<BookPage />} />
        <Route path="/aboutus" element={<ExplorePage />} />
        <Route path="/events" element={<EventsPages />} />

        {/* ✅ Dynamic routes for album navigation */}
        <Route path="/albums/:id" element={<AlbumsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
