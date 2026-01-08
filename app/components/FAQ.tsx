"use client";

import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  const faqs: FAQItem[] = [
    {
      question: "移住に必要な費用はどのくらいですか？",
      answer:
        "住居や生活スタイルによって異なりますが、都市部と比較して生活コストを抑えることができます。詳細は相談時にご案内いたします。",
    },
    {
      question: "仕事はありますか？",
      answer:
        "島内での就職先や在宅ワークのサポート、起業支援など、さまざまな働き方をサポートしています。ご希望に合わせてご相談ください。",
    },
    {
      question: "医療機関は充実していますか？",
      answer:
        "島内に総合病院や診療所があり、基本的な医療サービスは受けられます。専門的な治療が必要な場合は、福岡などへのアクセスも便利です。",
    },
    {
      question: "子育て環境はどうですか？",
      answer:
        "少人数制の学校で、きめ細かな教育が受けられます。地域全体で子どもたちを見守る温かいコミュニティがあります。",
    },
    {
      question: "実際に島を見学することはできますか？",
      answer:
        "はい、現地見学会や体験ツアーを実施しています。実際に島を訪れて、生活を体験していただくことができます。",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`fade-in-on-scroll ${isVisible ? "visible" : ""}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            よくある質問
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-sm overflow-hidden fade-in-on-scroll ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-all duration-300"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="font-medium text-gray-900 pr-4">
                  {faq.question}
                </span>
                <span className="text-gray-400 text-xl flex-shrink-0 transition-transform duration-300">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
