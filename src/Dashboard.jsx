import { useState } from "react";
import { Tabs } from "./Tabs";
import { Blocks } from "./Blocks";

export const Dashboard = ({ dashboards }) => {
  const [activeTab, setActiveTab] = useState(
    localStorage.tab || dashboards?.[0]?.id || ""
  );

  const setTab = (tab) => {
    setActiveTab(tab);
    localStorage.setItem("tab", tab);
  };

  const tabs = dashboards?.map(({ id, name }) => ({ id, name }));

  const blockToRender = dashboards.find(({ id }) => id === activeTab);

  return (
    <>
      <Tabs tabs={tabs} activeTab={activeTab} setTab={setTab} />
      {dashboards?.length ? <Blocks {...blockToRender} /> : null}
    </>
  );
};

