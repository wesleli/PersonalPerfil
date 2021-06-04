import Nav from '../components/nav'
import Head from 'next/head'
import Background from '../components/background'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wesley da Silva</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Fondamento:ital@1&family=Sarpanch:wght@700&display=swap" rel="stylesheet"/>
      </Head>
      <Background>
      <Nav/>

      </Background>
    </div>
  )
}
