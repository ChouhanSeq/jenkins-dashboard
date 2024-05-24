import logo from "./public/logo.png";

window.versions = false;

export const Tabs = ({ tabs, activeTab, setTab, showLogo }) => {
  const handleVersionsClick = () => {
    // fire a custom event to trigger the versions tab
    window.versions = !window.versions;
    const event = new CustomEvent("versions");
    document.dispatchEvent(event);
  };

  return (
    <div className={`tabs-wrapper ${showLogo ? "with-logo" : ""}`}>
      <ul className="tabs">
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
      {showLogo ? (
        <button onClick={handleVersionsClick}>Toggle all versions</button>
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

