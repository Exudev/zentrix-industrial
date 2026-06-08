import { Target, Eye, Heart, Shield, Lightbulb, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function About() {
  const values = [
    { icon: Heart, title: "Honestidad", color: "bg-primary text-primary-foreground" },
    { icon: Shield, title: "Responsabilidad", color: "bg-accent text-accent-foreground" },
    { icon: Lightbulb, title: "Innovación", color: "bg-accent text-accent-foreground" },
    { icon: Shield, title: "Seguridad", color: "bg-primary text-primary-foreground" },
    { icon: Target, title: "Calidad", color: "bg-accent text-accent-foreground" },
    { icon: Users, title: "Trabajo en Equipo", color: "bg-primary text-primary-foreground" },
  ];

  return (
    <section id="quienes-somos" className="py-20 bg-background transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-foreground mb-4">
            Quiénes Somos
          </h2>
          <p className="text-xl text-secondary dark:text-muted-foreground max-w-3xl mx-auto">
            Nos especializamos en mantenimiento industrial, automatización, robótica, energía solar,
            instalaciones eléctricas y suministro de insumos industriales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-primary dark:bg-card text-white dark:text-foreground border-none dark:border dark:border-border/40 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-accent dark:bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground dark:text-accent" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Misión</h3>
              <p className="text-lg text-white/90 dark:text-muted-foreground">
                Convertirnos en una empresa referente en ingeniería técnica ofreciendo servicios
                de excelencia con profesionalismo y calidad humana.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-accent dark:bg-card text-accent-foreground dark:text-foreground border-none dark:border dark:border-border/40 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-primary dark:bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white dark:text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-primary dark:text-foreground">Visión</h3>
              <p className="text-lg text-primary/90 dark:text-muted-foreground">
                Crecer y expandir nuestros servicios a nivel internacional, siendo reconocidos
                por nuestra excelencia y compromiso con nuestros clientes.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary dark:text-foreground text-center mb-8">Nuestros Valores</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-muted dark:bg-card border-none dark:border dark:border-border/40 p-6 hover:shadow-lg transition-all text-center group hover:-translate-y-1 duration-300"
              >
                <CardContent className="p-0">
                  <div className={`w-14 h-14 ${value.color} rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform`}>
                    <value.icon className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-primary dark:text-foreground text-sm">{value.title}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary via-primary/95 to-slate-900 dark:from-slate-950 dark:to-slate-900 text-white p-8 md:p-12 rounded-2xl text-center shadow-xl border border-white/5">
          <h3 className="text-3xl font-bold mb-8">¿Por Qué Elegirnos?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Respuesta Rápida", desc: "Atención inmediata a tus necesidades" },
              { title: "Técnicos Especializados", desc: "Personal altamente capacitado" },
              { title: "Soluciones Integrales", desc: "Todo en un solo lugar" },
              { title: "Atención Personalizada", desc: "Cada proyecto es único" },
              { title: "Apoyo en Emergencias", desc: "Disponibles cuando nos necesites" },
              { title: "Experiencia Multidisciplinaria", desc: "Expertos en múltiples áreas" },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 text-left bg-white/5 dark:bg-white/5 p-5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-accent/40 transition-all duration-300">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold mb-1 text-white">{item.title}</h4>
                  <p className="text-sm text-slate-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
