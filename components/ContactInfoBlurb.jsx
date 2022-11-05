import StyledLink from './StyledLink';
import { colors } from '../utils/colors';
import styled from 'styled-components';

const ContactInfoContainer = styled.div`
   display: grid;
   justify-content: center;
   align-content: center;

   color: ${colors.black};

   @media only screen and (max-width: 600px) {
      padding: 0.8em;
      font-size: large;
   }
`;

const ContactInfoBlurb = () => {
   return (
      <ContactInfoContainer>
         <StyledLink size="S" href="mailto:grantmatejka1@gmail.com">
            grantmatejka1@gmail.com
         </StyledLink>
         <span>
            <StyledLink
               size="S"
               href="https://www.linkedin.com/in/grantmatejka/"
               rel="noreferrer"
               target="_blank"
            >
               LinkedIn
            </StyledLink>
            <StyledLink
               size="S"
               href="https://github.com/GrantMatejka"
               rel="noreferrer"
               target="_blank"
            >
               GitHub
            </StyledLink>
            <StyledLink
               size="S"
               href="/GrantMatejkaResume.pdf"
               rel="noreferrer"
               target="_blank"
            >
               Resume
            </StyledLink>
         </span>
      </ContactInfoContainer>
   );
};

export default ContactInfoBlurb;
