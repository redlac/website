import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
       Welcome
      </h1>
      <p className="mb-4">
        {`My name is Calder. Please check out the projects in my portfolio. You can also subscribe to an RSS feed of my blog posts (more to come...).
        `}
      </p>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
