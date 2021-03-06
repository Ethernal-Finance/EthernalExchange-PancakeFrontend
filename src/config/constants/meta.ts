import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'EthernalSwap',
  description:
    'The most popular AMM on BSC by user count! Earn Ethfin through Trading , then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by EthernalSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://ethernalswap.com/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('EthernalSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('EthernalSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('EthernalSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('EthernalSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('EthernalSwap')}`,
      }
    default:
      return null
  }
}
