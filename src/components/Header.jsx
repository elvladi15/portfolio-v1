import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/logo.svg";
import Dropdown from "react-bootstrap/Dropdown";

import { GoThreeBars } from "react-icons/go";
import { useLanguageContext } from "../LanguageContext";
import { LANGUAGES, translations } from "../translations";

export default function Header({ openContactModal }) {
  const { language, setLanguage } = useLanguageContext();

  return (
    <Navbar style={{ backgroundColor: "#D90000", minHeight: "10vh" }} expand="md">
      <Container>
        <Navbar.Brand>
          <img src={Logo} alt="Logo image" />
        </Navbar.Brand>

        <Navbar.Toggle
          style={{
            border: "none",
            boxShadow: "none",
          }}
          aria-controls="basic-navbar-nav"
        >
          <span>
            <GoThreeBars color="white" size={30} />
          </span>
        </Navbar.Toggle>

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="
            text-center ms-auto my-2 
            my-lg-0
            "
            style={{ maxHeight: "300px" }}
            navbarScroll
          >
            <Nav.Link className="text-white" href="#about-me">
              {translations.header.aboutMe[language]}
            </Nav.Link>

            <Nav.Link className="text-white" href="#my-work">
              {translations.header.myWork[language]}
            </Nav.Link>

            <Nav.Link className="text-white" href="#my-skills">
              {translations.header.mySkills[language]}
            </Nav.Link>

            <Nav.Link className="text-white" onClick={openContactModal}>
              {translations.header.contactMe[language]}
            </Nav.Link>
            <Dropdown className="text-white">
              <Dropdown.Toggle
                id="choose-language-dropdown"
                style={{ backgroundColor: "unset", border: "unset", boxShadow: "none" }}
              >
                {translations.header.chooseLanguage[language]}
              </Dropdown.Toggle>
              <Dropdown.Menu className="text-center w-50 mx-auto">
                <Dropdown.Item onClick={() => setLanguage(LANGUAGES.ENGLISH)}>
                  {translations.header.english[language]}
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setLanguage(LANGUAGES.SPANISH)}>
                  {translations.header.spanish[language]}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
