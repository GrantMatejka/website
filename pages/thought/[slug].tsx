import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticProps, GetStaticPaths } from 'next';
import ReactMarkdown from 'react-markdown';

type ThoughtProps = {
  frontmatter: {
    title: string,
    description: string,
    date: string,
  },
  content: string
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Thought({ content, frontmatter }: ThoughtProps) {
  return (
    <article>
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
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

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) {
    return {
      props: {
        content: '',
      },
    };
  }

  const slug = context.params.slug;
  const markdownWithMetadata = fs
    .readFileSync(path.join(`${process.cwd()}/thoughts/${slug + ".md"}`))
    .toString();

  const { data, content } = matter(markdownWithMetadata);

  // TODO: abstract this out sometimes these get converted to date objects, let's check
  const date = new Date(data.date);
  if (date.toString() != 'Invalid Date') {
    const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;
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
