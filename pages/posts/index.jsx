import { ArrowRightAlt } from '@material-ui/icons';
import Head from 'next/head';
import React from 'react';
import StyledLink from '../../components/StyledLink';
import { colors } from '../../utils/colors';
import fs from 'fs';
import matter from 'gray-matter';
import parseFrontMatter from '../../utils/frontMatterParser';
import styled from 'styled-components';

const Article = styled.article`
   display: grid;

   gap: 0.5em;

   grid-template-columns: 2fr 1fr;
`;

const ReadMoreButton = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;

   color: ${colors.grey};
   background-color: ${colors.black};

   text-transform: uppercase;

   padding: 10px;

   border-radius: 5px;
   width: 80%;
   min-width: 80px;
   border: none;
   transition: all 400ms ease;

   &:hover {
      color: ${colors.black};
      background-color: ${colors.grey};
   }
`;

const ButtonText = styled.p`
   display: inline-block;
   margin: 0;
   padding: 0;
`;

const PostTitle = styled.h3`
   text-align: left;
   margin-bottom: 0;
`;

const PostRowHeader = styled.header`
   display: flex;
   flex-direction: column;

   align-items: start;
   justify-content: center;

   overflow: hidden;
`;

const Container = styled.div`
   display: flex;
   flex-direction: column;

   align-items: start;
   justify-content: center;

   overflow: hidden;
   white-space: nowrap;
   text-overflow: ellipsis;
`;

/**
 * A row representing a post on the posts central page
 */
const PostRow = ({ frontMatter: { title, description, date }, slug }) => {
   return (
      <Article>
         <PostRowHeader>
            <StyledLink
               href={'/post/[slug]'}
               as={`/post/${slug}`}
               noDecoration={true}
               dark={true}
            >
               <Container>
                  <PostTitle
                     style={{
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                     }}
                  >
                     {title}
                  </PostTitle>
                  <small
                     style={{
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                     }}
                  >
                     {description}
                  </small>
                  <small
                     style={{
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                     }}
                  >
                     {date}
                  </small>
               </Container>
            </StyledLink>
         </PostRowHeader>
         <section>
            <StyledLink
               href={'/post/[slug]'}
               as={`/post/${slug}`}
               noDecoration={true}
            >
               <ReadMoreButton>
                  <ButtonText>{'Read'}</ButtonText>
                  <ArrowRightAlt style={{ fontSize: '1.5em' }} />
               </ReadMoreButton>
            </StyledLink>
         </section>
      </Article>
   );
};

const PostsTableContainer = styled.div`
   display: flex;
   flex-direction: column;

   margin-top: 10px;
`;

const PostsTable = ({ posts }) => {
   return (
      <PostsTableContainer>
         {posts.map((post) => (
            <PostRow key={post.slug} {...post} />
         ))}
      </PostsTableContainer>
   );
};

export default function Posts({ posts }) {
   return (
      <>
         <Head>
            <title>Thoughts</title>
         </Head>
         <PostsTable posts={posts} />
      </>
   );
}

/**
 * Retrieve the markdown files themselves
 */
export const getStaticProps = async () => {
   // TODO: should this be asynchronous?
   const files = fs.readdirSync(`${process.cwd()}/essays`);

   const posts = [];
   for (const filename of files) {
      const mdAndMeta = fs.readFileSync(`essays/${filename}`).toString();
      const { data } = matter(mdAndMeta);

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

   // man this is gross, figure out this date crap
   posts.sort((a, b) =>
      a.frontMatter.date == undefined
         ? -1
         : b.frontMatter.date == undefined
         ? 1
         : a.frontMatter.date > b.frontMatter.date
         ? -1
         : 1
   );

   return {
      props: {
         posts,
      },
   };
};
