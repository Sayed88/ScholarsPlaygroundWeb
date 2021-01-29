import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import  './SignUp.css';

function SignUp() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");

    function validateForm() {
        return email.length > 0 && name.length > 0 && password.length > 0 && confirmpassword.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="signUp">
            <Link to="/dashboard">
                <h3 className="dashlink">Dashboard</h3>
            </Link>

            <div>
                <Form onSubmit={handleSubmit}>
                <h3>Welcome Back Scholars Playground Sign Up</h3> <hr />
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                    </Form.Group>

                    <Form.Group size="lg" controlId="name">
                        <Form.Label >FulName:</Form.Label>
                        <Form.Control
                            autoFocus
                            type="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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

                    <Form.Group size="lg" controlId="confirmpassword">
                        <Form.Label>Confirm Password:</Form.Label>
                        <Form.Control
                            type="password"
                            value={confirmpassword}
                            onChange={(e) => setconfirmpassword(e.target.value)}
                            />
                    </Form.Group>

                    <Form.Group size="lg" controlId="checkBox">
                        <Form.Check
                            type="checkbox"
                            label="Check the box for term of use and confirmation"
                        />
                    </Form.Group>

                    <Button block size="lg" type="submit" disabled={!validateForm()}>
                        SignUp
                    </Button>
                
                    <Link to="/forgotpassword">
                    </Link>
                    <p>Already a Scholar <Link to="/login"> Login Here</Link></p>
                </Form>


            </div>

        </div>
    )

}

export default SignUp;