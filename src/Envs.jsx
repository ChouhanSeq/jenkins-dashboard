import { useState } from "react";
import { Dashboard } from "./Dashboard";

export const Envs = ({ envs }) => {
  const [activeTab, setActiveTab] = useState(
    localStorage.env || envs?.[0]?.id || ""
  );

  const setTab = (tab) => {
    setActiveTab(tab);
    localStorage.setItem("env", tab);
  };

  const tabs = envs.map(({ id, name }) => ({ id, name }));

  const blockToRender = envs.find(({ id }) => id === activeTab);

  return (
    <>
      {envs?.length ? (
        <Dashboard
          dashboards={blockToRender.dashboards}
          parentTabs={tabs}
          setParentTab={setTab}
          activeParentTab={activeTab}
        />
      ) : null}
    </>
  );
};

