import { SkillsTitle, Title, Line } from "../skills/skillsElement";
import ProjectCard from "./projectCard";
import {
  CardProject,
  ProjectContainer,
  ProjectContent,
} from "./projectsElements";
import { projectsTab } from "./projectsTab";

const Project = () => {
  return (
    <>
      <ProjectContainer id="project">
        <SkillsTitle>
          <Title>Mes Réalisations</Title>
          <Line />
        </SkillsTitle>
        <ProjectContent>
          {projectsTab.map((elements, key) => {
            return (
              <CardProject key={key}>
                <ProjectCard {...elements} />
              </CardProject>
            );
          })}
        </ProjectContent>
      </ProjectContainer>
    </>
  );
};

export default Project;
