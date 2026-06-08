import { Wrench, Cog, Bot, Sun, Snowflake, Zap, Settings, Stethoscope, Cable, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";

export function Services() {
  const services = [
    {
      icon: Wrench,
      title: "Mantenimiento Industrial",
      description: "Mantenimiento preventivo y correctivo para garantizar la continuidad de tu operación.",
      features: ["Preventivo", "Correctivo", "Predictivo"],
    },
    {
      icon: Cog,
      title: "Automatización Industrial",
      description: "Sistemas de control y automatización para optimizar tus procesos productivos.",
      features: ["Control PLC", "SCADA", "HMI"],
    },
    {
      icon: Bot,
      title: "Robótica",
      description: "Integración de soluciones robóticas para aumentar productividad y precisión.",
      features: ["Brazos robóticos", "Automatización", "Programación"],
    },
    {
      icon: Sun,
      title: "Energía Solar Fotovoltaica",
      description: "Instalación de sistemas solares para reducir costos energéticos y ser sostenible.",
      features: ["Paneles solares", "Inversores", "Instalación completa"],
    },
    {
      icon: Snowflake,
      title: "Climatización y Refrigeración",
      description: "Sistemas de HVAC y refrigeración industrial para ambientes controlados.",
      features: ["Aire acondicionado", "Refrigeración", "Mantenimiento"],
    },
    {
      icon: Zap,
      title: "Instalaciones Eléctricas",
      description: "Diseño, instalación y certificación de sistemas eléctricos industriales.",
      features: ["Media tensión", "Baja tensión", "Certificación"],
    },
    {
      icon: Settings,
      title: "Montaje de Maquinaria",
      description: "Instalación y puesta en marcha de equipos y maquinaria industrial.",
      features: ["Instalación", "Nivelación", "Alineación"],
    },
    {
      icon: Stethoscope,
      title: "Diagnóstico y Reparación",
      description: "Diagnóstico preciso y reparación especializada de equipos industriales.",
      features: ["Diagnóstico", "Reparación", "Pruebas"],
    },
    {
      icon: Cable,
      title: "Ingeniería Eléctrica",
      description: "Diseño y consultoría en proyectos de ingeniería eléctrica industrial.",
      features: ["Diseño", "Consultoría", "Proyectos"],
    },
    {
      icon: ShoppingCart,
      title: "Venta de Repuestos e Insumos",
      description: "Suministro de repuestos originales y materiales para tu industria.",
      features: ["Repuestos", "Materiales", "Entrega rápida"],
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-muted dark:bg-slate-900/40 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-secondary dark:text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos soluciones integrales para todas las necesidades de tu industria,
            desde el diseño hasta la implementación y mantenimiento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-card border-none dark:border dark:border-border/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="pb-3">
                <div className="w-14 h-14 bg-primary dark:bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-white dark:text-accent" />
                </div>
                <CardTitle className="text-lg font-bold text-primary dark:text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-secondary dark:text-muted-foreground text-sm line-clamp-2 mt-1.5">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1.5 border-t border-border/40 pt-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs text-secondary dark:text-muted-foreground font-medium">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-16 bg-gradient-to-r from-primary to-accent dark:from-slate-950 dark:to-slate-900 border-none text-white dark:text-foreground p-8 md:p-12 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
          <CardContent className="p-0">
            <h3 className="text-3xl font-bold mb-4 text-white dark:text-foreground">¿Tienes una idea? Nosotros la hacemos realidad.</h3>
            <p className="text-xl mb-6 text-white/90 dark:text-muted-foreground">
              Tu producción no puede detenerse. Nosotros tampoco.
            </p>
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-3 rounded-lg shadow-lg"
            >
              <a href="#contacto">
                Solicitar Cotización
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
