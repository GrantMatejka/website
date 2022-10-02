import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import parseFrontMatter from '../utils/frontMatterParser';
import style from '../styles/Blog.module.css';

const PostCard = ({ frontMatter: { title, description, date }, slug }) => {
   return (
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
   );
};

export default function Blog({
   posts,
}) {
   return (
      <div>
         <Head>
            <title>Thoughts</title>
         </Head>
         <div className="row wrap">
            {posts.map((post) => <PostCard {...post} />)}
         </div>
      </div>
   );
}

export const getStaticProps = async () => {
   // TODO: should this be asynchronous?
   const files = fs.readdirSync(`${process.cwd()}/thoughts`);

   const posts = [];
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

      posts.push(post);
   }

   // man this is gross, figure out this date crap
   posts.sort((a, b) => a.frontMatter.date == undefined ? -1 : b.frontMatter.date == undefined ? 1 : a.frontMatter.date > b.frontMatter.date ? -1 : 1);

   return {
      props: {
         posts,
      },
   };
};
