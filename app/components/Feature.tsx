"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Image from "next/image";

export default function Feature() {
  const { ref, isVisible } = useScrollAnimation();

  const features = [
    {
      title: "自然",
      description: "豊かな自然環境の中で、心やすらぐ生活を送ることができます。",
      icon: "🌊",
      delay: "0.1s",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    },
    {
      title: "生活コスト",
      description: "都市部と比較して、住居費や生活費を抑えることができます。",
      icon: "💰",
      delay: "0.2s",
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80",
    },
    {
      title: "コミュニティ",
      description: "温かい地域コミュニティと繋がり、新しい生活をスタートできます。",
      icon: "🤝",
      delay: "0.3s",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`fade-in-on-scroll ${isVisible ? "visible" : ""}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            壱岐島の魅力
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`text-center rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 fade-in-on-scroll ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: feature.delay }}
            >
              <div className="relative h-48 w-full mb-6 overflow-hidden rounded-t-lg">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-4xl mb-4 animate-float" style={{ animationDelay: feature.delay }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
