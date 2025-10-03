import React from 'react';
import Link from 'next/link';
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">
                LA Academy
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Transforming language education through innovation and passion.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <button
                  key={index}
                  className="w-10 h-10 bg-dark-800 hover:bg-primary-500 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Icon className="w-5 h-5 text-gray-400 hover:text-white" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['Home', 'Our Training', 'Our Team', 'About', 'Recruitment'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="block text-gray-400 hover:text-primary-400 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Languages</h3>
            <div className="space-y-2">
              {['English', 'Spanish', 'French', 'German', 'Italian', 'Japanese', 'Korean', 'Chinese'].map((lang) => (
                <div key={lang} className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer">
                  {lang}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <div>hello@laacademy.com</div>
              <div>+1 (555) 123-4567</div>
              <div>123 Language Street<br />Global City, GC 10001</div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 LA Academy. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}