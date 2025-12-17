import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import SpaceScene from "./components/SpaceScene";
import Website from "./components/Website";
<<<<<<< HEAD
import Navbar from "./components/Navbar";
import PlaceholderPage from "./components/PlaceholderPage";
=======
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";

function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";
>>>>>>> aa83ee2 (draft 1: events & gallery page)

  return (
<<<<<<< HEAD
    <Router>
      {/* FIXED 3D BACKGROUND */}
      <div className="fixed inset-0 -z-10">
=======
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-gradient-to-b from-[var(--bg-dark)] to-transparent pointer-events-none">
        <Link to="/" className="text-2xl font-bold text-white pointer-events-auto hover:text-[var(--accent-blue)] transition-colors">NEXUS</Link>
        <div className="flex gap-6 pointer-events-auto">
          <Link to="/" className="text-[var(--text-gray)] hover:text-white transition-colors">Home</Link>
          <Link to="/events" className="text-[var(--text-gray)] hover:text-white transition-colors">Events</Link>
          <Link to="/gallery" className="text-[var(--text-gray)] hover:text-white transition-colors">Gallery</Link>
        </div>
      </nav>

      <div className="fixed inset-0 -z-10 bg-[var(--bg-dark)]">
>>>>>>> aa83ee2 (draft 1: events & gallery page)
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <SpaceScene isHome={isHome} />
        </Canvas>
      </div>

<<<<<<< HEAD
      {/* FIXED NAVBAR */}
      <Navbar />

      {/* CONTENT ROUTES */}
      <Routes>
        <Route path="/" element={<Website />} />

        {/* Project Routes */}
        <Route path="/projects/past" element={<PlaceholderPage title="Past Projects" />} />
        <Route path="/projects/ongoing" element={<PlaceholderPage title="Ongoing Projects" />} />
        <Route path="/projects/upcoming" element={<PlaceholderPage title="Upcoming Projects" />} />

        {/* Event Routes */}
        <Route path="/events/upcoming" element={<PlaceholderPage title="Upcoming Events" />} />
        <Route path="/events/ongoing" element={<PlaceholderPage title="Ongoing Events" />} />
        <Route path="/events/past" element={<PlaceholderPage title="Past Events" />} />

        {/* Other Routes */}
        <Route path="/gallery" element={<PlaceholderPage title="Gallery" />} />
        <Route path="/about" element={<PlaceholderPage title="About Us" />} />
        <Route path="/team" element={<PlaceholderPage title="Team" />} />
        <Route path="/calendar" element={<PlaceholderPage title="Astronomy Calendar" />} />
        <Route path="/competitions" element={<PlaceholderPage title="Competitions" />} />
      </Routes>
    </Router>
=======
      <Routes>
        <Route path="/" element={<Website />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
>>>>>>> aa83ee2 (draft 1: events & gallery page)
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
