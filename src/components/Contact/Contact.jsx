import "./Contact.css";
import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Container, Col, Button, Form } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";

const ContactComponent = () => {
  const [nombre, setNombre] = useState(""); 
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState(""); 

  const handleFormSubmit = async (e) => {
    e.preventDefault();

      const data = {
      nombre,
      telefono,
      email,
      asunto,
      mensaje,
    };

    try {
      await axios.post("https://milagroscabrera-portfoliobackend.onrender.com/contacto", data);
      toast.success("Mensaje enviado correctamente");
      setNombre("");
      setTelefono("");
      setEmail("");
      setAsunto("");
      setMensaje("");
    } catch (error) {
      toast.error("Error al enviar el mensaje");
      console.error(error);
    }
  }
  return (
    <Container className="about-contacto container" id="contacto">
      <Col>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h2 className="text-center  title-contacto">
            Formulario de Contacto
          </h2>
          <p className="subtitle-contacto">
            ¿Querés contactarme? Enviame un mensaje directamente desde este
            formulario y te respondere a la brevedad.
          </p>
        </motion.div>
      </Col>
      <Col>
        <Form className="form-contacto"  onSubmit={handleFormSubmit}>
          
          <Form.Group controlId="formNombre">
            <Form.Label className="text-forms">Nombre Completo:</Form.Label>
            <Form.Control
              required
              type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}
              placeholder="Escriba su nombre aqui"/>
          </Form.Group>

          <Form.Group controlId="formTelefono" className="mb-3">
            <Form.Label className="text-forms">Teléfono:</Form.Label>
            <Form.Control
              type="tel"
              required value={telefono} onChange={(e) => setTelefono(e.target.value)}
              placeholder="Ingrese su número de contacto"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="text-forms">Gmail: </Form.Label>
            <Form.Control
              type="email"
              required value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingrese su correo"
            />
          </Form.Group>

          <Form.Group controlId="formAsunto" className="mb-3">
            <Form.Label className="text-forms">Asunto:</Form.Label>
            <Form.Control type="text" value={asunto} onChange={(e) => setAsunto(e.target.value)} placeholder="Escriba su motivo del mensaje" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="text-forms">Escribi tu mensaje:</Form.Label>
            <Form.Control required value={mensaje} onChange={(e) => setMensaje(e.target.value)} as="textarea" rows={5} />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            id="buton-contacto"
            className="mb-2 button-contacto d-flex"
            aria-label="Enviar formulario de contacto"
          >
            Enviar mensaje
          </Button>
        </Form>
      </Col>
      <ToastContainer />
    </Container>
  );
};

export default ContactComponent;
