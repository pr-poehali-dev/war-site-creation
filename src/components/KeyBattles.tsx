import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const battles = [
  {
    title: "Сталинградская битва",
    date: "17 июля 1942 - 2 февраля 1943",
    description: "Крупнейшее сухопутное сражение в истории человечества, ставшее переломным моментом в ходе Великой Отечественной войны и Второй мировой войны в целом.",
    image: "https://images.unsplash.com/photo-1642148465066-29212ff08d19?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tags: ["Восточный фронт", "СССР", "Германия"]
  },
  {
    title: "Битва за Британию",
    date: "10 июля - 31 октября 1940",
    description: "Крупномасштабное воздушное сражение, целью которого было завоевание господства в воздухе над Британией перед планируемым вторжением.",
    image: "https://images.unsplash.com/photo-1603405384069-56c818e2cbfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tags: ["Западный фронт", "Великобритания", "Германия"]
  },
  {
    title: "Нормандская операция",
    date: "6 июня - 31 августа 1944",
    description: "Стратегическая операция союзников по высадке войск в Нормандии (Франция), открывшая Западный фронт в Европе.",
    image: "https://images.unsplash.com/photo-1582739132987-0c5049e78960?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tags: ["Западный фронт", "США", "Великобритания", "Франция"]
  }
];

const KeyBattles = () => {
  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Ключевые сражения</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Битвы, изменившие ход Второй мировой войны и определившие судьбу миллионов людей
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {battles.map((battle, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
            <div 
              className="h-48 bg-cover bg-center" 
              style={{ backgroundImage: `url(${battle.image})` }}
            />
            <CardHeader>
              <CardTitle>{battle.title}</CardTitle>
              <CardDescription>{battle.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{battle.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {battle.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full">Подробнее</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-10">
        <Button variant="link" className="text-primary">
          Смотреть все сражения →
        </Button>
      </div>
    </div>
  );
};

export default KeyBattles;
