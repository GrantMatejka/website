import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import fs from "fs";
import matter from "gray-matter";
import parseFrontMatter from '../../utils/frontMatterParser';
import path from "path";

export default function Thought({ content, slug, frontMatter }) {
  return (
    <div>
    <Head>
      <title>{frontMatter.title}</title>
      <meta name="description" content="frontMatter.description" />
    </Head>
    <article>
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
    </article>
    </div>
  );
}

export const getStaticPaths = async () => {
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

export const getStaticProps = async (context) => {
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
