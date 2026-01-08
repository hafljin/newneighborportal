import Header from "./components/Header";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Support from "./components/Support";
import Flow from "./components/Flow";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Feature />
        <Support />
        <Flow />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
