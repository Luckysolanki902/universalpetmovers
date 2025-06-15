import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Locations from '../components/Locations';
import Transport from '../components/Transport';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Locations />
        <Transport />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
