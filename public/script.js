const app = document.getElementById("app");

const baseUrl = "https://jenkins-qa.sequoia-development.com/view";

const colorMap = {
  SUCCESS: "green",
  FAILED: "red",
  IN_PROGRESS: "blue",
};

const getColor = (status) => colorMap[status] || "grey";

const millisToMinutesAndSeconds = (millis) => {
  const milliseconds = Math.abs(millis);
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = ((milliseconds % 60000) / 1000).toFixed(0);
  if (millis < 0) return `Paused ${minutes ? `${minutes}m ` : ""}${seconds}s`;
  return `${minutes ? `${minutes}m ` : ""}${seconds}s`;
};

const formatStatus = (status) => status.replace(/_/g, " ");

const renderStages = (status, stages) => {
  if (status !== "IN_PROGRESS") return "";
  return `
    <div class="progress">
      ${stages
        .map((stage) => {
          return `
            <span class="stage ${getColor(stage.status)}">
              <span>${stage.name}</span>
              <span class="status">
                ${formatStatus(stage.status)}
              </span>
              <span class="time">
                ${millisToMinutesAndSeconds(stage.durationMillis)}
              </span>
            </span>
          `;
        })
        .join("")}
    </div>
    `;
};

const renderBlock = ({ job, name, runs }) => {
  const items = runs
    .map((run) => {
      const status = run.status;
      const color = getColor(status);
      const isAborted = run.status === "ABORTED";
      return `
      <li class="${color} ${isAborted ? "aborted" : ""}" >
        <a target="_blank" href="${baseUrl}/${job}/${run.id}/console" >
          <span>${run.name}</span>
          <span class="status">
            ${formatStatus(run.status)}
          </span>
        </a>
        <span class="time">
          ${millisToMinutesAndSeconds(run.durationMillis)}
        </span>
        ${renderStages(run.status, run.stages)}
      </li>
    `;
    })
    .join("");

  return `
    <div class="block">
      <h2>
        <a target="_blank" href="${`${baseUrl}/${job}`}">${name}</a>
        <a target="_blank" class="build" href="${baseUrl}/${job}/build">
          <button>New Build</button>
        </a>
      </h2>
      ${
        runs?.length
          ? `<ul>${items}</ul>`
          : '<div class="empty">No Recent Deployments</div>'
      }
    </div>
  `;
};

const render = (jobs) => {
  if (jobs.length === 0) {
    return (app.innerHTML = `
      <div class="disclaimer">
        Loading
      </div>
    `);
  }

  const blocks = jobs.map(renderBlock);
  app.innerHTML = blocks.join("");
};

const getData = () => {
  fetch("/status")
    .then((res) => res.json())
    .then(render)
    .catch((_err) => {
      app.innerHTML = `
        <div class="disclaimer red">
          Logged Out
        </div>`;
    });
};

setInterval(() => {
  getData();
}, 1000);

