import React, { useEffect, useState } from 'react';
import { Icon } from '@chakra-ui/icon';
import { GrTransaction } from 'react-icons/gr';
import { Container, Flex, Heading, Text, Box, Image, Button } from '@chakra-ui/react';
import { API_BASE_URL } from '../../config';

const HeroSection = () => {
  const [walletInfo, setWalletInfo] = useState('');

  useEffect(() => {
    fetch(`${API_BASE_URL}/wallet/info`)
      .then((res) => res.json())
      .then((json) => setWalletInfo(json));
  }, []);

  const { address, balance } = walletInfo;

  return (
    <Container maxW="container.xl" mb={10}>
      <Flex alignItems="center" justifyContent="space-between">
        <Box maxW="55%">
          <Heading as="h1" fontSize="5xl" mb={2}>
            👋 Welcome to PyChainCoin!
          </Heading>
          <Text as="mark" fontSize="2xl" fontFamily="rubik" fontWeight="600">
            A Starter Project to Learn More About Cryptocurrency 🏦
          </Text>
          <Text mt={2} mb={8} fontSize="1.125em">
            Hi All! I am Nicholas Cheung. Here is a project in which I have implemented
            the basics of blockchain and cryptocurrency. Feel free to check out my GitHub
            respoitory for more information on the project!
          </Text>
          <Flex alignItems="center">
            <Box>
              <Heading as="h4" fontSize="3xl" mb={2}>{`🔐 Address: ${address}`}</Heading>
              <Heading as="h4" fontSize="3xl" mb={2}>{`💰 Balance: ${balance}`}</Heading>
            </Box>
            {/* <Button
              mx={8}
              py={10}
              fontSize="2xl"
              variant="solid"
              colorScheme="teal"
              flexGrow={1}
            >
              🏦 Make a Transaction
            </Button> */}
          </Flex>
        </Box>
        <Image src="./cat-holding-coin.svg" />
      </Flex>
    </Container>
  );
};

export default HeroSection;
