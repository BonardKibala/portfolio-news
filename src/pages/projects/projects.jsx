import { SkillsTitle, Title, Line } from "../skills/skillsElement";
import ProjectCard from "./projectCard";
import {
  CardProject,
  ProjectContainer,
  ProjectContent,
} from "./projectsElements";
import kd from "../../images/kd.png";
import bisofilm from "../../images/bisofilm.png";
import env from "../../images/env.png";
import portfolio from "../../images/portfolio.png";
import rec from "../../images/rec.png";

const projectsTab = [
  {
    title: "Site web Kinshasa Digital",
    image: kd,
    createdAt: "mars 14, 2021",
    description:
      "Ce projet consistait à la réprodution du site internet de l'entreprise numérique basé à Kinshasa, Kinshasa Digital. Un grand projet qui m'a vallu la satisfaction du client.",
  },
  {
    title: "BisoFilm (Allociné)",
    image: bisofilm,
    createdAt: "mars 14, 2021",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    title: "Site web Environews",
    image: env,
    createdAt: "mars 14, 2021",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    title: "Portofolio Bonard Kibala",
    image: portfolio,
    createdAt: "mars 14, 2021",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    title: "Gestion de la population",
    image: rec,
    createdAt: "mars 14, 2021",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    title: "Portofolio Bonard Kibala",
    image: portfolio,
    createdAt: "mars 14, 2021",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
];

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
