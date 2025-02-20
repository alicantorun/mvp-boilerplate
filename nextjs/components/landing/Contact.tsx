'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted!');
  };

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <img
          src="/landing/contact.jpeg"
          alt="Contact us"
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
        />

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Looking for{' '}
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                flexible jobs
              </span>
              ?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join our platform to help customers via video calls. Work on your
              own schedule and earn on your terms.
            </p>
            <p className="text-lg text-muted-foreground">
              Enter your email below, and we'll contact you to get started!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Email *"
                className="bg-muted/50 dark:bg-muted/80"
                required
              />
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder="Message (optional)"
                className="bg-muted/50 dark:bg-muted/80 min-h-[120px]"
              />
            </div>
            <Button size="lg" className="w-full md:w-auto">
              Join now
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
