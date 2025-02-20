'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import useEmblaCarousel from 'embla-carousel-react';
import { Quote } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

interface TestimonialProps {
  image: string;
  name: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: '/landing/testimonials/sayfullo.jpeg',
    name: 'Sayfullo',
    comment:
      'The handyman was very eager to help me and gave clear instructions. I felt well-guided and understood the problem at hand better.'
  },
  {
    image: '/landing/testimonials/daniel.jpeg',
    name: 'Daniel',
    comment:
      'It was a very helpful call. The plumber was quite knowledgeable, and the Fixit team was quite supportive of arranging the call as well as sharing follow-up information!'
  },
  {
    image: '/landing/testimonials/pisitta.jpeg',
    name: 'Pisitta',
    comment:
      "I'm so happy with the results!! My handyman communicated very well and was very assuring - very important traits for this task 🙂"
  }
];

export const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: false,
    containScroll: 'trimSnaps',
    dragFree: false
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          What our customers{' '}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            say about us
          </span>
        </h2>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="overflow-hidden px-4 md:px-8" ref={emblaRef}>
          <div className="flex gap-6 md:gap-8 cursor-grab active:cursor-grabbing">
            {testimonials.map(({ image, name, comment }, index) => (
              <Card
                key={name}
                className={`flex-[0_0_100%] md:flex-[0_0_60%] min-h-[200px] transition-all duration-300 ${
                  selectedIndex === index
                    ? 'opacity-100 scale-100'
                    : 'opacity-40 scale-95'
                }`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={image} alt={name} />
                      <AvatarFallback>{name[0]}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-lg">{name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 border-t">
                  <div className="flex gap-2">
                    <Quote className="h-4 w-4 text-primary shrink-0" />
                    <p className="text-muted-foreground">{comment}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === selectedIndex ? 'bg-primary' : 'bg-primary/20'
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
