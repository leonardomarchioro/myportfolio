import { Tooltip } from "@nextui-org/react";

import {
  SiCss3,
  SiDjango,
  SiDocker,
  SiExpress,
  SiGit,
  SiHeroku,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiStyledcomponents,
  SiTypescript,
  SiGithub,
  SiInsomnia,
  SiRedux,
} from "react-icons/si";
import { useTheme } from "../../styles/theme/themeProvider";
import { Container, ContainerTechs, SCard, Title } from "./styles";

const techsData = [
  {
    icon: SiHtml5,
    tooltip: "HTML5",
  },
  {
    icon: SiCss3,
    tooltip: "CSS3",
  },
  {
    icon: SiJavascript,
    tooltip: "JavaScript",
  },
  {
    icon: SiTypescript,
    tooltip: "TypeScript",
  },
  {
    icon: SiReact,
    tooltip: "ReactJS",
  },
  {
    icon: SiRedux,
    tooltip: "Redux",
  },
  {
    icon: SiStyledcomponents,
    tooltip: "Styled-components",
  },
  {
    icon: SiNodedotjs,
    tooltip: "NodeJS",
  },
  {
    icon: SiExpress,
    tooltip: "Express",
  },
  {
    icon: SiPrisma,
    tooltip: "Prisma",
  },
  {
    icon: SiPostgresql,
    tooltip: "PostgreSQL",
  },
  {
    icon: SiPython,
    tooltip: "Python",
  },
  {
    icon: SiDjango,
    tooltip: "Django",
  },
  {
    icon: SiDocker,
    tooltip: "Docker",
  },
  {
    icon: SiGit,
    tooltip: "Git",
  },
  {
    icon: SiGithub,
    tooltip: "GitHub",
  },

  {
    icon: SiHeroku,
    tooltip: "Heroku",
  },
  {
    icon: SiInsomnia,
    tooltip: "Insomnia",
  },
];

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
