import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
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

        <Link to="terms_of_use">
          <h5>Terms of Use</h5>
        </Link>

        <Link to="privacy_policy">
          <h5>Privacy Policy</h5>
        </Link>

        </Col>
      </Row>
      
      <Link to="/dashboard">
        <h5>©2021 Scholars' Playground</h5>
      </Link>

    </div>
  )
}

export default Footer;