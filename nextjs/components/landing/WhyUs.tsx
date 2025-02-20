'use client';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Clock, Wrench, Phone, Settings2 } from 'lucide-react';
import type { JSX } from 'react';

interface BenefitProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const benefits: BenefitProps[] = [
  {
    title: 'Affordable & fast',
    description: 'Lower costs and less waiting time than in-person services.',
    icon: <Clock className="w-6 h-6 text-primary" />
  },
  {
    title: 'Expert diagnosis',
    description:
      'Get professional insights and suggestions for tools and parts.',
    icon: <Wrench className="w-6 h-6 text-primary" />
  },
  {
    title: 'Convenient video calls',
    description:
      'Schedule video calls at your convenience for real-time support.',
    icon: <Phone className="w-6 h-6 text-primary" />
  },
  {
    title: 'Personalized service',
    description: 'Receive solutions tailored to your unique needs.',
    icon: <Settings2 className="w-6 h-6 text-primary" />
  }
];

export const WhyUs = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why{' '}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Fixit
            </span>
            ?
          </h2>

          <p className="text-xl text-muted-foreground mb-8">
            Enjoy the convenience of remote assistance with all the benefits of
            professional guidance, without the hassle of waiting or high costs.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map(({ icon, title, description }: BenefitProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1">
                  <div className="mb-4 bg-primary/10 w-fit p-2.5 rounded-xl">
                    {icon}
                  </div>
                  <CardTitle className="text-lg">{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src="/landing/why-us.jpeg"
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="Why choose Fixit"
        />
      </div>
    </section>
  );
};
