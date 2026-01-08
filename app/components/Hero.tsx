"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
          alt="壱岐島の風景"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/90 via-blue-50/70 to-white/90"></div>
      </div>
      
      {/* 装飾的な波の要素 */}
      <div className="absolute bottom-0 left-0 right-0 h-20 opacity-10 pointer-events-none overflow-hidden z-10">
        <div className="wave-decoration"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center max-w-4xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            島で暮らすという選択。
            <br />
            壱岐で、はじめる新しい生活。
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 animate-fade-in">
            移住支援・相談受付を受け付けております
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 animate-float"
          >
            移住について相談する
          </a>
        </div>
      </div>
    </section>
  );
}
