import { useState } from "react";
import { Tabs } from "./Tabs";
import { Blocks } from "./Blocks";

export const Dashboard = ({ dashboards }) => {
  const [activeTab, setActiveTab] = useState(
    localStorage.tab || dashboards?.[0]?.name || ""
  );

  const setTab = (tab) => {
    setActiveTab(tab);
    localStorage.setItem("tab", tab);
  };

  const blockToRender = dashboards.find(({ name }) => name === activeTab);

  return (
    <>
      <Tabs dashboards={dashboards} activeTab={activeTab} setTab={setTab} />
      {dashboards?.length ? <Blocks {...blockToRender} /> : null}
    </>
  );
};

