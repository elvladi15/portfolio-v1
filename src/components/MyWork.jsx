import Container from "react-bootstrap/Container";
import Project from "./Project";

import ChessImage from "../assets/projects_images/chess_app.png";
import BudgetImage from "../assets/projects_images/budget_app.png";
import { translations } from "../translations";
import { useLanguageContext } from "../LanguageContext";

export default function MyWork() {
  const { language } = useLanguageContext();

  const projects = [
    {
      title: translations.MyWork.chessProject[language],
      url: "https://elvladi15.github.io/chess-game",
      githubRepo: "https://github.com/elvladi15/chess-game",
      image: ChessImage,
    },
    {
      title: translations.MyWork.budgetProject[language],
      url: "https://elvladi15.github.io/budget-app",
      githubRepo: "https://github.com/elvladi15/budget-app",
      image: BudgetImage,
    },
  ];

  return (
    <section id="my-work" className="py-5 text-white" style={{ backgroundColor: "#4E4BFA" }}>
      <Container>
        <h2 className="display-4 text-uppercase text-center mb-5">
          {translations.MyWork.title[language]}
        </h2>
        <div>
          {projects.map((project, index) => (
            <Project key={index} id={index} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
