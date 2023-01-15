import { ReactNode } from "react";

type Props = {
  image_url?: string;
  title?: string;
  footer?: ReactNode;
  children?: ReactNode;
};

export default function Card({ title, image_url, footer, children }: Props) {
  return (
    <div className="col p-1">
      <div className="card">
        {image_url && (
          <img src={image_url} className="card-img-top" alt={title} />
        )}
        <div className="card-body">
          {title && <h4 className="card-title">{title}</h4>}
          {children}
          <p className="card-text">{footer}</p>
        </div>
      </div>
    </div>
  );
}
