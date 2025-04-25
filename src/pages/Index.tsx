import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MedalIcon, BookIcon, MapIcon } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import HistoryTimeline from "@/components/HistoryTimeline";
import WarMemorial from "@/components/WarMemorial";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      
      <div className="container mx-auto py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">История великих сражений</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            На этих страницах собраны материалы о значимых битвах и войнах, изменивших ход истории человечества.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="transition-all hover:shadow-lg">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <MedalIcon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Герои войны</h3>
              <p className="text-muted-foreground">Истории о выдающихся личностях, проявивших мужество и героизм.</p>
            </CardContent>
          </Card>
          
          <Card className="transition-all hover:shadow-lg">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <BookIcon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Военная литература</h3>
              <p className="text-muted-foreground">Произведения, посвященные военным конфликтам и их влиянию на общество.</p>
            </CardContent>
          </Card>
          
          <Card className="transition-all hover:shadow-lg">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <MapIcon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Карты сражений</h3>
              <p className="text-muted-foreground">Интерактивные карты, иллюстрирующие ход значимых боевых действий.</p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-16" />
        
        <HistoryTimeline />
        
        <Separator className="my-16" />
        
        <WarMemorial />

        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Исследуйте больше</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Узнайте больше о военной истории, изучите архивные документы и погрузитесь в хронологию событий.
          </p>
          <Button size="lg" className="animate-pulse">Перейти в архив</Button>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
