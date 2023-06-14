import '~/styles/globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import NextProgress from 'next-progress'
import type { AppProps, AppType } from 'next/app'
import { Header } from '~/components'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'
import { Toaster } from 'react-hot-toast'
export const queryClient = new QueryClient()
const App: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps) => {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <SessionProvider session={session}>
                    <NextProgress options={{ showSpinner: false }} />
                    <div className='bg-[#0D1016] h-screen w-screen pt-[80px] overflow-hidden overflow-y-auto'>
                        <Header />
                        <Component {...pageProps} />
                    </div>
                </SessionProvider>
                <Toaster position='top-right' />
            </QueryClientProvider>
        </>
    )
}

export default App
