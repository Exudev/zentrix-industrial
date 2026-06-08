import { Mail, Phone, MapPin, Send, Globe } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function Contact() {
  return (
    <section id="contacto" className="py-20 bg-background transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-foreground mb-4">
            Solicitar Cotización
          </h2>
          <p className="text-xl text-secondary dark:text-muted-foreground max-w-3xl mx-auto">
            ¿Listo para llevar tu industria al siguiente nivel?
            Nuestro equipo está listo para ayudarte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-primary dark:text-foreground mb-6">
              Información de Contacto
            </h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <Phone className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-primary dark:text-foreground mb-1">Teléfono</h4>
                  <p className="text-secondary dark:text-muted-foreground font-medium text-sm">+1 (809) 555-0100</p>
                  <p className="text-secondary dark:text-muted-foreground font-medium text-sm">+1 (829) 555-0200</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <Mail className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-primary dark:text-foreground mb-1">Email</h4>
                  <p className="text-secondary dark:text-muted-foreground font-medium text-sm">contacto@zentrixindustrial.com</p>
                  <p className="text-secondary dark:text-muted-foreground font-medium text-sm">ventas@zentrixindustrial.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-primary dark:text-foreground mb-1">Ubicación</h4>
                  <p className="text-secondary dark:text-muted-foreground font-bold text-sm">República Dominicana</p>
                  <p className="text-secondary dark:text-muted-foreground text-xs font-medium">Cobertura nacional e internacional</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <Globe className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-primary dark:text-foreground mb-1">Cobertura</h4>
                  <p className="text-secondary dark:text-muted-foreground font-medium text-sm">República Dominicana (Cobertura Nacional)</p>
                  <p className="text-secondary dark:text-muted-foreground font-medium text-sm">Proyectos Internacionales</p>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-to-r from-primary to-slate-900 dark:from-slate-900 dark:to-slate-800 border-none dark:border dark:border-border/40 text-white p-6 rounded-2xl shadow-xl">
              <CardContent className="p-0">
                <h4 className="font-bold mb-3 text-xl text-white">Horario de Atención</h4>
                <div className="space-y-2 text-sm text-slate-100 dark:text-slate-200">
                  <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                  <p>Sábados: 9:00 AM - 2:00 PM</p>
                  <p className="font-bold text-lg mt-4 text-accent">🚨 Emergencias 24/7 disponibles</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary dark:text-foreground mb-6">
              Formulario de Cotización
            </h3>
            <form className="space-y-5">
              <div>
                <Label htmlFor="name" className="text-primary dark:text-foreground mb-2 block font-semibold text-sm">Nombre *</Label>
                <Input
                  id="name"
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-border dark:border-border/30 bg-input-background dark:bg-slate-900/60 focus-visible:ring-accent"
                  placeholder="Tu nombre completo"
                  required
                />
              </div>
              <div>
                <Label htmlFor="company" className="text-primary dark:text-foreground mb-2 block font-semibold text-sm">Empresa *</Label>
                <Input
                  id="company"
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-border dark:border-border/30 bg-input-background dark:bg-slate-900/60 focus-visible:ring-accent"
                  placeholder="Nombre de tu empresa"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-primary dark:text-foreground mb-2 block font-semibold text-sm">Correo Electrónico *</Label>
                <Input
                  id="email"
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-border dark:border-border/30 bg-input-background dark:bg-slate-900/60 focus-visible:ring-accent"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-primary dark:text-foreground mb-2 block font-semibold text-sm">Teléfono *</Label>
                <Input
                  id="phone"
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border border-border dark:border-border/30 bg-input-background dark:bg-slate-900/60 focus-visible:ring-accent"
                  placeholder="+1 (809) 555-0000"
                  required
                />
              </div>
              <div>
                <Label className="block text-primary dark:text-foreground mb-2 font-semibold text-sm">Servicio Requerido *</Label>
                <select className="w-full px-4 py-3 rounded-xl border border-border dark:border-border/30 bg-input-background dark:bg-slate-900/60 focus:outline-none focus:ring-2 focus:ring-accent text-foreground dark:text-muted-foreground text-sm">
                  <option>Selecciona un servicio</option>
                  <option>Mantenimiento Industrial</option>
                  <option>Automatización Industrial</option>
                  <option>Robótica</option>
                  <option>Energía Solar Fotovoltaica</option>
                  <option>Climatización y Refrigeración</option>
                  <option>Instalaciones Eléctricas</option>
                  <option>Montaje de Maquinaria</option>
                  <option>Diagnóstico y Reparación</option>
                  <option>Ingeniería Eléctrica</option>
                  <option>Venta de Repuestos e Insumos</option>
                </select>
              </div>
              <div>
                <Label htmlFor="description" className="text-primary dark:text-foreground mb-2 block font-semibold text-sm">Descripción del Proyecto *</Label>
                <Textarea
                  id="description"
                  className="w-full px-4 py-3 rounded-xl border border-border dark:border-border/30 bg-input-background dark:bg-slate-900/60 focus-visible:ring-accent h-32 resize-none text-sm"
                  placeholder="Describe tu proyecto, necesidades o problema técnico..."
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.02] active:scale-95 duration-200"
              >
                Solicitar Cotización
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
