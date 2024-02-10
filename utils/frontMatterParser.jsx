export default function parseFrontMatter(frontMatter) {
  if (frontMatter.date) {
    const date = new Date(frontMatter.date);

    frontMatter.date = date.getTime();

    if (date.toString() != 'Invalid Date') {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      frontMatter.formattedDate = date.toLocaleDateString('en-US', options);
    }
  }

  return frontMatter;
}
