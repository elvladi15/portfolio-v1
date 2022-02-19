import "./Hero.css";
import Container from "react-bootstrap/Container";
import HeroImage from "../../assets/hero_image.svg";
import { useLanguageContext } from "../../LanguageContext";
import { translations } from "../../translations";

export default function Hero() {
  const { language } = useLanguageContext();
  return (
    <div className="text-white position-relative" style={{ height: "90vh" }}>
      <img id="hero__bg" className="position-absolute" src={HeroImage} alt="Hero image" />

      <Container className="h-100 d-flex flex-column justify-content-evenly">
        <h1
          id="hero__title"
          className="
        display-3 fw-bold text-center 
        text-md-start
        "
        >
          {translations.hero.title[language]}
        </h1>
        <p
          id="get-to-know-me"
          className="
        text-center 
        text-md-start
        "
        >
          <span>👇 </span>
          {translations.hero.getToKnowMe[language]}
        </p>
        <div id="scroll-animation">
          <div id="circle" />
        </div>
      </Container>
    </div>
  );
}
