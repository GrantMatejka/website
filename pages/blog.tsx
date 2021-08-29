import fs from 'fs'
import matter from 'gray-matter'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { ReactElement } from 'react'
import parseFrontMatter from '../utils/frontMatterParser'
import type { FrontMatter } from '../utils/frontMatterParser'

interface BlogProps {
   posts: {
      frontMatter: FrontMatter
      slug: string
   }[]
}

export default function Blog({ posts }: BlogProps): ReactElement {
   return (
      <div>
         <Head>
            <title>Thoughts</title>
         </Head>
         <h1>Some of My Thoughts</h1>
         <div className="row wrap">
            {posts.map(
               ({ frontMatter: { title, description, date }, slug }) => (
                  <article key={title} className="card">
                     <header className="centered pb-2">
                        <h3 className="pb-0 my-0">{title}</h3>
                        <small>{date}</small>
                     </header>
                     <section className="centered">
                        <Link href={'/thought/[slug]'} as={`/thought/${slug}`}>
                           <a className="btn-short">Read More</a>
                        </Link>
                     </section>
                  </article>
               )
            )}
         </div>
      </div>
   )
}

export const getStaticProps: GetStaticProps = async () => {
   // TODO: should this be sync?
   const files = fs.readdirSync(`${process.cwd()}/thoughts`)

   const posts = files.map((filename) => {
      const mdAndMeta = fs.readFileSync(`thoughts/${filename}`).toString()
      const { data } = matter(mdAndMeta)

      const slug = filename.replace('.md', '')
      const parsedData = parseFrontMatter(data)

      return {
         slug: slug,
         frontMatter: {
            ...parsedData,
         },
      }
   })

   return {
      props: {
         posts,
      },
   }
}
