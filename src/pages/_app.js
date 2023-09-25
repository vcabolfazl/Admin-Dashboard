import Svg from '@/components/Svg'
import Navbar from '@/components/navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Svg />
      <Navbar />

      <Component {...pageProps} />
    </>
  )
}
