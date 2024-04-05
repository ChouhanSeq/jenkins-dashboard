cd ~

echo "🚀 Installing Yarn\n"
npm i -g yarn

echo "🚀 Removing old folder\n"
rm -rf jenkins-dashboard || true

echo "🚀 Cloning Jenkins Dashbaord\n"
git clone git@github.com:pratyushseq/jenkins-dashboard.git
cd jenkins-dashboard

echo "\n🚀 Installing Dependencies\n"
yarn install

echo "\n🚀 Building\n"
yarn start

echo "\n🚀 Opening Dasbboard\n"
python3 -m webbrowser http://localhost:3001