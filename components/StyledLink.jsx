import Link from 'next/link';
import styled from 'styled-components';
import { colors } from '../utils/colors';

const StyledLinkContainer = styled.a`
   text-decoration: underline;
   text-decoration-color: transparent;

   padding: ${(props) =>
      props.padding !== undefined ? props.padding : '0.25em'};

   text-align: center;

   color: ${(props) => (props.dark ? colors.black : colors.white)};

   min-width: 100px;
   border-radius: 0.5em;

   transition: all 250ms ease-in;

   &:hover {
      color: ${(props) => (props.dark ? colors.blackHover : colors.whiteHover)};
      text-decoration-color: ${(props) =>
         props.noDecoration
            ? 'transparent'
            : props.dark
            ? colors.blackHover
            : colors.whiteHover};
   }
`;

const size = {
   S: '1em',
   M: '2em',
   L: '3em',
   XL: '4em',
};

const StyledLink = (props) => {
   const { children, ...linkProps } = props;

   return (
      <Link href={linkProps.href} as={linkProps.as} passHref>
         <StyledLinkContainer
            padding={linkProps.padding}
            style={{
               fontSize: size[props.size],
            }}
            noDecoration={linkProps.noDecoration}
            size={linkProps.size}
            dark={linkProps.dark}
            rel={linkProps.ref}
            target={linkProps.target}
         >
            {children}
         </StyledLinkContainer>
      </Link>
   );
};

export default StyledLink;
