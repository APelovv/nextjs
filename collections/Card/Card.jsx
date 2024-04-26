// The Card to be exported goes here
import Image from "next/image";
import { card, heading, text } from "../../styles/Home.module.css";
import {
  CardContainer,
  StyledHeading,
  StyledParagraph,
  StyledTextContainer,
  StyledImageContainer,
} from "./elements";

export const Card = ({ image, title, description, style, ...props }) => {
  return (
    <>
      <CardContainer {...props} style={style} className={card}>
        <StyledImageContainer>
          <Image
            layout="responsive"
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </StyledImageContainer>

        <StyledTextContainer>
          <StyledHeading className={heading}>{title}</StyledHeading>
          <StyledParagraph className={text}>{description}</StyledParagraph>
        </StyledTextContainer>
      </CardContainer>
    </>
  );
};
