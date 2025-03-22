import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">NutriLife</h3>
            <p className="text-gray-400">
            Овозможуваме да постигнете оптимално здравје со персонализирано нутритивно водство.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'About', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Сервиси</h4>
            <ul className="space-y-2">
              {[
                'Приспособена исхрана',
                'Здравсвено менторство',
                'Корпоративно благосостојба',
                'Спортска исхрана',
                'Контрола на телесната тежина'
              ].map((item) => (
                <li key={item}>
                  <button className="text-gray-400 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4"> Информативен билтен</h4>
            <p className="text-gray-400 mb-4">
              Претплатете се на нашата страна за совети за здравје и новости.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Вашиот е-маил"
                className="flex-1 px-4 py-2 rounded-l-lg text-gray-800 border-none focus:outline-none"
              />
              <button
                type="submit"
                className="!rounded-button bg-emerald-600 text-white px-4 py-2 rounded-r-lg hover:bg-emerald-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Претплати се
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 NutriLife. Сите права задржани.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;