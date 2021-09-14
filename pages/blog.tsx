import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ReactElement } from 'react';
import parseFrontMatter from '../utils/frontMatterParser';
import type { FrontMatter } from '../utils/frontMatterParser';
import style from '../styles/Blog.module.css';

interface Post {
   frontMatter: FrontMatter;
   slug: string;
}

interface BlogProps {
   posts: Post[];
   featuredPosts: Post[];
}

const displayPostCards = (posts: Post[]) => {
   return (
      <div className="row wrap">
         {posts.map(({ frontMatter: { title, description, date }, slug }) => (
            <article key={title} className={style.card}>
               <header className="centered pb-2">
                  <h3 className="pb-0 my-0">{title}</h3>
                  <small>{description}</small>
                  <br />
                  <small>{date}</small>
               </header>
               <section className="centered">
                  <Link href={'/thought/[slug]'} as={`/thought/${slug}`}>
                     <a className="btn-short">Read More</a>
                  </Link>
               </section>
            </article>
         ))}
      </div>
   );
};

export default function Blog({
   posts,
   featuredPosts,
}: BlogProps): ReactElement {
   return (
      <div>
         <Head>
            <title>Thoughts</title>
         </Head>
         <div className={style.featuredContainer}>
            <h1 className={style.featuredTitle}>Really Cool Ones</h1>
            {displayPostCards(featuredPosts)}
         </div>
         <hr />
         {displayPostCards(posts)}
      </div>
   );
}

export const getStaticProps: GetStaticProps = async () => {
   // TODO: should this be synchronous?
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

   // man this is gross, figure out this date crap
   posts.sort((a, b) => a.frontMatter.date == undefined ? -1 : b.frontMatter.date == undefined ? 1 : a.frontMatter.date > b.frontMatter.date ? -1 : 1);
   featuredPosts.sort((a, b) => a.frontMatter.date == undefined ? -1 : b.frontMatter.date == undefined ? 1 : a.frontMatter.date > b.frontMatter.date ? -1 : 1);

   return {
      props: {
         posts,
         featuredPosts,
      },
   };
};
