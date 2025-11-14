import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Gallery } from '@/components/Gallery';
import { Services } from '@/components/Services';
import { Stats } from '@/components/Stats';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Services />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
