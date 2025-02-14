import React, { useState } from 'react' // Add useState to the import
import Navbar from '../Components/Navbar'
import { Facebook, Twitter, Linkedin,Send } from 'lucide-react';

export default function Contact({isSideBar,displaySideBar}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [formSubmission, setFormSubmission] = useState({
    status: null,
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormSubmission({
        status: 'error',
        message: 'Please fill in all required fields'
      });
      return;
    }

    // Simulated form submission (replace with actual submission logic)
    try {
      // Simulate API call
      setTimeout(() => {
        setFormSubmission({
          status: 'success',
          message: 'Thank you for your message. We\'ll get back to you soon!'
        });
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
      }, 1500);
    } catch (error) {
      setFormSubmission({
        status: 'error',
        message: 'Something went wrong. Please try again.'
      });
    }
  };
  return (<>
  <Navbar isSideBar={isSideBar} displaySideBar={displaySideBar} />
  
  <div className="min-h-screen bg-gray-50 md:pb-12 ">
      <div className=" mx-auto">
        <div className="text-center mb-12 h-[140px] md:h-[200px] bg-gray-300 pt-7"style={{
    backgroundImage: "url('https://bobgroganconsulting.com/wp-content/themes/smallville/assets/images/bg-pattern.png')",
  }}>
          <h1 className="text:2xl md:text-4xl  font-bold text-gray-800 mb-4">Contact Our Consulting Team</h1>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business? Reach out and let's start a conversation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="you@company.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    name="phone" 
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="255 113 765 336"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input 
                    type="text" 
                    name="company" 
                    id="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea 
                  name="message" 
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your consulting needs..."
                  required
                ></textarea>
              </div>

              {formSubmission.status && (
                <div 
                  className={`p-4 rounded-md ${
                    formSubmission.status === 'success' 
                    ? 'bg-green-50 text-green-800' 
                    : 'bg-red-50 text-red-800'
                  }`}
                >
                  {formSubmission.message}
                </div>
              )}

              <button 
                type="submit" 
                className="w-full flex items-center justify-center bg-slate-500 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
              >
                <Send className="mr-2 w-5 h-5" /> Send Message
              </button>
            </form>
          </div>

          <footer className="bg-slate-700 text-gray-200 py-8 rounded-md relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">About Us</h3>
            <p className="text-sm leading-6">
              ERISPE IT SOLUTIONS & CONSULTANCY provides innovative solutions and expertise
              to help businesses thrive and achieve their goals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="Services" className="hover:text-blue-400 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="Gallery" className="hover:text-blue-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="Contact" className="hover:text-blue-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-semibold">Email:</span>{' '}
                <a
                  href="mailto:eripeit@gmail.com"
                  className="hover:text-blue-400 transition"
                >
                  eripeit@gmail.com
                </a>
              </li>
              <li>
                <span className="font-semibold">Email:</span>{' '}
                <a
                  href="mailto:omuya2005@gmail.com"
                  className="hover:text-blue-400 transition"
                >
                  omuya2005@gmail.com
                </a>
              </li>
              <li>
                <span className="font-semibold">Phone:</span>{' '}
                <a
                  href="tel:+254113765336"
                  className="hover:text-blue-400 transition"
                >
                  +254727211203
                </a>
              </li>
              <li>
                <span className="font-semibold">Address:</span> 555 00100 Nairobi, Kenya
              </li>
              <li>
                <span className="font-semibold">Website:</span>{' '}
                <a
                  href="https://www.erispe.co.ke/About"
                  className="hover:text-blue-400 transition"
                >
                  www.erispe.co.ke
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom - Now positioned absolutely */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
            <div className="flex flex-col justify-between items-center gap-4">
              <div className="flex space-x-6">
                <a
                  href="https://facebook.com/erispesolutions"
                  className="text-sm hover:text-blue-500 transition flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook size={16} />
                  Facebook
                </a>
                <a
                  href="https://twitter.com/#erispesolutions"
                  className="text-sm hover:text-blue-400 transition flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter size={16} />
                  Twitter
                </a>
                <a
                  href="https://linkedin.com/erispesolutions"
                  className="text-sm hover:text-blue-600 transition flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>
              <p className="text-sm text-center sm:text-left">
                &copy; 2024 ERISPE IT SOLUTIONS & CONSULTANCY.All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
        </div>
      </div>
    </div>
    </>
  )
}

