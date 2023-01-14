import { ReactNode } from "react";
import Heading from "./Heading";

type Props = {
  title?: string;
  children: ReactNode;
};

export default function CardContainer({ title, children }: Props) {
  return (
    <>
      {title && (
        <Heading text={title}>
          <button className="btn btn-primary">Add</button>
        </Heading>
      )}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        {children}
      </div>
    </>
  );
}
