import Container from "react-bootstrap/Container";
import Project from "./Project";
import ChessImage from "../assets/projects_images/chess_app.png";
export default function MyWork() {
  const projects = [
    {
      title: "Chess App",
      url: "https://elvladi15.github.io/chess-game",
      githubRepo: "https://github.com/elvladi15/chess-game",
      image: ChessImage,
    },
  ];
  return (
    <section className="py-5 text-white" style={{ backgroundColor: "#4E4BFA" }}>
      <Container>
        <h2 className="display-4 mb-4" style={{ textTransform: "uppercase" }}>
          My work
        </h2>
        <div>
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
