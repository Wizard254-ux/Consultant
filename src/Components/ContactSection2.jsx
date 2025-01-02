import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Target, Zap, Shield } from 'lucide-react';

const ContactPage = () => {
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

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Let's Drive Your Success Together</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're more than just consultants—we're your strategic partners dedicated to transforming challenges into opportunities and aspirations into achievements.
          </p>
        </div>

        {/* Consultation Promise Section */}
        <div className="bg-white shadow-lg rounded-lg p-12 mb-16 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Target className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Tailored Strategy</h3>
              <p className="text-gray-600">
                Every consultation is uniquely crafted to address your specific business challenges and goals.
              </p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 mx-auto text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Rapid Response</h3>
              <p className="text-gray-600">
                We guarantee a comprehensive initial consultation within 24 hours of your inquiry.
              </p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Confidential</h3>
              <p className="text-gray-600">
                Your business insights are sacred. We maintain the highest standards of professional confidentiality.
              </p>
            </div>
          </div>
        </div>

        {/* Consultation Process Explanation */}
        <div className="max-w-4xl mx-auto mb-16 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Our Consultation Process
          </h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <p>
                <strong>Initial Discovery:</strong> We begin with an in-depth conversation to understand your unique business landscape, challenges, and aspirations.
              </p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <p>
                <strong>Diagnostic Analysis:</strong> Our team conducts a comprehensive assessment, leveraging data-driven insights to pinpoint opportunities for strategic improvement.
              </p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <p>
                <strong>Strategic Roadmap:</strong> We develop a customized, actionable strategy that aligns with your business objectives and sets a clear path for sustainable growth.
              </p>
            </div>
          </div>
        </div>

        {/* Main Contact Section */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form (Previous implementation remains the same) */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            {/* Form content from previous version */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* ... (form inputs remain unchanged) ... */}
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-blue-600 text-white rounded-lg p-8 space-y-6">
            {/* Contact info from previous version */}
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            
            <div className="flex items-center space-x-4">
              <Mail className="w-8 h-8 text-blue-200" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>contact@consultingfirm.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="w-8 h-8 text-blue-200" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>(555) 123-4567</p>
                <p>Mon-Fri: 9am - 5pm EST</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <MapPin className="w-8 h-8 text-blue-200" />
              <div>
                <h3 className="font-semibold">Office Location</h3>
                <p>123 Consulting Avenue</p>
                <p>New York, NY 10001</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-blue-500">
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-200 transition">LinkedIn</a>
                <a href="#" className="hover:text-blue-200 transition">Twitter</a>
                <a href="#" className="hover:text-blue-200 transition">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;