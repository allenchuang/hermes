import { ChakraProvider } from '@chakra-ui/react'
import { UseWalletProvider } from "use-wallet"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <UseWalletProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </UseWalletProvider>
    </ChakraProvider>
  )
}

export default MyApp