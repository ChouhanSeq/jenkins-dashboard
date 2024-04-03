import { useEffect, useState } from "react";

import { Dashboard } from "./Dashboard";

import { isProd } from "./utils";
import evil from "./public/evil.svg";

import "./App.css";

const App = () => {
  const [dashboards, setDashboards] = useState();

  const fetchDashboards = () => {
    const url = isProd ? "/status" : "http://localhost:3003/status";
    fetch(url)
      .then((res) => res.json())
      .then(setDashboards)
      .catch((_e) => null);
  };

  useEffect(() => {
    fetchDashboards();

    const interval = setInterval(() => {
      fetchDashboards();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (dashboards) {
    return <Dashboard dashboards={dashboards} />;
  }

  return (
    <div class="disclaimer red">
      <img src={evil} />
      <span>Logged OUT</span>
    </div>
  );
};

export default App;

