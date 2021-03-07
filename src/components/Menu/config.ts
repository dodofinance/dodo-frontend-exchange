import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.dododefi.com/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://www.dododefi.com/farms'
  },
  {
    label: 'Nests',
    icon: 'PoolIcon',
    href: 'https://www.dododefi.com/nests'
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://www.goosedefi.com/lottery'
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x0bbb1e011d1f026c02996965d87e16f5a17c06ff',
      },
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/dodofinance/",
      },
      {
        label: "Docs",
        href: "https://dodofinance.gitbook.io/dodo-finance/",
      },
      {
        label: "Blog",
        href: "https://medium.com/@dodofinance",
      },
    ],
  },
]

export default config
