import styled from "styled-components";

export const StyledSectionCardContainer = styled(
  ({ topMargin = 0, bottomMargin = 0, ...props }) => <div {...props} />
)`
  display: flex;
  max-width: 1920px;
  width: 50%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
`;
