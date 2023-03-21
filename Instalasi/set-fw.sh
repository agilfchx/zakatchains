#!/bin/bash

firewall-cmd --zone=public  --add-port=30304/tcp --add-port=30304/udp --add-port=30303/tcp --add-port=30303/udp --add-port=30301/tcp --add-port=30301/udp --add-port=8545/tcp --permanent

firewall-cmd --reload

echo "Complete!"
