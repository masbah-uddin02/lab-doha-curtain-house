import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Bot = () => {
  const whatsappNumber = "+97433092432"; // Updated WhatsApp number

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  return (
    <div>
      <div
        className="fixed bottom-5 sm:right-8 right-4 z-50 cursor-pointer text-white text-4xl bg-green-500 w-16 h-16 flex items-center justify-center rounded-full animate-bounce"
        onClick={handleWhatsAppClick}
      >
        <FaWhatsapp />
      </div>
    </div>
  );
};

export default Bot;