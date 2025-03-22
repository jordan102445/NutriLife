import React from 'react';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Нашите Сервиси</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Персонализирани планови за исхрана',
              description: 'Приспособени планови за оброци според вашите уникатни потреби и цели',
              icon: 'fa-solid fa-clipboard-list',
              image: 'https://public.readdy.ai/ai/img_res/22eb433200d1515cba6edf6c46c1a81e.jpg'
            },
            {
              title: 'Здравствено менторство',
              description: 'Индивидуално водство за трансформација на вашиот начин на живот',
              icon: 'fa-solid fa-heart-pulse',
              image: 'https://public.readdy.ai/ai/img_res/27638a7fe7eb317182aa311bb2d2f6d8.jpg'
            },
            {
              title: 'Корпоративно благосостојба',
              description: 'Програми за исхрана на работното место за подобро здравје на тимот',
              icon: 'fa-solid fa-building-user',
              image: 'https://public.readdy.ai/ai/img_res/baf73a9f2dc469fafc228836f997f498.jpg'
            }
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <i className={`${service.icon} text-emerald-600 text-2xl mb-4`}></i>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="!rounded-button text-emerald-600 font-medium hover:text-emerald-700 cursor-pointer whitespace-nowrap">
                  Learn More <i className="fa-solid fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;