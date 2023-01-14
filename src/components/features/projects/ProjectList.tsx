import CardContainer from "../../ui/CardContainer";
import { projects } from "./model";
import ProjectCard from "./ProjectCard";

type Props = {};

export default function ProjectList({}: Props) {
  return (
    <>
      <CardContainer title="Projects">
        {projects?.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </CardContainer>
    </>
  );
}
