import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Número do WhatsApp do Senac (será fornecido pelo Edi)
    const phoneNumber = '554734316606'; // Placeholder - aguardando número real
    const message = 'Olá! Estava olhando o site do Senac Hub e gostaria de saber mais informações sobre os cursos do Senac Hub Técnologia.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppButton;

