import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-bold text-xl">ВОЕННАЯ ИСТОРИЯ</Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Главная
          </Link>
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Сражения
          </Link>
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Личности
          </Link>
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Хронология
          </Link>
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Галерея
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            Поиск
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
