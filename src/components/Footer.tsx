import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Sparkles, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050914] text-white pt-20 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#00B4D8] to-[#0077B6] flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-white leading-none">
                  DENTAL IMPLANT
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#90E0EF] font-medium mt-0.5">
                  Centre
                </span>
              </div>
            </div>
            <p className="text-xs text-white/60 leading-relaxed max-w-sm mb-6">
              Dental Implant Centre delivers modern, biomimetic, and technologically advanced 
              dental care in Sirhind City, Punjab. Founded by Dr. Your Name, BDS, MDS.
            </p>
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#00B4D8] hover:text-[#0A1128] text-white/80 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#00B4D8] hover:text-[#0A1128] text-white/80 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#00B4D8] hover:text-[#0A1128] text-white/80 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              {/* X / Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#00B4D8] hover:text-[#0A1128] text-white/80 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Treatments Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#90E0EF] mb-4">
              Treatments
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li><a href="#treatments" className="hover:text-white transition-colors">Dental Implants</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors">Root Canal Treatment</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors">Teeth Whitening</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors">Invisible Aligners</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors">Cosmetic Veneers</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors">Pediatric Care</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#90E0EF] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#trust" className="hover:text-white transition-colors">Why Us</a></li>
              <li><a href="#technology" className="hover:text-white transition-colors">Technology</a></li>
              <li><a href="#doctor" className="hover:text-white transition-colors">Dr. Your Name</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Patient Stories</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Contact & Map</a></li>
            </ul>
          </div>

          {/* Contact Details & Hours */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#90E0EF] mb-4">
              Centre Details
            </h4>
            <p className="text-xs text-white/70 mb-3 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#00B4D8] flex-shrink-0 mt-0.5" />
              <span>{CLINIC_INFO.location.address}, {CLINIC_INFO.location.city}, Punjab – {CLINIC_INFO.location.pincode}</span>
            </p>
            <p className="text-xs text-white/70 mb-3 flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#00B4D8] flex-shrink-0" />
              <a href={`tel:${CLINIC_INFO.contact.phoneClean}`} className="hover:text-white">
                {CLINIC_INFO.contact.phone}
              </a>
            </p>
            <p className="text-xs text-white/70 mb-3 flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#00B4D8] flex-shrink-0" />
              <a href={`mailto:${CLINIC_INFO.contact.email}`} className="hover:text-white">
                {CLINIC_INFO.contact.email}
              </a>
            </p>
            <p className="text-[11px] text-[#90E0EF] font-medium bg-white/5 p-2.5 rounded-xl border border-white/5">
              Emergency support available 24/7 on call
            </p>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50">
          <p>
            © {new Date().getFullYear()} Dental Implant Centre. All rights reserved. Dr. Your Name, BDS, MDS.
          </p>

          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Terms of Care
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-[#00B4D8] hover:text-[#0A1128] text-white/80 transition-colors flex items-center justify-center"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
