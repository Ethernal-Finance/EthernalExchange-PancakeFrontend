import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('Ethernal Ecosystem'),
    items: [
      {
        label: t('Home'),
        href: 'https://Ethernalfinance.io',
        isHighlighted: true,
      },
      {
        label: t('Swap'),
        href: 'https://exchange.ethernalfinance.io',
      },
      
      {
        label: t('Rewards Center'),
        href: 'https://app.ethernalfinance.io',
      },
      {
        label: t('Community'),
        href: 'https://t.me/Ethernalfinance',
      },
      {
        label: t('Governance'),
        href: 'https://Gov.Ethernalfinance.io',
      },
      {
        label: '—',
      },
      {
        label: t('Online Store'),
        href: 'https://ethernalfinance.shop/',
      },
    ],
  },
  
  {
    label: t('Developers'),
    items: [
      
      {
        label: t('Careers (Coming Soon)'),
        href: '',
      },
    ],
  },
]
