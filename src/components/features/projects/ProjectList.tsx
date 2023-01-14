import { Link } from "react-router-dom";
import CardContainer from "../../ui/CardContainer";
import { projects } from "./model";
import ProjectCard from "./ProjectCard";

type Props = {};

export default function ProjectList({}: Props) {
  return (
    <>
      <CardContainer
        title="Projects"
        action={
          <Link to={"/project/add"} className="btn btn-sm btn-primary">
            Add
          </Link>
        }
      >
        {projects?.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </CardContainer>
    </>
  );
}
