import React from 'react';

import {
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaFacebook,
  FaGithub,
} from 'react-icons/fa';

import './Footer.css';

function Footer() {
  return (
    <div>
      <p className="footer">
        {' '}
        Skillery was a dream which is envisioned to make programming education
        easy and accessible for Indian students. We designed a program which is
        market oriented, fun to learn and focus on setting a strong base for a
        programming career. Our students are an asset for any team from day one,
        and trained to be great coders.
      </p>
      <div className="Footer">
        <FaGithub className="footer__icon" fontSize="large" href="/" />
        <FaInstagram className="footer__icon" fontSize="large" href="/" />
        <FaTwitter className="footer__icon" fontSize="large" href="/" />
        <FaYoutube className="footer__icon" fontSize="large" href="/" />
        <FaFacebook className="footer__icon" fontSize="large" href="/" />
      </div>
      <div className="footer-bottom">
        <p>
          copyright &copy; <a href="#">Skillery</a>{' '}
        </p>
      </div>
    </div>
  );
}

export default Footer;
