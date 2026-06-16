import { Clock, CheckCircle2, AlertTriangle, PhoneCall } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "./ui/card";
import { Button } from "./ui/button";

export function Maintenance() {
  const plans = [
    {
      name: "Plan Básico",
      description: "Soporte preventivo mensual para garantizar el funcionamiento básico y la seguridad.",
      features: [
        "Mantenimiento preventivo mensual",
        "Inspecciones de seguridad",
        "Reporte de condiciones",
        "Soporte telefónico",
        "2 servicios de emergencia incluidos",
      ],
      color: "bg-secondary text-secondary-foreground",
    },
    {
      name: "Plan Profesional",
      description: "Monitoreo quincenal y soporte 24/7 diseñado para medianas empresas con producción continua.",
      features: [
        "Mantenimiento preventivo quincenal",
        "Mantenimiento predictivo",
        "Análisis vibracional y termográfico",
        "Soporte 24/7",
        "5 servicios de emergencia incluidos",
        "Repuestos con descuento del 15%",
      ],
      color: "bg-primary text-primary-foreground",
      featured: true,
    },
    {
      name: "Plan Enterprise",
      description: "Técnico dedicado en sitio y respuesta inmediata para grandes industrias y alta exigencia.",
      features: [
        "Mantenimiento preventivo semanal",
        "Mantenimiento predictivo avanzado",
        "Técnico dedicado en sitio",
        "Soporte 24/7 prioritario",
        "Servicios de emergencia ilimitados",
        "Repuestos con descuento del 25%",
        "Capacitación anual del personal",
      ],
      color: "bg-slate-700 text-white",
    },
  ];

  return (
    <section id="mantenimiento" className="py-20 bg-muted dark:bg-slate-900/40 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-foreground mb-4">
            Planes de Mantenimiento Industrial
          </h2>
          <p className="text-xl text-secondary dark:text-muted-foreground max-w-3xl mx-auto">
            Protege tu inversión y maximiza la vida útil de tus equipos con nuestros
            programas de mantenimiento personalizados.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Clock, title: "Respuesta Rápida", desc: "Atención en menos de 4 horas" },
            { icon: CheckCircle2, title: "Preventivo", desc: "Evita paros no programados" },
            { icon: AlertTriangle, title: "Predictivo", desc: "Tecnología de diagnóstico avanzado" },
            { icon: PhoneCall, title: "Soporte 24/7", desc: "Siempre disponibles para ti" },
          ].map((item, index) => (
            <Card key={index} className="bg-white dark:bg-card border-none dark:border dark:border-border/40 p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-primary dark:text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-secondary dark:text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col relative transition-all duration-300 ${
                plan.featured
                  ? "bg-accent dark:bg-card text-accent-foreground dark:text-foreground shadow-2xl scale-105 border-2 border-accent"
                  : "bg-white dark:bg-card text-foreground dark:border-border/40 shadow-lg hover:scale-[1.01]"
              } p-8 rounded-2xl`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary dark:bg-accent text-primary-foreground dark:text-accent-foreground px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase shadow-md">
                  Más Popular
                </div>
              )}
              
              <div className="flex-grow">
                <div className={`w-12 h-12 ${plan.color} rounded-xl flex items-center justify-center mb-6 shadow-md`}>
                  <span className="text-xl font-bold">
                    {index + 1}
                  </span>
                </div>
                <h3 className={`text-2xl font-bold mb-2 text-primary dark:text-foreground`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.featured ? "text-primary/80 dark:text-muted-foreground" : "text-secondary dark:text-muted-foreground"}`}>
                  {plan.description}
                </p>
                <ul className="space-y-3.5 mb-8 border-t border-black/10 dark:border-white/10 pt-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-start gap-2.5 ${plan.featured ? "text-primary-foreground/90 dark:text-muted-foreground" : "text-secondary dark:text-muted-foreground"}`}>
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.featured ? "text-primary dark:text-accent" : "text-accent"}`} />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <CardFooter className="p-0 mt-auto pt-6">
                <Button
                  asChild
                  className={`w-full py-6 rounded-xl font-bold shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer ${
                    plan.featured
                      ? "bg-primary dark:bg-accent text-primary-foreground dark:text-accent-foreground hover:bg-primary/95 dark:hover:bg-accent/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white"
                  }`}
                >
                  <a href="#contacto">Solicitar Cotización</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
