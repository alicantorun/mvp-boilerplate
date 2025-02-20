'use client';

import { Button } from '@/components/ui/button';

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-[#1A3253] py-24 sm:py-32 my-24 sm:my-32 text-white"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center gap-8 px-12 md:px-16 lg:px-24">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Are you ready for a repair call ?
          </h2>
          <p className="text-white text-xl mt-6 mb-12 lg:mb-0">
            Don't wait! Let's fix your issue fast and on-budget.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:w-auto px-8 py-6">Let's Fixit!</Button>
        </div>
      </div>
    </section>
  );
};
