import { HashRouter, Routes, Route, useLocation, Link } from "react-router";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { ServicesPage } from "./components/ServicesPage";
import { Projects } from "./components/Projects";
import { Maintenance } from "./components/Maintenance";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Button } from "./components/ui/button";

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen animate-fade-in">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Services limit={4} showCTA={false} />
                  <div className="bg-muted dark:bg-slate-900/40 pb-16 text-center transition-colors duration-300">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/95 text-white dark:bg-accent dark:hover:bg-accent/90 dark:text-accent-foreground font-bold px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-[1.02] active:scale-95 duration-200 cursor-pointer">
                      <Link to="/servicios">Ver Todos los Servicios</Link>
                    </Button>
                  </div>
                  <Testimonials />
                </>
              }
            />
            <Route path="/quienes-somos" element={<About />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/mantenimiento" element={<Maintenance />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </HashRouter>
  );
}