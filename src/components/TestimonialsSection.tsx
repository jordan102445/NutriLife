import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Приказни за успех на клиенти</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-12"
        >
          {[
            {
              name: 'Sarah Mitchell',
              role: 'Fitness Enthusiast',
              image: 'https://public.readdy.ai/ai/img_res/9907d0cf686778652d8cad1a461f3f26.jpg',
              text: 'Dr. Anderson\'s nutrition plan helped me achieve my fitness goals while maintaining a balanced lifestyle. I\'ve never felt better!'
            },
            {
              name: 'Michael Roberts',
              role: 'Business Executive',
              image: 'https://public.readdy.ai/ai/img_res/8ad28e0c2531fc82964e2346e4718579.jpg',
              text: 'The corporate wellness program transformed our team\'s energy levels and productivity. Highly recommended!'
            },
            {
              name: 'Jennifer Parker',
              role: 'Marathon Runner',
              image: 'https://public.readdy.ai/ai/img_res/c02f7be8b88590860eb0568390763ff5.jpg',
              text: 'The sports nutrition guidance helped me achieve my personal best in marathon running. Thank you for the amazing support!'
            }
          ].map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-lg p-6 h-full">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;