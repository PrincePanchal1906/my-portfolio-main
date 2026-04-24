import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { useEffect } from "react";
import ReactGA from "react-ga4";

export default function App() {
  useEffect(() => {
    ReactGA.initialize("G-C9QDC9XQ9Q");

    // FORCE event
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Home Page",
    });

    console.log("GA Fired"); // check karva mate
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
