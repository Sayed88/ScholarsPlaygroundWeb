import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';
// import "bootstrap/dist/css/bootstrap.min.css";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="login">
            <Link to="/dashboard">
                <h3 className="dashlink">Dashboard</h3>
            </Link>

            <div>
                <h3>Welcome Back Scholar Please Sign in </h3> <hr />
                <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Link to="/loggedin_view">                    
                        <Button block size="lg" type="submit" disabled={!validateForm()}>
                            Login
                        </Button>
                    </Link>
    
                
                    
                    <p>
                        <Link to="/forgotpassword">
                            Forgot Password?
                        </Link>
                        <br/>
                        New to the Playground? <Link to="/signup">SignUp Here</Link>
                    </p>
                </Form>
            </div>
        </div>
    )
}

export default Login;
