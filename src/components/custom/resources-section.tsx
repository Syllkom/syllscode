
'use client';

import type { FC, ComponentProps } from 'react';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  IconTorii,
  IconLibraryPhoto,
  IconFlagSpark,
  IconFlower,
  IconBadgeHd,
} from '@tabler/icons-react';
import { Download, Eye } from 'lucide-react'; 
import { cn } from '@/lib/utils';

type TablerIconType = FC<ComponentProps<'svg'> & { stroke?: number | string; size?: number | string }>;

interface Resource {
  id: string;
  icon: TablerIconType; 
  title: string;
  description: string;
  tag: string;
  downloadLink: string;
}

const resourcesData: Resource[] = [
  {
    id: '1',
    icon: IconTorii,
    title: 'Animes Sub español, Español latino y Hentai',
    description: 'Accede a nuestra completa base de datos en formato JSON con información de animes subtitulados y doblados al español comp también hentai.',
    tag: 'JSON',
    downloadLink: '/archive/anime-db.json', 
  },
  {
    id: '2',
    icon: IconLibraryPhoto,
    title: 'Fotos de perfil anime para compartir',
    description: 'Una pequeña base de fotos para compartir con tu novi@, contando con mas de 100+ imágenes, implementalo enn tu bot de WhatsApp.',
    tag: 'JSON',
    downloadLink: '/archive/couple-db.json', 
  },
  {
    id: '3',
    icon: IconFlagSpark,
    title: 'Una mini base para juegos - banderas',
    description: 'Una base completa, contando con todas las banderas, para su uso simplemente crea un xolan comando en tu bot y programa un mini juego "adivina la bandera"',
    tag: 'JSON',
    downloadLink: '/archive/bandera.json',
  },
   {
    id: '4',
    icon: IconFlower,
    title: 'Anime Waifu db - rol waifu',
    description: 'Una base de Waifus para implementar a tu bot de whatsapp (gacha)',
    tag: 'JSON',
    downloadLink: '/archive/waifus-db.json',
  },
  {
    id: '5',
    icon: IconBadgeHd,
    title: 'Edits anime, phonk y estilo retro',
    description: 'Base de edits cortos de anime con buena calidad, contando con 3 categorías: anime, phonk y retro.',
    tag: 'JSON',
    downloadLink: '/archive/edits-db.json',
  }
];

const ResourcesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedResources = showAll ? resourcesData : resourcesData.slice(0, 2);

  const handleDownload = (downloadUrl: string, resourceTitle: string) => {
    const link = document.createElement('a');
    link.href = downloadUrl;

    const fileName = downloadUrl.substring(downloadUrl.lastIndexOf('/') + 1) || `${resourceTitle.replace(/\s+/g, '_').toLowerCase()}.json`;
    link.download = fileName;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="resources" 
      className="relative py-20 md:py-32 bg-gradient-to-br from-[#212534] to-[#1A2233] overflow-hidden animate-subtle-bg"
    >
      <div className="absolute inset-x-0 top-0 h-[200px] pointer-events-none" aria-hidden="true">
        <div 
          className="w-full h-full bg-gradient-to-b from-[#152032] to-transparent blur-[100px] opacity-50"
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-foreground">
            Tenemos algunos <span className="text-primary">recursos</span><br/> hechos por nosotros para ustedes
          </h2>
          <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedResources.map((resource, index) => {
            const IconComponent = resource.icon;
            const isLastItem = index === displayedResources.length - 1;
            
            const isOddNumberOfItemsMd = displayedResources.length % 2 === 1;
            const shouldCenterOnMd = isLastItem && isOddNumberOfItemsMd;

            const isLastAloneInLgRow = isLastItem && (displayedResources.length % 3 === 1);
            const shouldCenterOnLg = isLastAloneInLgRow;
            
            return (
            <Card
              key={resource.id}
              className={cn(
                "card-fade-in border-border rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col overflow-hidden transform hover:-translate-y-1",
                "bg-[#1A2233] w-full hover:border-primary focus-within:border-primary focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ring-offset-background", 
                shouldCenterOnMd && !shouldCenterOnLg && "md:col-span-2 md:mx-auto md:max-w-md", 
                shouldCenterOnLg && "lg:col-span-3 lg:mx-auto lg:max-w-md" 
              )}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="mb-4 flex justify-start">
                  <div className="bg-accent p-4 rounded-xl inline-block shadow-md">
                    <IconComponent stroke={2} className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-semibold text-foreground text-left">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <CardDescription className="text-base text-muted-foreground leading-relaxed text-left mb-4">
                  {resource.description}
                </CardDescription>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <Badge style={{ backgroundColor: '#30AB74', color: 'white' }} className="py-1 px-3 text-sm">
                        {resource.tag}
                    </Badge>
                    <Button
                        variant="default"
                        size="md"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-6 py-2 shadow-md transform transition-transform hover:scale-105 w-full sm:w-auto"
                        onClick={() => handleDownload(resource.downloadLink, resource.title)}
                        aria-label={`Descargar ${resource.title}`}
                    >
                        <Download className="mr-2 h-5 w-5" />
                        Download JSON
                    </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
        </div>
        {resourcesData.length > 2 && (
          <div className="text-center">
            <Button
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="bg-gradient-to-r from-[#5929ED] to-[#3B00D0] hover:from-[#4A1FDE] hover:to-[#2C00A0] text-primary-foreground rounded-full px-8 py-3 text-lg shadow-lg transform transition-transform hover:scale-105"
              aria-label={showAll ? "Mostrar menos recursos" : "Ver todos los recursos"}
            >
              <Eye className="mr-2 h-5 w-5" />
              {showAll ? 'Ver Menos' : 'View all'}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResourcesSection;
