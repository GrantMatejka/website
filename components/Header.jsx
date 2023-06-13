import { Home, LibraryBooks } from '@material-ui/icons';

import { Terminal } from '@mui/icons-material';
import styled from 'styled-components';
import { colors } from '../utils/colors';
import useWindowDimensions from '../utils/windowDimensions';
import ContactInfoBlurb from './ContactInfoBlurb';
import StyledLink from './StyledLink';

const NO_CONTACT_SIZE = 1000;
const MOBILE = 650;

const LinkContainer = styled.div`
   display: flex;
   flex-direction: ${(props) => props.isMobile ? 'column' : 'row'};
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
   padding-top: 0.5em;
   padding-bottom: 0.5em;

   background-color: ${colors.black};

   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-around;
`;


const MobileLinkText = styled.h2`
   font-size: ${(props) => props.isMobile ? '16px' : '24px'};
   font-weight: 400;

   margin: 0;
   padding: 0;

   padding-left: ${(props) => props.isMobile ? 0 : '8px'};
`;

export default function Header() {
   const { width } = useWindowDimensions();

   const showContact = width > NO_CONTACT_SIZE;
   const isMobile = width < MOBILE;

   return (
      <HeaderContainer className="full">
         <StyledLink size="M" key="home-link" href="/">
            <LinkContainer isMobile={isMobile}>
               <Home fontSize="large" /><MobileLinkText isMobile={isMobile}>{'Home'}</MobileLinkText>
            </LinkContainer>
         </StyledLink>
         <StyledLink size="M" key="projects-link" href="/projects">
            <LinkContainer isMobile={isMobile}>
               <Terminal fontSize="large" /><MobileLinkText isMobile={isMobile}>{'Projects'}</MobileLinkText>
            </LinkContainer>
         </StyledLink>
         <StyledLink size="M" key="thoughts-link" href="/posts">
            <LinkContainer isMobile={isMobile}>
              <LibraryBooks fontSize="large" /><MobileLinkText isMobile={isMobile}>{'Thoughts'}</MobileLinkText>
            </LinkContainer>
         </StyledLink>
         {showContact && <ContactInfoBlurb key="contact-info" />}
      </HeaderContainer>
   );
}
