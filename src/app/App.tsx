import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Maintenance } from "./components/Maintenance";
import { Employment } from "./components/Employment";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { ScrollSpySideNav } from "./components/ScrollSpySideNav";

export default function App() {
  return (
    <div className="min-h-screen animate-fade-in">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Maintenance />
        <Employment />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollSpySideNav />
    </div>
  );
}