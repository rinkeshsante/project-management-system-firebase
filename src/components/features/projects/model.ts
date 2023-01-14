export interface IProject {
  id: string;

  name: string;
  start_date: Date;
  end_date: Date;

  manager: string;
  members: string[];
}

export const projects: IProject[] = [
  {
    id: "1",
    name: "Project 1",
    end_date: new Date(),
    start_date: new Date(),
    manager: "",
    members: [],
  },
  {
    id: "2",
    name: "Project 2",
    end_date: new Date(),
    start_date: new Date(),
    manager: "",
    members: [],
  },
];
