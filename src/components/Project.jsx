import { AiFillGithub } from "react-icons/ai";
import { useLanguageContext } from "../LanguageContext";
import { translations } from "../translations";

export default function Project({ id, project }) {
  const { title, url, githubRepo, image } = project;
  const { language } = useLanguageContext();
  return (
    <div
      className="
    d-flex flex-column rounded-3 overflow-hidden mb-5
    flex-md-row
    "
      style={{ backgroundColor: "#423EF9" }}
    >
      <div
        style={{ backgroundColor: "#fff" }}
        className={`
        d-flex align-items-center
      w-100
      w-md-50 ${id % 2 === 0 ? null : "order-md-last"}`}
      >
        <img className="w-100 py-auto" src={image} alt="Project image" />
      </div>

      <div
        className="
        py-5 w-100 m-auto
        "
      >
        <div
          style={{ width: "85%" }}
          className="
            mx-auto text-center d-flex flex-column justify-content-center align-items-center
         
        "
        >
          <h1
            className="
          fw-bold mb-4
          "
          >
            {title}
          </h1>
          <div
            className="
          w-100 d-flex flex-column justify-content-center 
          flex-sm-row 
          flex-md-column align-items-md-center
          "
          >
            <a
              style={{
                color: "white",
                backgroundColor: "transparent",
                border: "5px solid white",
                borderRadius: "10px",
                padding: "0.5em 1em",
                fontWeight: "bold",
                textDecoration: "none",
              }}
              href={url}
              target="_blank"
              className="
              mb-3
              mb-sm-0 me-sm-4
              mb-md-4 me-md-0
              "
            >
              {translations.project.viewProject[language]}
            </a>
            <a
              style={{
                color: "white",
                backgroundColor: "black",
                border: "none",
                borderRadius: "10px",
                padding: ".85em 1em",
                fontWeight: "bold",
                textDecoration: "none",
              }}
              href={githubRepo}
              target="_blank"
            >
              <AiFillGithub className="me-2" size={22} />
              {translations.project.viewOnGitHub[language]}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
