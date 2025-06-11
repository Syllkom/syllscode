
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IconBrandGithub, IconBrandTelegram, IconBrandWhatsapp } from '@tabler/icons-react';
import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);


  return (
    <footer style={{ backgroundColor: '#101A31' }} className="py-12 text-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          
          <div className="md:w-2/3 lg:w-1/2 text-left">
            <Link href="/" legacyBehavior>
              <a className="inline-flex items-center mb-4 group">
                <Image
                  src="https://files.catbox.moe/dbcsio.svg" 
                  alt="Syll's Code Icon"
                  width={40}
                  height={40}
                  className="h-auto group-hover:opacity-80 transition-opacity"
                  data-ai-hint="logo icon dark"
                />
                <span className="ml-3 text-xl font-semibold text-foreground group-hover:opacity-80 transition-opacity">
                  Syll's Code
                </span>
              </a>
            </Link>
            <p className="text-sm leading-relaxed text-[#828694]">
              Desarrollo de bots y servicios web innovadores para transformar la comunicación con tus clientes y optimizar procesos.
            </p>
          </div>


          <div className="w-full md:w-1/3 lg:w-1/2 flex flex-col items-start md:items-end gap-4">
            <p className="text-sm text-left md:text-right">
              {currentYear !== null ? <>© {currentYear} Syll&apos;s Code. All rights reserved. From <span className="text-primary font-semibold">Syllkom</span></> : 'Cargando...'}
            </p>
            <div className="flex space-x-3">
              <Link href="https://github.com/Syllkom" passHref legacyBehavior>
                <a target="_blank" rel="noopener noreferrer" aria-label="GitHub de Syll's Code" className="bg-accent text-primary p-2.5 rounded-full hover:opacity-80 transition-opacity">
                  <IconBrandGithub stroke={2} size={20} />
                </a>
              </Link>
              <Link href="https://t.me/syllscode" passHref legacyBehavior>
                <a target="_blank" rel="noopener noreferrer" aria-label="Telegram de Syll's Code" className="bg-accent text-primary p-2.5 rounded-full hover:opacity-80 transition-opacity">
                   <IconBrandTelegram stroke={2} size={20} />
                </a>
              </Link>
              <Link href="https://wa.me/573113825327" passHref legacyBehavior><a target="_blank" rel="noopener noreferrer" aria-label="WhatsApp de Syll's Code" className="bg-accent text-primary p-2.5 rounded-full hover:opacity-80 transition-opacity"><IconBrandWhatsapp stroke={2} size={20} /></a></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
