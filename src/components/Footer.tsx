import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/40">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">ВОЕННАЯ ИСТОРИЯ</h3>
            <p className="text-muted-foreground">
              Архив военных событий, документов и свидетельств, посвященных истории войн и военных конфликтов.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Разделы</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Главная</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Сражения</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Личности</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Хронология</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Ресурсы</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Библиотека</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Архив фотографий</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Документы</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Карты</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">info@military-history.ru</li>
              <li className="text-muted-foreground">+7 (495) 123-45-67</li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="text-center text-muted-foreground">
          <p>© 2023 Военная История. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
