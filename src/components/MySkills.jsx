import Container from "react-bootstrap/Container";
import Skill from "./Skill";

import Html5Image from "../assets/skills_images/html5.png";
import Css3Image from "../assets/skills_images/css3.png";
import JavaScriptImage from "../assets/skills_images/javascript.png";
import ReactImage from "../assets/skills_images/react.png";
import ScssImage from "../assets/skills_images/scss.png";
import Bootstrap5Image from "../assets/skills_images/bootstrap5.png";

export default function MySkills() {
  const mySkills = [
    { name: "HTML5", image: Html5Image },
    { name: "CSS3", image: Css3Image },
    { name: "JavaScript", image: JavaScriptImage },
    { name: "React", image: ReactImage },
    { name: "SCSS", image: ScssImage },
    { name: "Bootstrap", image: Bootstrap5Image },
  ];
  return (
    <section
      id="my-skills"
      style={{
        backgroundColor: "#f0f0f0",
      }}
      className="py-5"
    >
      <Container>
        <h2 className="display-4 text-center mb-5" style={{ textTransform: "uppercase" }}>
          My skills
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          {mySkills.map((skill, index) => (
            <Skill key={index} skill={skill} />
          ))}
        </div>
      </Container>
    </section>
  );
}
