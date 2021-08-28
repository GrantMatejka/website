import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Blog.module.css';
import { ReactElement } from "react";

type BlogProps = {
  posts: {
    frontmatter: {
      title: string,
      description: string,
      date: string,
    },
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
      {posts.map(({ frontmatter: { title, description, date }, slug }) => (
        <article key={title} className={styles.card}>
          <header>
            <h3>{title}</h3>
            <span>{date}</span>
          </header>
          <section>
            <Link href={"/thought/[slug]"} as={`/thought/${slug}`}>
              <a className={styles.btn}>
                Read -{">"}
              </a>
            </Link>
          </section>
        </article>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // TODO: should this be sync?
  const files = fs.readdirSync(`${process.cwd()}/thoughts`);

  const posts = files.map(filename => {
    const mdAndMeta = fs.readFileSync(`thoughts/${filename}`).toString();
    const { data } = matter(mdAndMeta);

    const slug = filename.replace('.md', '');

    // sometimes these get converted to date objects, let's check
    const date = new Date(data.date);
    if (date.toString() != 'Invalid Date') {
      const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;
      data.date = date.toLocaleDateString("en-US", options);
    }

    return {
      slug: slug,
      frontmatter: {
        ...data
      }
    }
  });

  return {
    props: {
      posts
    }
  }
}