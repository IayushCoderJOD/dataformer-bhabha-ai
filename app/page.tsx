import Head from 'next/head'
import Hero from "@/components/Hero"
import HeroLight from "@/components/HeroLight"
export default function Home() {

  return (
    <>
      <Head>
        <title>Dataformer App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
        rel="stylesheet"/>
      </Head>
      <div>
      {/* <Hero/> */}
      <HeroLight/>
    </div>
    </>
  )
}
