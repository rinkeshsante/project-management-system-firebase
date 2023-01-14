import { ReactNode } from "react";

type Props = {
  image_url?: string;
  title: string;
  body: string;
  children?: ReactNode;
};

export default function Card({ title, image_url, body, children }: Props) {
  return (
    <div className="col p-1">
      <div className="card">
        <div className="card-body">
          {image_url && (
            <img src={image_url} className="card-img-top" alt={title} />
          )}
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{body}</p>
          {children}
        </div>
      </div>
    </div>
  );
}
