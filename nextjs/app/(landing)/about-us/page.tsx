import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Linkedin, Wrench, BriefcaseBusiness } from 'lucide-react';
import { Sponsors } from '@/components/landing/Sponsors';

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  linkedin: string;
}

const teamMembers: TeamMemberProps[] = [
  {
    image: '/landing/ale.jpeg',
    name: 'Alejandra Brizuela',
    role: 'Marketing & Product Development',
    linkedin: 'https://www.linkedin.com/in/alejandra-brizuela-8b605b1a5'
  },
  {
    image: '/landing/zara.jpeg',
    name: 'Zarangez Muminova',
    role: 'Finance & Business Modelling',
    linkedin: 'https://www.linkedin.com/in/zarangez-muminova-1a1a5180/'
  },
  {
    image: '/landing/jil.jpeg',
    name: 'Jil Landtau',
    role: 'Legal & Handycraft Industry',
    linkedin: 'https://www.linkedin.com/in/jil-froembling/'
  }
];

export default function AboutUs() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="container py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-8 place-items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                Hi, we're Fixit!
              </h1>
              <p className="text-xl text-muted-foreground">
                We are a Startup based in Berlin with the vision to change the
                handicraft industry.
              </p>
              <p className="text-lg text-muted-foreground">
                Born from our personal struggles of getting an appointment with
                a handyperson on short notice, we realized it was time to
                change.
              </p>
            </div>
            <Link href="/contact">
              <Button size="lg">Contact us</Button>
            </Link>
          </div>
          <Image
            src="/landing/about-us-hero.jpeg"
            alt="About Fixit"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="container py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 place-items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                We address Germany's growing shortage of certified handypeople
                by bringing back the ones who have permanent or temporary
                disabilities, parents, or others who prefer to work from
                anywhere and anytime.
              </p>
              <p className="text-lg text-muted-foreground">
                Customers can also confidently resolve their household issues
                with no waiting time and no messy home at the end.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Wrench className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">
                  Empower people with repairing
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <BriefcaseBusiness className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">
                  Flexible work for handypeople
                </h3>
              </div>
            </div>
          </div>
          <Image
            src="/landing/mission.png"
            alt="Our Mission"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </section>

      {/* Team Section */}
      <section className="container py-24 sm:py-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Fixit's Co-Founders
          </h2>
          <p className="text-lg text-muted-foreground">
            Meet our small team that makes this great product.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center space-y-4">
              <div className="relative mx-auto w-48 h-48 mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </section>

      <Sponsors />
    </main>
  );
}
