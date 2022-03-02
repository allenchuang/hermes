import Head from 'next/head'
import Hero from "../components/Hero"
import Intro from "../components/Intro"
import Wallet from "../components/Wallet"

export default function Home() {
  return (
    <>
      <Hero />
      <Wallet />
      {/* <Intro /> */}
    </>

  )
}
