import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-black opacity-60 z-10"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1597671460319-94f8e9273953?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundBlendMode: "overlay"
        }}
      />
      
      <div className="relative z-20 container mx-auto px-6 py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Вторая мировая война 1939-1945
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mb-8">
          Самый масштабный и разрушительный конфликт в истории человечества. 
          История сражений, героизма и человеческих судеб на фоне глобальной катастрофы.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="text-lg">
            Основные события
          </Button>
          <Button size="lg" variant="outline" className="text-lg bg-transparent border-white text-white hover:bg-white/10">
            Хроника войны
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
