import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticProps, GetStaticPaths } from 'next';
import ReactMarkdown from 'react-markdown';

export default function Thought({ content, frontmatter }) {
  return (
    <article>
      <ReactMarkdown children={content} />
    </article>
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
}

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetadata = fs
    .readFileSync(path.join(`${process.cwd()}/thoughts/${slug + ".md"}`))
    .toString();

  const { data, content } = matter(markdownWithMetadata);

  // TODO: abstract this out sometimes these get converted to date objects, let's check
  const date = new Date(data.date);
  if (date.toString() != 'Invalid Date') {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    data.date = date.toLocaleDateString("en-US", options);
  }
  const frontmatter = {
    ...data,
  };

  return {
    props: {
      content: content,
      frontmatter,
    },
  };
}
