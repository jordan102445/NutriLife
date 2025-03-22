import React from 'react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  setShowBookingModal: (show: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection, setShowBookingModal }) => {
  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="text-2xl font-semibold text-emerald-600">NutriLife</div>
        <nav className="hidden md:flex items-center space-x-8">
          {['Почетна', 'Сервиси', 'За нас', 'Сведоштва', 'Контант'].map((item) => (
            <button
              key={item}
              onClick={() => setActiveSection(item.toLowerCase())}
              className={`text-sm font-medium cursor-pointer whitespace-nowrap ${
                activeSection === item.toLowerCase() ? 'text-white bg-emerald-600 px-3 py-2 rounded' : 'text-gray-600 hover:text-emerald-500'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
        <button
          onClick={() => setShowBookingModal(true)}
          className="!rounded-button bg-emerald-600 text-white px-6 py-2 text-sm font-medium hover:bg-emerald-700 transition-colors cursor-pointer whitespace-nowrap"
        >
          Букирај консултација
        </button>
      </div>
    </header>
  );
};

export default Header;