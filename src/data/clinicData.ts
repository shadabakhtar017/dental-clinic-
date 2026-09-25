export interface TreatmentItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  benefits: string[];
  recommendedFor: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  decimals?: number;
  label: string;
  sublabel: string;
}

export interface TechnologyItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  badge: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  treatment: string;
  quote: string;
  rating: number;
  date: string;
}

export const CLINIC_INFO = {
  name: "Dental Implant Centre",
  shortName: "Dental Implant Centre",
  tagline: "Your Smile, Designed to Shine.",
  doctor: {
    name: "Dr. Your Name",
    qualifications: "BDS, MDS (Dental Implantologist)",
    experience: "9+ Years Experience",
    role: "Founder & Chief Dental Surgeon",
    bio: "With over 9 years of specialized clinical experience, Dr. Your Name merges biomimetic dental science with advanced implantology. Having trained at premier dental institutes and treated over 8,000 satisfied patients, Dr. Your Name specializes in precision dental implants, full-mouth rehabilitation, and Invisalign clear aligners. His philosophy prioritizes patient comfort, open communication, and zero-anxiety clinical protocols.",
    memberships: [
      "Dental Implantologist",
      "Invisalign Certified Provider",
      "Fellow — International Congress of Oral Implantologists (ICOI)"
    ]
  },
  location: {
    address: "GT Road, Near Overbridge",
    sector: "Main Market",
    city: "Sirhind City",
    state: "Punjab",
    pincode: "140406",
    country: "India",
    landmark: "Near Railway Station & Overbridge, Sirhind City",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27464.38557997926!2d76.362145!3d30.640243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39101b0f590a3699%3A0x6b1076f2d22b2716!2sSirhind%2C%20Punjab!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
    directionsUrl: "https://maps.google.com/?q=Sirhind+City+Punjab+India"
  },
  contact: {
    phone: "+91 98765 43210",
    phoneClean: "+919876543210",
    email: "hello@dentalimplantcentre.com",
    emergencyPhone: "+91 98765 43210"
  },
  hours: {
    regular: "Monday – Saturday: 9:00 AM – 7:00 PM",
    sunday: "Sunday: By Prior Appointment Only",
    emergency: "Emergency Support: 24/7 on call"
  }
};

export const CLINIC_STATS: StatItem[] = [
  {
    value: 9,
    suffix: "+",
    label: "Years Experience",
    sublabel: "Specialized clinical excellence"
  },
  {
    value: 8000,
    suffix: "+",
    label: "Smiles Transformed",
    sublabel: "Across restorative & cosmetic care"
  },
  {
    value: 4.9,
    suffix: "/5",
    decimals: 1,
    label: "Patient Rating",
    sublabel: "Verified patient satisfaction"
  },
  {
    value: 24,
    suffix: "/7",
    label: "Emergency Support",
    sublabel: "Always on-call for urgent care"
  }
];

export const TREATMENTS: TreatmentItem[] = [
  {
    id: "implants",
    number: "01",
    title: "Dental Implants",
    tagline: "Permanent, bio-compatible tooth restoration",
    description: "State-of-the-art titanium and zirconia root fixtures engineered with computer-guided precision. Restores full chewing power, jaw bone preservation, and natural aesthetics with a lifelong outlook.",
    duration: "45–60 mins per session",
    benefits: ["Computer-guided 3D placement", "Preserves natural jawbone density", "Looks and feels like natural teeth"],
    recommendedFor: "Missing single or multiple teeth, loose dentures"
  },
  {
    id: "root-canal",
    number: "02",
    title: "Root Canal Treatment",
    tagline: "Gentle single-sitting micro-endodontics",
    description: "Painless preservation of deeply decayed or infected teeth using rotary apex locators and surgical micro-magnification. Modern anesthesia ensures complete relief without discomfort.",
    duration: "Single session (45 mins)",
    benefits: ["Zero-pain rotary protocols", "Digital 3D apex measurement", "Same-day tooth restoration"],
    recommendedFor: "Persistent toothaches, deep cavities, sensitive roots"
  },
  {
    id: "whitening",
    number: "03",
    title: "Teeth Whitening",
    tagline: "Safe enamel brightening up to 8 shades",
    description: "Advanced LED photothermal whitening that lifts stubborn stains from coffee, tea, and natural aging without weakening enamel or triggering painful hypersensitivity.",
    duration: "40 mins in-chair",
    benefits: ["Up to 8 shades brighter in 1 hour", "Desensitizing fluoride infusion", "Custom touch-up trays included"],
    recommendedFor: "Surface stains, wedding prep, dull enamel"
  },
  {
    id: "aligners",
    number: "04",
    title: "Invisible Aligners",
    tagline: "Discreet clear orthodontic movement",
    description: "Custom-molded transparent polyurethane aligners mapped through 3D intraoral scans. Straightens misaligned teeth without visible metal brackets, wires, or dietary restrictions.",
    duration: "6–14 months overall",
    benefits: ["100% virtually invisible", "Removable for dining & hygiene", "3D digital progress preview"],
    recommendedFor: "Crowding, gaps, mild-to-moderate bite misalignment"
  },
  {
    id: "cosmetic",
    number: "05",
    title: "Cosmetic Dentistry",
    tagline: "Porcelain veneers & tailored smile makeovers",
    description: "Ultra-thin, handmade ceramic veneers and biomimetic bonding designed around your unique facial symmetry, smile line, and skin undertone for effortless natural beauty.",
    duration: "2–3 visits",
    benefits: ["Stain-resistant feldspathic ceramic", "Biomimetic conservative prep", "Custom shade & contour matching"],
    recommendedFor: "Chipped teeth, stubborn discoloration, uneven gaps"
  },
  {
    id: "crowns",
    number: "06",
    title: "Crowns & Bridges",
    tagline: "High-translucency monolithic zirconia",
    description: "CAD/CAM milled zirconia and lithium disilicate (E-Max) prosthetics designed for remarkable masticatory durability and lifelike optical luminescence.",
    duration: "2 short visits",
    benefits: ["Metal-free bio-inert materials", "Sub-millimeter margin fit", "10-year structural warranty"],
    recommendedFor: "Weakened teeth post-RCT, fractured cusps, bridge spans"
  },
  {
    id: "pediatric",
    number: "07",
    title: "Pediatric Dentistry",
    tagline: "Gentle, fun & trauma-free children's dental care",
    description: "Specialized, compassionate dental checkups, cavity prevention sealants, and early interception orthodontics designed to build lifelong positive oral health habits.",
    duration: "30 mins",
    benefits: ["Painless, play-oriented environment", "Fluoride varnish & fissure sealants", "Habit breaking & space maintenance"],
    recommendedFor: "Children aged 1–14, preventive tooth protection"
  },
  {
    id: "preventive",
    number: "08",
    title: "Preventive Dental Care",
    tagline: "Proactive hygiene, scaling & oral screening",
    description: "Ultrasonic piezo scaling, air polishing for stain elimination, comprehensive periodontal probing, and oral cancer screenings using high-definition fluorescence cameras.",
    duration: "30–45 mins",
    benefits: ["Preserves gum health & bone support", "Gentle airflow polishing", "Early discovery of micro-cavities"],
    recommendedFor: "Bi-annual regular checkups, fresh breath maintenance"
  }
];

export const TECHNOLOGIES: TechnologyItem[] = [
  {
    id: "dsd",
    badge: "AESTHETIC PREVIEW",
    title: "Digital Smile Design",
    subtitle: "See your dream smile simulated before treatment begins",
    description: "We utilize high-resolution intraoral optical scanners and facial analysis software to simulate your calibrated dental proportion, tooth morphology, and aesthetic line before any procedure takes place.",
    features: ["Zero-radiation intraoral 3D scanning", "Real-time aesthetic simulation", "Collaborative patient design review"]
  },
  {
    id: "cbct",
    badge: "SUB-MILLIMETER ACCURACY",
    title: "Precision Planning",
    subtitle: "3D Volumetric Imaging & Guided Microsurgery",
    description: "Ultra-low-dose Cone Beam Computed Tomography (CBCT) provides multi-planar views of bone volume, nerve canals, and sinus floors, enabling computer-printed surgical guides with sub-millimeter accuracy.",
    features: ["90% less radiation than medical CT", "Pinpoint nerve & bone safety mapping", "Minimally invasive keyhole procedures"]
  },
  {
    id: "comfort",
    badge: "CALM & PAINLESS",
    title: "Comfort-Focused Treatment",
    subtitle: "Computerized Anesthesia & Sound-Buffered Suites",
    description: "Our clinic replaces conventional syringes with computerized single-tooth anesthesia systems delivering micro-droplet flow below sensory perception thresholds, housed within calm acoustic suites.",
    features: ["Single-tooth localized numbness", "Noise-cancelling audio headsets", "Aromatherapy and ergonomic dental chairs"]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "riya",
    name: "Riya Sharma",
    role: "Resident, Sirhind",
    treatment: "Invisible Aligners & Whitening",
    quote: "From booking to treatment, everything felt incredibly comfortable and professional. The 3D simulation was spot-on, and Dr. Your Name explained every step with such warmth.",
    rating: 5,
    date: "2 weeks ago"
  },
  {
    id: "arjun",
    name: "Arjun Kapoor",
    role: "Software Consultant, Mohali",
    treatment: "Dental Implant & Crown",
    quote: "I had been nervous about dental treatment for years after a bad childhood experience, but the Dental Implant Centre team made the whole experience completely painless and stress-free.",
    rating: 5,
    date: "1 month ago"
  },
  {
    id: "neha",
    name: "Neha Verma",
    role: "Professor, Panjab University",
    treatment: "Root Canal & Zirconia Crown",
    quote: "The clinic feels modern, clean, and welcoming. The staff was extremely helpful, and I was back to work the very next morning without any lingering discomfort.",
    rating: 5,
    date: "2 months ago"
  },
  {
    id: "devendra",
    name: "Devendra Malik",
    role: "Business Owner, Punjab",
    treatment: "Full Mouth Smile Restoration",
    quote: "The digital planning process is unreal. Being able to see my smile design before committing made all the difference. Dr. Your Name's clinical expertise is world-class.",
    rating: 5,
    date: "3 months ago"
  }
];

export const FAQS = [
  {
    q: "Is dental implant treatment painful?",
    a: "Not at all. With our precision computerized local anesthesia and guided keyhole techniques, the treatment site is completely numb. Most patients report feeling only light pressure and manage any post-procedure sensitivity with basic mild analgesics."
  },
  {
    q: "How many sittings are required for a Root Canal?",
    a: "At Dental Implant Centre, over 85% of root canal treatments are successfully completed in a single, comfortable 45-minute sitting using rotary endodontics and high-definition apex locators."
  },
  {
    q: "Do you offer emergency dental care in Sirhind City, Punjab?",
    a: "Yes. We provide 24/7 on-call emergency dental support for trauma, severe sudden toothaches, fractured teeth, or displaced restorations. Call +91 98765 43210 for immediate triage."
  },
  {
    q: "How does the Digital Smile Design process work?",
    a: "We capture high-resolution photos, 3D intraoral scans, and facial video dynamics. Our software generates a virtual mockup of your new smile, allowing you to preview and fine-tune your desired tooth shape and shade before we begin."
  }
];
