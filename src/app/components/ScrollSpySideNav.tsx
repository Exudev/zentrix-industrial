import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";

export function ScrollSpySideNav() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    const ids = [
      "inicio",
      "quienes-somos",
      "servicios",
      "proyectos",
      "mantenimiento",
      "empleo",
      "contacto",
    ];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActiveSection("inicio");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { id: "inicio", name: "Inicio" },
    { id: "quienes-somos", name: "Quiénes Somos" },
    { id: "servicios", name: "Servicios" },
    { id: "proyectos", name: "Proyectos" },
    { id: "mantenimiento", name: "Mantenimiento" },
    { id: "empleo", name: "Empleo" },
    { id: "contacto", name: "Contacto" },
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-4 bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg px-2.5 py-5 rounded-full border border-border/40 shadow-2xl transition-all duration-300">
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="group relative flex items-center justify-center w-6 h-6"
            aria-label={`Ir a ${item.name}`}
          >
            {/* Label displayed on hover OR if active (positioned absolutely to the left of the dot) */}
            <span
              className={`absolute right-8 py-1.5 px-3 rounded-xl text-xs font-bold transition-all duration-300 shadow-md whitespace-nowrap flex items-center gap-1.5 border border-border/20 ${
                isActive
                  ? "bg-accent text-accent-foreground scale-100 opacity-100 translate-x-0"
                  : "bg-slate-900 text-white dark:bg-slate-800 opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 group-hover:pointer-events-auto"
              }`}
            >
              {isActive && <ArrowLeft className="w-3.5 h-3.5 animate-pulse" />}
              {item.name}
            </span>

            {/* Dot Indicator */}
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 border shadow-md ${
                isActive
                  ? "bg-accent border-accent scale-125 ring-4 ring-accent/20"
                  : "bg-slate-300 dark:bg-slate-800 border-border/60 group-hover:border-accent group-hover:scale-110"
              }`}
            />
          </a>
        );
      })}
    </div>
  );
}
