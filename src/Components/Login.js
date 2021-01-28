import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Login.css';
import "bootstrap/dist/css/bootstrap.min.css";

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
            <div>
                <Link to="/dashboard">
                    <h3 className="dashlink">Dashboard</h3>
                </Link>
            </div>

            <div className="logpg">
                <h3 className="logMsg">Welcome Back Scholar Please Sign in </h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="formG" size="lg" controlId="email">
                        <Form.Label className="spcEmail">Email:</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                    </Form.Group>

                    <Form.Group size="lg" controlId="password">
                        <Form.Label className="spcPass">Password:</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                    </Form.Group>

                    <Button className="logBtn" block size="lg" type="submit" disabled={!validateForm()}>
                        Login
                    </Button>
                
                </Form>

                <div className="logfooter">
                    <Link to="/forgotpassword">
                        <p>Forgot Password?</p>
                    </Link>
                    <p>New to the Playground? <Link to="/signup">Sign up Here</Link></p>
                </div>

            </div>

        </div>
    )
}

export default Login;
