import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustIntro } from './components/TrustIntro';
import { Stats } from './components/Stats';
import { Treatments } from './components/Treatments';
import { Technology } from './components/Technology';
import { Doctor } from './components/Doctor';
import { Testimonials } from './components/Testimonials';
import { AppointmentSection } from './components/AppointmentSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';

export const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string>('');

  const handleOpenBooking = (treatmentTitle?: string) => {
    setSelectedTreatment(treatmentTitle || '');
    setIsModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsModalOpen(false);
    setSelectedTreatment('');
  };

  return (
    <div className="relative min-h-screen bg-[#FAFBFC] text-[#0A1128] font-sans antialiased selection:bg-[#00B4D8]/20 selection:text-[#0A1128]">
      {/* Global Desktop Custom Follower Cursor */}
      <CustomCursor />

      {/* Top Reading Scroll Progress Line */}
      <ScrollProgress />

      {/* Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main>
        {/* Hero Section with 3D WebGL Visualization */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Brand Philosophy & Split Screen Trust Section */}
        <TrustIntro />

        {/* Animated Numerical Metrics Counter */}
        <Stats />

        {/* Interactive Clinical Treatments Preview */}
        <Treatments onSelectTreatmentForBooking={(title) => handleOpenBooking(title)} />

        {/* Modern Medical Technology Showcase */}
        <Technology />

        {/* Clinical Leadership & Doctor Profile */}
        <Doctor onOpenBooking={() => handleOpenBooking()} />

        {/* Verified Patient Stories & Testimonial Carousel */}
        <Testimonials />

        {/* Inline Booking Form with Animated Success Confirmation */}
        <AppointmentSection initialTreatment={selectedTreatment} />

        {/* Location & Map Information for Sirhind City, Punjab */}
        <LocationSection />
      </main>

      {/* Minimal Editorial Footer */}
      <Footer />

      {/* Global Quick Booking Modal Dialog */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={handleCloseBooking}
        defaultTreatment={selectedTreatment}
      />
    </div>
  );
};

export default App;
