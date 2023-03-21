echo "Installing required packages..."
sudo apt install git curl build-essential nodejs npm software-properties-common python3-pip firewalld -y
pip3 install web3

echo "Adding Ethereum repository and installing..."

git clone -b v1.10.26 https://github.com/ethereum/go-ethereum.git
cd go-ethereum
make geth
sudo cp build/bin/geth /usr/local/bin/

echo "Installing Puppeth"
cd ~/go-ethereum/cmd/puppeth
go build
sudo cp go-ethereum/cmd/puppeth/puppeth /usr/local/bin

mkdir ~/zakatchains

echo "Installation completed."
