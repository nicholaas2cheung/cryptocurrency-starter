import os
import random

from flask import Flask, jsonify

from server.blockchain.blockchain import Blockchain
from server.pubsub import PubSub

app = Flask(__name__)
blockchain = Blockchain()
pubsub = PubSub()

for i in range(3):
    blockchain.add_block(i)

@app.route('/')
def route_default():
    return 'Welcome to the blockchain'

@app.route('/blockchain')
def route_blockchain():
    return jsonify(blockchain.to_json())

@app.route('/blockchain/mine')
def route_blockchain_mine():
    transaction_data = 'stubbed_transaction_data'
    blockchain.add_block(transaction_data)

    #the newly added block should be the last block inside the blockchain
    return jsonify(blockchain.chain[-1].to_json())

PORT = 5000

if os.environ.get('PEER') == 'True':
    PORT = random.randint(5001, 6000)

app.run(port=PORT)
