import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";

export default function App() {
  const [showSplash, setShowSplash] = useState(
    () => !sessionStorage.getItem("splash-seen")
  );

  const handleSplashDone = () => {
    sessionStorage.setItem("splash-seen", "1");
    setShowSplash(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {showSplash && <SplashScreen onDone={handleSplashDone} />}
      <Header />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
