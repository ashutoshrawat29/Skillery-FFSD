import React from 'react';
import {Button, Container, Heading, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { RiErrorWarningFill } from 'react-icons/ri';

function NotFound() {
  return (
    <Container h="90vh">
      <VStack justifyContent="center" h="full" spacing="4">
        <RiErrorWarningFill size="5rem" />
        <Heading my="8" textAlign="center" textTransform="uppercase" children="Page Not Found" />
        <Link to="/">
          <Button variant="ghost">Go to Home</Button>
        </Link>
      </VStack>
    </Container>
  );
}

export default NotFound;
