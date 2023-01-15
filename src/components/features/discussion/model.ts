import { IModified } from "./../../lib/models/modified";
export interface IDiscussion extends IModified {
  comments: (ITextComment | IMediaComment)[];
}

export interface IComment {
  timestamp: Date;
  user: string;
}

export interface ITextComment extends IComment {
  text: string;
}

export interface IMediaComment extends IComment {
  image_url: string;
}
