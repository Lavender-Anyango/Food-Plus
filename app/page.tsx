import Header from './components/Header'
import Hero from './components/Hero';
import PopularFoods from './components/PopularFoods';
import SpecialOffer from './components/SpecialOffer';
import BestOffers from './components/BestOffers';
import Services from './components/Services';
import Testimonial from './components/Testimonials';
import Download from './components/Download';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <PopularFoods />
        <SpecialOffer />
        <BestOffers />
        <Services/>
        <Testimonial/>
        <Download/>
        <Subscribe/>
        <Footer/>
      </main>
    </div>
  );
}
