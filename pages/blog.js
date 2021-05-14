import Link from 'next/link'
import styled from 'styled-components'

const Title = styled.h1`
color: green;
`

const blog = () => {
    return (
        <>
        <Head>
        <title>Create Next App</title>
      </Head>
        <Title>title</Title>
        <Link href="/">
      <a>main</a>
      </Link>
        </>
    )
}

export default blog
