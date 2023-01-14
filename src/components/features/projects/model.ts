import { Issue } from "../../lib/models/Issue";

export interface IProject extends Issue {}

export const projects: IProject[] = [
  {
    id: "1",
    heading: "Project 1",
    creation_date: new Date(),
    late_modified: new Date(),
    assignee: "",
  },
  {
    id: "2",
    heading: "Project 2",
    creation_date: new Date(),
    late_modified: new Date(),
    assignee: "",
  },
];
