import time
from pubnub.pubnub import PubNub
from pubnub.pnconfiguration import PNConfiguration
from pubnub.callbacks import SubscribeCallback

pnconfig = PNConfiguration()
pnconfig.subscribe_key = 'sub-c-a62ebcde-ed5a-11eb-b0cf-7e76ce3f98e8'
pnconfig.publish_key = 'pub-c-1cb48536-63ff-457a-b690-e21d4989dc31'
pubnub = PubNub(pnconfig)

TEST_CHANNEL = 'TEST_CHANNEL'

pubnub.subscribe().channels([TEST_CHANNEL]).execute()

class Listener(SubscribeCallback):
    def message(self, pubnub, message_object):
        print(f'\n-- Incoming message_object: {message_object}')

pubnub.add_listener(Listener())

def main():
    time.sleep(1)
    pubnub.publish().channel(TEST_CHANNEL).message({'foo': 'bar'}).sync()

if __name__ =='__main__':
    main()
