import React from "react";

import { Container, Text, Title } from "./styles";

const About: React.FC = () => {
  return (
    <Container>
      <Title>Sobre mim</Title>
      <Text>
        Olá me chamo Leonardo tenho 20 anos e meu contato com tecnologia começou
        logo na infância com jogos e depois com a internet no querido Orkut,
        sempre estive relacionado nesse mundo mas nunca havia entrado de fato,
        mas isso mudou quando decidi fazer uma mudança de planos na minha vida
        em 2020, comecei a estudar por conta própria mas ainda sem um direção
        especifica e sem uma evolução constante, em setembro de 2021 entrei para
        Kenzie e mudou completamente minha rotina, finalmente consegui achar uma
        direção e segui-la e finalmente estava vendo meu avanço com o passar dos
        dias e me identifiquei ainda mais com a programação.
      </Text>
    </Container>
  );
};

export default About;
