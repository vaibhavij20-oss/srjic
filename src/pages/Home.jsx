import Hero from "../components/Hero";
import Stats from "../components/Stats";
import PrincipalMessage from "../components/PrincipalMessage";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Academics from "../components/Academics";
import Facilities from "../components/Facilities";
import Achievements from "../components/Achievements";
import Notices from "../components/Notices";
import Gallery from "../components/Gallery";
import AdmissionBanner from "../components/AdmissionBanner";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <PrincipalMessage />
      <About />
      <WhyChooseUs />
      <Academics />
      <Facilities />
      <Achievements />
      <Notices />
      <Gallery />
      <AdmissionBanner />
      <Contact />
    </>
  );
}