import { useState } from "react";
import { Tabs } from "./Tabs";
import { Blocks } from "./Blocks";

export const Dashboard = ({
  dashboards,
  parentTabs,
  setParentTab,
  activeParentTab,
}) => {
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
    <div className="dashboard">
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        setTab={setTab}
        parentTabs={parentTabs}
        setParentTab={setParentTab}
        activeParentTab={activeParentTab}
        showLogo
      />
      {dashboards?.length ? <Blocks {...blockToRender} /> : null}
    </div>
  );
};







