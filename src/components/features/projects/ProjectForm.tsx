import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAddQuery from "../../../hooks/useAddQuery";
import CardContainer from "../../ui/CardContainer";
import FormInput from "../../ui/form/FormInput";
import { IProject } from "./model";

type Props = {
  defaults?: Partial<any>;
};

export default function ProjectForm({ defaults }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IProject>();

  useEffect(() => {
    reset({ ...defaults });
  }, [defaults]);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IProject> = (data) => {
    useAddQuery({
      collectionName: "projects",
      data,
      key: defaults?.id || undefined,
    }).then((key) => {
      console.log(key);
      navigate("/project/" + key);
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
