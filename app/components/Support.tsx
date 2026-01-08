"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Image from "next/image";

export default function Support() {
  const { ref, isVisible } = useScrollAnimation();

  const supports = [
    "住居相談",
    "仕事相談",
    "子育て・医療",
  ];

  return (
    <section id="support" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`fade-in-on-scroll ${isVisible ? "visible" : ""}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            移住支援内容
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className={`bg-white rounded-lg shadow-sm p-8 md:p-12 fade-in-on-scroll ${isVisible ? "visible" : ""}`}>
            <ul className="space-y-6 mb-8">
              {supports.map((support, index) => (
                <li
                  key={index}
                  className="flex items-start group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-blue-600 text-xl mr-4 group-hover:scale-125 transition-transform duration-300">
                    ✓
                  </span>
                  <span className="text-lg text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {support}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 text-center text-sm md:text-base">
              詳細は相談時にご案内いたします
            </p>
          </div>
          <div className={`relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg fade-in-on-scroll ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.2s" }}>
            <Image
              src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80"
              alt="移住支援"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
