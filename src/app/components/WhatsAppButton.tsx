import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "18095550100";
  const message = "Hola Zentrix Industrial, me gustaría solicitar información sobre sus servicios. ¿Pueden ayudarme?";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 group animate-pulse hover:animate-none"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-20 bg-slate-900 text-white dark:bg-slate-800 border border-white/5 dark:border-white/10 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl text-sm font-semibold">
        ¡Escríbenos ahora!
      </span>
    </a>
  );
}
