import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    {
      name: "Albert Castillo (Nacional)",
      info: "Llamadas y WhatsApp",
      url: "https://wa.me/18295544783",
      badge: "Activo RD",
    },
    {
      name: "Albert Castillo (Internacional)",
      info: "Solo WhatsApp",
      url: "https://wa.me/34698543478",
      badge: "España",
    },
    {
      name: "Yancarlos De la Cruz (Internacional)",
      info: "Solo WhatsApp",
      url: "https://wa.me/34671166201",
      badge: "España",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-4 w-72 bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border border-border/40 rounded-2xl shadow-2xl p-4 animate-slide-up transition-all duration-300">
          <div className="flex items-center justify-between border-b border-border/40 pb-3 mb-3">
            <div>
              <h4 className="font-bold text-primary dark:text-foreground text-sm flex items-center gap-1.5">
                <MessageCircle className="w-4 h-4 text-green-500" />
                Contactar por WhatsApp
              </h4>
              <p className="text-[11px] text-secondary/70 dark:text-muted-foreground/60 font-medium">
                Selecciona con quién deseas hablar:
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-foreground/50 hover:bg-muted hover:text-foreground transition-all duration-200"
              aria-label="Cerrar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            {contacts.map((contact, idx) => (
              <a
                key={idx}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-accent/15 hover:text-accent border border-transparent hover:border-accent/10 transition-all duration-200 group text-left cursor-pointer"
              >
                <div>
                  <p className="font-bold text-xs text-primary dark:text-foreground group-hover:text-accent transition-colors">
                    {contact.name}
                  </p>
                  <p className="text-[10px] text-secondary dark:text-muted-foreground font-medium">
                    {contact.info}
                  </p>
                </div>
                <span className="text-[9px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-accent/20 group-hover:text-accent font-bold px-2 py-0.5 rounded transition-all">
                  {contact.badge}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 group focus:outline-none relative cursor-pointer ${
          !isOpen ? "animate-pulse" : ""
        }`}
        aria-label="Contactar por WhatsApp"
      >
        {isOpen ? (
          <X className="w-8 h-8 transition-transform rotate-90 duration-300" />
        ) : (
          <MessageCircle className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
        )}
        {!isOpen && (
          <span className="absolute right-20 bg-slate-900 text-white dark:bg-slate-800 border border-white/5 dark:border-white/10 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl text-sm font-semibold pointer-events-none">
            ¡Escríbenos ahora!
          </span>
        )}
      </button>
    </div>
  );
}
