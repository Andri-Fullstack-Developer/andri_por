import Hero from "@/components/Home";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Portofolio from "@/components/Portofolio";
import Contack from "@/components/Contack";
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Portofolio />
      <Contack />
      <Footer/>
    </>
  );
}
