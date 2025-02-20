import { Cta } from '@/components/landing/Cta';
import { Features } from '@/components/landing/Features';
import { Hero } from '@/components/landing/Hero';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { WhyUs } from '@/components/landing/WhyUs';
import { Sponsors } from '@/components/landing/Sponsors';
import { Testimonials } from '@/components/landing/Testimonials';
import { Services } from '@/components/landing/Services';
import { Contact } from '@/components/landing/Contact';

export default async function LandingPage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Services />
      <Features />
      <WhyUs />
      <Testimonials />
      <Cta />
      <Sponsors />
      <Contact />
    </>
  );
}
