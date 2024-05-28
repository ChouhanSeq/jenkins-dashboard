import logo from "./public/logo.png";

window.versions = false;

export const Tabs = ({
  tabs,
  activeTab,
  setTab,
  showLogo,
  parentTabs,
  setParentTab,
  activeParentTab,
}) => {
  const handleVersionsClick = () => {
    // fire a custom event to trigger the versions tab
    window.versions = !window.versions;
    const event = new CustomEvent("versions");
    document.dispatchEvent(event);
  };

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
        <button onClick={handleVersionsClick} className="full-height-button">
          Toggle all versions
        </button>
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

