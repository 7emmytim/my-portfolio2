import Layout from '../components/General/Layout'
import '../styles/globals.css'
import mixpanel from 'mixpanel-browser'

mixpanel.init('93746caede71325de1d6ca811f9e4c16', { debug: true })

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
