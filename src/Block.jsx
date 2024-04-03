import { Runs } from "./Runs";

export const Block = ({ name, job, runs, baseUrl }) => {
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
      </p>
      <Runs runs={runs} baseUrl={baseUrl} job={job} />
    </div>
  );
};





