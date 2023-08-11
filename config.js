module.exports = [
  {
    name: 'FE Stable',
    port: 3001,
    devPort: 3000,
    jobs: [
      { name: 'Adminshell', job: 'kernel/job/pp-kernel-adminshell-frontend' },
      {
        name: 'HRX',
        job: 'SP-benefits-wellbeing/job/pp-sp-benefits-admincore-frontend',
      },
      {
        name: 'PX',
        job: 'SP-benefits-wellbeing/job/pp-sp-benefits-px-frontend',
      },
      {
        name: 'TR',
        job: 'TR-totalrewards/job/pp-ptr-totalrewards-frontend',
      },
      {
        name: 'Wellbeing',
        job: 'SP-benefits-wellbeing/job/pp-sp-wellbeing-frontend',
      },
      {
        name: 'Kernel',
        job: 'kernel/job/pp-kernel-frontend',
      },
      {
        name: 'UWP',
        job: 'S1-S1/job/pp-po-s1-frontend',
      },
    ],
  },
  {
    name: 'FE Experimental',
    port: 3003,
    devPort: 3002,
    jobs: [
      {
        name: 'Adminshell',
        job: 'local-test/job/pp-kernel-adminshell-frontend-cloudfront',
      },
    ],
  },
];
