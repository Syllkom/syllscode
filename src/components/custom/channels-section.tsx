import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { IconBrandTelegram, IconBrandWhatsapp, IconBrandTiktok } from '@tabler/icons-react';
import type { FC, ComponentProps } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type TablerIconType = FC<ComponentProps<'svg'> & { stroke?: number | string; size?: number | string; color?: string; fill?: string; strokeWidth?: number | string; }>;

interface Channel {
  name: string;
  description: string;
  icon: TablerIconType;
  iconColor?: string;
  iconFill?: string;
  link: string;
}

const channelsData: Channel[] = [
  {
    name: 'Telegram',
    description: 'Sigue el canal de Telegram y obten códigos exclusivos',
    icon: IconBrandTelegram,
    iconColor: '#39A3F5',
    iconFill: 'none',
    link: 'https://t.me/syllscode',
  },
  {
    name: 'WhatsApp',
    description: 'Únete a nuestra comunidad exclusiva de WhatsApp',
    icon: IconBrandWhatsapp,
    iconColor: '#30AB74',
    iconFill: 'none',
    link: 'https://chat.whatsapp.com/examplegroup',
  },
  {
    name: 'Tiktok',
    description: 'Sigue la cuenta oficial de Syllkom para ver contenido exclusivo',
    icon: IconBrandTiktok,
    iconColor: '#D13B3B',
    iconFill: 'none',
    link: 'https://www.tiktok.com/@syllscode',
  },
];

const ChannelsSection = () => {
  return (
    <section
      id="channels"
      className="relative py-20 md:py-32 bg-gradient-to-br from-[#131B32] to-[#202B41] overflow-hidden animate-subtle-bg"
    >
      <div className="absolute inset-x-0 top-0 h-[200px] pointer-events-none" aria-hidden="true">
        <div
          className="w-full h-full bg-gradient-to-b from-[#1A2233] to-transparent blur-[100px] opacity-50"
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-foreground">
            Canales y <span className="text-primary">grupos oficiales</span>
          </h2>
          <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {channelsData.map((channel, index) => {
            const IconComponent = channel.icon;
            const numItems = channelsData.length;
            const isLastItem = index === numItems - 1;

            const shouldSpanMd = isLastItem && (numItems % 2 === 1) && numItems > 0;
            const isLastAloneInLgRow = isLastItem && (numItems % 3 === 1) && numItems > 0;
            
            const shouldCenterCardOnMd = shouldSpanMd && !isLastAloneInLgRow;


            return (
            <Link
              href={channel.link}
              key={channel.name}
              passHref
              legacyBehavior
            >
              <a 
                target="_blank" 
                rel="noopener noreferrer" 
                className={cn(
                  "group block transform hover:-translate-y-1 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ring-offset-background rounded-xl",
                  "w-full h-full flex",
                  shouldSpanMd && !isLastAloneInLgRow && "md:col-span-2", 
                  isLastAloneInLgRow && "lg:col-span-3 lg:mx-auto lg:max-w-md"
                )}
              >
                <Card className={cn(
                    "bg-card border-border rounded-xl shadow-xl group-hover:shadow-2xl flex flex-col overflow-hidden h-full w-full card-fade-in transition-all duration-300 ease-in-out group-hover:border-primary group-focus:border-primary",
                    shouldCenterCardOnMd && "md:mx-auto md:max-w-sm" 
                  )}>
                  <CardHeader className="pb-4">
                    <div className="mb-4 flex justify-start">
                      <div className="bg-accent p-4 rounded-xl inline-block shadow-md">
                        <IconComponent
                          className="h-8 w-8"
                          strokeWidth={2}
                          color={channel.iconColor}
                          fill={channel.iconFill || 'none'}
                        />
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-semibold text-foreground text-left">{channel.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-base text-muted-foreground leading-relaxed text-left">
                      {channel.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </a>
            </Link>
          );
        })}
        </div>
      </div>
    </section>
  );
};

export default ChannelsSection;
