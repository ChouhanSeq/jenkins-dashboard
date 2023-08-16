module.exports = [
  {
    name: 'FE Stable',
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
];
