import Container from "react-bootstrap/Container";
import "./Hero.css";
import HeroImage from "../../assets/hero_image.svg";

export default function Hero() {
  return (
    <div className="text-white position-relative" style={{ height: "90vh" }}>
      <img id="hero__bg" className="position-absolute" src={HeroImage} alt="Hero image" />
      <Container className="h-100 d-flex flex-column justify-content-evenly">
        <h1 id="hero__title" className="display-3 fw-bold text-center text-md-start">
          Building amazing projects and experiences!
        </h1>
        <p id="get-to-know-me" className="text-center text-md-start">
          <span>👇 </span>Get to know me
        </p>
        <div id="scroll-animation">
          <div id="circle" />
        </div>
      </Container>
    </div>
  );
}
