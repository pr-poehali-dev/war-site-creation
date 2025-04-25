import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-black opacity-60 z-10"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1595246135406-803418233ef6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundBlendMode: "overlay"
        }}
      />
      
      <div className="relative z-20 container mx-auto px-6 py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          История войн и военных конфликтов
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mb-8">
          Хроники сражений, изменивших ход истории. Изучайте военные стратегии, 
          судьбы героев и важнейшие моменты военной истории человечества.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="text-lg">
            Начать изучение
          </Button>
          <Button size="lg" variant="outline" className="text-lg bg-transparent border-white text-white hover:bg-white/10">
            Хронология событий
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
