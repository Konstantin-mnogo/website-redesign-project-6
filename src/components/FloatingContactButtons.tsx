import Icon from "@/components/ui/icon";

const FloatingContactButtons = () => {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 flex flex-col gap-2 md:gap-3 z-50">
      <a
        href="https://wa.me/79656713170"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        title="Написать в WhatsApp"
      >
        <Icon name="MessageCircle" size={20} className="md:w-6 md:h-6" />
      </a>
      
      <a
        href="https://t.me/+79656713170"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 md:w-14 md:h-14 bg-[#0088cc] hover:bg-[#006699] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        title="Написать в Telegram"
      >
        <Icon name="Send" size={20} className="md:w-6 md:h-6" />
      </a>
      
      <a
        href="https://max.ru/u/f9LHodD0cOKASB-ZXfa0KQeVeidCfM-E7__-QVbgfFavZQs-CtbluHz4ajU"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 md:w-14 md:h-14 bg-[#FF4D00] hover:bg-[#E64400] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        title="Написать в МАХ"
      >
        <Icon name="MessageSquare" size={20} className="md:w-6 md:h-6" />
      </a>
    </div>
  );
};

export default FloatingContactButtons;