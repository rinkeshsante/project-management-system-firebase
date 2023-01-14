import Card from "../../ui/Card";
import { IProject } from "./model";

type Props = {
  project: IProject;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Card
      title={project.name}
      body={`${project.start_date.toDateString()} to ${project.end_date.toDateString()}`}
    >
      {<button className="btn btn-primary btn-sm">More...</button>}
    </Card>
  );
}
