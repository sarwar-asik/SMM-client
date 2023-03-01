import '@/styles/globals.css'
import ProviderContext from 'authProvider/ProviderContext'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'

export default function App({ Component, pageProps }) {
  return <ProviderContext>
  <Navbar/>
  <Component {...pageProps} />
  <Footer />
  </ProviderContext>
}
