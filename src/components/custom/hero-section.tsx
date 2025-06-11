'use client';

import Link from 'next/link';
import type { MouseEvent } from 'react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const handleScrollTo = (id: string, e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight - 20; // 20px offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-br from-[#131B32] to-[#202B41] pt-[6.5rem] pb-20 md:pt-[7rem] md:pb-32 overflow-hidden animate-subtle-bg"
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 text-left max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Recursos para Desarrolladores Frontend y Diseñadores por{' '}
            <span className="bg-gradient-to-r from-[#DD9EDD] to-[#8D8AFF] text-transparent bg-clip-text">
              Syll&apos;s Code
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[#828694]">
            Syll&apos;s Code, es una empresa dedicada exclusivamente al desarrollo de HorekuOs. Sin embargo, también cuenta con diversos proyectos asociados, como Anime & Onigiri, Kaze-Bot y RenjiBot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Link href="#services" passHref legacyBehavior>
              <a
                onClick={(e) => handleScrollTo('services', e)}
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  "bg-[#6366F5] hover:bg-[#5254E0] text-primary-foreground rounded-lg text-lg shadow-lg transform transition-transform hover:scale-105 w-full sm:w-auto"
                )}
                aria-label="Ver proyectos"
              >
                Ver proyectos
              </a>
            </Link>
            <Link href="#contactsection" passHref legacyBehavior>
              <a
                onClick={(e) => handleScrollTo('contactsection', e)}
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  "bg-transparent border-[#828694] text-[#828694] hover:bg-[#828694]/10 hover:text-gray-300 rounded-lg text-lg shadow-md transform transition-transform hover:scale-105 w-full sm:w-auto"
                )}
                aria-label="Contactar"
              >
                Contactar
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;