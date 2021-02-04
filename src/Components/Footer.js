import React from 'react';
import './Footer.css';
import { Row, Col } from 'react-bootstrap';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

function Footer() {
  return (
    <div className="footer text-center">
      <Row className="m-3">
        <Col sm={6}>
          <h3 className="mt-3">Social Media </h3>
          <a className="icons" href="https://www.facebook.com/scholarsplayground/" target="_blank" rel="noreferrer"><FacebookIcon ></FacebookIcon></a>
          <a className="icons" href="https://www.instagram.com/scholarsplayground/" target="_blank" rel="noreferrer"><InstagramIcon> Instagram</InstagramIcon></a>
          <a className="icons" href="https://twitter.com/scholarsplygrnd" target="_blank" rel="noreferrer"><TwitterIcon></TwitterIcon></a>

        </Col>
        <Col sm={6}><h3 className="mt-3">Legal</h3>
          <h6>Terms of Use</h6>
          <h6>Privacy Policy</h6>
        </Col>
      </Row>
      <h5>©2021 Scholars' Playground</h5>
      <Row>

      </Row>
    </div>
  )
}

export default Footer;