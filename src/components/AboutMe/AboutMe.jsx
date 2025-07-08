import "./AboutMe.css";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import {FaGithub,FaLinkedin,FaDownload,} from "react-icons/fa";
import perfilAnime from "../../assets/img/perfilAnime.webp";

const AboutMeComponent = () => {
  return (
    <Container className="about-container" id="sobre-mi" aria-labelledby="sobre-mi-title">
      <Row className="row-about align-items-center flex-column flex-md-row">
        {/* Columna de texto */}
        <Col md={6} className="text-start">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="title-about">Sobre Mi</h2>
            <p className="subtitle-about">
              ¡Hola! Soy{" "}
              <strong className="strong-about">Milagros Cabrera</strong>, aunque
              prefiero que me llamen{" "}
              <strong className="strong-about">Magui</strong>. Soy una
              desarrolladora Full Stack apasionada por crear soluciones
              tecnológicas innovadoras y amante del café ☕.
    
              Mi enfoque se centra en el desarrollo de aplicaciones web modernas
              y escalables, combinando las mejores prácticas de frontend y
              backend.
        
              Me destaco por mi capacidad para aprender rápidamente nuevas
              tecnologías y mi compromiso con la calidad del código.
       
              También podés conocer más sobre mí en mis redes profesionales o
              descargar mi CV:
            </p>

            <div className="button-redes gap-3 d-flex flex-wrap">
              <a
                href="https://github.com/MilagrosCabrera23"
                target="_blank"
                aria-label="Ir al perfil de GitHub de Milagros Cabrera"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                <FaGithub className="me-2" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/milagros-cabrera-dev/"
                target="_blank"
                aria-label="Ir al perfil de Linkedin de Milagros Cabrera"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FaLinkedin className="me-2" /> LinkedIn
              </a>
              <a
                href="/cv-milagros-cabrera.docx"
                download
                aria-label="Descargar CV de Milagros Cabrera"
                className="btn btn-cv"
              >
                <FaDownload className="me-2" /> Descargar mi CV
              </a>
            </div>
          </motion.div>
        </Col>

        {/* Imagen (solo en desktop) */}
        <Col md={6} className="text-center d-none d-md-block">
          <motion.img
            src={perfilAnime}
            loading="lazy"
           alt="Ilustración animada del perfil de Milagros Cabrera"
            className="imagen-about"
            whileHover={{ scale: [1, 1.1, 1.2] }}
            transition={{ duration: 0.5 }}
          />
        </Col>

        {/* Imagen (solo en mobile) */}
        <div className="d-md-none text-center my-4">
          <motion.img
            src={perfilAnime}
            alt="foto de perfil animada"
            className="imagen-about"
            whileHover={{ scale: [1, 1.1, 1.2] }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </Row>
    </Container>
  );
};

export default AboutMeComponent; 