import {
  formatStatus,
  getColor,
  millisToHoursMinutesAndSeconds,
  zeroPad,
} from "./utils";

export const Stage = ({ stage }) => {
  const startTime = new Date(stage.startTimeMillis);
  const formattedStartTime = `${zeroPad(startTime.getHours())}:${zeroPad(
    startTime.getMinutes()
  )}:${zeroPad(startTime.getSeconds())}`;
  const { value, title } = formatStatus(stage.status);
  return (
    <span className={`stage ${getColor(stage.status)}`}>
      <span className="stage-name">
        <span className="status" title={title}>
          {value}
        </span>
        <span className="status big">{formattedStartTime}</span>
        {stage.name}
      </span>
      <span className="time">
        {millisToHoursMinutesAndSeconds(stage.durationMillis)}
      </span>
    </span>
  );
};

