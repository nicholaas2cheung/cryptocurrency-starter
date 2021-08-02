import React, { useState, useEffect, Fragment } from 'react';
import Transaction from './transaction';
import { API_BASE_URL } from '../../config';
import { Container, Heading, SimpleGrid, Box, Center, Button } from '@chakra-ui/react';

const TransactionPool = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/transactions`)
      .then((res) => res.json())
      .then((json) => setTransactions(json));
  }, []);

  const fetchMineBlock = () => {
    fetch(`${API_BASE_URL}/blockchain/mine`)
      .then(() => {
        alert('Success');
      })
      .then(() => {
        window.location.reload(false);
      });
  };

  return (
    <Container maxW="container.xl" centerContent py={8} mb={8}>
      <Heading as="h1" fontSize="6xl" mb={5}>
        🏊‍♂️ Transaction Pool
      </Heading>
      <SimpleGrid columns={3} spacing={10} minW="100%" mb={8}>
        {transactions.map((transaction) => (
          <Center
            boxShadow="outline"
            rounded="md"
            display="flex"
            flexDir="column"
            p={10}
            borderColor="gray.700"
          >
            <Transaction transaction={transaction} />
          </Center>
        ))}
      </SimpleGrid>
      <Button colorScheme="teal" size="lg" onClick={fetchMineBlock}>
        Mine a Block for Transaction
      </Button>
    </Container>
  );
};

export default TransactionPool;
