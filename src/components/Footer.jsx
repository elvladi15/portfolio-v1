import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import { FiMail } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { RiPhoneFill } from "react-icons/ri";

export default function Footer() {
  const socialMediaButtonStyle = {
    backgroundColor: "#D90000",
    width: "3rem",
    height: "3rem",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    border: "none",
    fontSize: "22px",
    cursor: "pointer",
  };
  return (
    <footer
      style={{
        backgroundColor: "black",
      }}
      className="py-5"
    >
      <Container className="text-light">
        <h2 className="display-4 text-center fw-bold" style={{ marginBottom: "3rem" }}>
          Interested in my Work?
        </h2>

        <Stack>
          <button
            style={{
              margin: "0 auto 3rem",
              backgroundColor: "#D90000",
              border: "none",
              padding: ".7em 3em",
            }}
            className="rounded-pill text-light fs-5"
          >
            Contact me!
          </button>
        </Stack>

        <div
          style={{
            width: "min(70%, 300px)",
            marginBottom: "3rem",
          }}
          className="mx-auto d-flex justify-content-between"
        >
          <a style={socialMediaButtonStyle} href="mailto: vladimirfranciscodiaz14@hotmail.com">
            <FiMail />
          </a>
          <a
            style={socialMediaButtonStyle}
            href="https://www.linkedin.com/in/vladimir-francisco-d%C3%ADaz-330221188/"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
          <a style={socialMediaButtonStyle} href="https://github.com/elvladi15" target="_blank">
            <AiFillGithub />
          </a>
        </div>

        <p className="text-center">
          <RiPhoneFill className="me-1" />
          829-981-8159
        </p>
      </Container>
    </footer>
  );
}
