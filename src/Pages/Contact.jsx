import React, { useState } from 'react' // Add useState to the import
import Navbar from '../Components/Navbar'
import { Mail, Phone, MapPin, Send } from 'lucide-react' // Add these icon imports if you're using them
import Footer from '../Components/Footer';

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
        <div className="text-center mb-12 h-[200px] bg-gray-300 pt-7"style={{
    backgroundImage: "url('https://bobgroganconsulting.com/wp-content/themes/smallville/assets/images/bg-pattern.png')",
  }}>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Our Consulting Team</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business? Reach out and let's start a conversation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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

         
  <Footer/>
        </div>
      </div>
    </div>
    </>
  )
}

