import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  const footerLinks = {
    'Product': [
      'Features',
      'Pricing',
      'Security',
      'Enterprise'
    ],
    'Company': [
      'About Us',
      'Careers',
      'News',
      'Contact'
    ],
    'Resources': [
      'Blog',
      'Help Center',
      'Community',
      'Guides'
    ],
    'Legal': [
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'Compliance'
    ]
  };

  return (
    <footer className="border-t border-border/20 py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-luxury rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C24</span>
              </div>
              <span className="text-foreground font-semibold text-lg tracking-tight">
                Employee Benefits
              </span>
            </div>
            <p className="text-muted-foreground font-light mb-6 max-w-md leading-relaxed">
              Empowering CARS24 employees with exclusive financial benefits, 
              premium services, and rewarding experiences that enhance their professional journey.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <Mail className="w-4 h-4 text-primary mr-3" />
                <span className="text-muted-foreground">benefits@cars24.com</span>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="w-4 h-4 text-primary mr-3" />
                <span className="text-muted-foreground">+91 80-4718-1111</span>
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="w-4 h-4 text-primary mr-3" />
                <span className="text-muted-foreground">Gurugram, Haryana, India</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-light"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-muted-foreground font-light mb-4 md:mb-0">
              © 2024 CARS24 Employee Benefits. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:bg-accent/20 transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Legal Info */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground font-light">
            CARS24 Employee Benefits is a subsidiary of CARS24 Services Pvt. Ltd. 
            All financial services are provided by licensed partners and are subject to eligibility criteria.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;