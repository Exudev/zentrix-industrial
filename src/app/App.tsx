import { HashRouter, Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Maintenance } from "./components/Maintenance";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

// Helper component to scroll to top or target section on route change
function ScrollToTarget() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTarget />
      <div className="min-h-screen animate-fade-in bg-background text-foreground transition-colors duration-300">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <div className="bg-muted dark:bg-slate-900/40 transition-colors duration-300">
                  <Hero />
                  <About />
                  <Services />
                  <Maintenance />
                  <Contact />
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </HashRouter>
  );
}