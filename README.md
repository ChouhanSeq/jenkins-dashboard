# Jenkins Dashboard

### NOTE: You need to be inside the VPN for this app to work.

### Run it
Head to https://github.com/pratyushseq/jenkins-dashboard/releases and download the latest `jenkins.sh`. 
Double click on the file to run it. It will set it up and open a browser window with the dashboard.

### Set it up on local
```bash
git clone git@github.com:pratyushseq/jenkins-dashboard.git
cd jenkins-dashboard
yarn install
yarn start
```

Navigate to http://localhost:3001

### To update it
```bash
git pull origin master
yarn install
yarn restart
```

### To Customize the Dashboard
Update the `config.js` file to add your Jenkins jobs to the respective Jenkins page

To add more dashboards, just create a new block with the appropriate url, name and jobs.