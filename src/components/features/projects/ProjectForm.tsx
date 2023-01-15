type Props = {};
import { SubmitHandler, useForm } from "react-hook-form";
import CardContainer from "../../ui/CardContainer";
import FormInput from "../../ui/FormInput";
import { IProject } from "./model";

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
          name={"heading"}
          validations={{ required: true }}
        />

        <FormInput
          {...{ register, errors }}
          name={"description"}
          type={"textarea"}
          validations={{}}
        />

        <FormInput
          {...{ register, errors }}
          name={"assignee"}
          type={"select"}
          options={["one", "two"]}
          validations={{ required: true }}
        />
      </CardContainer>
      <input type="submit" />
    </form>
  );
}
