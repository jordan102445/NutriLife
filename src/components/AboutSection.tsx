import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const AboutSection: React.FC = () => {
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
    <section className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[800px] rounded-xl overflow-hidden">
            <img
              src=".\assets\AngelLazov.jpg"
              alt="Angel Lazov"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">Запознајте го Ангел Лазов</h2>
            <p className="text-gray-600">
            Со повеќе од 2 години искуство во исхраната и диететиката, со страст им помагам на луѓето да ги постигнат своите здравствени цели преку персонализирани нутритивни стратегии. Мојот пристап, заснован на докази, комбинира најнови истражувања со практични и одржливи решенија, при што досега сум постигнал извонредни резултати.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <i className="fa-solid fa-check text-emerald-600 mr-3"></i>
                <span className="text-gray-700">Сертифициран диететичар-нутриционист</span>
              </div>
              <div className="flex items-center">
                <i className="fa-solid fa-check text-emerald-600 mr-3"></i>
                <span className="text-gray-700">Специјализиран за спортска исхрана.</span>
              </div>
            </div>
            <div id="successRateChart" className="h-[300px] w-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;