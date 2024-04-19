import { Version } from "./Version";

export const Versions = ({ versions, history }) => {
  const envs = Object.keys(versions).filter((key) => versions[key] !== "?");

  if (!envs.length) {
    return null;
  }

  return (
    <div className="versions">
      {envs?.map((env) => (
        <Version key={env} env={env} versions={versions} history={history} />
      ))}
    </div>
  );
};

