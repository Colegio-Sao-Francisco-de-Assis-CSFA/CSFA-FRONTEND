import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Description */}
        <div className="col-span-1">
          <h3 className="text-xl font-bold mb-4">Ease</h3>
          <p className="text-sm text-blue-100">
            We're based in Palo-Alto where our doors first opened in 2015. We're part of a vibrant creative community and love what we do.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <nav className="space-y-2">
            <a href="/terms" className="block text-blue-100 hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <a href="/privacy" className="block text-blue-100 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/project-protection" className="block text-blue-100 hover:text-white transition-colors">
              Project Protection
            </a>
            <a href="/faqs" className="block text-blue-100 hover:text-white transition-colors">
              FAQs
            </a>
          </nav>
        </div>

        {/* About Links */}
        <div>
          <h4 className="font-semibold mb-4">About</h4>
          <nav className="space-y-2">
            <a href="/team" className="block text-blue-100 hover:text-white transition-colors">
              Team
            </a>
            <a href="/blog" className="block text-blue-100 hover:text-white transition-colors">
              Blog
            </a>
            <a href="/contact" className="block text-blue-100 hover:text-white transition-colors">
              Contact
            </a>
            <a href="/store" className="block text-blue-100 hover:text-white transition-colors">
              Store
            </a>
          </nav>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-4">Sign up to our Newsletter</h4>
          <div className="flex space-x-2">
            <Input 
              type="email" 
              placeholder="E-mail" 
              className="bg-blue-700 text-white border-blue-600 placeholder-blue-300" 
            />
            <Button variant="secondary" className="bg-white text-blue-800 hover:bg-blue-50">
              Subscribe
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-white hover:text-blue-200">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-white hover:text-blue-200">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-white hover:text-blue-200">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-white hover:text-blue-200">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-4 mt-8 pt-4 border-t border-blue-700 text-center">
        <p className="text-sm text-blue-200">
          © 2016 Ease Corp. Created by KK UI Store
        </p>
      </div>
    </footer>
  );
};

export default Footer;