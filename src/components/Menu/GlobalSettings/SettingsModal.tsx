import styled from 'styled-components'
import { Text,  Flex, Modal, InjectedModalProps, ThemeSwitcher } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import TransactionSettings from './TransactionSettings'
import GasSettings from './GasSettings'

const ScrollableContainer = styled(Flex)`
  flex-direction: column;
  max-height: 400px;
  ${({ theme }) => theme.mediaQueries.sm} {
    max-height: none;
  }
`

const SettingsModal: React.FC<InjectedModalProps> = ({ onDismiss }) => {
 const { t } = useTranslation()
  const { theme, isDark, setTheme } = useTheme()

  

  

  return (
    <Modal
      title={t('Settings')}
      headerBackground="gradients.cardHeader"
      onDismiss={onDismiss}
      style={{ maxWidth: '420px' }}
    >
      <ScrollableContainer>
        <Flex pb="24px" flexDirection="column">
          <Text bold textTransform="uppercase" fontSize="12px" color="secondary" mb="24px">
            {t('Global')}
          </Text>
          <Flex justifyContent="space-between">
            <Text mb="24px">{t('Dark mode')}</Text>
            <ThemeSwitcher isDark={isDark} toggleTheme={() => setTheme(isDark ? 'light' : 'dark')} />
          </Flex>
          <GasSettings />
        </Flex>
        <Flex pt="24px" flexDirection="column" borderTop={`1px ${theme.colors.cardBorder} solid`}>
          <Text bold textTransform="uppercase" fontSize="12px" color="secondary" mb="24px">
            {t('Swaps & Liquidity')}
          </Text>
          <TransactionSettings />
        </Flex>
        
        
      </ScrollableContainer>
    </Modal>
  )
}

export default SettingsModal
