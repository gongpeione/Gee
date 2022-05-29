import Container from '../components/nobelium/Container'
import BlogPost from '../components/nobelium/BlogPost'
import Pagination from '../components/nobelium/Pagination'
import { LocaleProvider } from '../lib/nobelium/locale';
import { getAllPosts } from '../lib/nobelium/notion'
import BLOG from '../blog.config'
import { ThenArg } from '../pages';

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

const Blog = ({ postsToShow, page, showNext }: ThenArg<ReturnType<typeof getStaticProps>>["props"]) => {
  return (
    <LocaleProvider>
      {/* @ts-ignore */}
      <Container title={BLOG.title} description={BLOG.description} layout={undefined} fullWidth={undefined}>
        {postsToShow.map((post: any) => (
          <BlogPost key={post.id} post={post} />
        ))}
        {showNext && <Pagination page={page} showNext={showNext} />}
      </Container>
    </LocaleProvider>
  )
}

export default Blog
