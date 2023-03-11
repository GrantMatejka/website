import { Home, LibraryBooks } from '@material-ui/icons';

import ContactInfoBlurb from './ContactInfoBlurb';
import StyledLink from './StyledLink';
import { Terminal } from '@mui/icons-material';
import { colors } from '../utils/colors';
import styled from 'styled-components';
import useWindowDimensions from '../utils/windowDimensions';

const NO_CONTACT_SIZE = 1000;
const MOBILE = 650;

const LinkContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
`;

const HeaderContainer = styled.header`
   position: sticky;
   top: 0;
   box-shadow: 0 5px 15px -5px ${colors.black};

   height: 60px;
   width: 100%;

   padding: 0;

   background-color: ${colors.black};

   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-around;
`;

export default function Header() {
   const { width } = useWindowDimensions();

   const showContact = width > NO_CONTACT_SIZE;
   const isMobile = width < MOBILE;

   return (
      <HeaderContainer className="full">
         <StyledLink size="M" key="home-link" href="/">
            <LinkContainer>
               {isMobile ? <Home fontSize="large" /> : 'Home'}
            </LinkContainer>
         </StyledLink>
         <StyledLink size="M" key="projects-link" href="/projects">
            <LinkContainer>
               {isMobile ? <Terminal fontSize="large" /> : 'Projects'}
            </LinkContainer>
         </StyledLink>
         <StyledLink size="M" key="thoughts-link" href="/posts">
            <LinkContainer>
               {isMobile ? <LibraryBooks fontSize="large" /> : 'Thoughts'}
            </LinkContainer>
         </StyledLink>
         {showContact && <ContactInfoBlurb key="contact-info" />}
      </HeaderContainer>
   );
}
