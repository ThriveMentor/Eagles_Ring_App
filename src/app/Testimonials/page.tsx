import React from 'react';

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg mb-4 leading-relaxed">
              "Eagles Ring provided the platform I needed to connect with investors who believed in my vision."
            </p>
            <p className="font-semibold mb-2">- John Doe, CEO of StartupX</p>
            <p className="text-gray-600">
              "Their guidance and support were instrumental in securing our latest funding round."
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg mb-4 leading-relaxed">
              "As an investor with Eagles Ring, I've seen firsthand the potential for growth in innovative startups."
            </p>
            <p className="font-semibold mb-2">- Investor Name, Venture Capitalist</p>
            <p className="text-gray-600">
              "Their curated selection process ensures high-quality investment opportunities."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;