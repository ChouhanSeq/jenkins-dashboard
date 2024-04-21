import logo from "./public/logo.png";

export const Tabs = ({ tabs, activeTab, setTab, showLogo }) => {
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

