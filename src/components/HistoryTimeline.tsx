import { Card, CardContent } from "@/components/ui/card";

const timelineEvents = [
  {
    year: "1939-1945",
    title: "Вторая мировая война",
    description: "Крупнейший вооруженный конфликт в истории человечества, в котором участвовало более 60 государств."
  },
  {
    year: "1914-1918",
    title: "Первая мировая война",
    description: "Один из самых широкомасштабных военных конфликтов в истории человечества."
  },
  {
    year: "1941-1945",
    title: "Великая Отечественная война",
    description: "Война Советского Союза против нацистской Германии и её союзников."
  }
];

const HistoryTimeline = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Важные исторические периоды</h2>
      
      <div className="space-y-8">
        {timelineEvents.map((event, index) => (
          <div key={index} className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary/20 ml-6 md:ml-8" />
            
            <Card className="ml-16 md:ml-24 relative hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="absolute -left-16 md:-left-24 top-6 bg-primary text-white rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-muted-foreground">{event.year}</div>
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryTimeline;
