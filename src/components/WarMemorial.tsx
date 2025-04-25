import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const WarMemorial = () => {
  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Память о войне</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Памятники и мемориалы, увековечивающие подвиги и жертвы Второй мировой войны
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="overflow-hidden">
          <div className="relative h-64 bg-cover bg-center" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581872544878-5a552bbc8738?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')"
          }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-xl font-bold mb-2">Мамаев Курган</h3>
                <p className="text-white/80 text-sm">Волгоград, Россия</p>
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="overflow-hidden">
          <div className="relative h-64 bg-cover bg-center" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1521309918586-feb7aa79a61b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')"
          }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-xl font-bold mb-2">Мемориал Холокоста</h3>
                <p className="text-white/80 text-sm">Берлин, Германия</p>
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="overflow-hidden">
          <div className="relative h-64 bg-cover bg-center" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1555878494-a6aaf9174308?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')"
          }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-xl font-bold mb-2">Мемориал в Перл-Харборе</h3>
                <p className="text-white/80 text-sm">Гавайи, США</p>
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="overflow-hidden">
          <div className="relative h-64 bg-cover bg-center" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1550488975-08f8ac4914c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')"
          }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-xl font-bold mb-2">Мемориал Мира в Хиросиме</h3>
                <p className="text-white/80 text-sm">Хиросима, Япония</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
      
      <div className="text-center mt-10">
        <Button variant="outline" className="mt-6">
          Все мемориалы
        </Button>
      </div>
    </div>
  );
};

export default WarMemorial;
