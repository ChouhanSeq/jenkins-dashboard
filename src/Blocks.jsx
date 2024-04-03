import { Block } from "./Block";

export const Blocks = ({ jobs, baseUrl }) => {
  return (
    <div className="blocks">
      {jobs?.map((job) => (
        <Block key={job.job} baseUrl={baseUrl} {...job} />
      ))}
    </div>
  );
};


