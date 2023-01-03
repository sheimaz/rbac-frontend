import './Login.css'
import  Button  from 'react-bootstrap/Button';
import  Form  from 'react-bootstrap/Form';


const Login = () => {
    return (
    <div pageName="Login Page" className="LoginPage" >
        <div className="loginFormContainer">
       <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <div className="d-grid">
      <Button variant="primary" type="submit"> Sign in..  </Button> </div>
    </Form>
    </div>
    </div>
    )
}

export default Login;