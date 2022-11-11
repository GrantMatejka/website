import Head from 'next/head';
import { Table } from '../../components/Table';
import fs from 'fs';
import matter from 'gray-matter';
import parseFrontMatter from '../../utils/frontMatterParser';

const dateSorter = (e1, e2) => e2.frontMatter.date - e1.frontMatter.date;

export default function Posts({ posts }) {
   return (
      <>
         <Head>
            <title>Thoughts</title>
         </Head>
         <Table
            entries={posts.map((post) => ({
               frontMatter: {
                  ...post.frontMatter,
                  buttonText: 'read',
               },
               key: post.slug,
               as: `/post/${post.slug}`,
               href: '/post/[slug]',
            }))}
         />
      </>
   );
}

/**
 * Retrieve the markdown files themselves
 */
export const getStaticProps = async () => {
   const files = await fs.promises.readdir(`${process.cwd()}/essays`);

   const posts = [];
   for (const filename of files) {
      const mdAndMeta = await fs.promises.readFile(`essays/${filename}`);

      const { data } = matter(mdAndMeta.toString());

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

   posts.sort(dateSorter);

   return {
      props: {
         posts,
      },
   };
};
