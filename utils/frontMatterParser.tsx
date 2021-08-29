export type FrontMatter = {
  title?: string,
  description?: string,
  date?: string|Date,
}

export default function parseFrontMatter(frontMatter: FrontMatter): FrontMatter { 

  if (frontMatter.date) {
    const date = new Date(frontMatter.date);
    if (date.toString() != 'Invalid Date') {
      const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;
      frontMatter.date = date.toLocaleDateString("en-US", options);
    }
  }

  return frontMatter;
}
