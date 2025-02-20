'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted!');
  };

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 gap-8 place-items-center">
        <div className="w-full space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Contact us</h2>
            <p className="text-lg text-muted-foreground">
              Have questions or want to know more? Fill out the form below and
              we'll soon be in touch!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <Input
              type="text"
              placeholder="Full name *"
              className="bg-muted/50 dark:bg-muted/80"
              required
            />
            <Input
              type="email"
              placeholder="Email *"
              className="bg-muted/50 dark:bg-muted/80"
              required
            />
            <Input
              type="text"
              placeholder="Topic *"
              className="bg-muted/50 dark:bg-muted/80"
              required
            />
            <Textarea
              placeholder="Message *"
              className="bg-muted/50 dark:bg-muted/80 min-h-[150px]"
              required
            />
            <Button size="lg" className="w-full md:w-auto">
              Send message
            </Button>
          </form>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact alternatives</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:contact.fixitberlin@gmail.com"
                  className="text-muted-foreground hover:text-primary"
                >
                  contact.fixitberlin@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <a
                  href="tel:+49 177 623 1620"
                  className="text-muted-foreground hover:text-primary"
                >
                  +49 177 623 1620
                </a>
              </div>
            </div>
          </div>
        </div>

        <img
          src="/landing/contact-page.png"
          alt="Contact us"
          className="w-full max-w-[600px] object-contain"
        />
      </div>
    </section>
  );
}
