import { useState } from "react";
import { Runs } from "./Runs";
import { Versions } from "./Versions";

export const Block = ({ name, job, runs, baseUrl, env, envHistory }) => {
  const [showVersions, setShowVersions] = useState(false);
  return (
    <div class="block">
      <h2>
        <a target="_blank" href={`${baseUrl}/job/${job}`}>
          {name}
        </a>
        <a target="_blank" class="build" href={`${baseUrl}/job/${job}/build`}>
          <button>New Build</button>
        </a>
      </h2>
      <p class="job-name">
        <a target="_blank" href={`${baseUrl}/job/${job}`}>
          <b>Job :</b> {job}
        </a>
        <button
          className="version-trigger"
          onClick={() => setShowVersions((showVersions) => !showVersions)}
        >
          {showVersions ? "-" : "+"} Versions
        </button>
      </p>
      {showVersions ? <Versions versions={env} history={envHistory} /> : null}
      <Runs runs={runs} baseUrl={baseUrl} job={job} />
    </div>
  );
};

