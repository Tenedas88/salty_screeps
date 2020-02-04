#!/bin/bash

echo $PWD

serverfolder=../../servers
servername=$1

serverlocation=${serverfolder}/${servername}

cd ${serverlocation}

npx screeps start --password salt --host 192.168.1.152