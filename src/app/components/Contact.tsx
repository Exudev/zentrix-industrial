import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
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
              {/* Representante 1: Albert */}
              <div className="bg-muted/50 dark:bg-slate-900/40 p-5 rounded-2xl border border-border/30 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h4 className="font-bold text-primary dark:text-foreground text-lg mb-3 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse"></span>
                  Albert Castillo
                </h4>
                <div className="space-y-3.5 pl-3">
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-secondary dark:text-muted-foreground font-semibold text-sm">
                        +1 (829) 554-4783
                      </p>
                      <p className="text-xs text-secondary/70 dark:text-muted-foreground/60 font-medium">
                        Llamadas y WhatsApp (Activo)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-secondary dark:text-muted-foreground font-semibold text-sm">
                        +34 698 543 478
                      </p>
                      <p className="text-xs text-secondary/70 dark:text-muted-foreground/60 font-medium">
                        Solo WhatsApp (Internacional)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-secondary dark:text-muted-foreground text-sm font-semibold break-all">
                      Albertfranciscocastilloramirez@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Representante 2: Yancarlos */}
              <div className="bg-muted/50 dark:bg-slate-900/40 p-5 rounded-2xl border border-border/30 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h4 className="font-bold text-primary dark:text-foreground text-lg mb-3 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse"></span>
                  Yan Carlos De la Cruz
                </h4>
                <div className="space-y-3.5 pl-3">
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-secondary dark:text-muted-foreground font-semibold text-sm">
                        +34 671 166 201
                      </p>
                      <p className="text-xs text-secondary/70 dark:text-muted-foreground/60 font-medium">
                        Solo WhatsApp (Internacional)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-secondary dark:text-muted-foreground text-sm font-semibold break-all">
                      Delacruz-yancarlos@hotmail.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Ubicación y Cobertura */}
              <div className="flex items-start gap-4 bg-muted/30 dark:bg-slate-900/20 p-4 rounded-xl border border-border/20">
                <div className="w-10 h-10 bg-accent/15 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-primary dark:text-foreground mb-0.5 text-sm">Ubicación y Cobertura</h4>
                  <p className="text-secondary dark:text-muted-foreground font-semibold text-xs">República Dominicana</p>
                  <p className="text-secondary dark:text-muted-foreground text-[11px] font-medium">Cobertura nacional y proyectos internacionales</p>
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
                  <option>Energías Renovables</option>
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
