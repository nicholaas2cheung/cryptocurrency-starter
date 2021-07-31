import uuid

from server.config import STARTING_BALANCE
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives.asymmetric import ec

class Wallet:
    """
    An individual waller for a miner.
    Keeps track of the miner's balance.
    Allows a miner to authorize transactions.
    """
    def __init__(self):
        self.address = str(uuid.uuid4())[0:8]
        self.balance = STARTING_BALANCE
        self.private_key = ec.generate_private_key(
            ec.SECP256K1(),
            default_backend()
        )
        #the returned self.private_key has a public_key method which
        #can return the associated public key in the key pair the private key belongs to
        self.public_key = self.private_key.public_key()

def main():
    wallet = Wallet()
    print(f'wallet.__dict__:{wallet.__dict__}')

if __name__ == '__main__':
    main()
