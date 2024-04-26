// Styled elements for the Card go here
import styled from "styled-components";
import {
  SectionContainer,
  SectionInnerHeading,
  SectionTinyHeading,
} from "~/components";

export const CardContainer = styled((props) => <SectionContainer {...props} />)`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  background-color: #f9f9f9;
`;

export const StyledContainer = styled((props) => (
  <SectionContainer {...props} />
))`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  background-color: #f9f9f9;
`;

export const StyledHeading = styled((props) => (
  <SectionInnerHeading {...props} />
))`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 0 1rem 0;
`;

export const StyledParagraph = styled((props) => (
  <SectionTinyHeading {...props} />
))`
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  color: black;
  font-family: sans-serif;
  width: 70%;
  justify-content: space-evenly;
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  padding: 0 20px;
  width: 5rem;
`;
