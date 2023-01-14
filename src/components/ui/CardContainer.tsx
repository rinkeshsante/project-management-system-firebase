import { ReactNode } from "react";
import Heading from "./Heading";

type Props = {
  title?: string;
  children: ReactNode;
  action?: ReactNode;
};

export default function CardContainer({ title, action, children }: Props) {
  return (
    <>
      {title && <Heading text={title}>{action}</Heading>}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        {children}
      </div>
    </>
  );
}
