import { IModified } from "./modified";
export interface IIssue extends IModified {
  id: string;
  heading: string;
  creation_date: Date;
  deadline?: string;

  description?: string;

  discussion?: string;
  logs?: string;
}
