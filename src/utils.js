export const isProd = process.env.NODE_ENV === "production";

export const colorMap = {
  SUCCESS: "green",
  FAILED: "red",
  IN_PROGRESS: "blue",
};

export const getColor = (status) => colorMap[status] || "grey";

export const millisToHoursMinutesAndSeconds = (millis) => {
  const milliseconds = Math.abs(millis);
  const hours = Math.floor(milliseconds / 3600000);
  const minutes = Math.floor((milliseconds % 3600000) / 60000);
  const seconds = ((milliseconds % 60000) / 1000).toFixed(0);
  const time = `${hours ? `${hours}h ` : ""}${minutes ? `${minutes}m ` : ""}${
    seconds ? `${seconds}s` : ""
  }`;
  if (millis < 0) return `Paused ${time}`;
  return time;
};

export const zeroPad = (num) => (num < 10 ? `0${num}` : num);

export const formatStatus = (status) =>
  status
    .replace("IN_PROGRESS", "RUNNING")
    .replace("NOT_EXECUTED", "SKIPPED")
    .replace(/_/g, " ");



