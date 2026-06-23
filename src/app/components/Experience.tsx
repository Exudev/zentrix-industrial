import fundicionImage from "../../photos/fundicion-moldeo.jpeg";
import granTonelajeImage from "../../photos/gran-tonelaje.jpeg";
import mantenimientoImage from "../../photos/mantenimiento.jpeg";
import motorReductorImage from "../../photos/motor-reductor.jpeg";
import recirculacionImage from "../../photos/recirculacion.jpeg";
import sistemaExtraccionImage from "../../photos/sistema-extraccion.jpeg";
import { Cpu, Wind, Flame, Cog, ShieldAlert, Wrench } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Líneas Automatizadas y Células Robotizadas",
      description:
        "Mantenimiento y control de procesos en líneas automatizadas con cintas transportadoras y células robotizadas encargadas de apilar el producto final.",
      sector: "Manufactura",
      image: mantenimientoImage,
      icon: Cpu,
    },
    {
      title: "Sistemas de Recirculación de Aire",
      description:
        "Mantenimiento preventivo y correctivo del sistema de recirculación de aire en industria manufacturera.",
      sector: "Manufactura",
      image: recirculacionImage,
      icon: Wind,
    },
    {
      title: "Armarios de Protección de Extracción",
      description:
        "Montaje y mantenimiento de armarios generales de protección de sistemas de extracción para la industria manufacturera.",
      sector: "Manufactura",
      image: sistemaExtraccionImage,
      icon: ShieldAlert,
    },
    {
      title: "Fundición y Moldeo Industrial",
      description:
        "Mantenimiento mecánico y control de procesos especializados en plantas de fundición y moldeo de alta temperatura.",
      sector: "Manufactura",
      image: fundicionImage,
      icon: Flame,
    },
    {
      title: "Motores de Alto Torque",
      description:
        "Mantenimiento correctivo y preventivo de motores reductores de alto torque para procesos industriales de moltura.",
      sector: "Alimentario",
      image: motorReductorImage,
      icon: Cog,
    },
    {
      title: "Maniobras y Gran Tonelaje",
      description:
        "Planificación y ejecución de cambios de motores reactores de gran tonelaje utilizando grúas elevadoras de alta capacidad.",
      sector: "Manufactura & Químico",
      image: granTonelajeImage,
      icon: Wrench,
    },
  ];

  return (
    <section
      id="experiencia"
      className="pt-24 pb-12 bg-background border-t border-border/30 transition-colors duration-300 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-extrabold text-accent bg-accent/10 px-3 py-1.5 rounded-full inline-block mb-4">
            Trayectoria Demostrable
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-foreground mb-6">
            Experiencia del Equipo
          </h2>
          <p className="text-lg md:text-xl text-secondary dark:text-muted-foreground leading-relaxed">
            Los miembros de nuestro equipo acumulan experiencia demostrable en
            plantas industriales de primer nivel consolidadas en sectores
            alimentario, automoción y manufactura.
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl bg-muted/30 dark:bg-slate-900/30 border border-border/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Visual Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80" />

                {/* Sector Badge */}
                <span className="absolute top-4 left-4 text-[10px] uppercase font-bold tracking-widest bg-accent text-accent-foreground px-2.5 py-1 rounded-md shadow-md">
                  {exp.sector}
                </span>
              </div>

              {/* Icon Circle (Outside the overflow-hidden image container to prevent clipping) */}
              <div className="absolute top-[232px] right-6 w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center shadow-lg shadow-accent/20 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 border border-accent/20 z-10">
                <exp.icon className="w-6 h-6" />
              </div>

              {/* Text content */}
              <div className="p-6 pt-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-primary dark:text-foreground mb-3 tracking-tight group-hover:text-accent transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-secondary/90 dark:text-muted-foreground/80 leading-relaxed font-medium">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
