import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function Blog() {
  const articles = [
    {
      title: "Mantenimiento Preventivo: Clave para la Productividad Industrial",
      excerpt: "Descubre cómo un programa de mantenimiento preventivo bien estructurado puede reducir costos y evitar paros no programados en tu planta industrial.",
      author: "Equipo Zentrix",
      date: "1 Junio 2026",
      image: "https://images.unsplash.com/photo-1598299803204-b73796f43289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFpbnRlbmFuY2UlMjB3b3JrZXJ8ZW58MXx8fHwxNzgwODY0ODQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Mantenimiento",
    },
    {
      title: "Energía Solar en República Dominicana: Inversión Inteligente",
      excerpt: "Todo lo que necesitas saber sobre la instalación de paneles solares fotovoltaicos en tu empresa: ahorro, incentivos y retorno de inversión.",
      author: "Ing. Solar Zentrix",
      date: "25 Mayo 2026",
      image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxpbmR1c3RyaWFsJTIwZW5naW5lZXJpbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc4MDg2NDg0MHww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Energía Solar",
    },
    {
      title: "Automatización Industrial: El Futuro es Ahora",
      excerpt: "La automatización industrial ya no es un lujo, es una necesidad. Conoce los beneficios de implementar sistemas automatizados en tu producción.",
      author: "Ing. Automatización",
      date: "18 Mayo 2026",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxpbmR1c3RyaWFsJTIwZW5naW5lZXJpbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc4MDg2NDg0MHww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Automatización",
    },
    {
      title: "Ahorro Energético: Estrategias Prácticas para tu Industria",
      excerpt: "Implementa estas estrategias comprobadas para reducir hasta un 30% en tu factura eléctrica sin afectar la producción.",
      author: "Equipo Zentrix",
      date: "10 Mayo 2026",
      image: "https://images.unsplash.com/photo-1610891015188-5369212db097?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3ODA4NjQ4NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Eficiencia",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-muted dark:bg-slate-900/40 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-foreground mb-4">
            Blog Técnico
          </h2>
          <p className="text-xl text-secondary dark:text-muted-foreground max-w-3xl mx-auto">
            Artículos técnicos, guías y consejos de expertos para optimizar tu operación industrial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-card border-none dark:border dark:border-border/40 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-accent hover:bg-accent text-accent-foreground border-none font-bold">
                      {article.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1 text-xs text-secondary dark:text-muted-foreground mb-3 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    {article.date}
                  </div>
                  <h3 className="text-base font-bold text-primary dark:text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-secondary dark:text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <Button
                    variant="ghost"
                    className="flex items-center gap-1.5 p-0 hover:bg-transparent text-accent hover:text-accent/80 font-bold transition-all text-sm group"
                  >
                    Leer más
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-14">
          <Button
            asChild
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-5 h-12 rounded-xl font-bold shadow-lg transition-all hover:scale-[1.03]"
          >
            <button className="flex items-center gap-2">
              Ver todos los artículos
              <ArrowRight className="w-5 h-5" />
            </button>
          </Button>
        </div>
      </div>
    </section>
  );
}
