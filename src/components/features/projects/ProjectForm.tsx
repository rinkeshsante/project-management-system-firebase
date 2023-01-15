type Props = {};
import { async } from "@firebase/util";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAddQuery from "../../../hooks/useAddQuery";
import CardContainer from "../../ui/CardContainer";
import FormInput from "../../ui/form/FormInput";
import { IProject } from "./model";

export default function ProjectForm({}: Props) {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<IProject>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IProject> = (data) => {
    useAddQuery({
      collectionName: "projects",
      data,
    }).then(() => {
      navigate("/project");
    });
  };

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
          name={"deadline"}
          type={"Date"}
          validations={{ required: true }}
        />
      </CardContainer>
      <input type="submit" />
    </form>
  );
}
