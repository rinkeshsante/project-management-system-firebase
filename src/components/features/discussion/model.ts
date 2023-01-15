import { IModified } from "./../../lib/models/modified";
export interface IDiscussion extends IModified {
  id: string;
  comments: ITextComment | IMediaComment;
}

export interface IComment {
  id: string;
  timestamp: Date;
  user: string;
  linked_by: string[];
}

export interface ITextComment extends IComment {
  text: string;
}

export interface IMediaComment extends IComment {
  image_url: string;
}
