import BigNumber from 'bignumber.js'

import { keyBy as _keyBy } from 'lodash'

import UidGenerator from '~/libs/uid'

const upgradeUids = UidGenerator('upgrade-')

const upgrades = [
  {
    entity: 'asset-qe6yrl',

    name: 'Positive Reinforcement',
    description:
      'Studies have shown that training employees is the same as training a dog: use lots of positive reinforcement to get them to behave correctly.',

    fups: new BigNumber('.05'),
    cost: new BigNumber('500'),
  },
  {
    entity: 'asset-qe6yrl',
    count: new BigNumber('10'),

    name: 'Mentoring Program',
    description:
      'While reading binder upon binder of information is fun for some people, it is easier to learn and retain information from a good teacher.',

    fups: new BigNumber('.1'),
    cost: new BigNumber('1500'),
  },
  {
    entity: 'asset-qe6yrl',
    count: new BigNumber('100'),

    name: 'Better Scheduling',
    description:
      "When all of your minimum wage employees work under 35 hours a week, there's no need to pay them health benefits!",

    fups: new BigNumber('.15'),
    cost: new BigNumber('30000'),
  },
]

export default _keyBy(upgrades, upgrade => upgradeUids.generate())
