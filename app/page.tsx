import Hero from "@/components/Home";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Services from "@/components/Services";
import Portofolio from "@/components/Portofolio";
import Contack from "@/components/Contack";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portofolio />
      <Contack />
    </>
  );
}
