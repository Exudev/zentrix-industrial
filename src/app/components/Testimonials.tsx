import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Pérez",
      company: "IndustriaMax RD",
      role: "Gerente de Operaciones",
      text: "Zentrix Industrial ha sido clave para optimizar nuestros procesos. Su equipo técnico es excelente y siempre están disponibles cuando los necesitamos.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    },
    {
      name: "María González",
      company: "SolarTech Caribe",
      role: "Directora de Proyectos",
      text: "La instalación de nuestro sistema solar fue impecable. Profesionales, puntuales y con un servicio post-venta excepcional. Altamente recomendados.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    },
    {
      name: "Roberto Martínez",
      company: "AutoParts Dominican",
      role: "Gerente de Planta",
      text: "¿Problemas recurrentes? Zentrix los arrancó de raíz. Desde que implementaron el mantenimiento predictivo, nuestros paros no programados se redujeron en un 70%.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    },
    {
      name: "Ana Santana",
      company: "FoodPro RD",
      role: "Jefa de Mantenimiento",
      text: "Excelente servicio de refrigeración industrial. Nos solucionaron un problema crítico en tiempo récord y ahora tenemos contrato de mantenimiento con ellos.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-background transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-foreground mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-secondary dark:text-muted-foreground max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-muted dark:bg-card border-none dark:border dark:border-border/40 p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative hover:scale-[1.01]"
            >
              <CardContent className="p-0">
                <Quote className="absolute top-4 right-4 w-12 h-12 text-accent/20" />
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border border-border/40"
                  />
                  <div>
                    <h4 className="font-bold text-primary dark:text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-secondary dark:text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-accent font-bold">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-secondary dark:text-muted-foreground italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
