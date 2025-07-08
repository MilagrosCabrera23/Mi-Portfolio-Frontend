import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Home.css";

const HomeComponent = () => {
  return (
    <Container className="home-container" id="home" role="main">
      <Row className="align-items-center">
        <Col className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: -30 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 80 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="title-home text"
            >
              ¡Hola! Soy Milagros Cabrera
            </motion.h1>  

            <motion.strong
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="subtitle-home"
            >
              Técnica en Desarrollo de Software | Full Stack Developer
            </motion.strong>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-home mt-3"
            >
              Soy una apasionada por la tecnología y el desarrollo web.
              <br />
              Disfruto viajar, descubrir nuevos lugares y aprender algo nuevo
              cada día.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <Button
                variant="primary"
                className="button-projects"
                aria-label="Ir a sección Proyectos"
                href="#proyectos"
                id="proyectos"
              >
                Ver proyectos
              </Button>
            </motion.div>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeComponent;
