#!/bin/sh

ssh ubuntu@18.217.98.110 <<EOF
    cd ~/financial-planer
    sudo git pull origin master
    curl -o-   https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh    | bash
    . ~/.nvm/nvm.sh
    nvm install v10.11.0
    sudo ./script/localdeploy.sh
    exit
EOF

