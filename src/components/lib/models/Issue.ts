import { IModified } from "./modified";
export interface IIssue extends IModified {
  id: string;
  heading: string;
  assignee: string;
  creation_date: Date;

  description?: string;

  discussion?: string;
  logs?: string;
}
