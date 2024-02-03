import Hero from "@/components/Home";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Services from "@/components/Services";
import Contack from "@/components/Contack";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="h-screen">
        <Hero />
      </div>
      <div className="h-screen">
        <About />
      </div>
      <div className="h-screen">
        <Services />
      </div>
      <div className="h-screen">
        <Contack />
      </div>
    </>
  );
}
