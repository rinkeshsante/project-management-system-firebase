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
      body={`started at:${project.creation_date.toDateString()}, last Modified: ${project.last_modified.toDateString()}`}
    >
      <NavLink to={"/project/" + project.id}>
        {<button className="btn btn-primary btn-sm">More...</button>}
      </NavLink>
    </Card>
  );
}
