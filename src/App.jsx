import {
  Benefits,
  CallToAction,
  Footer,
  Hero,
  Navbar,
  OpenPositions,
  OurPlatform,
  PlainText,
  PrivacyPart,
  Testimonial,
} from "./Components";

function App() {
  return (
    <>
      <div className="max-w-[1600px] mx-auto">
        <Navbar />
        <Hero />
        <PlainText />
        <OurPlatform />
        <Testimonial />
      </div>
      <Benefits />
      <div className="max-w-[1600px] mx-auto">
        <PrivacyPart />
      </div>
      <OpenPositions />
      <div className="max-w-[1600px] mx-auto">
        <CallToAction />
      </div>
      <Footer />
    </>
  );
}

export default App;
