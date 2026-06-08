import { Briefcase, MapPin, Clock, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export function Employment() {
  const jobs = [
    {
      title: "Ingeniero de Automatización Senior",
      location: "Ciudad de México",
      type: "Tiempo completo",
      department: "Ingeniería",
      description: "Buscamos ingeniero con experiencia en PLC, SCADA y sistemas de automatización industrial.",
    },
    {
      title: "Técnico Electricista Industrial",
      location: "Monterrey, NL",
      type: "Tiempo completo",
      department: "Operaciones",
      description: "Técnico con certificación en instalaciones eléctricas industriales de media y alta tensión.",
    },
    {
      title: "Especialista en Mantenimiento Predictivo",
      location: "Querétaro, QRO",
      type: "Tiempo completo",
      department: "Mantenimiento",
      description: "Experiencia en análisis vibracional, termografía y ultrasonido industrial.",
    },
    {
      title: "Ingeniero de Proyectos",
      location: "Guadalajara, JAL",
      type: "Tiempo completo",
      department: "Proyectos",
      description: "Gestión integral de proyectos industriales desde diseño hasta implementación.",
    },
  ];

  return (
    <section id="empleo" className="py-20 bg-background transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-foreground mb-4">
            Únete a Nuestro Equipo
          </h2>
          <p className="text-xl text-secondary dark:text-muted-foreground max-w-3xl mx-auto">
            Buscamos profesionales apasionados por la innovación y el desarrollo tecnológico.
            Crece con nosotros y construye el futuro de la industria.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {jobs.map((job, index) => (
            <Card
              key={index}
              className="bg-muted dark:bg-card border-none dark:border dark:border-border/40 p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-accent hover:scale-[1.01]"
            >
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-primary dark:text-foreground mb-3">{job.title}</h3>
                
                <div className="flex flex-wrap gap-4 text-xs text-secondary dark:text-muted-foreground mb-4">
                  <span className="flex items-center gap-1 bg-white dark:bg-slate-800 px-2.5 py-1 rounded-md border border-border/40 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1 bg-white dark:bg-slate-800 px-2.5 py-1 rounded-md border border-border/40 font-medium">
                    <Clock className="w-3.5 h-3.5 text-accent" />
                    {job.type}
                  </span>
                  <span className="flex items-center gap-1 bg-white dark:bg-slate-800 px-2.5 py-1 rounded-md border border-border/40 font-medium">
                    <Briefcase className="w-3.5 h-3.5 text-accent" />
                    {job.department}
                  </span>
                </div>

                <p className="text-secondary dark:text-muted-foreground text-sm mb-4 leading-relaxed">{job.description}</p>
                
                <Button
                  variant="ghost"
                  className="flex items-center gap-1.5 p-0 hover:bg-transparent text-accent hover:text-accent/80 font-bold transition-all text-sm group"
                >
                  Ver detalles
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-primary dark:bg-card border-none dark:border dark:border-border/40 text-white dark:text-foreground p-8 md:p-12 text-center shadow-xl rounded-2xl">
          <CardContent className="p-0">
            <h3 className="text-3xl font-bold mb-4 text-white dark:text-foreground">¿No encuentras la posición ideal?</h3>
            <p className="text-xl mb-6 text-white/90 dark:text-muted-foreground max-w-2xl mx-auto">
              Envíanos tu CV y te contactaremos cuando surja una oportunidad que se ajuste a tu perfil.
            </p>
            <Button
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-3 rounded-lg flex items-center gap-2 mx-auto shadow-md"
            >
              Enviar CV Espontáneo
              <ChevronRight className="w-5 h-5" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
