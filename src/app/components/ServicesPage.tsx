import { Services } from "./Services";

export function ServicesPage() {
  return (
    <div className="pt-20 bg-background transition-colors duration-300">
      {/* Subpage Hero Banner */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-border/10 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3ODA4NjQ4NDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Fondo Industrial"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <span className="bg-accent/15 border border-accent/30 text-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
            Ingeniería y Operaciones
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
            Nuestros Servicios
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            Ofrecemos soluciones técnicas integrales para optimizar la productividad, seguridad y eficiencia de tus instalaciones comerciales e industriales.
          </p>
        </div>
      </section>

      {/* Services Grid Component */}
      <Services isSubPage={true} showCTA={true} />
    </div>
  );
}
