import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import SpaceScene from "./components/SpaceScene";
import Website from "./components/Website";
import Navbar from "./components/Navbar";
import PlaceholderPage from "./components/PlaceholderPage";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";

function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <div className="fixed inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <SpaceScene isHome={isHome} />
        </Canvas>
      </div>

      {/* FIXED NAVBAR */}
      <Navbar />

      {/* CONTENT ROUTES */}
      <Routes>
        <Route path="/" element={<Website />} />
        <Route path="/projects" element={<PlaceholderPage title="Projects" />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />

        {/* Other Routes */}
        <Route path="/about" element={<PlaceholderPage title="About Us" />} />
        <Route path="/team" element={<PlaceholderPage title="Team" />} />
        <Route path="/calendar" element={<PlaceholderPage title="Astronomy Calendar" />} />
        <Route path="/competitions" element={<PlaceholderPage title="Competitions" />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
