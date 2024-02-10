'use server';

import { Section } from '@/components/ui/section';
import ReactMarkdown from 'react-markdown';

import { readFileSync } from 'fs';
import matter from 'gray-matter';
import path from 'path';
import parseFrontMatter from '../../../utils/frontMatterParser';

export default async function Page({ params }) {
  const slug = params.slug;
  const markdownWithMetadata = readFileSync(
    path.join(`${process.cwd()}/essays/${slug + '.md'}`)
  ).toString();

  const { data, content } = matter(markdownWithMetadata);

  const parsedData = parseFrontMatter(data);

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-12">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <Section>
          <h2 className="text-xl font-bold">About</h2>
          <ReactMarkdown>{content}</ReactMarkdown>
        </Section>
      </section>
    </main>
  );
}
