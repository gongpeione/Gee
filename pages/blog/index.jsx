import dynamic from 'next/dynamic'
import Container from '../../components/nobelium/Container'
import BlogPost from '../../components/nobelium/BlogPost'
import Pagination from '../../components/nobelium/Pagination'
import { LocaleProvider } from '../../lib/nobelium/locale';
import { getAllPosts } from '../../lib/nobelium/notion'
import BLOG from '../../blog.config'

export async function getStaticProps () {
  const posts = await getAllPosts({ includePages: false })
  const postsToShow = posts.slice(0, BLOG.postsPerPage)
  const totalPosts = posts.length
  const showNext = totalPosts > BLOG.postsPerPage
  return {
    props: {
      page: 1, // current page is 1
      postsToShow,
      showNext
    },
    revalidate: 1
  }
}

const Ackee = dynamic(() => import('../../components/nobelium/Ackee'), { ssr: false })
const Gtag = dynamic(() => import('../../components/nobelium/Gtag'), { ssr: false })

const blog = ({ postsToShow, page, showNext }) => {
  return (
    <LocaleProvider>
      <>
        {BLOG.isProd && BLOG?.analytics?.provider === 'ackee' && (
          <Ackee
            ackeeServerUrl={BLOG.analytics.ackeeConfig.dataAckeeServer}
            ackeeDomainId={BLOG.analytics.ackeeConfig.domainId}
          />
        )}
        {BLOG.isProd && BLOG?.analytics?.provider === 'ga' && <Gtag />}
        <Container title={BLOG.title} description={BLOG.description}>
          {postsToShow.map(post => (
            <BlogPost key={post.id} post={post} />
          ))}
          {showNext && <Pagination page={page} showNext={showNext} />}
        </Container>
      </>
    </LocaleProvider>
  )
}

export default blog
