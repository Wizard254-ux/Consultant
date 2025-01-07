import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


export default function AboutPage ({isSideBar,displaySideBar}) {
  
  return (
    <>
<Navbar isSideBar={isSideBar} displaySideBar={displaySideBar} />
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section with Background Pattern */}
      <div className="relative pt-3 px-4  h-[140px] md:h-[200px] bg-gray-300" style={{
    backgroundImage: "url('https://bobgroganconsulting.com/wp-content/themes/smallville/assets/images/bg-pattern.png')",
  }}>
        <div className="max-w-6xl mx-auto text-center text-gray-700 relative z-10">
          <h1 className="text:2xl md:text-4xl  font-bold mb-6">Innovating Tomorrow</h1>
          <p className="text-base md:text-xl text-gray-700 max-w-2xl mx-auto">
            We're on a mission to transform the digital landscape through cutting-edge solutions and forward-thinking expertise.
          </p>
        </div>
        <div className="absolute inset-0 bg-gray-300 opacity-20"></div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto px-4 -mt-3 md:-mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="h-48 bg-gray-200">
              <img
                src="omuya.png"
                alt="Sarah Chen"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">Mr Omuya</h3>
              <p className="text-blue-600 font-medium mb-2">Chief Executive Officer</p>
              <p className="text-gray-600 text-sm">
                Visionary leader with 15+ years of experience in transforming businesses through technology.
              </p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="h-48 bg-gray-200">
              <img
                src="/api/placeholder/400/300"
                alt="Marcus Rodriguez"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">Marcus Rodriguez</h3>
              <p className="text-blue-600 font-medium mb-2">Chief Technology Officer</p>
              <p className="text-gray-600 text-sm">
                Tech innovator with a proven track record in Silicon Valley's most dynamic startups.
              </p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="h-48 bg-gray-200">
              <img
                src="/api/placeholder/400/300"
                alt="Maya Patel"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">Maya Patel</h3>
              <p className="text-blue-600 font-medium mb-2">Chief Operating Officer</p>
              <p className="text-gray-600 text-sm">
                Strategic operations leader bringing global perspective to business optimization.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Company Story Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Since our founding in 2020, we've been driven by a singular vision: to create technology that makes a difference. 
                Our journey began with a small team of innovators and has grown into a global force of over 100 talented professionals.
              </p>
              <p>
                Today, we're proud to serve clients across three continents, bringing together diverse perspectives and cutting-edge 
                expertise to solve complex challenges. Our success is built on a foundation of continuous learning, bold innovation, 
                and unwavering commitment to excellence.
              </p>
            </div>
          </div>
          <div className="bg-blue-50 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Company Highlights</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                <div className="text-sm text-gray-600">Continents</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>

    </>
  );
};

