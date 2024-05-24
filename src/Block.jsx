import { useEffect, useState } from "react";
import { Runs } from "./Runs";
import { Versions } from "./Versions";

export const Block = ({ name, job, runs, baseUrl, env, envHistory }) => {
  const [showVersions, setShowVersions] = useState(window.versions);

  useEffect(() => {
    const handler = () => {
      setShowVersions(window.versions);
    };
    document.addEventListener("versions", handler);
    return () => document.removeEventListener("versions", handler);
  }, []);

  return (
    <div className="block">
      <h2>
        <a target="_blank" href={`${baseUrl}/job/${job}`}>
          {name}
        </a>
        <a
          target="_blank"
          className="build"
          href={`${baseUrl}/job/${job}/build`}
        >
          <button>New Build</button>
        </a>
      </h2>
      <p className="job-name">
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


