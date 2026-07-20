import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Wrench, Cog, Bot, Sun, Snowflake, Zap, Settings, 
  Stethoscope, Cable, ShoppingCart, ArrowRight, Sparkles, 
  ShieldCheck, Clock, CheckCircle2, ChevronDown, Cpu,
  Layers, SlidersHorizontal, Maximize2, Minimize2
} from "lucide-react";
import { CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";

import { Button } from "./ui/button";
import logoImage from "../../imports/nameless-logo.webp";

interface ServicesProps {
  limit?: number;
  showCTA?: boolean;
  isSubPage?: boolean;
}

export function Services({ limit, showCTA = true, isSubPage = false }: ServicesProps = {}) {
  const [activeCategory, setActiveCategory] = useState<string>("todos");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const categories = [
    { id: "todos", label: "Todos los Servicios" },
    { id: "mantenimiento", label: "Mantenimiento & Robótica" },
    { id: "energia", label: "Energía & Climatización" },
    { id: "electrica", label: "Eléctrica & Repuestos" },
  ];

  const services = [
    {
      id: 0,
      category: "mantenimiento",
      icon: Wrench,
      title: "Mantenimiento Industrial",
      description: "Mantenimiento preventivo y correctivo para garantizar la continuidad de tu operación.",
      features: ["Preventivo", "Correctivo", "Predictivo"],
      badge: "Esencial",
      sla: "Garantía de respuesta < 2h",
      workflow: [
        "Auditoría técnica e inspección de línea",
        "Diagnóstico térmico y análisis de vibraciones",
        "Intervención correctiva o sustitución de componentes",
        "Pruebas de carga y certificación operativa",
      ],
      brands: ["Siemens", "ABB", "Schneider", "SKF"],
    },
    {
      id: 1,
      category: "mantenimiento",
      icon: Cog,
      title: "Automatización Industrial",
      description: "Sistemas de control y automatización para optimizar tus procesos productivos.",
      features: ["Control PLC", "SCADA", "HMI"],
      badge: "Alta Precisión",
      sla: "Optimización de eficiencia hasta +40%",
      workflow: [
        "Análisis de requerimientos y lógica de proceso",
        "Programación de arquitectura PLC/SCADA",
        "Integración de pantallas HMI e interfaces de usuario",
        "Puesta en marcha y capacitación a operadores",
      ],
      brands: ["Allen-Bradley", "Siemens", "Omron", "Delta"],
    },
    {
      id: 2,
      category: "mantenimiento",
      icon: Bot,
      title: "Robótica",
      description: "Integración de soluciones robóticas para aumentar productividad y precisión.",
      features: ["Brazos robóticos", "Automatización", "Programación"],
      badge: "Innovación",
      sla: "Mayor precisión e inspección continua 24/7",
      workflow: [
        "Estudio de factibilidad y cinemática robótica",
        "Diseño de células robotizadas y garras finales",
        "Programación de trayectorias y visión artificial",
        "Validación de ciclos de tiempo y seguridad ISO 10218",
      ],
      brands: ["FANUC", "KUKA", "ABB Robotics", "Yaskawa"],
    },
    {
      id: 3,
      category: "energia",
      icon: Sun,
      title: "Energías Renovables",
      description: "Instalación de sistemas solares fotovoltaicos y soluciones sostenibles, incluyendo el montaje de cargadores eléctricos para vehículos en plazas privadas de garaje.",
      features: ["Paneles solares e inversores", "Instalación y puesta en marcha", "Cargadores EV garaje"],
      badge: "Sostenible",
      sla: "Reducción de huella de carbono y ahorro energético",
      workflow: [
        "Dimensionamiento solar y estudio de sombras",
        "Instalación de estructura fotovoltaica e inversores",
        "Montaje de estaciones de carga EV (Wallbox / Carga Rápida)",
        "Trámites de legalización e interconexión a red",
      ],
      brands: ["Fronius", "Huawei Solar", "SMA", "Wallbox"],
    },
    {
      id: 4,
      category: "energia",
      icon: Snowflake,
      title: "Climatización y Refrigeración",
      description: "Sistemas de HVAC y refrigeración industrial para ambientes controlados.",
      features: ["Aire acondicionado", "Refrigeración", "Mantenimiento"],
      sla: "Monitoreo de temperatura y humedad precisa",
      workflow: [
        "Cálculo térmico e ingeniería de ductos",
        "Instalación de chillers y unidades manejadoras (UMAS)",
        "Calibración de sensores y termostatos inteligentes",
        "Mantenimiento químico de condensadores y filtros",
      ],
      brands: ["Daikin", "Carrier", "Trane", "York"],
    },
    {
      id: 5,
      category: "electrica",
      icon: Zap,
      title: "Instalaciones Eléctricas",
      description: "Diseño, instalación y certificación de sistemas eléctricos industriales.",
      features: ["Media tensión", "Baja tensión", "Certificación"],
      sla: "Cumplimiento normativo retie y códigos eléctricos",
      workflow: [
        "Diseño de diagramas unifilares y cuadros de distribución",
        "Trazado de canalizaciones y cableado estructurado",
        "Montaje de subestaciones y tableros de potencia",
        "Medición de pozo a tierra y certificación oficial",
      ],
      brands: ["Schneider Electric", "Legrand", "Eaton", "Rittal"],
    },
    {
      id: 6,
      category: "mantenimiento",
      icon: Settings,
      title: "Montaje de Maquinaria",
      description: "Instalación y puesta en marcha de equipos y maquinaria industrial.",
      features: ["Instalación", "Nivelación", "Alineación"],
      sla: "Precision micrométrica en alineación láser",
      workflow: [
        "Desembalaje y maniobra pesada en planta",
        "Nivelación con instrumentos ópticos de alta precisión",
        "Conexión neumática, hidráulica y eléctrica",
        "Alineación láser de ejes y prueba en vacío",
      ],
      brands: ["Prüftechnik", "Easy-Laser", "Enerpac"],
    },
    {
      id: 7,
      category: "mantenimiento",
      icon: Stethoscope,
      title: "Diagnóstico y Reparación",
      description: "Diagnóstico preciso y reparación especializada de equipos industriales.",
      features: ["Diagnóstico", "Reparación", "Pruebas"],
      sla: "Detección temprana de fallas en < 24h",
      workflow: [
        "Termografía infrarroja y termogramas",
        "Análisis espectral de ultrasonido y aceite",
        "Rebobinado o reacondicionamiento de motores/servos",
        "Banca de pruebas con carga simulada",
      ],
      brands: ["Fluke", "Testo", "SKF Reliability"],
    },
    {
      id: 8,
      category: "electrica",
      icon: Cable,
      title: "Ingeniería Eléctrica",
      description: "Diseño y consultoría en proyectos de ingeniería eléctrica industrial.",
      features: ["Diseño", "Consultoría", "Proyectos"],
      sla: "Documentación CAD 3D y cumplimiento integral",
      workflow: [
        "Modelado BIM/CAD 3D de infraestructura",
        "Simulación de flujos de carga y cortocircuito",
        "Auditoría de calidad de energía y armónicos",
        "Entrega de carpeta técnica ejecutiva",
      ],
      brands: ["AutoCAD Electrical", "EPLAN", "ETAP"],
    },
    {
      id: 9,
      category: "electrica",
      icon: ShoppingCart,
      title: "Venta de Repuestos e Insumos",
      description: "Suministro de repuestos originales y materiales para tu industria.",
      features: ["Repuestos", "Materiales", "Entrega rápida"],
      sla: "Despacho inmediato de repuestos críticos",
      workflow: [
        "Identificación por número de parte OEM",
        "Verificación de stock internacional y local",
        "Control de calidad y embalaje seguro",
        "Despacho exprés a planta con garantía de fábrica",
      ],
      brands: ["Festool", "Sick", "Phoenix Contact", "Finders"],
    },
  ];

  const filteredServices = services
    .filter(s => activeCategory === "todos" || s.category === activeCategory)
    .slice(0, limit ? limit : services.length);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section 
      id="servicios" 
      className={`relative overflow-hidden ${isSubPage ? "py-12" : "pt-12 pb-24"} bg-slate-50/80 dark:bg-slate-950/60 bg-grid-pattern transition-colors duration-300`}
    >
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 dark:bg-accent/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[250px] bg-accent/15 dark:bg-primary/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        {!isSubPage && (
          <div className="text-center mb-12">
            <div className="mx-auto mb-3 inline-block hover:scale-105 transition-transform duration-500">
              <img
                src={logoImage}
                alt="Zentrix Industrial Logo"
                loading="lazy"
                width={500}
                height={438}
                className="h-36 w-36 md:h-48 md:w-48 object-contain drop-shadow-[0_12px_20px_rgba(30,58,138,0.15)] dark:grayscale dark:invert dark:contrast-200 dark:brightness-125 transition-all duration-300"
              />
            </div>

            {/* Value badges pill strip */}
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent border border-primary/20 dark:border-accent/30 shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                Soluciones 360°
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent border border-primary/20 dark:border-accent/30 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5" />
                Garantía y Seguridad
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent border border-primary/20 dark:border-accent/30 shadow-xs">
                <Clock className="w-3.5 h-3.5" />
                Atención Especializada
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-primary dark:text-foreground tracking-tight mb-4">
              Nuestros Servicios <span className="text-accent">Especializados</span>
            </h2>
            <p className="text-lg md:text-xl text-secondary dark:text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Soluciones integrales para la industria. Haz clic en cualquier servicio para desplegar sus especificaciones técnicas y proceso de ejecución.
            </p>
          </div>
        )}

        {/* Category Filter Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setExpandedIndex(null);
              }}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeCategory === cat.id
                  ? "bg-primary text-white dark:bg-accent dark:text-slate-950 shadow-md scale-105"
                  : "bg-white/80 dark:bg-slate-900/80 text-secondary dark:text-muted-foreground hover:bg-slate-200/60 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800"
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Interactive Service Cards Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start"
        >
          <AnimatePresence>
            {filteredServices.map(service => {
              const isExpanded = expandedIndex === service.id;


              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={service.id}
                  className={`group glass-card border rounded-2xl transition-all duration-300 overflow-hidden relative shadow-md hover:shadow-2xl ${
                    isExpanded 
                      ? "border-accent ring-2 ring-accent/30 dark:ring-accent/40 md:col-span-2 lg:col-span-2 xl:col-span-2 bg-white dark:bg-slate-900" 
                      : "border-slate-200/80 dark:border-slate-800/80 hover:border-accent/60 dark:hover:border-accent/60"
                  }`}
                >
                  {/* Optional Highlight Badge */}
                  {service.badge && (
                    <div className="absolute top-3 right-3 z-20">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-accent text-accent-foreground shadow-xs">
                        {service.badge}
                      </span>
                    </div>
                  )}

                  <CardHeader className="pb-3 relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary via-blue-900 to-indigo-950 dark:from-accent/20 dark:to-primary/40 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-all duration-300 shadow-md border border-white/20 dark:border-accent/30">
                      <service.icon className="w-7 h-7 text-accent" />
                    </div>
                    
                    <CardTitle className="text-lg font-bold text-primary dark:text-foreground group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </CardTitle>

                    <CardDescription className="text-secondary dark:text-muted-foreground text-sm leading-relaxed mt-2">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-2 relative z-10">
                    {/* Compact Feature Pills */}
                    <div className="border-t border-slate-200/60 dark:border-slate-800/80 pt-3">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {service.features.map((feature, idx) => (
                          <span 
                            key={idx} 
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-primary/5 dark:bg-accent/10 text-primary dark:text-accent border border-primary/10 dark:border-accent/20"
                          >
                            <CheckCircle2 className="w-3 h-3 text-accent shrink-0" />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expand Toggle Button */}
                    <button
                      onClick={() => toggleExpand(service.id)}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-between border ${
                        isExpanded
                          ? "bg-accent text-accent-foreground border-accent shadow-xs"
                          : "bg-slate-100 dark:bg-slate-800/60 text-primary dark:text-accent border-slate-200 dark:border-slate-700 hover:bg-primary hover:text-white dark:hover:bg-accent dark:hover:text-slate-950"
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        {isExpanded ? (
                          <>
                            <Minimize2 className="w-3.5 h-3.5" />
                            Ocultar detalles
                          </>
                        ) : (
                          <>
                            <Maximize2 className="w-3.5 h-3.5" />
                            Ver más detalles y proceso
                          </>
                        )}
                      </span>
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} 
                      />
                    </button>

                    {/* Smooth Animated Collapsible Expansion Drawer */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden mt-4 pt-4 border-t border-slate-200/80 dark:border-slate-800"
                        >
                          {/* SLA & Guarantee Banner */}
                          <div className="bg-primary/5 dark:bg-accent/10 border border-primary/10 dark:border-accent/20 rounded-xl p-3 mb-4 flex items-center gap-3">
                            <Clock className="w-5 h-5 text-accent shrink-0" />
                            <div>
                              <p className="text-[11px] font-bold uppercase tracking-wider text-secondary dark:text-muted-foreground">Compromiso de Servicio</p>
                              <p className="text-xs font-semibold text-primary dark:text-accent">{service.sla}</p>
                            </div>
                          </div>

                          {/* Workflow Step-by-Step */}
                          <div className="mb-4">
                            <h4 className="text-xs font-extrabold uppercase tracking-wider text-primary dark:text-foreground mb-3 flex items-center gap-1.5">
                              <Layers className="w-4 h-4 text-accent" />
                              Metodología de Trabajo
                            </h4>
                            <ol className="space-y-2">
                              {service.workflow.map((step, idx) => (
                                <li key={idx} className="flex items-start gap-2.5 text-xs text-secondary dark:text-muted-foreground">
                                  <span className="w-5 h-5 rounded-full bg-primary dark:bg-accent text-white dark:text-slate-950 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                                    {idx + 1}
                                  </span>
                                  <span className="pt-0.5">{step}</span>
                                </li>
                              ))}
                            </ol>
                          </div>

                          {/* Supported Hardware Brands */}
                          <div className="mb-5">
                            <h4 className="text-xs font-extrabold uppercase tracking-wider text-primary dark:text-foreground mb-2 flex items-center gap-1.5">
                              <Cpu className="w-4 h-4 text-accent" />
                              Hardware y Marcas Soportadas
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                              {service.brands.map((brand, bIdx) => (
                                <span 
                                  key={bIdx}
                                  className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-slate-200/70 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300/50 dark:border-slate-700"
                                >
                                  {brand}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Direct Quote CTA */}
                          <Button
                            asChild
                            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-2.5 rounded-xl shadow-md transition-all duration-200"
                          >
                            <a href="#contacto" className="flex items-center justify-center gap-2">
                              Solicitar Cotización para {service.title}
                              <ArrowRight className="w-4 h-4" />
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Upgraded Modern CTA Card Banner */}
        {showCTA && (
          <div className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-blue-900 to-slate-950 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border border-white/20 dark:border-accent/30 text-white p-8 md:p-14 shadow-2xl">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent/20 text-accent border border-accent/30 mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  Asesoría Personalizada
                </span>
                <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3">
                  ¿Tienes un proyecto o requerimiento industrial?
                </h3>
                <p className="text-lg text-slate-200 dark:text-slate-300 leading-relaxed">
                  Tu producción no puede detenerse. Diseñamos, implementamos y mantenemos soluciones a la medida de tu empresa.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto justify-center">
                <Button
                  asChild
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-6 rounded-xl shadow-lg hover:shadow-accent/20 transition-all duration-300 text-base"
                >
                  <a href="#contacto">
                    Solicitar Cotización
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/30 hover:border-accent bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-6 rounded-xl backdrop-blur-sm transition-all duration-300 text-base"
                >
                  <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer">
                    Hablar por WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}


