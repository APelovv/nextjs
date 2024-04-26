import Image from "next/image";
import { Card } from "../Card/Card";
import {
  StyledTextContainer,
  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledImageContainer,
  StyledCardContainer,
  StyledSectionCards,
} from "./elements";

export const AgencySelection = ({ title, description, image, ...props }) => {
  const cardStyle = {
    padding: "20px",
    borderRadius: "10px",
  };

  const SmallCardProps = {
    image: { src: "/img/pic1.png", alt: "" },
    title: "Brief",
    description:
      "Complete brief writing or simple guidance on what to include, we've got you covered",
    style: {
      width: "60%",
      backgroundColor: "#f9f9f9",
      ...cardStyle,
    },
  };

  const MediumCardProps = {
    image: { src: "/img/pic2.png", alt: "" },
    title: "Search",
    description:
      "In-depth agency search covering: criteria matching, door knocking and due-dilligence vetting",
    style: {
      width: "65%",
      backgroundColor: "#f4f4f4",
      ...cardStyle,
    },
  };

  const LargeCardProps = {
    image: { src: "/img/pic3.png", alt: "" },
    title: "Pitch",
    description:
      "Comprehensive pitch manegement, including comms, diary management and pitch hosting",
    style: {
      width: "70%",
      backgroundColor: "#f1f1f1",
      ...cardStyle,
    },
  };
  return (
    <>
      <StyledContainer {...props}>
        <StyledTextContainer>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
        </StyledTextContainer>

        <StyledCardContainer {...props}>
          <StyledImageContainer>
            <Image src={image.src} alt={image.alt} style={{ width: "58%"}} />
          </StyledImageContainer>
          <StyledSectionCards>
            <Card {...SmallCardProps} />
            <Card {...MediumCardProps} />
            <Card {...LargeCardProps} />
          </StyledSectionCards>
        </StyledCardContainer>
      </StyledContainer>
    </>
  );
};
