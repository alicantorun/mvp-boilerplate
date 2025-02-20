'use client';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

interface FeatureProps {
  title: string;
  description: string[];
  image: string;
}

const features: FeatureProps[] = [
  {
    title: 'Plumbing',
    description: [
      'Kitchen sink',
      'Bathroom sink',
      'Shower',
      'Bathtub',
      'Dishwasher',
      'Toilet',
      'Washing machine',
      'Faucet'
    ],
    image: '/landing/plumbing.png'
  },
  {
    title: 'Carpentry',
    description: [
      'Doors',
      'Windows',
      'Cabinetry',
      'Shelving',
      'Furniture',
      'Floor',
      'Ceiling',
      'Walls',
      'Stairs'
    ],
    image: '/landing/carpentry.png'
  },
  {
    title: 'Painting',
    description: [
      'Walls',
      'Doors',
      'Windows',
      'Furniture',
      'Ceiling',
      'Cabinetry',
      'Stairs',
      'Shelving'
    ],
    image: '/landing/painting.png'
  },
  {
    title: 'Flooring',
    description: [
      'Floor tiling',
      'Wood flooring',
      'Carpet',
      'Vinyl or laminate flooring',
      'Underlay'
    ],
    image: '/landing/flooring.png'
  },
  {
    title: 'Tile Installation',
    description: [
      'Bathroom Tiles',
      'Kitchen backsplash',
      'Floor tiling',
      'Outdoor tiling',
      'Wall tiling'
    ],
    image: '/landing/tile-installation.png'
  },
  {
    title: 'More coming soon!',
    description: [],
    image: '/landing/more.png'
  }
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl lg:text-4xl font-bold">
          We've got you{' '}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            covered
          </span>
        </h2>
        <p className="text-xl text-muted-foreground">
          Professionals in different areas of specialization are ready to help
          you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title} className="flex flex-col">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">{title}</CardTitle>
            </CardHeader>

            <CardContent className="flex-grow pb-4">
              <div className="flex flex-wrap gap-1.5">
                {description.map((item) => (
                  <Badge key={item} variant="secondary" className="text-xs">
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="pt-0">
              <img
                src={image}
                alt={title}
                className="w-[120px] h-[120px] mx-auto object-contain"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
