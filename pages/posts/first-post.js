import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script';
import Layout from '../../components/layout'

export default function FirstPost() {
    return (
        <Layout>
        <Head>
        <title>First Post</title>
      </Head>
      {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload" //can use onLoad i want to be run right away
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}
    <h1>Hello there, this is the first post!</h1>
    <h2><Link href="/">
        <a>Back to Home</a>
        </Link></h2>
        </Layout>
    )
}