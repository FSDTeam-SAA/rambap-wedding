'use client';

interface Event {
  time: string;
  title: string;
  description: string;
  icon: string;
}

const events: Event[] = [
  {
    time: '13:00',
    title: 'Ceremony',
    description: 'Wedding of the Church of Encarnación',
    icon: '⛪',
  },
  {
    time: '15:00',
    title: 'Welcome Cocktail',
    description: 'Arrival at the venue and appetizers',
    icon: '🥂',
  },
  {
    time: '16:30',
    title: 'Dinner',
    description: 'Wedding banquet',
    icon: '🍽️',
  },
  {
    time: '18:30',
    title: 'First Dance',
    description: "Let's hit the dance floor!",
    icon: '🎵',
  },
  {
    time: '01:00',
    title: 'End of Party',
    description: 'With the possibility to extend',
    icon: '🎆',
  },
];

export default function DayProgramSection() {
  
  return (
    <section className="w-full py-16 md:py-24 px-4 bg-[#f3efe6]">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-2">
            Day Program
          </h2>
          <p className="text-foreground/60 font-light">
            What we have planned for you
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/30 to-primary/10" />

          {/* Events */}
          <div className="space-y-12 md:space-y-16">
            {events.map((event, index) => (
              <div
                key={index}
                className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-6 md:gap-8`}
              >
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  {index % 2 === 0 ? (
                    <div className="space-y-2 pr-4 md:pr-8">
                      <p className="text-xs md:text-sm font-light tracking-widest text-primary uppercase">
                        {event.title}
                      </p>
                      <p className="text-foreground/60 font-light text-sm md:text-base">
                        {event.description}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2 pl-4 md:pl-8">
                      <p className="text-xs md:text-sm font-light tracking-widest text-primary uppercase">
                        {event.title}
                      </p>
                      <p className="text-foreground/60 font-light text-sm md:text-base">
                        {event.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Center dot with time */}
                <div className="w-0 flex flex-col items-center">
                  {/* Time badge */}
                  <div className="mb-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs md:text-sm font-light whitespace-nowrap">
                    {event.time}
                  </div>

                  {/* Dot */}
                  <div className="w-6 h-6 rounded-full bg-white border-4 border-primary shadow-lg" />
                </div>

                {/* Icon placeholder (for alignment) */}
                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
