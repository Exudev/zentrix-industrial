import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import logoImage from "../../imports/logo.png";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen lg:h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-950/70 z-10" />
      <img
        src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3ODA4NjQ4NDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
        alt="Industrial factory interior"
        className="absolute inset-0 w-full h-full object-cover scale-105 animate-pulse-slow"
      />

      <div className="relative z-20 text-center text-white px-4 max-w-5xl mx-auto pt-32 pb-12 lg:pt-0 lg:pb-0">
        <div className="mb-8">
          <div className="mx-auto mb-6 inline-block hover:scale-105 transition-transform duration-500">
            <img
              src={logoImage}
              alt="Zentrix Industrial Logo"
              className="h-28 w-28 md:h-40 md:w-40 object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] dark:brightness-0 dark:invert transition-all duration-300"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white">
            Zentrix Industrial
          </h1>
        </div>

        <p className="text-xl md:text-3xl mb-3 font-light text-slate-100">
          Soluciones inteligentes para una industria más eficiente.
        </p>

        <p className="text-lg md:text-xl mb-8 font-medium text-accent">
          República Dominicana | Proyectos Internacionales
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg hover:shadow-accent/20 hover:scale-[1.05] active:scale-95 transition-all duration-300 h-14 px-8 rounded-xl"
          >
            <Link to="/#servicios" className="flex items-center gap-2">
              Ver Servicios
              <ChevronRight className="w-5 h-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="border-2 border-accent text-white hover:bg-accent hover:text-accent-foreground backdrop-blur-sm font-bold hover:scale-[1.05] active:scale-95 transition-all duration-300 h-14 px-8 rounded-xl cursor-pointer"
          >
            <Link to="/#contacto">
              Solicitar Cotización
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
          {[
            { title: "¿Tienes una idea?", desc: "Nosotros la hacemos realidad" },
            { title: "¿Problemas recurrentes?", desc: "Los arrancamos de raíz" },
            { title: "Tu producción no se detiene", desc: "Nosotros tampoco" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/60 backdrop-blur-md p-5 rounded-xl border border-white/10 hover:border-accent/40 hover:bg-slate-900/80 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-[1.02]"
            >
              <p className="text-base font-bold text-white mb-1">{item.title}</p>
              <p className="text-sm text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
