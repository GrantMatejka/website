import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';

import Head from 'next/head';
import { IoNewspaperOutline } from 'react-icons/io5';
import StyledLink from '../components/StyledLink';
import styled from 'styled-components';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-content: center;

   text-align: center;
   height: 80vh;

   @media only screen and (max-width: 400px) {
      text-align: left;
   }
`;

const StyledLinkPadding = styled.div`
   padding-left: 3em;
   padding-right: 3em;

   @media only screen and (max-width: 400px) {
      padding: 0;
   }
`;

const IconRow = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;

   @media only screen and (max-width: 400px) {
      justify-content: space-between;
   }
`;

const Title = styled.h1`
   text-transform: uppercase;
   font-size: 5em;
   font-weight: 500;

   margin-bottom: 0;

   @media only screen and (max-width: 400px) {
      font-size: 4em;
   }
`;

const Text = styled.h3`
   font-size: 1.75em;
   padding: 0.5em;

   @media only screen and (max-width: 400px) {
      font-size: 1.5em;
      padding-left: 0;
   }
`;

const Home = () => {
   return (
      <>
         <Head>
            <title>Grant Matejka</title>
            <meta
               name="description"
               content="Small site about me and some projects"
            />
         </Head>
         <Container>
            <Title>{'Grant Matejka'}</Title>
            <Text>{'Sofware Engineer, Amongst Other Things'}</Text>
            <IconRow>
               <StyledLinkPadding>
                  <StyledLink
                     dark={true}
                     size="XL"
                     padding={0}
                     href="https://www.linkedin.com/in/grantmatejka/"
                     rel="noreferrer"
                     target="_blank"
                  >
                     <IoLogoLinkedin />
                  </StyledLink>
               </StyledLinkPadding>
               <StyledLinkPadding>
                  <StyledLink
                     dark={true}
                     size="XL"
                     padding={0}
                     href="https://github.com/GrantMatejka"
                     rel="noreferrer"
                     target="_blank"
                  >
                     <IoLogoGithub />
                  </StyledLink>
               </StyledLinkPadding>
               <StyledLinkPadding>
                  <StyledLink
                     dark={true}
                     size="XL"
                     padding={0}
                     href="/GrantMatejkaResume.pdf"
                     rel="noreferrer"
                     target="_blank"
                  >
                     <IoNewspaperOutline />
                  </StyledLink>
               </StyledLinkPadding>
            </IconRow>
         </Container>
      </>
   );
};

export default Home;
