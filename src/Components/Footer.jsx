import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">About Us</h3>
            <p className="text-sm">
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
                  href="mailto:erispesolutions@gmail.com"
                  className="hover:text-blue-400 transition"
                >erispesolutions@gmail.com <br/>
           
                </a>
                <span className="font-semibold">Email:</span>{' '}
                <a
                  href="mailto:omuya2005@gmail.com"
                  className="hover:text-blue-400 transition"
                >omuya2005@gmail.com
               
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
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>&copy; 2024 ERISPE IT SOLUTIONS & CONSULTANCY. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a
              href="https://facebook.com/erispesolutions"
              className="hover:text-blue-500 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/#erispesolutions"
              className="hover:text-blue-400 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com/erispesolutions"
              className="hover:text-blue-600 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
