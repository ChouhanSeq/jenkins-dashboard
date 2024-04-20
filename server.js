const express = require("express");
const cors = require("cors");
const dashboards = require("./config");
const compression = require("compression");

const app = express();

const isProd = process.env.NODE_ENV === "production";

const finalPort = process.env.PORT || isProd ? 3001 : 3003;

const envInfo =
  "https://jenkins-qa.sequoia-development.com/userContent/environment-info.json";

let envInfoCache = {};

const getEnvInfo = async () => {
  try {
    const res = await fetch(envInfo);
    envInfoCache = await res.json();
    setTimeout(getEnvInfo, 5000);
  } catch (_err) {
    return "error";
  }
};

const getJobStatus = (job, baseUrl) =>
  fetch(`${baseUrl}/job/${job}/wfapi/runs`)
    .then((res) => res.json())
    .then((data) => data.filter((item) => !item.name.includes("-PR-")));

let statusCache = [];

const getDashboards = async () => {
  try {
    const dashboardResponses = await Promise.allSettled(
      dashboards.map(({ name, jobs, baseUrl }) =>
        getStatuses({ name, jobs, baseUrl })
      )
    );
    statusCache = dashboardResponses.map(({ value }) => value);
    getDashboards();
  } catch (_err) {
    statusCache = "error";
    setTimeout(() => {
      getDashboards();
    }, 1000);
  }
};

const getStatuses = async ({ name, jobs, baseUrl }) => {
  const statuses = await Promise.allSettled(
    jobs.map(({ job }) => getJobStatus(job, baseUrl))
  );
  return {
    name,
    baseUrl,
    jobs: jobs.map(({ name, job, env }, index) => ({
      job,
      name: name,
      runs: statuses[index].value,
      env: envInfoCache?.versions?.[env],
      envHistory: envInfoCache?.version_history?.[env],
    })),
  };
};

getDashboards();
getEnvInfo();

if (!isProd) {
  app.use(cors());
}

app.get("/status", async (_req, res) => {
  if (statusCache === "error") {
    return res.status(400).send("Error");
  }
  res.send(statusCache);
});

app.get("/env", async (_req, res) => {
  return res.send(envInfoCache);
});

if (isProd) {
  app.use(compression());

  app.get("/", (_req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
  });

  app.use(express.static("dist"));
}

app.listen(finalPort, () => {
  console.log(
    `\x1b[33m\nServer running on http://localhost:${finalPort}\n\x1b[0m`
  );
});

