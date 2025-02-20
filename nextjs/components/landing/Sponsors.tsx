'use client';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';
import Autoplay from 'embla-carousel-autoplay';

interface SponsorProps {
  image: string;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    image: '/landing/bundestag.jpeg',
    name: 'Bundestag'
  },
  {
    image: '/landing/eu.jpeg',
    name: 'European Union'
  },
  {
    image: '/landing/berlin.png',
    name: 'Berlin'
  },
  {
    image: '/landing/hochshule.png',
    name: 'Hochschule'
  },
  {
    image: '/landing/sib.png',
    name: 'SIB'
  },
  {
    image: '/landing/exist.jpeg',
    name: 'Exist'
  },
  {
    image: '/landing/she-they.png',
    name: 'She They'
  }
];

export const Sponsors = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      containScroll: false,
      dragFree: true
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true
      })
    ]
  );

  return (
    <section id="sponsors" className="container py-24 sm:py-32">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">
        Our{' '}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Partners
        </span>{' '}
        and Supporters
      </h2>

      <div className="w-full overflow-hidden px-4 md:px-8" ref={emblaRef}>
        <div className="flex gap-16 md:gap-24">
          {sponsors.map(({ image, name }) => (
            <div
              key={name}
              className="flex-[0_0_120px] md:flex-[0_0_160px] h-[50px] relative"
            >
              <img
                src={image}
                alt={name}
                className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
