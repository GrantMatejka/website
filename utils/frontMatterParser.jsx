export default function parseFrontMatter(frontMatter) { 

   if (frontMatter.date) {
      const date = new Date(frontMatter.date);
      if (date.toString() != 'Invalid Date') {
         const options = { year: 'numeric', month: 'long', day: 'numeric' };
         frontMatter.date = date.toLocaleDateString("en-US", options);
      }
   }

  return frontMatter;
}
