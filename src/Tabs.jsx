import logo from "./public/logo.png";

export const Tabs = ({ dashboards, activeTab, setTab }) => {
  return (
    <div class="tabs-wrapper">
      <ul class="tabs">
        {dashboards.map(({ name }) => (
          <li
            key={name}
            className={`tab ${activeTab === name ? "active" : ""}`}
            onClick={() => setTab(name)}
          >
            {name}
          </li>
        ))}
      </ul>
      <a
        href="https://github.com/pratyushseq/jenkins-dashboard"
        target="_blank"
      >
        <img src={logo} alt="Jenkins Ultra" />
      </a>
    </div>
  );
};

