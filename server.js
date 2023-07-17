const express = require("express");
const shrinkRay = require("shrink-ray-current");
const app = express();
const port = 3000;

const jobs = [
  { name: "Adminshell", job: "kernel/job/pp-kernel-adminshell-frontend" },
  {
    name: "HRX",
    job: "SP-benefits-wellbeing/job/pp-sp-benefits-admincore-frontend",
  },
  {
    name: "PX",
    job: "SP-benefits-wellbeing/job/pp-sp-benefits-px-frontend",
  },
  {
    name: "Kernel",
    job: "kernel/job/pp-kernel-frontend",
  },
  {
    name: "UWP",
    job: "S1-S1/job/pp-po-s1-frontend",
  },
  {
    name: "Wellbeing",
    job: "SP-benefits-wellbeing/job/pp-sp-wellbeing-frontend",
  },
  {
    name: "TR",
    job: "TR-totalrewards/job/pp-ptr-totalrewards-frontend",
  },
];

const getJobStatus = (job) =>
  fetch(`https://jenkins-qa.sequoia-development.com/view/${job}/wfapi/runs`)
    .then((res) => res.json())
    .then((data) =>
      data.filter(
        (item) =>
          item.name.indexOf("-PR-") === -1 && item.name.indexOf("-") !== -1
      )
    );

let statusCache = [];

const getStatuses = async () => {
  const statuses = await Promise.all(jobs.map(({ job }) => getJobStatus(job)));
  statusCache = jobs.map(({ name, job }, index) => ({
    job,
    name: name,
    runs: statuses[index],
  }));
  getStatuses();
};

getStatuses();

app.use(shrinkRay());

app.get("/status", async (_req, res) => {
  res.send(statusCache);
});

app.get("/", (_req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use(express.static("public"));

app.listen(port, () => {
  console.clear();
  console.log(`Jenkins Dashboard Running. Open http://localhost:${port}`);
});


