import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../styling/CreateAccount-LoginForm.css';
import { useEffect, useState } from 'react';
import { create } from '../functions/create-account';
import { useNavigate } from 'react-router-dom';

function CreateAccountForm() {

  const navigate = useNavigate();

    // local form's state
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [regionsOfInterest, setRegionsOfInterest] = useState("");
    const [countriesOfInterest, setCountriesOfInterest] = useState("");
  
  
    // This useEffect shows that the user was created
    useEffect(() => {
      console.log(`Created account:\n${user}`);
      
    }, [user]);
  
    return (
    <Form className="create-account-form">
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={3} className="label">
          Email
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            type="email"
            placeholder="Email"
            value={email} 
            onChange={(event) => setEmail(event.target.value)} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={3} className="label">
          Password
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password} 
            onChange={(event) => setPassword(event.target.value)}  />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="firstname">
        <Form.Label column sm={3} className="label">
          First Name
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            type="text"
            placeholder="First Name"
            value={firstName} 
            onChange={(event) => setFirstName(event.target.value)}  />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="lastname">
        <Form.Label column sm={3} className="label">
          Last Name
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            type="text"
            placeholder="Last Name"
            value={lastName} 
            onChange={(event) => setLastName(event.target.value)}  />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="username">
        <Form.Label column sm={3} className="label">
          Username
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            type="text"
            placeholder="Username"
            value={username} 
            onChange={(event) => setUsername(event.target.value)}  />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="regionsofinterest">
        <Form.Label column sm={3} className="label">
           Regions of Interest
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            type="text"
            placeholder="Regions of Interest"
            value={regionsOfInterest} 
            onChange={(event) => setRegionsOfInterest(event.target.value)}  />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="countriesofinterest">
        <Form.Label column sm={3} className="label">
          Countries of Interest
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            type="text"
            placeholder="Countries of Interest"
            value={countriesOfInterest} 
            onChange={(event) => setCountriesOfInterest(event.target.value)}  />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 3, offset: 10 }}>
          <Button onClick={ async (event) => {
            event.preventDefault();
            try {
              const newUser = await create(email, password, firstName, lastName, username, regionsOfInterest, countriesOfInterest);
              setUser(newUser); 
            } catch (error) {
              console.error("Error during login:", error);
            }
          }}  
          type="submit"
          className="create-button"
          >
            Create
          </Button>
        </Col>
      </Form.Group>
      <p>Already have an account?{' '}
        <span
          className="createlink"
          onClick={() => navigate('/')}
        >
          Login
        </span>
      </p>
    </Form>
    )
}

export default CreateAccountForm;