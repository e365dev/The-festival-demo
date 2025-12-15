import { BrowserRouter, Routes, Route } from "react-router-dom";
import LavoNightclub from "./components/LavoNightclub";
import BookPage from "./pages/BookPages";
import ExplorePage from "./pages/ExplorePage"
import EventsPages from "./pages/EventsPages"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LavoNightclub />} />
          <Route path="/bookingpage" element={<BookPage />} />
          <Route path="/aboutus" element={<ExplorePage />} />
          <Route path="/events" element={<EventsPages />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
