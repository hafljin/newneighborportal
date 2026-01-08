export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-gray-900">
            壱岐島 移住ポータル
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#features"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              魅力
            </a>
            <a
              href="#support"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              支援内容
            </a>
            <a
              href="#flow"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              移住の流れ
            </a>
            <a
              href="#faq"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              FAQ
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
