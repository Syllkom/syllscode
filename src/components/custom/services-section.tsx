
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { 
  IconMessageChatbot,
  IconBrandMeta,
  IconWorldWww,
  IconSparkles
} from '@tabler/icons-react';
import type { FC, ComponentProps } from 'react';

type TablerIconType = FC<ComponentProps<'svg'> & { stroke?: number | string; size?: number | string }>;

interface Service {
  icon: TablerIconType;
  title: string;
  description: string;
}

const servicesData: Service[] = [
  {
    icon: IconMessageChatbot,
    title: 'WhatsApp Bots',
    description: 'Bots de WhatsApp, con funciones completas y estructura mantenible.',
  },
  {
    icon: IconBrandMeta,
    title: 'Inteligencia Artificial',
    description: 'Nuestros chat bots impulsados por Llama Ai desarrollado por META AI',
  },
  {
    icon: IconWorldWww,
    title: 'Web',
    description: 'Desarrollo de aplicaciones web con tecnologías como React, Next.js entre otros.',
  },
  {
    icon: IconSparkles,
    title: 'Personalización',
    description: 'Adaptamos cada proyecto a tus necesidades específicas, asegurando que el resultado final se alinee perfectamente con tu visión y objetivos.',
  },
];

const ServicesSection = () => {
  return (
    <section 
      id="services" 
      className="relative py-20 md:py-32 bg-gradient-to-br from-background to-card overflow-hidden animate-subtle-bg"
    >
      <div className="absolute inset-x-0 top-0 h-[200px] pointer-events-none" aria-hidden="true">
        <div 
          className="w-full h-full bg-gradient-to-b from-[#202B41] to-transparent blur-[100px] opacity-50"
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            Lo que <span className="text-primary">Ofrecemos</span>
          </h2>
          <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="bg-card border-border rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col overflow-hidden transform hover:-translate-y-1 hover:border-primary focus-within:border-primary focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ring-offset-background"
              >
                <CardHeader className="pb-4">
                  <div className="mb-4 flex justify-start">
                    <div className="bg-accent p-4 rounded-xl inline-block shadow-md">
                      <IconComponent stroke={2} className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-semibold text-foreground text-left">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base text-muted-foreground leading-relaxed text-left">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
