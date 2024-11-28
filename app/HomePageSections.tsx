'use client';

import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

const HomePageSections = () => {
  const figPiiScript = `!function(w,d,u){var n=d.createElement('script');n.crossOrigin='anonymous',n.async='async',n.src=u,d.head.append(n),w._fpEvent=w._fpEvent||[]}(window,document,'https://tracking-cdn.figpii.com/c6e82ca4f660f584d650c7ba6727d464.js');`;

  return (
    <>
      <Script id='figpii' dangerouslySetInnerHTML={{ __html: figPiiScript }} />
      <div className='space-y-16 bg-gray-50 p-8'>
        {/* Hero Section */}
        <section className='text-center bg-gradient-to-r from-blue-500 to-blue-700 text-white p-12 rounded-lg shadow-md'>
          <h1 className='text-4xl font-bold mb-4'>Welcome to Our Website</h1>
          <p className='text-lg mb-6'>
            Discover amazing content and services tailored for you.
          </p>
          <button className='bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100 transition'>
            Get Started
          </button>
        </section>

        {/* Features Section */}
        <section className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {[
            {
              title: 'Feature One',
              description: 'Learn about our first amazing feature.',
              image: '/images/feature1.jpg',
            },
            {
              title: 'Feature Two',
              description: 'Explore what makes our second feature great.',
              image: '/images/feature2.jpg',
            },
            {
              title: 'Feature Three',
              description: 'Find out why our third feature stands out.',
              image: '/images/feature3.jpg',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className='p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition'
            >
              <Image
                src={feature.image}
                alt={feature.title}
                width={400}
                height={250}
                className='rounded-lg mb-4'
              />
              <h3 className='text-xl font-semibold mb-2'>{feature.title}</h3>
              <p className='text-gray-600 mb-4'>{feature.description}</p>
              <Link
                href='#'
                className='text-blue-600 font-medium hover:underline'
              >
                Learn More
              </Link>
            </div>
          ))}
        </section>

        {/* Call-to-Action Section */}
        <section className='bg-gray-900 text-white text-center py-12 rounded-lg'>
          <h2 className='text-3xl font-bold mb-4'>
            Ready to start your journey?
          </h2>
          <p className='text-lg mb-6'>
            Join us today and unlock exclusive benefits.
          </p>
          <button className='bg-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 transition'>
            Sign Up Now
          </button>
        </section>
      </div>
    </>
  );
};

export default HomePageSections;
