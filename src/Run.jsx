import { Stages } from "./Stages";
import {
  formatStatus,
  getColor,
  millisToHoursMinutesAndSeconds,
  zeroPad,
} from "./utils";

export const Run = ({ run, baseUrl, job }) => {
  const status = run.status;
  const color = getColor(status);
  const isAborted = run.status === "ABORTED";
  const startTime = new Date(run.startTimeMillis);
  const formattedStartTime = `${zeroPad(startTime.getDate())}/${zeroPad(
    startTime.getMonth() + 1
  )} ${zeroPad(startTime.getHours())}:${zeroPad(startTime.getMinutes())}`;

  return (
    <li className={`item ${color} ${isAborted ? "aborted" : ""}`}>
      <a
        target="_blank"
        href={`${baseUrl}/job/${job}/${run.id}/console`}
        className="flow"
      >
        <span className="name" title={run.name}>
          <span className="status big">{formattedStartTime}</span>
          {run.name}
        </span>
        <span className="status">{formatStatus(run.status)}</span>
      </a>
      <span className="time">
        {millisToHoursMinutesAndSeconds(run.durationMillis)}
      </span>
      <Stages stages={run.stages} status={run.status} />
    </li>
  );
};

