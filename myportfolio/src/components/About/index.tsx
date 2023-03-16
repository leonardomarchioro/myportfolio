import React from "react";

import { Container, Text, Title } from "./styles";
import aboutMe from "./aboutMe";

const About: React.FC = () => {
  return (
    <Container>
      <Title>Sobre mim</Title>
      {aboutMe.map(paragraph => (
        <Text>{paragraph}</Text>
      ))}
    </Container>
  );
};

export default About;
