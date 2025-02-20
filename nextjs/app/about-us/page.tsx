import Image from 'next/image';

export default function AboutUs() {
  return (
    <main className="min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-600">
            We're on a mission to make home repairs simple and accessible for
            everyone
          </p>
        </div>

        {/* Company Story Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="/fixit.svg"
              alt="Company Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2024, FixIt emerged from a simple idea: everyone
              deserves access to reliable home repair services. We've built a
              platform that connects homeowners with skilled professionals,
              making home maintenance hassle-free.
            </p>
            <p className="text-gray-600">
              Today, we serve thousands of customers across the country,
              maintaining our commitment to quality, reliability, and customer
              satisfaction.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                description:
                  'We never compromise on the quality of our service delivery.'
              },
              {
                title: 'Customer Trust',
                description:
                  'Building lasting relationships through transparency and reliability.'
              },
              {
                title: 'Innovation',
                description:
                  'Continuously improving our platform to serve you better.'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            We're a dedicated team of professionals committed to revolutionizing
            the home repair industry. Our diverse backgrounds unite under one
            common goal: making home maintenance accessible to all.
          </p>
        </div>
      </div>
    </main>
  );
}
