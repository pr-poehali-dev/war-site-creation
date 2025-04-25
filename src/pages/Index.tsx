import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MedalIcon, BookIcon, MapIcon } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import HistoryTimeline from "@/components/HistoryTimeline";
import WarMemorial from "@/components/WarMemorial";
import KeyBattles from "@/components/KeyBattles";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      
      <div className="container mx-auto py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Вторая мировая война 1939-1945</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Крупнейший вооружённый конфликт в истории человечества, который затронул большинство стран мира и унёс жизни более 70 миллионов человек.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="transition-all hover:shadow-lg">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <MedalIcon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Герои войны</h3>
              <p className="text-muted-foreground">Истории о подвигах солдат и офицеров, определивших исход войны.</p>
            </CardContent>
          </Card>
          
          <Card className="transition-all hover:shadow-lg">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <BookIcon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Документы и архивы</h3>
              <p className="text-muted-foreground">Исторические материалы, хроники и свидетельства событий 1939-1945 годов.</p>
            </CardContent>
          </Card>
          
          <Card className="transition-all hover:shadow-lg">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <MapIcon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Карты сражений</h3>
              <p className="text-muted-foreground">Тактические карты ключевых операций и стратегические планы военачальников.</p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-16" />
        
        <KeyBattles />
        
        <Separator className="my-16" />
        
        <HistoryTimeline />
        
        <Separator className="my-16" />
        
        <WarMemorial />

        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Узнайте больше о Второй мировой</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Изучите фронты, кампании и сражения, которые определили ход Второй мировой войны и послевоенное устройство мира.
          </p>
          <Button size="lg" className="animate-pulse">Исторические архивы</Button>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
