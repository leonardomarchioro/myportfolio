import React from "react";
import { Container, ScroolTop, Text } from "./styles";
import { BiUpArrow } from "react-icons/bi";

const Footer: React.FC = () => {
  return (
    <Container>
      <ScroolTop
        to="TopSection"
        activeClass="active"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <BiUpArrow size={30} />
      </ScroolTop>
      <Text>by Leonardo Marchioro</Text>
    </Container>
  );
};

export default Footer;
