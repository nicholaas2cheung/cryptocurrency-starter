import time

from server.blockchain.blockchain import Blockchain
from server.config import SECONDS

blockchain = Blockchain()

times = []

for i in range(1000):
    start_time = time.time_ns()
    #add_block function takes time to execute; which makes a time difference
    blockchain.add_block(i)
    end_time = time.time_ns()

    time_to_mine = (end_time - start_time) / SECONDS
    times.append(time_to_mine)

    #len is the length
    average_time = sum(times) / len(times)

    print(f'New block difficulty: {blockchain.chain[-1].difficulty}')
    print(f'Time to mine new block: {time_to_mine}s')
    print(f'Average time to add blocks: {average_time}s\n')



"""
Testing the number of time needed for adding 1000 blocks
init blockchain

Blockchain()

for loop:
    Blockchain.add_block('argument is the data'); we can use dummy data for testing

"""
