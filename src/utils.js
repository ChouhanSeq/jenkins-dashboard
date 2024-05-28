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

export const statusMap = {
  SUCCESS: "✅",
  FAILED: "🛑",
  IN_PROGRESS: "🕒",
  ABORTED: "🔪",
  NOT_EXECUTED: "💤",
};

export const formatStatus = (status) => ({
  value: statusMap[status] || "❓",
  title: status?.replace(/_/g, " "),
});

export const statuses = Object.entries(statusMap).map(([key, value]) => ({
  emoji: value,
  label: key.replace(/_/g, " "),
}));

