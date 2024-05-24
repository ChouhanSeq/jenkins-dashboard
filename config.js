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
  {
    id: "be",
    name: "Backend",
    jobs: [
      {
        name: "S1 service",
        job: "serviceos-s1service-backend",
        env: "s1-client-service",
      },
      {
        name: "Documenthub service",
        job: "serviceos-documenthub-backend",
        env: "pp-po-documenthub-external-api",
      },
      {
        name: "Planning backend",
        job: "compos-planning-backend",
        env: "compos-planningsvc-internal",
      },
      {
        name: "WellBeing backend",
        job: "benefitos-wellbeing-backend",
        env: "benefitos-wellbeing-backend",
      },
      {
        name: "Benefits backend",
        job: "benefitos-benefits-backend",
        env: "pp-sp-benefits-backend",
      },
      {
        name: "Apps service",
        job: "kernel-appsvc-backend",
        env: "pp-sp-kernel-appsvc-backend",
      },
      {
        name: "Public service",
        job: "kernel-publicsvc-backend",
        env: "pp-kernel-publicsvc-backend",
      },
      {
        name: "UAM 2.0",
        job: "kernel-uam2-backend",
        env: "pp-kernel-uam2-backend",
      },
      {
        name: "Cloud common backend",
        job: "cloud-common-backend",
        env: "cloud-common-backend",
      },
      {
        name: "Integration backend",
        job: "cloud-integration-backend",
        env: "cloud-integrationsvc",
      },
      {
        name: "Killbill backend",
        job: "kernel-billing-backend",
        env: "pp-kernel-killbill-backend",
      },
    ],
  },
];

module.exports = { dashboards, envs };


