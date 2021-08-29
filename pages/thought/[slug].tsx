import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticProps, GetStaticPaths } from 'next';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import { ReactElement } from "react";
import parseFrontMatter from '../../utils/frontMatterParser';
import type { FrontMatter } from '../../utils/frontMatterParser';

type ThoughtProps = {
  frontMatter: FrontMatter,
  slug: string,
  content: string
};

export default function Thought({ content, slug, frontMatter }: ThoughtProps): ReactElement {
  return (
    <div>
    <Head>
      <title>{slug}</title>
    </Head>
    <article>
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
    </article>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(`${process.cwd()}/thoughts`);

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) {
    return { props: {}, };
  }

  const slug = context.params.slug;
  const markdownWithMetadata = fs
    .readFileSync(path.join(`${process.cwd()}/thoughts/${slug + ".md"}`))
    .toString();

  const { data, content } = matter(markdownWithMetadata);

  const parsedData = parseFrontMatter(data);

  const frontMatter = {
    ...parsedData,
  };

  return {
    props: {
      content: content,
      slug: slug,
      frontMatter,
    },
  };
};
