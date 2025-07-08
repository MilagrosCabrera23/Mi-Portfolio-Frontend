import { Container, Row, Col, Nav } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import "./Footer.css";

const FooterComponent = () => {
  return (
    <footer className="footer" role="contentinfo" aria-label="Pie de página">
      <Container>
        <Row className="align-items-center">
          <Col className="text-md-start text-center mb-2 mb-md-0">
            <Nav.Link href="#home" className="me-3 titles">
              Milagros M Cabrera
            </Nav.Link>
          </Col>

          <Col xs={12} md="4" className="footer-icons">
            <a
              href="https://www.linkedin.com/in/milagros-cabrera-dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Milagros Cabrera"
              className="btn btn-primary footer-icons"
            >
              <i className="">
                <FaLinkedin />
              </i>
            </a>

            <a
              href="https://github.com/MilagrosCabrera23"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Milagros Cabrera"
              className="btn btn-dark footer-icons"
            >
              <i className="">
                <FaGithub />
              </i>
            </a>
          </Col>
          <Col>
            <p className="footer-subtitle">
              © {new Date().getFullYear()} Todos los derechos reservados
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default FooterComponent;
