import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import './Subscribe.css';


function Subscribe() {

  return (
    <div className="col-md-6 col-sm-12 mx-auto">
      <Card className="subscribe-container text-center">
        <Card.Header className="subscribe-header"><strong>Subscribe</strong></Card.Header>
        <Card.Body>
          <Card.Title>Subscribe to Receive Playground Updates</Card.Title>
          <Form>
            <Form.Control size="lg" className="subscribe-input my-3" type="text" placeholder="Full Name" />
            <Form.Control size="lg" className="subscribe-input my-3" type="email" placeholder="Email" />
          </Form>
          <Button variant="primary">SUBSCRIBE</Button>
        </Card.Body>
      </Card>
    </div>
  );

    return (
        <div className="col-md-6 col-sm-12 mx-auto">
            <Card className="text-center">
                <Card.Header><b>SUBSCRIPTION </b></Card.Header>
                <Card.Body>
                    <Card.Title>Subscribe to Receive Playground Updates</Card.Title>
                    <Form>
                        <Form.Control size="lg" className="my-3" type="text" placeholder="Full Name" />
                        <Form.Control size="lg" className="my-3" type="email" placeholder="Email" />
                    </Form>
                    <Button variant="primary">SUBSCRIBE</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Subscribe;