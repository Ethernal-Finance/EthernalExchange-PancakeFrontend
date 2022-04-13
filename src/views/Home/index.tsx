import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import { PageMeta } from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'
import Swap from 'views/Swap'
import PageSection from 'components/PageSection'
import Footer from './components/Footer'





const Home: React.FC = () => {
  const { theme } = useTheme()
  const {  } = useWeb3React()

  
  const { t } = useTranslation()

  return (
    <>
    
      <PageMeta />
      <PageSection
        background="linear-gradient(180deg, #d9a045 0%, #5121B1 100%)"
        index={2}
        hasCurvedDivider={true}
      >
        <Footer/>
      </PageSection>
      
      <Swap></Swap>
     
      
     
    </>
  )
}

export default Home
