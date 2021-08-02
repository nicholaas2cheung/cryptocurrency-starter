import { Container, Heading } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Container maxW="100%" bg="black" centerContent py={12}>
      <Heading as="h3" fontSize="xl" color="white">
        © Copyright by Nicholas Cheung
      </Heading>
    </Container>
  );
};

export default Footer;
