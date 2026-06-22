import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Floating Trigger Button */}
      <a
        href="https://wa.link/zmvxzy"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 group focus:outline-none relative cursor-pointer animate-pulse"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
        <span className="absolute right-20 bg-slate-900 text-white dark:bg-slate-800 border border-white/5 dark:border-white/10 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl text-sm font-semibold pointer-events-none">
          ¡Escríbenos ahora!
        </span>
      </a>
    </div>
  );
}
