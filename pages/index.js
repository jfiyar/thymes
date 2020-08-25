import Head from 'next/head'
import App from '@/App'
import Axios from 'axios'
import { useEffect, useState } from 'react'
export default function Home(props) {
  const [data, dataChange] = useState([])
  useEffect(() => {
    Axios('/').then((d) => {
      console.log(d)
      dataChange(d.data)
    })
  }, [])
  return (
    <>
      <Head>
        <title>app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {JSON.stringify(props.data)}
        <br />
        {JSON.stringify(data)}
        <App />
      </main>
    </>
  )
}
Home.getInitialProps = async ({ req }) => {
  const data = await Axios('/')
  console.log(data)
  return { data: data.data }
}
