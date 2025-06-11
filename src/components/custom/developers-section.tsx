import Image from 'next/image';
import React from 'react';
import { cn } from '@/lib/utils';

interface Developer {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  imageHint: string;
}

const developersData: Developer[] = [
  {
    name: 'Syllkom',
    role: 'Fundador Principal',
    description: 'Desarrollador principal y visionario detrás de Syll\'s Code. Encargado del desarrollo web, con lenguajes y tecnologías diversas.',
    imageUrl: 'https://files.catbox.moe/366uqo.jpg',
    imageHint: 'zzz',
  },
  {
    name: 'Zeppth',
    role: 'Co-fundador',
    description: 'Experto en seguridad y desarrollo de bots. Responsable de la arquitectura del sistema y la integración con WhatsApp.',
    imageUrl: 'https://files.catbox.moe/lnbuml.jpeg',
    imageHint: 'zzz',
  },
];

const DevelopersSection = () => {
  return (
    <section
      id="developers"
      className="relative py-20 md:py-32 bg-gradient-to-br from-[#131B32] to-[#0F172A] overflow-hidden animate-subtle-bg"
    >
      <div className="absolute inset-x-0 top-0 h-[200px] pointer-events-none" aria-hidden="true">
        <div
          className="w-full h-full bg-gradient-to-b from-[#202B41] to-transparent blur-[100px] opacity-50"
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-foreground">
            Desarrolladores
          </h2>
          <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
        </div>

        <div
          className={cn(
            "dev-card-animated-border rounded-xl shadow-lg",
            "transition-shadow duration-300 ease-in-out"
          )}
        >
          <div
            className={cn(
              "bg-card p-4 md:p-8 rounded-[11px] h-full w-full",
              "flex flex-col md:flex-row md:gap-8"
            )}
          >
            {developersData.map((dev, index) => (
              <React.Fragment key={dev.name}>
                <div className="flex-1 flex flex-col py-4 md:py-0">
                  <div className="flex flex-row items-start gap-4 md:gap-5 mb-4">
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shadow-lg shrink-0">
                      <Image
                        src={dev.imageUrl}
                        alt={dev.name}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={dev.imageHint}
                        className="rounded-xl"
                      />
                    </div>
                    <div className="flex flex-col mt-1">
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground">{dev.name}</h3>
                      <p
                        className="text-xs md:text-sm text-muted-foreground mt-1"
                        style={dev.name === 'Syllkom' ? { color: '#7F7F7F' } : {}}
                      >
                        {dev.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {dev.description}
                  </p>
                </div>
                {index < developersData.length - 1 && (
                  <>
                    <div className="w-full h-px bg-border my-4 md:hidden"></div>
                    <div className="hidden md:block w-px bg-border self-stretch mx-2 md:mx-4"></div>
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopersSection;
