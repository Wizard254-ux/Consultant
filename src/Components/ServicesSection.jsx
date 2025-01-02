import React from 'react';
import { MessageCircle, Target, BarChart, Briefcase } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: "Strategic Consulting",
      description: "Develop comprehensive business strategies tailored to your unique market position and growth objectives.",
      benefits: [
        "In-depth market analysis",
        "Customized strategic roadmaps",
        "Competitive positioning"
      ]
    },
    {
      icon: <BarChart className="w-12 h-12 text-green-600" />,
      title: "Performance Optimization",
      description: "Enhance operational efficiency and drive measurable business improvements across your organization.",
      benefits: [
        "Process optimization",
        "Performance metrics design",
        "Productivity enhancement"
      ]
    },
    {
      icon: <Briefcase className="w-12 h-12 text-purple-600" />,
      title: "Digital Transformation",
      description: "Navigate the complex landscape of digital innovation and technological integration.",
      benefits: [
        "Technology strategy",
        "Digital ecosystem design",
        "Change management"
      ]
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-red-600" />,
      title: "Executive Coaching",
      description: "Personalized leadership development and strategic decision-making support.",
      benefits: [
        "Leadership assessment",
        "Skill development",
        "Personal strategic planning"
      ]
    }
  ];

  return (
    <section className="pb-16 bg-gray-50">
      <div className="  ">
        <div className="text-center h-[200px] w-full pt-6 mb-12 bg-gray-300" 
  style={{
    backgroundImage: "url('https://bobgroganconsulting.com/wp-content/themes/smallville/assets/images/bg-pattern.png')",
  }}
>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Consulting Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering businesses through strategic insights, innovative solutions, and transformative expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2 text-sm text-gray-700">
                {service.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center">
                    <svg 
                      className="w-4 h-4 mr-2 text-blue-500" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;