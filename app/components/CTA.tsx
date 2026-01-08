"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function CTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-20 md:py-28 bg-blue-600 relative overflow-hidden">
      {/* 背景の装飾的な波 */}
      <div className="absolute top-0 left-0 right-0 h-full opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent animate-float"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          ref={ref}
          className={`fade-in-on-scroll ${isVisible ? "visible" : ""}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            移住について相談する
          </h2>
          <p className="text-blue-100 text-lg mb-10">
            お気軽にお問い合わせください。専門スタッフが丁寧にサポートいたします。
          </p>
          <a
            href="#"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            お問い合わせフォーム（仮）
          </a>
        </div>
      </div>
    </section>
  );
}
