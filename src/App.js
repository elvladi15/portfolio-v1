import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import MySkills from "./components/MySkills";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import { useState } from "react";

function App() {
  const [showContactModal, setShowContactModal] = useState(false);

  function openContactModal() {
    setShowContactModal(true);
  }
  function closeContactModal() {
    setShowContactModal(false);
  }

  return (
    <>
      <Header openContactModal={openContactModal} />
      <Hero />
      <AboutMe />
      <MyWork />
      <MySkills />
      <Footer openContactModal={openContactModal} />
      <ContactModal show={showContactModal} handleClose={closeContactModal} />
    </>
  );
}

export default App;
