"""
Once a block is added to the blockchain, that block should be shared with
all the other miners in the network; so that they can the new block to their
local blockchain instance
"""

import time
from pubnub.pubnub import PubNub
from pubnub.pnconfiguration import PNConfiguration
from pubnub.callbacks import SubscribeCallback

pnconfig = PNConfiguration()
pnconfig.subscribe_key = 'sub-c-a62ebcde-ed5a-11eb-b0cf-7e76ce3f98e8'
pnconfig.publish_key = 'pub-c-1cb48536-63ff-457a-b690-e21d4989dc31'

"""
To execute the pubsub, we need:
    1. publisher
    2. subscriber
    3. channel
"""

TEST_CHANNEL = 'TEST_CHANNEL'

class Listener(SubscribeCallback):
    """
    To handle the subscriber once it receives the message
    """
    def message(self, pubnub, message_object):
        print(f'\n-- Channel: {message_object.channel} | Message: {message_object.message}')

class PubSub():
    """
    Handles the publish/subscribe layer of the application.
    Provides communication between the nodes of the blockchain network
    """
    def __init__(self):
        self.pubnub = PubNub(pnconfig)
        self.pubnub.subscribe().channels([TEST_CHANNEL]).execute()
        self.pubnub.add_listener(Listener())

    def publish(self, channel, message):
        """
        Publish the message object to the channel.
        """
        self.pubnub.publish().channel(channel).message(message).sync()

def main():
    pubsub = PubSub()
    time.sleep(1)
    pubsub.publish(TEST_CHANNEL, {'foo': 'bar'})

if __name__ =='__main__':
    main()
