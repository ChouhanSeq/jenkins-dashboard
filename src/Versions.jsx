import { Version } from "./Version";

export const Versions = ({ versions, history }) => {
  const envs = Object.keys(versions).filter((key) => versions[key] !== "?");

  return (
    <div className="versions">
      {envs.map((env) => (
        <Version key={env} env={env} versions={versions} history={history} />
      ))}
    </div>
  );
};

