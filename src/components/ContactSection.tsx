import React from 'react';

interface ContactSectionProps {
  handleFormSubmit: (e: React.FormEvent) => void;
  formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
    preferredDate: string;
    preferredTime: string;
    healthGoals: string;
  };
  setFormData: (formData: any) => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ handleFormSubmit, formData, setFormData }) => {
  return (
    <section className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Контактирајте не</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">Контакт информации</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <i className="fa-solid fa-location-dot text-emerald-600 w-6"></i>
                <span className="text-gray-600 ml-3">123 Wellness Street, New York, NY 10001</span>
              </div>
              <div className="flex items-center">
                <i className="fa-solid fa-phone text-emerald-600 w-6"></i>
                <span className="text-gray-600 ml-3">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <i className="fa-solid fa-envelope text-emerald-600 w-6"></i>
                <span className="text-gray-600 ml-3">contact@nutrilife.com</span>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-800">Работно време</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium text-gray-800">Понеделник - Петок</p>
                  <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Недела</p>
                  <p className="text-gray-600">10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              {['fa-facebook', 'fa-twitter', 'fa-instagram', 'fa-linkedin'].map((icon, index) => (
                <button key={index} className="!rounded-button w-10 h-10 flex items-center justify-center bg-emerald-600 text-white hover:bg-emerald-700 transition-colors cursor-pointer">
                  <i className={`fa-brands ${icon}`}></i>
                </button>
              ))}
            </div>
          </div>
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Вашето име"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-500 focus:outline-none"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Вашиот е-маил"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-500 focus:outline-none"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Вашиот телефон"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-500 focus:outline-none"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div>
              <textarea
                placeholder="Вашата порака"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-500 focus:outline-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <button
              type="submit"
              className="!rounded-button w-full bg-emerald-600 text-white px-6 py-3 font-medium hover:bg-emerald-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              Испрати порака
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;