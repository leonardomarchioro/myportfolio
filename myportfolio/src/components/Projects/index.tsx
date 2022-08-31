import { Collapse } from "@nextui-org/react";
import { projects } from "../../utils/projects";
import Card from "../Card";
import { Container, GroupContainer, Title } from "./styles";

const Projects: React.FC = () => {
  return (
    <Container>
      <Title>Projetos</Title>
      <GroupContainer>
        {projects.map((prod, i) => (
          <Card key={i} project={prod} />
        ))}
      </GroupContainer>
    </Container>
  );
};

export default Projects;
