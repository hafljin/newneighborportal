"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Image from "next/image";

export default function Flow() {
  const { ref, isVisible } = useScrollAnimation();

  const flows = [
    {
      step: "01",
      title: "情報収集",
      description: "このサイトや各種資料で、壱岐島の魅力や生活について学びます。",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
    },
    {
      step: "02",
      title: "相談",
      description: "移住に関するご質問やご不安を、専門スタッフが丁寧にサポートします。",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80",
    },
    {
      step: "03",
      title: "現地訪問",
      description: "実際に島を訪れ、リアルな生活を体験していただきます。",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80",
    },
    {
      step: "04",
      title: "移住決定",
      description: "ご準備が整い次第、新しい生活のスタートです。",
      image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=600&q=80",
    },
  ];

  return (
    <section id="flow" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`fade-in-on-scroll ${isVisible ? "visible" : ""}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            移住までの流れ
          </h2>
        </div>
        <div className="space-y-12 md:space-y-16">
          {flows.map((flow, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 fade-in-on-scroll ${isVisible ? "visible" : ""} ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="flex-shrink-0 w-full md:w-1/2">
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={flow.image}
                    alt={flow.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="flex-1 w-full md:w-1/2">
                <div className="flex items-center gap-6 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold hover:scale-110 hover:bg-blue-700 transition-all duration-300 shadow-lg">
                      {flow.step}
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    {flow.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed ml-24 md:ml-0">
                  {flow.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
