// import React, { useState } from 'react';
// import { Button, Modal, Form } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// function LoginModal() {
//     const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function validateForm() {
//       return email.length > 0 && password.length > 0;
//   }

//   function handleSubmit(event) {
//       event.preventDefault();
//   }

//     return (
//         <div className="modalBtn">
//                 {/* <Button variant="info" onClick={handleShow}>
//                     Login
//                 </Button> */}

//                 <Modal show={show} onHide={handleClose}>
//                     <Modal.Header closeButton>
//                         <Modal.Title>Welcome Back Scholar Please Login</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                         <Form onSubmit={handleSubmit}>
//                             <Form.Group size="lg" controlId="email">
//                                 <Form.Label>Email:</Form.Label>
//                                 <Form.Control
//                                     autoFocus
//                                     type="email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                 />
//                             </Form.Group>

//                             <Form.Group size="lg" controlId="password">
//                                 <Form.Label>Password:</Form.Label>
//                                 <Form.Control
//                                     type="password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                 />
//                             </Form.Group>

//                             <Button block size="lg" type="submit" disabled={!validateForm()}>
//                                 Login to your account
//                             </Button>                        
                            
//                             <p>
//                                 <Link to="/forgotpassword">
//                                     Forgot Password?
//                                 </Link>
//                                 <br/>
//                                 New to the Playground? <Link to="/signup">SignUp Here</Link>
//                             </p>
//                         </Form>                        
//                     </Modal.Body>
//                 </Modal>
//             </div>
//     )
// }

// export default LoginModal
