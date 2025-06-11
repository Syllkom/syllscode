import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { IconMail, IconBrandWhatsapp, IconMapPins } from '@tabler/icons-react';
import type { FC, ComponentProps } from 'react';
import NextLink from 'next/link'; 
import { cn } from '@/lib/utils';

type TablerIconType = FC<ComponentProps<'svg'> & { stroke?: number | string; size?: number | string; strokeWidth?: number | string; }>;

interface ContactMethod {
  name: string;
  description: string;
  icon: TablerIconType;
  link: string;
  ariaLabel: string;
}

const contactMethods: ContactMethod[] = [
  {
    name: 'Email',
    description: 'Para consultas técnicas, soporte o colaboraciones.',
    icon: IconMail,
    link: 'mailto:contacto@syllscode.com',
    ariaLabel: 'Enviar un correo electrónico a Syll\'s Code',
  },
  {
    name: 'WhatsApp',
    description: 'Cotorrear y hablar de cualquier cosa, recuerda soy tu amigo.',
    icon: IconBrandWhatsapp,
    link: 'https://wa.me/1234567890',
    ariaLabel: 'Contactar a Syll\'s Code por WhatsApp',
  },
  {
    name: 'Venimos de',
    description: 'Venimos de Perú y Colombia para demostrar nuestro nivel, sin juegos de niños.',
    icon: IconMapPins,
    link: '#',
    ariaLabel: 'Conocer más sobre el origen de Syll\'s Code',
  },
];

const ContactSection = () => {
  return (
    <section
      id="contactsection"
      className="relative py-20 md:py-32 bg-gradient-to-br from-background to-card overflow-hidden animate-subtle-bg"
    >
      <div className="absolute inset-x-0 top-0 h-[200px] pointer-events-none" aria-hidden="true">
        <div
          className="w-full h-full bg-gradient-to-b from-[#0F172A] to-transparent blur-[100px] opacity-50"
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-foreground">
            Contáctanos
          </h2>
          <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            const numItems = contactMethods.length;
            const isLastItem = index === numItems - 1;

            const shouldSpanMd = isLastItem && (numItems % 2 === 1) && numItems > 0;
            const isLastAloneInLgRow = isLastItem && (numItems % 3 === 1) && numItems > 0;

            const shouldCenterCardOnMd = shouldSpanMd && !isLastAloneInLgRow;

            return (
              <NextLink
                href={method.link}
                key={method.name}
                passHref
                legacyBehavior
              >
                <a
                  target={method.link.startsWith('http') || method.link.startsWith('mailto:') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  aria-label={method.ariaLabel}
                  className={cn(
                    "group block transform hover:-translate-y-1 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ring-offset-background rounded-xl",
                    "w-full h-full flex",
                    shouldSpanMd && !isLastAloneInLgRow && "md:col-span-2",
                    isLastAloneInLgRow && "lg:col-span-3 lg:mx-auto lg:max-w-md"
                  )}
                >
                  <Card className={cn(
                    "bg-card border-border rounded-xl shadow-xl group-hover:shadow-2xl flex flex-col overflow-hidden h-full w-full group-hover:border-primary group-focus:border-primary transition-all duration-300 ease-in-out card-fade-in",
                    shouldCenterCardOnMd && "md:mx-auto md:max-w-sm"
                    )}>
                    <CardHeader className="pb-4">
                      <div className="mb-4 flex justify-start">
                        <div className="bg-accent p-4 rounded-xl inline-block shadow-md">
                          <IconComponent size={32} strokeWidth={2} className="text-primary" />
                        </div>
                      </div>
                      <CardTitle className="text-2xl font-semibold text-foreground text-left">{method.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-base text-muted-foreground leading-relaxed text-left">
                        {method.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </a>
              </NextLink>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
