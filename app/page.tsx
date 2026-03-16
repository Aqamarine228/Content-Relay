import { AboutProduct } from '@/components/about-product';
import { Features } from '@/components/features';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { HowItWorks } from '@/components/how-it-works';
import { Platforms } from '@/components/platforms';
export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Platforms />
      <HowItWorks />
      <AboutProduct />
      <Footer />
    </>
  );
}
