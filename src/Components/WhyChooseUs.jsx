import React from 'react';

const WhyChooseUS = () => {
  const features = [
    {
      icon: '🔥',
      title: 'Expertise',
      description:
        'Our team consists of subject matter experts with extensive industry experience and a deep understanding of the latest trends and best practices.',
    },
    {
      icon: '🚚',
      title: 'Customization',
      description:
        'We tailor our services to meet the unique needs of each client, ensuring that our solutions are relevant, effective, and aligned with their goals.',
    },
    {
      icon: '💡',
      title: 'Innovation',
      description:
        'We stay ahead of the curve by embracing new ideas, technologies, and methodologies that drive innovation and growth.',
    },
    {
      icon: '✔️',
      title: 'Commitment',
      description:
        'Our clients’ success is our priority. We are dedicated to delivering high-quality services that exceed expectations and create lasting impact.',
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto flex justify-center flex-col items-center px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
          Why Choose Alpha Consultancy
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-500 max-w-[34rem] shadow-md rounded-lg p-6 flex items-start space-x-4"
            >
              <div className="text-4xl text-blue-500">{feature.icon}</div>
              <div>
                <h3 className="text-xlg font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-black mt-2">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUS;
