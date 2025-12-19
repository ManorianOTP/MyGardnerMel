import { SkipLink } from '@/components/SkipLink';
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
      <SkipLink />
      <Header />
      <main id="main-content" tabIndex={-1}>
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
