import React from 'react';
import { Container, Flex, Heading, Text, Box, Image } from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <Container maxW="container.xl">
      <Flex alignItems="center" justifyContent="space-between">
        <Box maxW="55%">
          <Heading as="h1" fontSize="5xl" mb={2}>
            👋 Welcome to PyChainCoin!
          </Heading>
          <Text as="mark" fontSize="2xl" fontFamily="rubik" fontWeight="600">
            A Starter Project to Learn More About Cryptocurrency 🏦
          </Text>
          <Text mt={2} fontSize="1.125em">
            Hi All! I am Nicholas Cheung. Here is a project in which I have implemented
            the basics of blockchain and cryptocurrency. Feel free to check out my GitHub
            respoitory for more information on the project!
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default HeroSection;
