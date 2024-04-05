#!/bin/bash  
BLUE='\033[0;34m'
RED='\033[0;31m'

cd ~

if ! command -v node &> /dev/null
then
    echo "🛑 ${RED}Node.js is not installed. Please install Node.js and try again."
    exit 1
fi

echo "🚀 ${BLUE}Installing Yarn\n"
npm i -g yarn

echo "🚀 ${BLUE}Removing old folder\n"
rm -rf jenkins-dashboard || true

echo "🚀 ${BLUE}Cloning Jenkins Dashbaord\n"
git clone git@github.com:pratyushseq/jenkins-dashboard.git
cd jenkins-dashboard

echo "\n🚀 ${BLUE}Installing Dependencies\n"
yarn install

echo "\n🚀 ${BLUE}Building\n"
yarn start

echo "\n🚀 ${BLUE}Opening Dasbboard\n"
python3 -m webbrowser http://localhost:3001