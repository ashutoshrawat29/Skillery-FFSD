import React from 'react';
import {Button, Container, Heading, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { RiErrorWarningFill } from 'react-icons/ri';

function PaymentFail() {
  return (
    <Container h="90vh">
      <VStack justifyContent="center" h="full" spacing="4">
        <RiErrorWarningFill size="5rem" />
        <Heading my="8" textAlign="center" textTransform="uppercase" children="Payment Fail" />
        <Link to="/subscribe">
          <Button variant="ghost">Try again</Button>
        </Link>
      </VStack>
    </Container>
  );
}

export default PaymentFail