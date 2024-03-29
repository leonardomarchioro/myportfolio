import { projects } from "../../utils/projects";
import Card from "../Card";
import { Container, GroupContainer, Title } from "./styles";

const Projects: React.FC = () => {
  return (
    <Container id="ProjectsSection">
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
