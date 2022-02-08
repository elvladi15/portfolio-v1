import Container from "react-bootstrap/Container";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="text-white" style={{ position: "relative", height: "90vh" }}>
      <div id="hero__bg" />
      <Container className="h-100 d-flex flex-column justify-content-around">
        <h1 id="hero__title" className="display-4 fw-bold text-center text-md-start">
          Building amazing projects and experiences!
        </h1>

        <p className="text-center text-md-start">
          <span>👇</span>Get to know me
        </p>
      </Container>
    </div>
  );
}
