import { ArrowRightAlt } from '@material-ui/icons';
import StyledLink from './StyledLink';
import { colors } from '../utils/colors';
import styled from 'styled-components';

const RowContainer = styled.div`
   display: grid;

   gap: 0.5em;

   grid-template-columns: 2fr 1fr;

   height: 4.5em;
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

const Title = styled.h3`
   text-align: left;
   margin: 0;

   max-width: 100%;

   overflow: hidden;
   white-space: nowrap;
   text-overflow: ellipsis;
`;

const SubTitle = styled.small`
   text-align: left;
   margin: 0;

   max-width: 100%;

   overflow: hidden;
   white-space: nowrap;
   text-overflow: ellipsis;
`;

const Container = styled.div`
   display: flex;
   flex-direction: column;

   align-items: start;
   justify-content: center;
`;

/**
 * A row representing a post on the posts central page
 */
const Row = ({
   frontMatter: { title, description, formattedDate, buttonText },
   href,
   as,
}) => {
   return (
      <RowContainer>
         <StyledLink href={href} as={as} noDecoration={true} dark={true}>
            <Container>
               <Title>{title}</Title>
               <SubTitle>{description}</SubTitle>
               {formattedDate && <SubTitle>{formattedDate}</SubTitle>}
            </Container>
         </StyledLink>
         <StyledLink href={href} as={as} noDecoration={true}>
            <ReadMoreButton>
               <ButtonText>{buttonText}</ButtonText>
               <ArrowRightAlt style={{ fontSize: '1.5em' }} />
            </ReadMoreButton>
         </StyledLink>
      </RowContainer>
   );
};

const TableContainer = styled.div`
   display: flex;
   flex-direction: column;

   margin-top: 10px;
`;

/**
 *
 * @param {entries} { frontMatter: { title, description, date?, formattedDate?, buttonText}, href, as, key }
 */
export const Table = ({ entries }) => {
   return (
      <TableContainer>
         {entries.map((entry) => (
            <Row key={entry.key} {...entry} />
         ))}
      </TableContainer>
   );
};
