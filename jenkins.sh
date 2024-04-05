DIR="$( cd "$( dirname "$0" )" && pwd )"
cd "${DIR}"
git clone git@github.com:pratyushseq/jenkins-dashboard.git
cd jenkins-dashboard
yarn install
yarn start
python3 -m webbrowser http://localhost:3001