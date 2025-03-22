// filepath: c:\Users\trajk\OneDrive\Desktop\StranaZaAngel\src\App.tsx
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import * as echarts from 'echarts';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServiceSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredDate: '',
    preferredTime: '',
    healthGoals: '',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowBookingModal(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      preferredDate: '',
      preferredTime: '',
      healthGoals: ''
    });
  };

  useEffect(() => {
    const chartDom = document.getElementById('successRateChart');
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      const option = {
        animation: false,
        title: {
          text: 'Client Success Rate',
          left: 'center',
          textStyle: {
            color: '#334155'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: 'Success Rate',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 20,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 85, name: 'Weight Goals' },
              { value: 90, name: 'Better Energy' },
              { value: 95, name: 'Improved Health' }
            ]
          }
        ]
      };
      myChart.setOption(option);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} setShowBookingModal={setShowBookingModal} />
      <HeroSection setShowBookingModal={setShowBookingModal} />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection handleFormSubmit={handleFormSubmit} formData={formData} setFormData={setFormData} />
      <Footer />
      {showBookingModal && <BookingModal handleFormSubmit={handleFormSubmit} formData={formData} setFormData={setFormData} setShowBookingModal={setShowBookingModal} />}
    </div>
  );
};

export default App;