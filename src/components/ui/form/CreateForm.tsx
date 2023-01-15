import { FC } from "react";

type Props = {
  FormComponent: FC;
};

export default function CreateForm({ FormComponent }: Props) {
  return <FormComponent />;
}
