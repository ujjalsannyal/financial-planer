#!/bin/sh

ssh ubuntu@18.217.98.110 <<EOF
    cd ~/financial-planer
    sudo git pull origin master
    sudo curl -o-   https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh    | bash
    sudo . ~/.nvm/nvm.sh
    sudo nvm install v10.11.0
    sudo npm install
    sudo npm install -g nodemon pm2
    sudo pm2 restart ecosystem.config.js
    exit
EOF

