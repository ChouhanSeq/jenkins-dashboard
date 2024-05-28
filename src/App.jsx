import { useEffect, useState } from "react";

import { Envs } from "./Envs";

import { isProd, statuses } from "./utils";
import evil from "./public/evil.svg";

import "./App.css";

const App = () => {
  const [envs, setEnvs] = useState();

  const fetchData = () => {
    const url = isProd ? "/status" : "http://localhost:3003/status";
    fetch(url)
      .then((res) => res.json())
      .then(setEnvs)
      .catch((_e) => null);
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (envs) {
    return (
      <>
        <div className="blocks-wrapper">
          <Envs envs={envs} />
        </div>
        <footer>
          {statuses.map((status) => (
            <span key={status.label}>
              {status.emoji} {status.label}
            </span>
          ))}
        </footer>
      </>
    );
  }

  return (
    <div className="disclaimer red">
      <img src={evil} />
      <span>Logged OUT</span>
    </div>
  );
};

export default App;

