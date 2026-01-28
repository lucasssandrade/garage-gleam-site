import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511977035404?text=Olá! Gostaria de agendar um serviço."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-secondary hover:bg-secondary/90 rounded-full flex items-center justify-center shadow-lg shadow-secondary/30 transition-all hover:scale-110 animate-bounce hover:animate-none"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-secondary-foreground" />
    </a>
  );
};

export default WhatsAppButton;
