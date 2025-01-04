import React from 'react';
import { MonitorCheck, BarChart, Database, GraduationCap } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <MonitorCheck className="w-12 h-12 text-blue-600" />,
      title: "ICT Consultancy",
      description: "Comprehensive ICT consulting services focusing on policy development, quality assurance, and infrastructure management.",
      benefits: [
        "Expert advice on ICT Policy development and review",
        "Quality Assurance on ICT systems",
        "ICT Infrastructure Management",
        "Information Systems Audit"
      ]
    },
    {
      icon: <BarChart className="w-12 h-12 text-green-600" />,
      title: "ICT Project Management",
      description: "End-to-end project management services for ICT implementations and infrastructure setup.",
      benefits: [
        "Full project lifecycle management from initiation to close out",
        "Network implementation services",
        "Cloud services implementation",
        "Data Management solutions"
      ]
    },
    {
      icon: <Database className="w-12 h-12 text-purple-600" />,
      title: "ERP Development and Implementation",
      description: "Specialized enterprise resource planning solutions with focus on Microsoft Dynamics NAV.",
      benefits: [
        "Microsoft Dynamics NAV Development",
        "Custom ERP system implementation",
        "System integration services",
        "Business process automation"
      ]
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-red-600" />,
      title: "Corporate ICT Training",
      description: "Comprehensive training programs covering ERP systems, AI technologies, and basic computer applications.",
      benefits: [
        "Microsoft Dynamics NAV training",
        "AI and Machine Learning workshops",
        "MS Office Suite training",
        "Graphic Design and Internet Programming"
      ]
    }
  ];

  return (
    <section className="pb-16 bg-gray-50">
      <div className="  ">
      <div className="text-center mb-12 h-[140px] md:h-[200px] bg-gray-300 pt-7"style={{
    backgroundImage: "url('https://bobgroganconsulting.com/wp-content/themes/smallville/assets/images/bg-pattern.png')",
  }}
>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">Our Consulting Services</h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
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