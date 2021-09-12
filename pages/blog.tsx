import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ReactElement } from 'react';
import parseFrontMatter from '../utils/frontMatterParser';
import type { FrontMatter } from '../utils/frontMatterParser';
import style from '../styles/Blog.module.css';

interface BlogProps {
   posts: {
      frontMatter: FrontMatter;
      slug: string;
   }[];
   featuredPosts: {
      frontMatter: FrontMatter;
      slug: string;
   }[];
}

export default function Blog({ posts, featuredPosts }: BlogProps): ReactElement {
   return (
      <div>
         <Head>
            <title>Thoughts</title>
         </Head>
         <h1>Some of My Thoughts</h1>
         <div className={style.featuredContainer}>
            <h2>Featured</h2>
            <div className="row wrap">
               {featuredPosts.map(
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
         <hr />
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
   );
}

export const getStaticProps: GetStaticProps = async () => {
   // TODO: should this be synchronous?
   // TODO: order by something
   const files = fs.readdirSync(`${process.cwd()}/thoughts`);

   const posts = [];
   const featuredPosts = [];
   for (const filename of files) {
      const mdAndMeta = fs.readFileSync(`thoughts/${filename}`).toString();
      const { data } = matter(mdAndMeta);

      const slug = filename.replace('.md', '');
      const parsedData = parseFrontMatter(data);

      const post = {
         slug: slug,
         frontMatter: {
            ...parsedData,
         },
      };
      if (parsedData.tags && parsedData.tags.includes('featured')) {
         featuredPosts.push(post);
      } else {
         posts.push(post);
      }
   }

   return {
      props: {
         posts,
         featuredPosts,
      },
   };
};
