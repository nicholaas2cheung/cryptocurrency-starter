import React, { useState, useEffect } from 'react';
import { Container, SimpleGrid, Heading, Button, Box, Center } from '@chakra-ui/react';
import Block from './block';
import { API_BASE_URL } from '../../config';

const PAGE_RANGE = 6;

const Blockchain = () => {
  const [blockchain, setBlockchain] = useState([]);
  const [blockchainLength, setBlockchainLength] = useState(0);

  const fetchBlockchainPage = ({ start, end }) => {
    fetch(`${API_BASE_URL}/blockchain/range?start=${start}&end=${end}`)
      .then((res) => res.json())
      .then((json) => setBlockchain(json));
  };

  useEffect(() => {
    fetchBlockchainPage({ start: 0, end: PAGE_RANGE });

    fetch(`${API_BASE_URL}/blockchain/length`)
      .then((res) => res.json())
      .then((json) => setBlockchainLength(json));
  }, []);

  const getPaginationButton = () => {
    const paginationButtonNumber = [];
    for (let i = 0; i < blockchainLength / PAGE_RANGE; i++) {
      paginationButtonNumber.push(i);
    }
    return paginationButtonNumber;
  };

  return (
    <Container maxW="container.xl" py={8} mb={12} centerContent>
      <Heading as="h1" fontSize="6xl" mb={5}>
        💫 Blockchain
      </Heading>
      <SimpleGrid columns={3} spacing={10} minW="100%">
        {blockchain.map((block, i) => (
          <Block key={block.hash} block={block} />
        ))}
      </SimpleGrid>
      <Box>
        {getPaginationButton().map((button) => {
          const start = button * PAGE_RANGE;
          const end = (button + 1) * PAGE_RANGE;

          return (
            <Button
              my={4}
              mx={2}
              colorScheme="teal"
              key={button}
              onClick={() => fetchBlockchainPage({ start, end })}
              size="sm"
            >
              {button + 1}
            </Button>
          );
        })}
      </Box>
    </Container>
  );
};

export default Blockchain;
