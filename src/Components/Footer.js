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
          <h2 className="mt-3">Social Media </h2>
          <a className="icons" href="https://www.facebook.com/scholarsplayground/" target="_blank" rel="noreferrer"><FacebookIcon fontSize="large"></FacebookIcon></a>
          <a className="icons" href="https://www.instagram.com/scholarsplayground/" target="_blank" rel="noreferrer"><InstagramIcon fontSize="large"> Instagram</InstagramIcon></a>
          <a className="icons" href="https://twitter.com/scholarsplygrnd" target="_blank" rel="noreferrer"><TwitterIcon fontSize="large"></TwitterIcon></a>

        </Col>
        <Col sm={6}><h2 className="mt-3">Legal</h2>
          <a href="#"><h5>Terms of Use</h5></a>
          <a href="#"><h5>Privacy Policy</h5></a>
        </Col>
      </Row>
      <a className="icons" href="/" rel="noreferrer"><h5>©2021 Scholars' Playground</h5></a>

    </div>
  )
}

export default Footer;