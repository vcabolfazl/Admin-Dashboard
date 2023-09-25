import Svg from '@/components/Svg'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import Header from '@/components/Header'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Svg />
      <Header />
      <Navbar hidden={true} />
      <Component {...pageProps} />
    </>
  )
}
