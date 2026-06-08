import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import logoImage from "../../imports/WhatsApp_Image_2026-06-07_at_17.16.04-removebg-preview.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Quiénes Somos", href: "#quienes-somos" },
    { name: "Servicios", href: "#servicios" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Mantenimiento", href: "#mantenimiento" },
    { name: "Empleo", href: "#empleo" },
    { name: "Blog", href: "#blog" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-background/70 backdrop-blur-md border-b border-border/40 shadow-sm transition-all duration-300">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between animate-fade-in">
          <div className="flex items-center space-x-2">
            <img
              src={logoImage}
              alt="Zentrix Industrial Logo"
              className="h-14 w-auto object-contain dark:brightness-0 dark:invert transition-all duration-300"
            />
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/85 dark:text-foreground/90 hover:text-accent dark:hover:text-accent transition-colors font-medium text-sm"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg text-foreground hover:bg-muted/80 transition-all active:scale-95 duration-200"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 transition-transform hover:rotate-12" />
              ) : (
                <Sun className="w-5 h-5 text-accent transition-transform hover:rotate-45" />
              )}
            </button>

            <button
              className="lg:hidden p-2.5 rounded-lg text-foreground hover:bg-muted/80 transition-all active:scale-95 duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-slide-down">
            <div className="flex flex-col space-y-2 border-t border-border/40 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-accent dark:hover:text-accent transition-colors py-2 px-3 rounded-md hover:bg-muted/50 text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
