import React, { Fragment } from 'react';
import { Divider, Text, Heading } from '@chakra-ui/react';

const Transaction = (props) => {
  const { transaction } = props;
  const { input, output } = transaction;

  const recipients = Object.keys(output);

  return (
    <Fragment>
      <Heading as="h6" fontSize="md" mb={1}>
        From: {input.address}
      </Heading>
      {recipients.map((recipient) => (
        <Fragment key={recipient}>
          To: {recipient} | Sent: {output[recipient]}
          <Divider variant="dashed" my={2} />
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Transaction;
