import Image from 'next/image';

export default function ContactUs() {
  return (
    <main className="min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Have questions? We're here to help and would love to hear from you
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col justify-center">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border rounded-lg"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full p-3 border rounded-lg"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Other Ways to Reach Us
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">support@fixit.com</p>
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className="text-gray-600">
                    123 Repair Street
                    <br />
                    Fix City, FC 12345
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 10:00 AM - 4:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Map or Additional Info Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">We're Here to Help</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you need assistance with a repair, have questions about our
            services, or want to provide feedback, our team is ready to assist
            you. We typically respond within 24 business hours.
          </p>
        </div>
      </div>
    </main>
  );
}
