import { Stage } from './Stage';

export const Stages = ({ status, stages }) => {
  if (status !== "IN_PROGRESS") return null;

  return (
    <div className="progress">
      {stages.map((stage) => (
        <Stage key={stage.name} stage={stage} />
      ))}
    </div>
  );
};


