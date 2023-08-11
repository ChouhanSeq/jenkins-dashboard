const express = require('express');
const shrinkRay = require('shrink-ray-current');
const dashboards = require('./config');

const app = express();

const finalPort =
  process.env.PORT || process.env.NODE_ENV === 'production' ? 3001 : 3000;

const getJobStatus = (job) =>
  fetch(`https://jenkins-qa.sequoia-development.com/view/${job}/wfapi/runs`)
    .then((res) => res.json())
    .then((data) =>
      data.filter(
        (item) =>
          item.name.indexOf('-PR-') === -1 && item.name.indexOf('-') !== -1,
      ),
    );

let statusCache = [];

const getDashboards = async () => {
  try {
    const dashboardResponses = await Promise.all(
      dashboards.map(({ name, jobs }) => getStatuses({ name, jobs })),
    );
    statusCache = dashboardResponses;
    getDashboards();
  } catch (_err) {
    statusCache = 'error';
    setTimeout(() => {
      getDashboards();
    }, 1000);
  }
};

const getStatuses = async ({ name, jobs }) => {
  // try {
  const statuses = await Promise.all(jobs.map(({ job }) => getJobStatus(job)));
  return {
    name,
    jobs: jobs.map(({ name, job }, index) => ({
      job,
      name: name,
      runs: statuses[index],
    })),
  };
  //   getStatuses();
  // } catch (err) {
  //   statusCache = 'error';
  //   setTimeout(() => {
  //     getStatuses();
  //   }, 1000);
  // }
};

getDashboards();

app.use(shrinkRay());

app.get('/status', async (_req, res) => {
  if (statusCache === 'error') {
    return res.status(400).send('Error');
  }
  res.send(statusCache);
});

app.get('/', (_req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.use(express.static('public'));

app.listen(finalPort, () => {
  console.log(
    `\x1b[33m\nServer running on http://localhost:${finalPort}\n\x1b[0m`,
  );
});
