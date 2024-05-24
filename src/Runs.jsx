import { Run } from "./Run";
import empty from "./public/empty.png";
import signal from "./public/error.png";

export const Runs = ({ runs, job, baseUrl }) =>
  runs ? (
    runs.length ? (
      <ul>
        {runs?.map((run) => (
          <Run key={run.name} run={run} baseUrl={baseUrl} job={job} />
        ))}
      </ul>
    ) : (
      <div className="empty">
        <img src={empty} alt="" />
        <p>No recent runs</p>
      </div>
    )
  ) : (
    <div className="empty">
      <img src={signal} alt="" />
      <p>404</p>
    </div>
  );

