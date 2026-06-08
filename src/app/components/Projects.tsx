import { Building2, Droplet, Car, Package } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Projects() {
  const projects = [
    {
      title: "Planta Automotriz - Automatización Completa",
      client: "AutoMex S.A.",
      image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxpbmR1c3RyaWFsJTIwZW5naW5lZXJpbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc4MDg2NDg0MHww&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Car,
      description: "Implementación de sistema de automatización para línea de ensamblaje con 40% de incremento en productividad.",
    },
    {
      title: "Planta de Tratamiento de Agua",
      client: "AquaPura Industrial",
      image: "https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHzfHxpbmR1c3RyaWFsJTIwZW5naW5lZXJpbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc4MDg2NDg0MHww&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Droplet,
      description: "Modernización completa de sistemas de control y monitoreo para tratamiento de aguas industriales.",
    },
    {
      title: "Centro de Distribución - Sistema Eléctrico",
      client: "LogiCorp",
      image: "https://images.unsplash.com/photo-1716191300020-b52dec5b70a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3ODA4NjQ4NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Package,
      description: "Instalación de sistema eléctrico de alta eficiencia con respaldo de energía solar.",
    },
    {
      title: "Complejo Industrial - Mantenimiento Integral",
      client: "IndustriaMax",
      image: "https://images.unsplash.com/photo-1610891015188-5369212db097?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3ODA4NjQ4NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Building2,
      description: "Programa de mantenimiento predictivo para complejo de 5 plantas con reducción del 60% en paros no programados.",
    },
  ];

  return (
    <section id="proyectos" className="py-20 bg-background dark:bg-slate-950/20 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-foreground mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-secondary dark:text-muted-foreground max-w-3xl mx-auto">
            Casos de éxito que demuestran nuestro compromiso con la excelencia
            y resultados medibles para nuestros clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden rounded-xl border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]"
            >
              <CardContent className="p-0 relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent transition-opacity duration-300 group-hover:from-slate-950/90" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <project.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">{project.title}</h3>
                      <p className="text-sm text-accent font-bold">{project.client}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-200 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
