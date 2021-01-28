import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import  './SignUp.css';

function SignUp() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    const [checkbox, setcheckbox] = useState("");

    function validateForm() {
        return email.length > 0 && name.length > 0 && password.length > 0 && confirmpassword.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="login">
            <Link to="/dashboard">
                <h3 className="dashlink">Dashboard</h3>
            </Link>

            <div className="logpg">
                <h3 className="logMsg">Welcome Back Scholara Playground Sign Up</h3>
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

                    <Form.Group className="formG" size="lg" controlId="name">
                        <Form.Label className="spcEmail">FulName:</Form.Label>
                        <Form.Control
                            autoFocus
                            type="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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

                    <Form.Group size="lg" controlId="confirmpassword">
                        <Form.Label className="spcPass">Confirm Password:</Form.Label>
                        <Form.Control
                            type="password"
                            value={confirmpassword}
                            onChange={(e) => setconfirmpassword(e.target.value)}
                            />
                    </Form.Group>

                    <Form.Group size="lg" controlId="checkBox">
                        <Form.Control
                            type="checkbox"
                            value={checkbox}
                            onChange={(e) => setcheckbox(e.target.value)}
                            />
                        <Form.Label className="spcPass">Check the box for term of use and confirmation:</Form.Label>
                    </Form.Group>

                    <Button className="logBtn" block size="lg" type="submit" disabled={!validateForm()}>
                        SignUp
                    </Button>
                
                </Form>

                <div className="logfooter">
                    <Link to="/forgotpassword">
                    </Link>
                    <p>Already a Scholar <Link to="/login"> Login Here</Link></p>
                </div>

            </div>

        </div>
    )

}

export default SignUp;
