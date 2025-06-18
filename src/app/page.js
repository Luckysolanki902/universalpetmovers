import TopBar from '../components/TopBar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Locations from '../components/Locations';
import Transport from '../components/Transport';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function Home() {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <Services />
        <Locations />
        <Transport />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
