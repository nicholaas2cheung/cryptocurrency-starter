import React from 'react';
import { Container, Flex, Box, Heading, Center, Link } from '@chakra-ui/layout';

const NavBar = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <Heading as="h1">🌖 PyChainCoin</Heading>
        </Box>
        <Box display="flex">
          <Center pl={4}>
            <Link size="8xl">Blockchain</Link>
          </Center>
          <Center pl={4}>
            <Link size="4xl">Conduct a Transaction</Link>
          </Center>
          <Center pl={4}>
            <Link size="4xl">Transaction Pool</Link>
          </Center>
        </Box>
      </Flex>
    </Container>
  );
};

export default NavBar;
