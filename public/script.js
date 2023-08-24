const app = document.getElementById('app');

const baseUrl = 'https://jenkins-qa.sequoia-development.com/job';

const colorMap = {
  SUCCESS: 'green',
  FAILED: 'red',
  IN_PROGRESS: 'blue',
};

const getColor = (status) => colorMap[status] || 'grey';

const millisToHoursMinutesAndSeconds = (millis) => {
  const milliseconds = Math.abs(millis);
  const hours = Math.floor(milliseconds / 3600000);
  const minutes = Math.floor((milliseconds % 3600000) / 60000);
  const seconds = ((milliseconds % 60000) / 1000).toFixed(0);
  const time = `${hours ? `${hours}h ` : ''}${minutes ? `${minutes}m ` : ''}${
    seconds ? `${seconds}s` : ''
  }`;
  if (millis < 0) return `Paused ${time}`;
  return time;
};

const formatStatus = (status) => status.replace(/_/g, ' ');

let activeTab = localStorage.tab || '';

const renderStages = (status, stages) => {
  if (status !== 'IN_PROGRESS') return '';
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
                ${millisToHoursMinutesAndSeconds(stage.durationMillis)}
              </span>
            </span>
          `;
        })
        .join('')}
    </div>
    `;
};

const renderBlock = ({ job, name, runs }) => {
  const items = runs
    ?.map((run) => {
      const status = run.status;
      const color = getColor(status);
      const isAborted = run.status === 'ABORTED';
      return `
      <li class="${color} ${isAborted ? 'aborted' : ''}" >
        <a target="_blank" href="${baseUrl}/${job}/${run.id}/console" >
          <span>${run.name}</span>
          <span class="status">
            ${formatStatus(run.status)}
          </span>
        </a>
        <span class="time">
          ${millisToHoursMinutesAndSeconds(run.durationMillis)}
        </span>
        ${renderStages(run.status, run.stages)}
      </li>
    `;
    })
    .join('');

  return `
    <div class="block">
      <h2>
        <a target="_blank" href="${`${baseUrl}/${job}`}">
          ${name}
        </a>
        <a target="_blank" class="build" href="${baseUrl}/${job}/build">
          <button>New Build</button>
        </a>
      </h2>
      <p class="job-name">
        <a target="_blank" href="${`${baseUrl}/${job}`}">
          <b>Job :</b> ${job}
        </a>
      </p>
      ${
        runs
          ? runs.length
            ? `<ul>${items}</ul>`
            : '<div class="empty">No Recent Deployments</div>'
          : '<div class="empty">Some other Error</div>'
      }
    </div>
  `;
};

const render = (dashboards) => {
  if (dashboards.length === 0) {
    app.innerHTML = `
      <div class="disclaimer">
        Loading
      </div>
    `;
    return;
  }

  activeTab = activeTab ? activeTab : dashboards[0].name;
  const tabs = `
    <ul class="tabs">
      <img src="/${true ? 'logo.png' : 'logo_evil.svg'}" alt />
      ${dashboards
        .map(
          ({ name }) =>
            `<li class="tab ${
              activeTab === name ? 'active' : ''
            }"> ${name} </li>`,
        )
        .join('')}
    </ul>
  `;
  const appContent = dashboards
    .map(({ name, jobs }) => {
      const blocks = jobs.map(renderBlock);
      return `
        <div class="blocks ${
          activeTab === name ? 'active' : ''
        }" data-tab="${name}" >${blocks.join('')}</div>
      `;
    })
    .join('');
  app.innerHTML = tabs + appContent;
};

const getData = () => {
  fetch('/status')
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

getData();

const activateTab = (tab) => {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach((t) => t.classList.remove('active'));
  tab.classList.add('active');
};

const activateBlock = (tab) => {
  const block = document.querySelector(`.blocks[data-tab="${tab}"]`);
  const blocks = document.querySelectorAll('.blocks');
  blocks.forEach((b) => b.classList.remove('active'));
  block.classList.add('active');
};

document.addEventListener('click', (e) => {
  const tab = e.target.closest('.tab');
  if (tab) {
    const tabName = tab.innerText;
    localStorage.setItem('tab', tabName);
    activeTab = tabName;
    activateTab(tab);
    activateBlock(tabName);
  }
});
