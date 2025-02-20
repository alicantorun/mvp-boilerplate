import { Button } from '@/components/ui/button';
import { buttonVariants } from '@/components/ui/button';
import { HeroCards } from './HeroCards';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

export const Hero = () => {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: "url('/landing/hero-bg.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay should be below the content */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      <div className="text-center space-y-6 max-w-3xl px-4 relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Easy online help for your household repair
        </h1>

        <p className="text-xl text-white md:w-10/12 mx-auto">
          Get an instant diagnosis of your repair need and be guided
          step-by-step by a certified handyperson via video call.
        </p>

        <div>
          <Button className="text-lg px-8 py-6">Let's Fixit!</Button>
        </div>
      </div>
    </section>
  );
};
