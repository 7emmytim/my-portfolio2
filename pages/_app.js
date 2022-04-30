import '../styles/globals.css'
import mixpanel from 'mixpanel-browser'
import { AnimatePresence, motion } from 'framer-motion'
import Head from 'next/head'
import Header from '../components/General/Header'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'next-themes'

mixpanel.init('93746caede71325de1d6ca811f9e4c16', { debug: true })

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  const spring = {
    type: 'spring',
    damping: 20,
    stiffness: 200,
    when: 'afterChildren'
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <div className='h-screen bg-white dark:bg-[#1e2235] relative overflow-x-hidden overflow-y-auto'>
        <Head>
          <title>Timilehin's Portfolio</title>
          <meta name='description' content='Timilehin Omotugba (frontend developer)' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Header />
        <motion.main
          transition={spring}
          key={router.pathname}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
        >
          <ThemeProvider enableSystem={true} attribute='class'>
            <Component {...pageProps} key={router.pathname} />
          </ThemeProvider>
        </motion.main>
      </div>
    </AnimatePresence>
  )
}

export default MyApp
