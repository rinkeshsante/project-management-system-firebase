export interface Issue {
  id: string;
  heading: string;
  assignee: string;
  creation_date: Date;
  late_modified: Date;

  discussion?: string;
  description?: string;
}
