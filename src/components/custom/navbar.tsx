
'use client';

import type { FC } from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IconMenu3, IconX } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '#hero', label: 'Inicio' },
  { href: '#services', label: 'Servicios' },
  { href: '#resources', label: 'Recursos' },
  { href: '#channels', label: 'Canales' },
  { href: '#developers', label: 'Desarrolladores' },
  { href: '#contactsection', label: 'Contacto' },
];

const Navbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(72);

  useEffect(() => {
    const navElement = document.querySelector('nav');
    if (navElement) {
      setNavbarHeight(navElement.offsetHeight);
    }

    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavLinkClick = (href: string, e?: React.MouseEvent<HTMLAnchorElement, MouseEvent> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (href.startsWith('#')) {
      e?.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight - 20;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleProjectsButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    handleNavLinkClick('#services', e);
  };


  return (
    <nav className={cn(
      "bg-background/85 backdrop-blur-md sticky top-0 z-50 py-4 border-b border-border/50 transition-shadow duration-300",
      scrolled ? "shadow-xl" : "shadow-md"
      )}
      style={{ '--navbar-height': `${navbarHeight}px` } as React.CSSProperties}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="flex items-center gap-2 text-xl font-semibold text-foreground hover:opacity-80 transition-opacity" onClick={(e) => { handleNavLinkClick('/', e); setIsMobileMenuOpen(false);}}>
            <Image
              src="https://files.catbox.moe/dbcsio.svg"
              alt="Syll's Code Icon"
              width={40}
              height={40}
              data-ai-hint="logo icon dark"
              className="h-auto"
            />
            Syll&apos;s Code
          </a>
        </Link>

        <div>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Abrir menú">
                <IconMenu3 stroke={2} size={24} className="text-foreground" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className={cn(
                "main-sheet-content",
                "p-0 shadow-lg flex flex-col",
                "bg-background/85 backdrop-blur-md",
                "w-3/4 sm:max-w-sm border-l border-[hsl(var(--border)/0.5)]",
                "max-h-[100vh]"
              )}
            >
              <div className="flex justify-between items-center p-4 border-b border-[hsl(var(--border)/0.5)]">
                <Link href="/" legacyBehavior>
                  <a className="flex items-center gap-2 text-xl font-semibold text-foreground hover:opacity-80 transition-opacity" onClick={(e) => { handleNavLinkClick('/', e); setIsMobileMenuOpen(false);}}>
                    <Image
                      src="https://files.catbox.moe/dbcsio.svg"
                      alt="Syll's Code Icon"
                      width={32}
                      height={32}
                      data-ai-hint="logo icon dark"
                      className="h-auto"
                    />
                    Syll&apos;s Code
                  </a>
                </Link>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="text-foreground" aria-label="Cerrar menú">
                    <IconX strokeWidth={2} size={24} />
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex-grow p-4 space-y-2 overflow-y-auto">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link href={link.href} passHref legacyBehavior>
                      <a
                        className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-[hsl(var(--accent)/0.7)] transition-colors"
                        onClick={(e) => handleNavLinkClick(link.href, e)}
                      >
                        {link.label}
                      </a>
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="p-4 border-t border-[hsl(var(--border)/0.5)] mt-auto">
                <Button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={handleProjectsButtonClick}
                >
                  Ver Proyectos
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
