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
      <Navbar />
      <Hero />
      <PlainText />
      <OurPlatform />
      <Testimonial />
      <Benefits />
      <PrivacyPart />
      <OpenPositions />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
