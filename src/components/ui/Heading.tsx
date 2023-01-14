import { ReactNode } from "react";

type Props = {
  text: string;
  children?: ReactNode;
};

export default function Heading({ text, children }: Props) {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <h2>{text}</h2>
      <div>{children}</div>
    </div>
  );
}
