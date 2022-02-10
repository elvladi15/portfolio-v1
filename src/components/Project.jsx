import { AiFillGithub } from "react-icons/ai";

export default function Project({ project }) {
  const { title, url, githubRepo, image } = project;

  return (
    <div
      className="
    d-flex flex-column 
    flex-md-row
    "
      style={{ backgroundColor: "transparent" }}
    >
      <img
        className="
        w-100 mb-4
        w-md-50 mb-md-0"
        src={image}
        style={{ maxWidth: "100%" }}
        alt="Project image"
      />

      <div
        className="
      w-100 text-center ms-0
      w-md-50 text-md-start ms-md-4
      "
      >
        <h1 className="mb-4">{title}</h1>
        <div
          className="
        d-flex flex-column 
        flex-sm-row 
        flex-md-column align-items-md-start
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
            mb-sm-0 ms-sm-auto me-sm-3
            mb-md-3 ms-md-0 me-md-0
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
            className="
            me-sm-auto
            me-md-0
            "
          >
            <AiFillGithub className="me-2" size={22} />
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
