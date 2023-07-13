const express = require("express");
const app = express();
const port = 3000;

const jobs = [
  { name: "adminshell", job: "kernel/job/pp-kernel-adminshell-frontend" },
  {
    name: "hrx",
    job: "SP-benefits-wellbeing/job/pp-sp-benefits-admincore-frontend",
  },
  {
    name: "px",
    job: "SP-benefits-wellbeing/job/pp-sp-benefits-px-frontend",
  },
  {
    name: "kernel",
    job: "kernel/job/pp-kernel-frontend",
  },
  {
    name: "uwp",
    job: "S1-S1/job/pp-po-s1-frontend",
  },
  {
    name: "wellbeing",
    job: "SP-benefits-wellbeing/job/pp-sp-wellbeing-frontend",
  },
  {
    name: "tr",
    job: "TR-totalrewards/job/pp-ptr-totalrewards-frontend",
  },
];

const getJobStatus = (job) =>
  fetch(`https://jenkins-qa.sequoia-development.com/view/${job}/wfapi/runs`)
    .then((res) => res.json())
    .then((data) => data.filter((item) => item.name.indexOf("-PR-") === -1));

app.get("/status", async (_req, res) => {
  const statuses = await Promise.all(jobs.map(({ job }) => getJobStatus(job)));
  res.send(
    jobs.map(({ name, job }, index) => ({
      job,
      name: name,
      runs: statuses[index],
    }))
  );
});

app.get("/", (_req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use(express.static("public"));

app.listen(port, () => {
  console.clear();
  console.log(`Example app listening on port ${port}`);
});

