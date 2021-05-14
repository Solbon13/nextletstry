import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import Navbar from '../components/Navbar'

const Wrapper = styled.div`
  background: #EEF5FF;
  min-height: 100vh;
  width: 100%;
`

const PostsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
`

const Post = styled.a`
  width: 350px;
  height: 270px;
  border-radius: 15px;
  margin-top: 50px;
  position: relative;
  cursor: pointer;
  background: url('${props => props.bgImage}') center / cover no-repeat;
  :hover {
    transform: scale(1.1);
    transition: all.3s all ease;
  }
`

const PostTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;

  padding: 15px 20px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  color: #3260A1;
  background: white;
  border-radius: 0px 0px 15px 15px;
`

export default function Home({posts}) {

  if (!posts) 'Loading...'

  return (
    <div>
      <Head>
        <title>Статьи</title>
      </Head>
      <Navbar />
      <Wrapper>
        <div className="container">
          <PostsWrapper>
            {
              posts.map((post, idx) => {
                return (
                  <Link href={'/post/[id]'} as={`/post/${post._id}`} key={idx}>
                    <Post bgImage={post.imgUrl}>
                      <PostTitle>
                        {post.title}
                      </PostTitle>
                    </Post>
                  </Link>
                )
              })
            }

            <Link href={'/post/[id]'} as={`/post/test`}>
              <Post bgImage={'./static/images/1.jpg'}>
                <PostTitle>
                  Мальдивы. Рай или пафос ?
              </PostTitle>
              </Post>
            </Link>
            <Post bgImage={'./static/images/2.jpg'}>
              <PostTitle>
                Италия. Остров Капри. Обзор.
              </PostTitle>
            </Post>

            <Post bgImage={'./static/images/3.jpg'}>
              <PostTitle>
                США. Сан-Франциско,  дорого ?
              </PostTitle>
            </Post>

            <Post bgImage={'./static/images/4.jpg'}>
              <PostTitle>
                Канада. Пейзажи вблизи Онтарио.
              </PostTitle>
            </Post>

            <Post bgImage={'./static/images/5.jpg'}>
              <PostTitle>
                Швейцария.  Красота природы.
              </PostTitle>
            </Post>

            <Post bgImage={'./static/images/6.jpg'}>
              <PostTitle>
                Альпы.  Покори вершину с нами !
              </PostTitle>
            </Post>
          </PostsWrapper>
        </div>
      </Wrapper>

    </div>
  )
}

export async function getServerSideProps(context) {
  // const res = await fetch(`https://...`)
  // const posts = await res.json()

  const posts = [
    {_id: 1, title: 'test title', text: 'text state', imgUrl: './static/images/5.jpg'}
  ]

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      posts
    }, // will be passed to the page component as props
  }
}