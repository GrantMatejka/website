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
`;

const IconRow = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
`;

const Title = styled.h1`
   text-transform: uppercase;
   font-size: 5em;

   margin-bottom: 0;

   @media only screen and (max-width: 750px) {
      font-size: 3.5em;
   }
`;

const Text = styled.h3`
   font-size: 1.75em;
   padding: 0.5em;

   @media only screen and (max-width: 750px) {
      font-size: 1.5em;
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
               <StyledLink
                  dark={true}
                  size="XL"
                  href="https://www.linkedin.com/in/grantmatejka/"
                  rel="noreferrer"
                  target="_blank"
               >
                  <IoLogoLinkedin />
               </StyledLink>
               <StyledLink
                  dark={true}
                  size="XL"
                  href="https://github.com/GrantMatejka"
                  rel="noreferrer"
                  target="_blank"
               >
                  <IoLogoGithub />
               </StyledLink>
               <StyledLink
                  dark={true}
                  size="XL"
                  href="/GrantMatejkaResume.pdf"
                  rel="noreferrer"
                  target="_blank"
               >
                  <IoNewspaperOutline />
               </StyledLink>
            </IconRow>
         </Container>
      </>
   );
};

export default Home;
