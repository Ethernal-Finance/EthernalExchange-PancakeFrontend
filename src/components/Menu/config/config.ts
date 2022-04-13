import {
  MenuItemsType,
  SwapIcon,
  SwapFillIcon,
 
} from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'


export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t'], languageCode?: string) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Trade'),
    icon: SwapIcon,
    fillIcon: SwapFillIcon,
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Swap'),
        href: '/swap',
      },
      {
        label: t('Limit'),
        href: '/limit-orders',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
      
    ],
  },
  
  
  
  
]

export default config
