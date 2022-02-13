import Container from "react-bootstrap/Container";
import { AiFillGithub } from "react-icons/ai";

export default function Project({ project }) {
  const { title, url, githubRepo, image } = project;

  return (
    <div
      className="
    d-flex flex-column rounded-3 overflow-hidden mb-5
    flex-md-row
    "
      style={{ backgroundColor: "#423EF9" }}
    >
      <img
        className="
      w-100
      "
        src={image}
        alt="Project image"
      />

      <Container>
        <div
          className="
         py-5 h-100 text-center d-flex flex-column justify-content-center
        py-md-0 text-md-start ms-md-3
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
          d-flex flex-column
          flex-sm-row justify-content-center align-items-md-start
          flex-md-column
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
              View project
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
              className=""
            >
              <AiFillGithub className="" size={22} />
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
