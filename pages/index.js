import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import styled from 'styled-components'

const Title = styled.h1`
color: red;
`

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Title>title</Title>
      <Link href="/blog">
        <a>blog</a>
      </Link>

    </div>
  )
}
