import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import MySkills from "./components/MySkills";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import { useState } from "react";

function App() {
  const [showContactModal, setShowContactModal] = useState(true);

  return (
    <>
      <Header openContactModal={() => setShowContactModal(true)} />
      <Hero />
      <AboutMe />
      <MyWork />
      <MySkills />
      <Footer openContactModal={() => setShowContactModal(true)} />
      <ContactModal show={showContactModal} handleClose={() => setShowContactModal(false)} />
    </>
  );
}

export default App;
