import React, { useState } from 'react';
import { MILLISECONDS_PY } from '../../config';
import { Center, Flex, Heading, Button } from '@chakra-ui/react';
import Transaction from './transaction';

const ToggleTransactionDisplay = ({ block }) => {
  const [displayTransaction, setDisplayTransaction] = useState(false);
  const { data } = block;

  const toggleDisplayTransaction = () => {
    setDisplayTransaction(!displayTransaction);
  };

  if (displayTransaction) {
    return (
      <div>
        {data.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
        <Button colorScheme="teal" size="sm" onClick={toggleDisplayTransaction}>
          Show Less
        </Button>
      </div>
    );
  }

  return (
    <div>
      <Button colorScheme="teal" size="sm" onClick={toggleDisplayTransaction}>
        Show More
      </Button>
    </div>
  );
};

const Block = (props) => {
  const { block } = props;
  const { timestamp, hash, data } = block;

  const hashDisplay = `${hash.substring(0, 15)}...`;
  const timestampDisplay = new Date(timestamp / MILLISECONDS_PY).toLocaleString();

  return (
    <Center borderWidth="2px" borderRadius="lg" borderColor="gray.700" py={10}>
      <Flex flexDir="column">
        <Heading as="h4" fontSize="xl" mb={1}>
          Hash: {hashDisplay}
        </Heading>
        <Heading as="h5" fontSize="md" mb={3}>
          Timestamp: {timestampDisplay}
        </Heading>
        <ToggleTransactionDisplay block={block} />
      </Flex>
    </Center>
  );
};

export default Block;
