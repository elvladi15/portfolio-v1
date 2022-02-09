import Card from "react-bootstrap/Card";
//import Button from "react-bootstrap/Button";
import { AiFillGithub } from "react-icons/ai";

export default function Project({ project }) {
  const { title, url, githubRepo, image } = project;
  return (
    <Card style={{ backgroundColor: "transparent" }}>
      <Card.Img src={image} />
      <Card.Body>
        <Card.Title className="mb-3">{title}</Card.Title>
        <div>
          <button
            style={{
              color: "white",
              backgroundColor: "transparent",
              border: "5px solid white",
              borderRadius: "10px",
              padding: "0.5em 1em",
              fontWeight: "bold",
            }}
            className="me-3"
          >
            View project
          </button>
          <button
            style={{
              color: "white",
              backgroundColor: "black",
              border: "none",
              borderRadius: "10px",
              padding: ".85em 1em",
              fontWeight: "bold",
            }}
          >
            <AiFillGithub className="me-2" size={22} />
            View on GitHub
          </button>
        </div>
      </Card.Body>
    </Card>
  );
}
