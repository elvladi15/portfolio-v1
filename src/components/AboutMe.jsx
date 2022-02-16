import Container from "react-bootstrap/Container";
import ProfilePicture from "../assets/profile-picture.png";

export default function AboutMe() {
  return (
    <section id="about-me" className="py-5">
      <Container
        className="
      d-flex flex-column 
      flex-md-row
      "
      >
        <div
          className="
        mx-auto mb-5 w-75 
        w-md-50
        "
        >
          <img style={{ maxWidth: "100%" }} src={ProfilePicture} alt="Profile picture" />
        </div>

        <div
          className="
          w-100 ms-0 text-center
          w-md-50 ms-md-5 text-md-start
        "
        >
          <h2 style={{ textTransform: "uppercase" }} className="display-4">
            About me
          </h2>
          <p className="fs-4">
            My name is Vladimir Francisco Díaz, I am a ReactJS Frontend Developer that loves
            technology and web development. I like learning new things to improve my skills and
            putting them into practice right away!
          </p>
        </div>
      </Container>
    </section>
  );
}
