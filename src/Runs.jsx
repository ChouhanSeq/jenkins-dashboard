import { Run } from "./Run";
import empty from "./public/empty.png";
import signal from "./public/signal.png";

export const Runs = ({ runs, job, baseUrl }) =>
  runs ? (
    runs.length ? (
      <ul>
        {runs?.map((run) => (
          <Run run={run} baseUrl={baseUrl} job={job} />
        ))}
      </ul>
    ) : (
      <div className="empty">
        <img src={empty} alt="" />
      </div>
    )
  ) : (
    <div className="empty">
      <img src={signal} alt="" />
    </div>
  );

