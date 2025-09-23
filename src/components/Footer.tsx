import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Download,
  Shield,
  Award
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-secondary">
                <span className="text-lg font-bold text-white">G</span>
              </div>
              <span className="text-xl font-bold">Go-pay</span>
            </div>
            <p className="text-gray-300 text-sm">
              Nigeria's trusted fintech platform providing secure digital payments, 
              transfers, and financial services for individuals and businesses.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors text-sm">
                About Us
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Our Services
              </Link>
              <Link to="/pricing" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Pricing
              </Link>
              <Link to="/careers" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Careers
              </Link>
              <Link to="/blog" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Blog
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <div className="space-y-2">
              <Link to="/support" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Help Center
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Contact Us
              </Link>
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <Phone className="h-4 w-4" />
                <span>+234 901 234 5678</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <Mail className="h-4 w-4" />
                <span>support@gopay.ng</span>
              </div>
            </div>
          </div>

          {/* Download App */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Download App</h3>
            <div className="flex flex-col space-y-3">
              {/* Google Play Button */}
              <button 
                onClick={() => {}}
                className="bg-black hover:bg-gray-800 text-white px-4 py-3 rounded-lg flex items-center space-x-3 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <path d="M3.609 1.814L13.792 12L3.609 22.186C3.609 22.186 2.5 21.5 2.5 20.5V3.5C2.5 2.5 3.609 1.814 3.609 1.814Z" fill="#EA4335"/>
                      <path d="M16.391 12L6.208 1.814C6.208 1.814 7.5 2.5 7.5 3.5V20.5C7.5 21.5 6.208 22.186 6.208 22.186L16.391 12Z" fill="#FBBC04"/>
                      <path d="M20.5 12L16.391 7.891C16.391 7.891 17.5 8.5 17.5 9.5V14.5C17.5 15.5 16.391 16.109 16.391 16.109L20.5 12Z" fill="#34A853"/>
                      <path d="M20.5 12L16.391 16.109C16.391 16.109 15.5 15.5 15.5 14.5V9.5C15.5 8.5 16.391 7.891 16.391 7.891L20.5 12Z" fill="#4285F4"/>
                    </svg>
                  </div>
                  <div className="text-white">
                    <div className="text-xs leading-tight">GET IT ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </div>
              </button>
              
              {/* Apple App Store Button */}
              <button 
                onClick={() => {}}
                className="bg-black hover:bg-gray-800 text-white px-4 py-3 rounded-lg flex items-center space-x-3 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  </div>
                  <div className="text-white">
                    <div className="text-xs leading-tight">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </div>
              </button>
            </div>
            
            {/* Trust Badges */}
            <div className="pt-4 space-y-2">
              <div className="flex items-center space-x-2 text-green-400 text-sm">
                <Shield className="h-4 w-4" />
                <span>CBN Licensed</span>
              </div>
              <div className="flex items-center space-x-2 text-green-400 text-sm">
                <Award className="h-4 w-4" />
                <span>PCI DSS Certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <span>&copy; {currentYear} Go-pay Systems Nig Ltd. All rights reserved.</span>
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <MapPin className="h-4 w-4" />
              <span>Nigeria</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;