import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className="footer">
            <div className="socials">
                <h4>Social Medias</h4>           
                <p> <InstagramIcon />Instagram</p>
                <p> <FacebookIcon />Facebook</p>
            </div>
            <div className="privacy">
                <h4>Schoalrs Privacy</h4>
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    );
}

export default Footer;