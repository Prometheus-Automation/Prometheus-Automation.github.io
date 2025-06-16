import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import UseCases from "@/components/sections/UseCases";
import ContactCTA from "@/components/sections/ContactCTA";
import Footer from "@/components/sections/Footer";
import Pricing from "@/components/sections/Pricing";
import Philosophy from "@/components/sections/Philosophy";
import Process from "@/components/sections/Process";
import Problem from "@/components/sections/Problem";

// This is your main landing page component.
// It assembles all other sections in the correct narrative order.
const Index = () => {
  return (
    <>
      <Hero />
      <Problem />
      <Process />
      <Benefits />
      <Pricing />
      <UseCases />
      <Philosophy />
      <ContactCTA />
      <Footer />
    </>
  );
};

export default Index;
