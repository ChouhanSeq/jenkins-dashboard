const app = document.getElementById("app");

const colorMap = {
  SUCCESS: "green",
  FAILED: "red",
  IN_PROGRESS: "blue",
  UNSTABLE: "grey",
  NOT_EXECUTED: "grey",
};

const millisToMinutesAndSeconds = (millis) => {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

const renderStages = (status, stages) => {
  if (status !== "IN_PROGRESS") return "";
  return `
    <div class="progress">
      ${stages
        .map((stage) => {
          return `<span class="stage" style="color: ${
            colorMap[stage.status]
          }">${stage.name} [${stage.status.replace(
            /_/g,
            " "
          )}] <span class="time">${millisToMinutesAndSeconds(
            stage.durationMillis
          )}</span></span>`;
        })
        .join("")}
    </div>
    `;
};

const renderBlock = ({ job, name, runs }) => {
  const items = runs.map((run) => {
    const status = run.status;
    const color = colorMap[status];
    return `<li style="color: ${color}"><a target="_blank" href="https://jenkins-qa.sequoia-development.com/view/${job}/${
      run.id
    }/console">${run.name}</a> <span class="time">${millisToMinutesAndSeconds(
      run.durationMillis
    )}</span>
    ${renderStages(run.status, run.stages)}
    </li>`;
  });
  return `
    <div class="block">
      <h2>
        <a target="_blank" href="${`https://jenkins-qa.sequoia-development.com/view/${job}`}">${name}</a>
        <a target="_blank" class="build" href="https://jenkins-qa.sequoia-development.com/view/${job}/build">New Build</a>
      </h2>
      <ul>${items.join("")}</ul>
    </div>
  `;
};

const render = (jobs) => {
  const blocks = jobs.map(renderBlock);
  app.innerHTML = blocks.join("");
  getData();
};

const getData = () => {
  fetch("/status")
    .then((res) => res.json())
    .then(render)
    .catch(console.error);
};

getData();

