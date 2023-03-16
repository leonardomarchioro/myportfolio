import { Collapse, Link } from "@nextui-org/react";
import { IProject } from "../../utils/projects";

import { SiGithub } from "react-icons/si";
import { IoArrowRedoOutline } from "react-icons/io5";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";
import {
  ContainerLinks,
  List,
  SLink,
  SubTitle,
  Title,
  SCollapse,
  Text,
} from "./styles";
import { useTheme } from "../../styles/theme/themeProvider";

const Card: React.FC<{ project: IProject }> = ({ project }) => {
  const { theme } = useTheme();

  return (
    <SCollapse
      title={<Title>{project.name}</Title>}
      subtitle={<ProdLinks repo={project.repo} link={project.link} />}
      arrowIcon={
        <HiOutlineChevronDoubleLeft
          size={25}
          color={theme.titleColors.primary}
        />
      }
      bordered
    >
      <TechsList techs={project.techs} />
        {project.about.map((paragraph, i) => (
          <Text key={i}>{paragraph}</Text>
        ))}
    </SCollapse>
  );
};

export default Card;

const TechsList: React.FC<{ techs: string[] }> = ({ techs }) => {
  return (
    <div>
      <SubTitle>Ferramentas:</SubTitle>
      <List>
        {techs.map((tech, i) => (
          <li key={i}>{tech}</li>
        ))}
      </List>
    </div>
  );
};

const ProdLinks: React.FC<{ repo: string; link: string }> = ({
  repo,
  link,
}) => {
  return (
    <ContainerLinks>
      <SLink href={repo}>
        <>
          <SiGithub />
          <span>GitHub</span>
        </>
      </SLink>
      <SLink href={link}>
        <>
          <IoArrowRedoOutline />
          <span>Aplicação</span>
        </>
      </SLink>
    </ContainerLinks>
  );
};
