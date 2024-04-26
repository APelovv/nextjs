import styled from "styled-components";
import {
  SectionContainer,
  SectionCardContainer,
  SectionBigHeading,
  SectionSubheading,
  SectionCards,
} from "~/components";

export const StyledContainer = styled((props) => (
  <SectionContainer {...props} />
))`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
`;

export const StyledCardContainer = styled((props) => (
  <SectionCardContainer {...props} />
))`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px 0;
  
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  line-height: 1.5;
  font-size: 1.5rem;
  margin: 0;
  padding: 0 0 30px 0;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  font-family: sans-serif;
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  display: flex;
  justify-content: flex-end;
  background-image: url(img/background.png);
  background-size: cover;
  
  @media screen and (max-width: 1024px) {
  display: flex;
  position: relative;
  right: 1.25rem;
  justify-content: space-around;
  width: 60%;
  padding: 0px 8rem;
}
`;

export const StyledSectionCards = styled((props) => (
  <SectionCards {...props} />
))`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 !important;
  padding-left: 5rem;
`;
