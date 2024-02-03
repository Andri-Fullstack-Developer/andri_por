import Hero from "@/components/Home";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Services from "@/components/Services";
import Contack from "@/components/Contack";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <div className="h-screen">
        <Contack />
      </div>
    </>
  );
}
