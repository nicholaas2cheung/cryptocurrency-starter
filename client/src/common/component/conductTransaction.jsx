import React, { useState, useRef } from 'react';
import {
  Button,
  FormControl,
  Input,
  Container,
  Heading,
  FormLabel,
  FormHelperText,
  Box,
} from '@chakra-ui/react';
import { API_BASE_URL } from '../../config';

const ConductTransaction = () => {
  const [amount, setAmount] = useState(0);
  const [recipient, setRecipient] = useState('');

  const handleRecipientChange = (evt) => {
    setRecipient(evt.target.value);
  };

  const handleAmountChange = (evt) => {
    setAmount(Number(evt.target.value));
  };

  const submitTransaction = () => {
    fetch(`${API_BASE_URL}/wallet/transact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ recipient, amount }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log('submit Transaction json', json);
        alert('Success!');
      })
      .then(() => {
        window.location.reload(false);
      });
  };

  return (
    <Container maxW="container.lg" mb={10} centerContent>
      <Heading as="h1" fontSize="5xl" mb={5}>
        🏧 Conduct a Transaction
      </Heading>
      <Box minW="60%" display="flex" flexDir="column" alignItems="center">
        <FormControl mb={3}>
          <FormLabel>Recipient</FormLabel>
          <Input value={recipient} onChange={handleRecipientChange} type="string" />
          <FormHelperText>Enter the Address of the Recipient</FormHelperText>
        </FormControl>
        <FormControl mb={5}>
          <FormLabel>Transaction Amount</FormLabel>
          <Input value={amount} onChange={handleAmountChange} type="number" />
          <FormHelperText>Enter the Amount of the Transaction</FormHelperText>
        </FormControl>
        <Button size="lg" as="submit" onClick={submitTransaction} colorScheme="teal">
          🪙 Submit Transaction
        </Button>
      </Box>
    </Container>
  );
};

export default ConductTransaction;
