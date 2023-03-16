import React from "react";

import { Container, Text, Title } from "./styles";
import aboutMe from "./aboutMe";

const About: React.FC = () => {
  return (
    <Container>
      <Title>Sobre mim</Title>
      {aboutMe.map((paragraph, i) => (
        <Text key={i}>{paragraph}</Text>
      ))}
    </Container>
  );
};

export default About;
