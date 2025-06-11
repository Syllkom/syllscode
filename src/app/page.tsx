
import HeroSection from '@/components/custom/hero-section';
import ServicesSection from '@/components/custom/services-section';
import ResourcesSection from '@/components/custom/resources-section';
import ChannelsSection from '@/components/custom/channels-section';
import DevelopersSection from '@/components/custom/developers-section';
import ContactSection from '@/components/custom/contact-section';
import Footer from '@/components/custom/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <ResourcesSection />
        <ChannelsSection />
        <DevelopersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
