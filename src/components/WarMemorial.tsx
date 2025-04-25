import { Card, CardContent } from "@/components/ui/card";

const memorials = [
  {
    title: "Мамаев курган",
    location: "Волгоград, Россия",
    image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Могила Неизвестного Солдата",
    location: "Москва, Россия",
    image: "https://images.unsplash.com/photo-1554377740-822f11970b8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Пискарёвское кладбище",
    location: "Санкт-Петербург, Россия",
    image: "https://images.unsplash.com/photo-1543161949-1f9193812ce8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  }
];

const WarMemorial = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-10">Мемориалы памяти</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {memorials.map((memorial, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div 
              className="h-48 bg-cover bg-center" 
              style={{ backgroundImage: `url(${memorial.image})` }}
            />
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-1">{memorial.title}</h3>
              <p className="text-sm text-muted-foreground">{memorial.location}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WarMemorial;
