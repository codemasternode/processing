#!/bin/bash

if [ -z "$1" || -z "$2" || -z "$3" || -z "$4" || -z "$5" ]
  then
    echo "Shell script require arguments: [hostname] [port] [username] [password] [database]"
fi

sudo apt-get install postgresql-client

