from server.util.crypto_hash import crypto_hash

def test_crypto_hash():
    # return the same hash with hash with arguments of different data types
    # in any order
    assert crypto_hash(5, 'six', [7]) == crypto_hash([7], 5, 'six')
    assert crypto_hash('foo') == 'b2213295d564916f89a6a42455567c87c3f480fcd7a1c15e220f17d7169a790b'
