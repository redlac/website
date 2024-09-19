// import { BlogPosts } from 'app/components/posts'
import ThumbnailCard from "app/components/portfolio-thumbnail-card"

export const metadata = {
  title: 'Portfolio',
  description: 'Examples of my work.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-3xl mb-8 tracking-tighter">Portfolio</h1>
      <ThumbnailCard/>
      {/* <BlogPosts /> */}
    </section>
  )
}
