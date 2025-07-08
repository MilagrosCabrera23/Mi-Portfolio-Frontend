import { Navbar, Nav, Container } from "react-bootstrap";
import { BsToggle2Off } from "react-icons/bs";
import "./Navbar.css";

const NavbarComponent = ({ toggleDarkMode, darkMode }) => {
  return (
    <>
      <Navbar
        className="navbar"
        bg=""
        data-bs-theme="dark"
        expand="lg"
        role="navigation"
        aria-label="Barra de navegación principal"
      >
        <Container>
          <Navbar.Brand href="#home" className="logo-navbar">
            {" "}
            Milagros M Cabrera{" "}
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            aria-label="Mostrar u ocultar navegación"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto div-titles">
              <Nav.Link href="#home" className="me-3 titles">
                Home
              </Nav.Link>
              <Nav.Link href="#sobre-mi" className="me-3 titles">
                Sobre Mi
              </Nav.Link>
              <Nav.Link href="#habilidades" className="me-3 titles">
                Habilidades
              </Nav.Link>
              <Nav.Link href="#proyecto" className="me-3 titles">
                Proyectos
              </Nav.Link>
              <Nav.Link href="#contacto" className="me-3 titles">
                Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
