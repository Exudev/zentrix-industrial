import { Facebook, Instagram, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router";
import logoImage from "../../imports/nameless-logo.webp";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-white/5 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Link to="/">
                <img
                  src={logoImage}
                  alt="Zentrix Industrial Logo"
                  loading="lazy"
                  width={500}
                  height={438}
                  className="h-28 w-28 object-contain grayscale invert contrast-200 brightness-125"
                />
              </Link>
            </div>
            <p className="text-white/80 mb-4">
              Soluciones integrales para una industria más eficiente.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/people/Zentrix-Industrial/61590676780331/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/zentrix_industrial/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.link/zmvxzy" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors" title="Contactar por WhatsApp">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Servicios Principales</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><Link to="/#servicios" className="hover:text-accent transition-colors">Mantenimiento Industrial</Link></li>
              <li><Link to="/#servicios" className="hover:text-accent transition-colors">Automatización Industrial</Link></li>
              <li><Link to="/#servicios" className="hover:text-accent transition-colors">Energías Renovables</Link></li>
              <li><Link to="/#servicios" className="hover:text-accent transition-colors">Instalaciones Eléctricas</Link></li>
              <li><Link to="/#servicios" className="hover:text-accent transition-colors">Robótica Industrial</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><Link to="/#quienes-somos" className="hover:text-accent transition-colors">Quiénes Somos</Link></li>
              <li><Link to="/#mantenimiento" className="hover:text-accent transition-colors">Planes de Mantenimiento</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-3.5 text-white/80 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Albert Castillo (Nacional):</p>
                  <a href="https://wa.link/zmvxzy" target="_blank" rel="noopener noreferrer" className="text-xs text-white/70 hover:text-accent transition-colors block">
                    +1 (829) 554-4783 (Llamadas & WhatsApp)
                  </a>
                  <p className="font-semibold text-white mt-1.5">WhatsApp (Internacional):</p>
                  <a href="https://wa.link/zmvxzy" target="_blank" rel="noopener noreferrer" className="text-xs text-white/70 hover:text-accent transition-colors block">
                    Albert: +34 698 543 478
                  </a>
                  <a href="https://wa.link/zmvxzy" target="_blank" rel="noopener noreferrer" className="text-xs text-white/70 hover:text-accent transition-colors block">
                    Yan Carlos: +34 671 166 201
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <div className="break-all space-y-1 text-xs text-white/70">
                  <a href="mailto:contacto@zentrix-industrial.com" className="hover:text-accent transition-colors block">
                    contacto@zentrix-industrial.com
                  </a>
                  <a href="mailto:gerencia@zentrix-industrial.com" className="hover:text-accent transition-colors block">
                    gerencia@zentrix-industrial.com
                  </a>
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
          <p className="mt-2 text-xs">República Dominicana | Proyectos Nacionales e Internacionales</p>
        </div>
      </div>
    </footer>
  );
}
