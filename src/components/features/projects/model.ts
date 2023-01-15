import { IIssue } from "../../lib/models/Issue";

export interface IProject extends IIssue {
  members: string[];
}

export const projects: IProject[] = [
  {
    id: "1",
    heading: "Project 1",
    creation_date: new Date(),
    last_modified: new Date(),
    members: [],
  },
  {
    id: "2",
    heading: "Project 2",
    creation_date: new Date(),
    last_modified: new Date(),
    members: [],
  },
];
