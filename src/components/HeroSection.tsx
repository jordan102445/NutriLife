import React from 'react';

interface HeroSectionProps {
  setShowBookingModal: (show: boolean) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ setShowBookingModal }) => {
  return (
    <section className="pt-20 relative min-h-[600px] flex items-center bg-gradient-to-r from-emerald-50 to-emerald-100">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-gray-800 leading-tight">
             Трансформирај го твојот живот со NutriLife
          </h1>
          <p className="text-lg text-gray-600">
            Откријте персонализирани планови за исхрана кои се усогласени со вашиот начин на живот и цели. Да работиме заедно на создавање на трајни здрави навики!.
          </p>
          <div className="flex space-x-4">
            <button 
              onClick={() => setShowBookingModal(true)}
              className="!rounded-button bg-emerald-600 text-white px-8 py-3 text-sm font-medium hover:bg-emerald-700 transition-colors cursor-pointer whitespace-nowrap">
              Започнете овде.
            </button>
            <button className="!rounded-button border-2 border-emerald-600 text-emerald-600 px-8 py-3 text-sm font-medium hover:bg-emerald-50 transition-colors cursor-pointer whitespace-nowrap">
              Дознај повише
            </button>
          </div>
        </div>
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img
            src="https://public.readdy.ai/ai/img_res/8906f99216dc02eb491aa65e8dacc7ab.jpg"
            alt="Nutritionist Consultation"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;