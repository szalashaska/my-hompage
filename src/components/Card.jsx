import styled from "styled-components";
import { Heading2, LinkStyled, Paragraph } from "../GlobalStyles";

const CardStyled = styled.div`
  background: linear-gradient(45deg, #3f3131, black, #2b051a);
  padding: 2rem 1.5rem 5em 1.5rem;
  width: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 15px #3f3131;
  position: relative;
  &:hover a {
    transform: scale(1.05);
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }
  @media screen and (min-width: 1200px) {
    width: 50%;
  }
`;
const Image = styled.img`
  aspect-ratio: 1/1;
  border-radius: 20px;
  object-fit: cover;
  overflow: hidden;
`;

const Heading = styled(Heading2)`
  margin-block: 1rem;
  @media screen and (min-width: 450px) {
    min-height: 2.4em;
  }
`;

const LinkContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translateX(50%);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Link = styled(LinkStyled)`
  &:hover {
    color: #f13a3a;
    letter-spacing: 0.25px;
  }
`;

const Card = ({ img, heading, text, link, github }) => {
  return (
    <CardStyled>
      <Image src={img} />
      <Heading>{heading}</Heading>
      <Paragraph>{text}</Paragraph>
      <LinkContainer>
        <Link href={link} target="_blank" rel="noopener noreferrer">
          Check out live
        </Link>
        <Link href={github} target="_blank" rel="noopener noreferrer">
          See on github
        </Link>
      </LinkContainer>
    </CardStyled>
  );
};

export default Card;
