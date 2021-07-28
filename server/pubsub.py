"""
Once a block is added to the blockchain, that block should be shared with
all the other miners in the network; so that they can the new block to their
local blockchain instance
"""

import time

from pubnub.pubnub import PubNub
from pubnub.pnconfiguration import PNConfiguration
from pubnub.callbacks import SubscribeCallback

from server.blockchain.block import Block

pnconfig = PNConfiguration()
pnconfig.subscribe_key = 'sub-c-a62ebcde-ed5a-11eb-b0cf-7e76ce3f98e8'
pnconfig.publish_key = 'pub-c-1cb48536-63ff-457a-b690-e21d4989dc31'

"""
To execute the pubsub, we need:
    1. publisher
    2. subscriber
    3. channel
"""

CHANNELS = {
    'TEST': 'TEST',
    'BLOCK': 'BLOCK'
}

class Listener(SubscribeCallback):
    """
    To handle the subscriber once it receives the message
    """
    def __init__(self, blockchain):
        self.blockchain = blockchain

    #newly added block is inside the message
    #need to validate it once the node recives the message
    def message(self, pubnub, message_object):
        print(f'\n-- Channel: {message_object.channel} | Message: {message_object.message}\n')

        if message_object.channel == CHANNELS['BLOCK']:
            block = Block.from_json(message_object.message)
            potential_chain = self.blockchain.chain[:]
            potential_chain.append(block)

            print(potential_chain)

            try:
                self.blockchain.replace_chain(potential_chain)
                print('\n --Successfully replaced chain')
            except Exception as e:
                print(f'\n -- Did not replace chain: {e}')


class PubSub():
    """
    Handles the publish/subscribe layer of the application.
    Provides communication between the nodes of the blockchain network
    """
    def __init__(self, blockchain):
        self.pubnub = PubNub(pnconfig)
        self.pubnub.subscribe().channels(CHANNELS.values()).execute()
        self.pubnub.add_listener(Listener(blockchain))

    def publish(self, channel, message):
        """
        Publish the message object to the channel.
        """
        self.pubnub.publish().channel(channel).message(message).sync()

    def broadcast_block(self, block):
        """
        Broadcast a block object to all nodes.
        """
        self.publish(CHANNELS['BLOCK'], block.to_json())

def main():
    pubsub = PubSub()
    time.sleep(1)
    pubsub.publish(CHANNELS['TEST'], {'foo': 'bar'})

if __name__ =='__main__':
    main()
