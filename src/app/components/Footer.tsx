import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import logoImage from "../../imports/WhatsApp_Image_2026-06-07_at_17.16.04-removebg-preview.png";

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
                className="h-20 w-auto object-contain brightness-0 invert"
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
              <a href="https://wa.me/18095550100" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Servicios Principales</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><a href="#servicios" className="hover:text-accent transition-colors">Mantenimiento Industrial</a></li>
              <li><a href="#servicios" className="hover:text-accent transition-colors">Automatización Industrial</a></li>
              <li><a href="#servicios" className="hover:text-accent transition-colors">Energía Solar Fotovoltaica</a></li>
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
              <li><a href="#blog" className="hover:text-accent transition-colors">Blog Técnico</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p>+1 (809) 555-0100</p>
                  <p>+1 (829) 555-0200</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p>contacto@zentrixindustrial.com</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold">República Dominicana</p>
                  <p className="text-xs">Cobertura Nacional</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
          <p>&copy; 2026 Zentrix Industrial. Todos los derechos reservados.</p>
          <p className="mt-2 text-xs">República Dominicana | Proyectos Internacionales</p>
        </div>
      </div>
    </footer>
  );
}
