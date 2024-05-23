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
        job: "kernel-adminshell-frontend",
        env: "kernel-adminshell-frontend",
      },
      {
        name: "HRX",
        job: "pp-sp-benefits-admincore-frontend",
        env: "hrx-core-web-v2",
      },
      {
        name: "PX",
        job: "benefitos-benefits-frontend",
        env: "benefitos-benefits-frontend",
      },
      {
        name: "TR",
        job: "compos-totalrewards-frontend",
        env: "pp-totalrewards-frontend",
      },
      {
        name: "Wellbeing",
        job: "benefitos-wellbeing-frontend",
        env: "benefitos-wellbeing-frontend",
      },
      {
        name: "Kernel",
        job: "kernel-all-frontend",
        env: "org-settings",
      },
      {
        name: "UWP",
        job: "serviceos-s1service-frontend",
        env: "pp-po-uwp-frontend",
      },
      {
        name: "Eureka",
        job: "kernel-eureka-frontend",
        env: "kernel-eureka-frontend",
      },
      {
        name: "IDM",
        job: "kernel-idm-frontend",
        env: "kernel_frontend",
      },
    ],
  },
];

module.exports = { dashboards, envs };


