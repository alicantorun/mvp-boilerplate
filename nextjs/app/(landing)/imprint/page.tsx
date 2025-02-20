export default function Imprint() {
  return (
    <main className="min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Imprint</h1>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Fixit</h2>
            <p className="text-gray-600">
              Hönower Straße 35
              <br />
              10318 Berlin
              <br />
              Germany
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p className="text-gray-600">
              E-Mail: contact.fixitberlin@gmail.com
              <br />
              Phone: +49 177 6231620
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">People responsible</h2>
            <p className="text-gray-600">
              Alejandra Brizuela
              <br />
              Jil Landtau
              <br />
              Zarangez Muminova
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Liability notice</h2>
            <p className="text-gray-600">
              We strive to provide accurate and up-to-date information on this
              website. If necessary, we also change and add content without
              announcing it in advance. However, we assume no liability for the
              correctness, topicality, and completeness of all content. This
              also applies to all content on external links. The respective
              operator is responsible there.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
