import { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

function Register() {
  const { code } = useParams();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  console.log(code);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === true) {
      console.log(`Registering: ${email}, ${name}, ${address}, ${gender}`);

      // TODO: Consumir API
      resetState();
      navigate('/sharing');
      return;
    }

    setValidated(true);
  };

  const resetState = () => {
    setEmail('');
    setName('');
    setAddress('');
    setGender('');
    setValidated(false);
  };

  return (
    <Container className="mt-3">
      <Row className="justify-content-center">
        <Col className="text-center mb-4" xs="12">
          <h4>Formulario de registro</h4>
        </Col>
        <Col xs="8">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Control
                  required
                  type="text"
                  placeholder="Nombres completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese su nombre completo.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Control
                  required
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese su email.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Control
                  required
                  type="text"
                  placeholder="Dirección"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese su dirección.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Control
                  required
                  as={Form.Select}
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}>
                  <option hidden value="">
                    Sexo
                  </option>
                  <option value="1">Masculino</option>
                  <option value="2">Femenino</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Por favor seleccione una opción.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="justify-content-center">
              <Col className="d-grid">
                <Button type="submit">REGISTRARSE</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;