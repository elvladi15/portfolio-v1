import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/logo.svg";
export default function Header() {
  return (
    <Navbar style={{ backgroundColor: "#D90000", minHeight: "10vh" }} expand="sm" sticky="top">
      <Container>
        <Navbar.Brand>
          <img src={Logo} alt="Logo image" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="
            text-center ms-auto my-2 
            my-lg-0
            "
            style={{ maxHeight: "150px" }}
            navbarScroll
          >
            <Nav.Link className="text-white" href="#about-me">
              About me
            </Nav.Link>
            <Nav.Link className="text-white" href="#my-work">
              My work
            </Nav.Link>
            <Nav.Link className="text-white" href="#my-skills">
              My skills
            </Nav.Link>
            <Nav.Link className="text-white">Contact me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
