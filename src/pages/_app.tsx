import '~/styles/globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import type { AppProps } from 'next/app'
import { Header } from '~/components'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <div className='bg-[#0D1016] h-screen w-screen pt-[80px] overflow-hidden overflow-y-auto'>
                    <Header />
                    <Component {...pageProps} />
                </div>
            </QueryClientProvider>
        </>
    )
}
