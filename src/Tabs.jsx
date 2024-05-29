import { useEffect, useState } from "react";
import logo from "./public/logo.png";

window.versions = JSON.parse(localStorage.showVersions || "false");
window.pr = JSON.parse(localStorage.showPRs || "false");

export const Tabs = ({
  tabs,
  activeTab,
  setTab,
  showLogo,
  parentTabs,
  setParentTab,
  activeParentTab,
}) => {
  const [showVersions, setShowVersions] = useState(window.versions);
  const [showPRs, setShowPRs] = useState(window.pr);

  const handleVersionsClick = () => {
    window.versions = !window.versions;
    setShowVersions(!showVersions);
    // fire a custom event to trigger the versions tab
    const event = new CustomEvent("versions");
    document.dispatchEvent(event);
  };

  const handlePRsClick = () => {
    window.pr = !window.pr;
    setShowPRs(!showPRs);
    // fire a custom event to toggle the PRs
    const event = new CustomEvent("pr");
    document.dispatchEvent(event);
  };

  useEffect(() => {
    localStorage.setItem("showVersions", showVersions);
    localStorage.setItem("showPRs", showPRs);
  }, [showVersions, showPRs]);

  return (
    <div className="tabs-wrapper">
      <ul className="tabs">
        {parentTabs.map(({ id, name }) => (
          <li
            key={id}
            className={`tab ${activeParentTab === id ? "active" : ""}`}
            onClick={() => setParentTab(id)}
          >
            {name}
            <ul className="tabs child-tabs">
              {tabs.map(({ id, name }) => (
                <li
                  key={id}
                  className={`tab ${activeTab === id ? "active" : ""}`}
                  onClick={() => setTab(id)}
                >
                  {name}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      {showLogo ? (
        <>
          <button
            onClick={handleVersionsClick}
            className="full-height-button space-right"
          >
            {showVersions ? "Hide" : "Show"} versions
          </button>
          <button onClick={handlePRsClick} className="full-height-button">
            {showPRs ? "Hide" : "Show"} PRs
          </button>
        </>
      ) : null}
      {showLogo ? (
        <a
          href="https://github.com/pratyushseq/jenkins-dashboard"
          target="_blank"
        >
          <img src={logo} alt="Jenkins Ultra" />
        </a>
      ) : null}
    </div>
  );
};

