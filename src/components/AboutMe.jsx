import Container from "react-bootstrap/Container";
import ProfilePicture from "../assets/profile-picture.png";
import { useLanguageContext } from "../LanguageContext";
import { translations } from "../translations";

export default function AboutMe() {
  const { language } = useLanguageContext();
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
          <h2 className="display-4 text-uppercase">{translations.aboutMe.title[language]}</h2>
          <p className="fs-4">{translations.aboutMe.description[language]}</p>
        </div>
      </Container>
    </section>
  );
}
