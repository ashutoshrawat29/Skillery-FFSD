import { HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

import {
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaFacebook,
  FaGithub,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import '../../Home.css';

function Footer() {
  return (
    <>
      <VStack margin={4}>
        <HStack margin={1}>
          <Link>
            <FaGithub className="footer__icon" />
          </Link>
          <Link>
            <FaInstagram className="footer__icon" />
          </Link>
          <Link>
            <FaTwitter className="footer__icon" />
          </Link>
          <Link>
            <FaYoutube className="footer__icon" />
          </Link>
          <Link>
            <FaFacebook className="footer__icon" />
          </Link>
        </HStack>
        <HStack>
          <Text children="copyright&copy;" fontSize="sm" />
          <Link to="/">
            <Text children="Skillery" color="yellow" fontSize="xl" style={{"fontWeight" : "bold"}} />
          </Link>
        </HStack>
      </VStack>
    </>
  );
}

export default Footer;
