type Props = {};
import { SubmitHandler, useForm } from "react-hook-form";
import CardContainer from "../../ui/CardContainer";
import FormInput from "../../ui/FormInput";
import { IProject } from "./model";

type Inputs = {
  example: string;
  exampleRequired: string;
  date: Date;
  time: Date;
};

export default function ProjectForm({}: Props) {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<IProject>();

  const onSubmit: SubmitHandler<IProject> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CardContainer>
        <FormInput
          {...{ register, errors }}
          name={"exampleRequired"}
          validations={{ required: true }}
        />

        <FormInput
          {...{ register, errors }}
          name={"date"}
          validations={{ required: true }}
          type="date"
        />

        <FormInput
          {...{ register, errors }}
          name={"time"}
          validations={{ required: true }}
          type="time"
        />
      </CardContainer>
      <input type="submit" />
    </form>
  );
}
