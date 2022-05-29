import Layout from '../../components/nobelium/layout'
import { getAllPosts, getPostBlocks } from '../../lib/nobelium/notion'
import BLOG from '../../blog.config'
import { createHash } from 'crypto'
import { LocaleProvider } from '../../lib/nobelium/locale';

const BlogPost = ({ post, blockMap, emailHash }) => {
  if (!post) return null
  return (
    <LocaleProvider>
      <Layout
        blockMap={blockMap}
        frontMatter={post}
        emailHash={emailHash}
        fullWidth={post.fullWidth}
      />
    </LocaleProvider>
  )
}

export async function getStaticPaths () {
  const posts = await getAllPosts({ includePages: true })
  return {
    paths: posts.map(row => `${BLOG.path}/${row.slug}`),
    fallback: true
  }
}

export async function getStaticProps ({ params: { slug } }) {
  const posts = await getAllPosts({ includePages: true })
  const post = posts.find(t => t.slug === slug)
  const blockMap = await getPostBlocks(post.id)
  const emailHash = createHash('md5')
    .update(BLOG.email)
    .digest('hex')
    .trim()
    .toLowerCase()

  return {
    props: { post, blockMap, emailHash },
    revalidate: 1
  }
}

export default BlogPost
