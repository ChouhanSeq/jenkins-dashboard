import { useState } from "react";

export const Version = ({ env, versions, history }) => {
  const [expand, setExpand] = useState(false);
  return (
    <div key={env} className="version">
      <label onClick={() => setExpand((expand) => !expand)}>
        <span>{expand ? "-" : "+"}</span>
        <span className="version-name">
          <span className="env">{env}</span>
          <span className="latest-version" title={versions[env]}>
            {versions[env]}
          </span>
        </span>
      </label>
      {expand ? (
        <div className="history">
          {history[env]?.length
            ? history[env].map((item) => (
                <div key={item.date} className="history-item">
                  <span className="history-date">{item.date}</span>
                  <span className="latest-version" title={item.version}>
                    {item.version}
                  </span>
                </div>
              ))
            : null}
        </div>
      ) : null}
    </div>
  );
};

