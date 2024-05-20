import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Hero from "./components/Hero";
import KudzuPhotoes from "./components/KudzuPhotes";
import Testimonials from "./components/Testimonials";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Hero />
        <Benefits />
        <KudzuPhotoes />
        <Testimonials />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
