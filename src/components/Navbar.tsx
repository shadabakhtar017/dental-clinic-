import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Calendar, Phone, Clock } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  onOpenBooking: (treatmentTitle?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Why Ankit Dental', href: '#trust' },
    { name: 'Technology', href: '#technology' },
    { name: 'Doctor', href: '#doctor' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#location' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Clinic Urgent Banner / Top bar on desktop */}
      <div className="bg-[#0A1128] text-white/85 text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-[#90E0EF]">
              <Clock className="w-3.5 h-3.5" />
              <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
            </span>
            <span className="text-white/40">•</span>
            <span className="text-white/80">Sirhind City, Punjab</span>
          </div>
          <div className="flex items-center space-x-5">
            <span className="text-xs bg-[#00B4D8]/20 text-[#90E0EF] px-2 py-0.5 rounded-full font-medium">
              24/7 Emergency on call
            </span>
            <a
              href={`tel:${CLINIC_INFO.contact.phoneClean}`}
              className="hover:text-[#00B4D8] transition-colors flex items-center gap-1.5 font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#00B4D8]" />
              {CLINIC_INFO.contact.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Floating Main Navbar */}
      <header
        className={`fixed top-0 md:top-8 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-white/85 backdrop-blur-md shadow-soft border-b border-black/[0.06]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8] rounded-lg"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0A1128] to-[#0077B6] flex items-center justify-center text-white shadow-md shadow-[#00B4D8]/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-[#90E0EF]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold tracking-tight text-[#0A1128] leading-none">
                ANKIT
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#627D98] font-medium mt-0.5">
                Dental Implant Centre
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-black/[0.06] shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-1.5 text-xs font-medium text-[#3E4C59] hover:text-[#0A1128] hover:bg-black/[0.04] rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${CLINIC_INFO.contact.phoneClean}`}
              className="px-3.5 py-2 text-xs font-semibold text-[#0A1128] hover:text-[#0077B6] flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#00B4D8]" />
              Call Studio
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0A1128] hover:bg-[#0077B6] rounded-full shadow-sm hover:shadow-cyan-glow transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
            >
              <Calendar className="w-3.5 h-3.5 mr-2 text-[#90E0EF] group-hover:rotate-12 transition-transform" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#0A1128] bg-white/80 backdrop-blur-md border border-black/[0.06] hover:bg-black/[0.05] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-full bg-white/95 backdrop-blur-xl border-b border-black/[0.08] shadow-soft-xl px-6 py-6 transition-all duration-300 animate-in slide-in-from-top">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2.5 text-sm font-medium text-[#0A1128] hover:bg-[#F4F7FB] rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-black/[0.06] flex flex-col gap-3">
                <a
                  href={`tel:${CLINIC_INFO.contact.phoneClean}`}
                  className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-[#0A1128] bg-[#F4F7FB] rounded-xl"
                >
                  <Phone className="w-4 h-4 text-[#00B4D8]" />
                  {CLINIC_INFO.contact.phone}
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 text-sm font-semibold uppercase tracking-wider text-white bg-[#0A1128] hover:bg-[#0077B6] rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#90E0EF]" />
                  Book An Appointment
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
