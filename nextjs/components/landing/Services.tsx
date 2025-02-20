'use client';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Star, UserCheck } from 'lucide-react';

import type { JSX } from 'react';

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: 'Screened professionals',
    description: 'We work with background-checked, certified professionals.',
    icon: <UserCheck className="w-6 h-6 text-primary" />
  },
  {
    title: 'Satisfaction pledge',
    description:
      'Our customer service team is always there to help if anything goes wrong.',
    icon: <Star className="w-6 h-6 text-primary" />
  }
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Guarantee your{' '}
            </span>
            satisfaction
          </h2>

          <div className="flex flex-col gap-8 mt-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src="/landing/happy-customer.jpeg"
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="Happy customer"
        />
      </div>
    </section>
  );
};
