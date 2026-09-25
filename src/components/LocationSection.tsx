import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const { location, contact, hours } = CLINIC_INFO;

  return (
    <section id="location" className="py-24 sm:py-32 bg-[#FAFBFC] relative border-t border-black/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Contact & Location details */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-[1.5px] bg-[#00B4D8]" />
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#0077B6] font-display">
                STUDIO LOCATION
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A1128] leading-[1.12] mb-6">
              Visit our studio in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077B6] to-[#00B4D8]">
                Sirhind City, Punjab.
              </span>
            </h2>

            <p className="text-base text-[#627D98] leading-relaxed mb-8">
              Conveniently situated in Sirhind City with designated patient parking, 
              full wheelchair accessibility, and a modern, tranquil ambiance designed for your peace of mind.
            </p>

            <div className="space-y-6 mb-10">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#E8F7FB] text-[#0077B6] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0A1128] mb-1">Clinic Address</h3>
                  <p className="text-xs sm:text-sm text-[#3E4C59] leading-relaxed">
                    {location.address}, {location.sector} <br />
                    {location.city}, {location.country} – {location.pincode}
                  </p>
                  <span className="text-[11px] text-[#0077B6] font-medium block mt-1">
                    {location.landmark}
                  </span>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#E8F7FB] text-[#0077B6] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0A1128] mb-1">Consultation Hours</h3>
                  <p className="text-xs sm:text-sm text-[#3E4C59]">
                    {hours.regular}
                  </p>
                  <p className="text-xs text-[#627D98] mt-0.5">
                    {hours.sunday}
                  </p>
                  <span className="inline-block text-[11px] text-[#00B4D8] font-bold uppercase tracking-wider mt-1">
                    {hours.emergency}
                  </span>
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-black/[0.06] shadow-sm">
                  <Phone className="w-4 h-4 text-[#00B4D8]" />
                  <div>
                    <span className="text-[10px] text-[#627D98] block uppercase font-semibold">Phone</span>
                    <a href={`tel:${contact.phoneClean}`} className="text-xs font-bold text-[#0A1128] hover:text-[#0077B6]">
                      {contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-black/[0.06] shadow-sm">
                  <Mail className="w-4 h-4 text-[#00B4D8]" />
                  <div>
                    <span className="text-[10px] text-[#627D98] block uppercase font-semibold">Email</span>
                    <a href={`mailto:${contact.email}`} className="text-xs font-bold text-[#0A1128] hover:text-[#0077B6]">
                      {contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions Button */}
            <a
              href={location.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0A1128] hover:bg-[#0077B6] text-white text-xs font-semibold uppercase tracking-wider shadow-soft-lg hover:shadow-cyan-glow transition-all"
            >
              <Navigation className="w-4 h-4 text-[#90E0EF]" />
              <span>GET DIRECTIONS</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1 text-white/60" />
            </a>
          </div>

          {/* Right: Interactive / Styled Map Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden bg-white shadow-soft-xl border border-black/[0.08] p-3">
              <div className="w-full h-[400px] sm:h-[460px] rounded-2xl overflow-hidden relative bg-[#E2E8F0]">
                {/* Embed Map */}
                <iframe
                  title="Dental Implant Centre Sirhind City Punjab Location Map"
                  src={location.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale contrast-[1.08] hover:grayscale-0 transition-all duration-700"
                />

                {/* Floating location card badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-soft-lg border border-black/[0.08] max-w-xs">
                  <div className="flex items-center gap-2 mb-1 text-[#0A1128]">
                    <MapPin className="w-4 h-4 text-[#00B4D8]" />
                    <span className="text-xs font-bold">Dental Implant Centre</span>
                  </div>
                  <p className="text-[11px] text-[#627D98] mb-2">
                    GT Road, Sirhind City, Punjab
                  </p>
                  <a
                    href={location.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold uppercase tracking-wider text-[#0077B6] hover:underline flex items-center gap-1"
                  >
                    Open in Google Maps <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
