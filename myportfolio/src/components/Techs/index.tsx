import { Tooltip } from "@nextui-org/react";

import { useTheme } from "../../styles/theme/themeProvider";
import { Container, ContainerTechs, SCard, Title } from "./styles";
import techsData from "./techsData";

const Techs: React.FC = () => {
  const { mode } = useTheme();

  return (
    <ContainerTechs id="TechsSection">
      <Title>Habilidades</Title>
      <Container>
        {techsData.map((item, i) => (
          <Tooltip
            key={i}
            content={item.tooltip}
            color={mode === "light" ? "default" : "invert"}
          >
            <SCard>
              <item.icon />
            </SCard>
          </Tooltip>
        ))}
      </Container>
    </ContainerTechs>
  );
};

export default Techs;
