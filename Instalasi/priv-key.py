from web3.auto import w3
import binascii

with open('/home/USER_NAME/zakatchains/data/keystore/FILE_NAME') as keyfile:
	encrypted_key = keyfile.read()
	private_key = w3.eth.account.decrypt(encrypted_key, 'password')
	#print(private_key)

print("Private Key: ")
print(binascii.b2a_hex(private_key))
