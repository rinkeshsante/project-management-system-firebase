import { NavLink } from "react-router-dom";
import Card from "../../ui/Card";
import { IProject } from "./model";

type Props = {
  project: IProject;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Card
      title={project.heading}
      footer={
        <NavLink to={"/project/" + project.id}>
          <button className="btn btn-primary btn-sm">More</button>
        </NavLink>
      }
    >
      deadline: {project.deadline}
      <br />
      {project.description}
    </Card>
  );
}
