import { IIssue } from "../../lib/models/Issue";
import { ITask } from "../../lib/models/Task";

export interface IFeature extends IIssue, ITask {}

export const features: IFeature[] = [
  {
    id: "1",
    assignee: "u1",
    creation_date: new Date(),
    heading: "Create basic setup",
    last_modified: new Date(),
    status: "CREATED",
  },
];
