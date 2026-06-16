import { HashRouter, Routes, Route, useLocation, Link } from "react-router";
import { useEffect } from "react";
import { Header } from "./components/Header";
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
                <div className="pt-16 bg-muted dark:bg-slate-900/40 transition-colors duration-300">
                  <Services limit={4} showCTA={false} />
                  <div className="bg-muted dark:bg-slate-900/40 pb-16 text-center transition-colors duration-300 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-[1.02] active:scale-95 duration-200 cursor-pointer">
                      <Link to="/servicios">Ver Todos los Servicios</Link>
                    </Button>
                    <Button asChild variant="ghost" size="lg" className="border-2 border-accent text-slate-900 dark:text-white hover:bg-accent hover:text-accent-foreground font-bold px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-[1.02] active:scale-95 duration-200 cursor-pointer">
                      <Link to="/contacto">Solicitar Cotización</Link>
                    </Button>
                  </div>
                  <Testimonials />
                </div>
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