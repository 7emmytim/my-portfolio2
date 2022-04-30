import Head from 'next/head'
import Header from './Header'
import mixpanel from 'mixpanel-browser'

const Layout = ({ children }) => {

    mixpanel.track('app visited')

    return (
        <div className='h-screen bg-[#1e2235] relative overflow-auto'>
            <Head>
                <title>Timilehin's Portfolio</title>
                <meta name='description' content='Timilehin Omotugba (frontend developer)' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout