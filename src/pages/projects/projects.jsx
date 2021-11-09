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
    lien: "https://confident-feynman-185740.netlify.app/",
  },
  {
    title: "BisoFilm (Allociné)",
    image: bisofilm,
    createdAt: "mars 14, 2021",
    description:
      "BisoFilm est le clone d'un site Allociné dont l'onbject est de mettre à la disposition du public tous les films qui les interréssent, leurs détails, les acteurs ainsi que leurs biographies.",
    lien: "https://bonard-kibala-allocine.netlify.app/",
  },
  {
    title: "Site web Environews",
    image: env,
    createdAt: "mars 14, 2021",
    description:
      "Ce projet a consisté de mettre en place le nouveau site internet d'environews (un site de mise en ligne du contenu environnemental) pour assurer de plus en plus le trafic sur internet",
    lien: "https://a1environewsfinal.herokuapp.com/",
  },
  {
    title: "Portofolio Bonard Kibala",
    image: portfolio,
    createdAt: "mars 14, 2021",
    description:
      "C'est mon site personnel(portfolio ou site vitrine) exposé sur la toile mondiale (Internet) pour faire part de mes compétences (hardskills et softskills) et réalisations",
    lien: "https://bonard-portofolio.netlify.app/",
  },
  {
    title: "Gestion de la population",
    image: rec,
    createdAt: "mars 14, 2021",
    description:
      "Cette application a été réalisé dans le cadre de mon travail de Fin du cycle de graduat à l'université de kinshasa au département de mathématiques et informatioque/faulté de sciences.",
    lien: "#",
  },
  {
    title: "Portofolio Bonard Kibala",
    image: portfolio,
    createdAt: "mars 14, 2021",
    description:
      "C'est mon site personnel(portfolio ou site vitrine) exposé sur la toile mondiale (Internet) pour faire part de mes compétences (hardskills et softskills) et réalisations",
    lien: "https://bonard-portofolio.netlify.app/",
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
