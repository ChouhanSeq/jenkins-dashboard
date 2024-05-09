const envs = [
  {
    id: "qa",
    name: "QA",
    baseUrl: "https://jenkins-qa.sequoia-development.com",
  },
  {
    id: "prod",
    name: "Production",
    baseUrl: "https://jenkins-production.sequoia-development.com",
  },
];

const dashboards = [
  {
    id: "fe",
    name: "Frontend",
    jobs: [
      {
        name: "Adminshell",
        job: "pp-kernel-adminshell-frontend",
        env: "platform-frontend",
      },
      {
        name: "HRX",
        job: "pp-sp-benefits-admincore-frontend",
        env: "hrx-core-web-v2",
      },
      {
        name: "PX",
        job: "benefitos-benefits-frontend",
        env: "pp-benefits-px-frontend-v2",
      },
      {
        name: "TR",
        job: "compos-apps-totalrewards-frontend",
        env: "pp-totalrewards-frontend",
      },
      {
        name: "Wellbeing",
        job: "benefitos-wellbeing-frontend",
        env: "pp-sp-wellbeing-frontend",
      },
      {
        name: "Kernel",
        job: "pp-kernel-frontend",
        env: "org-settings",
      },
      {
        name: "UWP",
        job: "serviceos-s1service-frontend",
        env: "pp-po-uwp-frontend",
      },
      {
        name: "Eureka",
        job: "pp-kernel-eureka-frontend",
        env: "pp-kernel-eureka-frontend",
      },
      {
        name: "IDM",
        job: "pp-kernel-idm-frontend",
        env: "kernel_frontend",
      },
    ],
  },
];

module.exports = { dashboards, envs };





