import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import logoImage from "../../imports/logo.png";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-white/5 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img
                src={logoImage}
                alt="Zentrix Industrial Logo"
                className="h-20 w-20 object-contain brightness-0 invert"
              />
            </div>
            <p className="text-white/80 mb-4">
              Soluciones inteligentes para una industria más eficiente.
            </p>
            <div className="flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/18295544783" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors" title="Contactar por WhatsApp">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Servicios Principales</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><a href="#servicios" className="hover:text-accent transition-colors">Mantenimiento Industrial</a></li>
              <li><a href="#servicios" className="hover:text-accent transition-colors">Automatización Industrial</a></li>
              <li><a href="#servicios" className="hover:text-accent transition-colors">Energías Renovables</a></li>
              <li><a href="#servicios" className="hover:text-accent transition-colors">Instalaciones Eléctricas</a></li>
              <li><a href="#servicios" className="hover:text-accent transition-colors">Robótica Industrial</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><a href="#quienes-somos" className="hover:text-accent transition-colors">Quiénes Somos</a></li>
              <li><a href="#proyectos" className="hover:text-accent transition-colors">Proyectos</a></li>
              <li><a href="#mantenimiento" className="hover:text-accent transition-colors">Planes de Mantenimiento</a></li>
              <li><a href="#empleo" className="hover:text-accent transition-colors">Trabaja con Nosotros</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-3.5 text-white/80 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Albert Castillo (Nacional):</p>
                  <p className="text-xs text-white/70">+1 (829) 554-4783 (Llamadas & WA)</p>
                  <p className="font-semibold text-white mt-1.5">WhatsApp (Internacional):</p>
                  <p className="text-xs text-white/70">Albert: +34 698 543 478</p>
                  <p className="text-xs text-white/70">Yancarlos: +34 671 166 201</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <div className="break-all space-y-1">
                  <p className="text-xs text-white/70">Albertfranciscocastilloramirez@gmail.com</p>
                  <p className="text-xs text-white/70">Delacruz-yancarlos@hotmail.com</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-white">República Dominicana</p>
                  <p className="text-xs text-white/70">Cobertura Nacional e Internacional</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
          <p>&copy; 2026 Zentrix Industrial. Todos los derechos reservados.</p>
          <p className="mt-2 text-xs">República Dominicana | Proyectos Internacionales</p>
          <p className="mt-3 text-xs text-white/40">
            Hecho por{" "}
            <a
              href="https://exudev.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-semibold transition-all"
            >
              exudev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
