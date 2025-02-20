'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

interface StepProps {
  image: string;
  title: string;
  description: string;
  step: number;
}

const steps: StepProps[] = [
  {
    image: '/landing/how-it-works-1.svg',
    title: 'Identify the issue',
    description: "Tell us what's wrong, and we'll diagnose it within minutes.",
    step: 1
  },
  {
    image: 'landing/how-it-works-2.svg',
    title: 'Get the right tools',
    description:
      "We'll provide a complete list of tools and parts for your repair.",
    step: 2
  },
  {
    image: '/landing/how-it-works-3.svg',
    title: 'Repair via video call',
    description:
      'Book a call and get real-time, step-by-step guidance from a professional!',
    step: 3
  }
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container py-24 sm:py-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          How It{' '}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Works
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map(({ image, title, description, step }: StepProps) => (
          <Card key={step} className="bg-muted/50 border-none">
            <CardHeader>
              <div className="h-48 relative mb-4">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-contain"
                />
              </div>
              <CardTitle className="text-xl flex items-center gap-4">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">
                  {step}
                </span>
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
