import { Separator } from "@/components/ui/separator";

const events = [
  {
    year: "1939",
    title: "Начало Второй мировой войны",
    description: "1 сентября 1939 года Германия вторгается в Польшу, что считается официальным началом Второй мировой войны.",
  },
  {
    year: "1941",
    title: "Нападение на СССР",
    description: "22 июня 1941 года Германия вторгается в Советский Союз, начиная операцию «Барбаросса».",
  },
  {
    year: "1941",
    title: "Нападение на Пёрл-Харбор",
    description: "7 декабря 1941 года Япония нападает на американскую военно-морскую базу Пёрл-Харбор, что приводит к вступлению США в войну.",
  },
  {
    year: "1942-1943",
    title: "Сталинградская битва",
    description: "С 17 июля 1942 по 2 февраля 1943 года происходит решающее сражение, ставшее переломным моментом в войне.",
  },
  {
    year: "1944",
    title: "Открытие Второго фронта",
    description: "6 июня 1944 года союзники высаживаются в Нормандии, начиная операцию «Оверлорд».",
  },
  {
    year: "1945",
    title: "Капитуляция Германии",
    description: "8 мая 1945 года Германия подписывает акт о безоговорочной капитуляции.",
  },
  {
    year: "1945",
    title: "Капитуляция Японии",
    description: "2 сентября 1945 года Япония подписывает акт о капитуляции, что знаменует окончание Второй мировой войны.",
  }
];

const HistoryTimeline = () => {
  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Хронология событий</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Ключевые даты и события Второй мировой войны
        </p>
      </div>
      
      <div className="relative">
        {/* Вертикальная линия */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>
        
        <div className="space-y-12">
          {events.map((event, index) => (
            <div key={index} className="relative">
              {/* Кружок на линии */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
              
              <div className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className="w-1/2"></div>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <span className="inline-block px-3 py-1 mb-3 text-sm font-semibold bg-primary/10 text-primary rounded-full">
                      {event.year}
                    </span>
                    <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground text-sm">{event.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryTimeline;
