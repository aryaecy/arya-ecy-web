import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Software from "@/components/Software";
import Stats from "@/components/Stats";
import AI from "@/components/AI";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Software />
      <Stats />
      <AI />
      <Footer />
    </>
  );
}