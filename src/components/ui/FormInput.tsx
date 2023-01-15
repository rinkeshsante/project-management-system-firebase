import { camelCaseToSentenceCase } from "../../utils";

type Props = {
  register: any;
  errors: any;
  name: string;
  type?: string;
  options?: string[];
  span?: number;

  validations?: {
    required?: boolean;
    maxlength?: number;
    pattern?: RegExp;
  };
};

export default function FormInput({
  register,
  errors,
  type,
  name,
  validations,
  options,
  span,
}: Props) {
  function getInputType() {
    switch (type) {
      case "select":
        return (
          <select
            defaultValue={""}
            className="form-control form-control-sm"
            {...register(name, validations)}
          >
            <option value={""} disabled>
              ---
            </option>

            {options?.map((option) => (
              <option key={option} value={option}>
                {camelCaseToSentenceCase(option)}
              </option>
            ))}
          </select>
        );
      case "textarea":
        return (
          <textarea
            className="form-control form-control-sm"
            {...register(name, validations)}
            type={type || "text"}
          />
        );
      default:
        return (
          <input
            className="form-control form-control-sm"
            {...register(name, validations)}
            type={type || "text"}
          />
        );
    }
  }

  return (
    <div className="col p-3 justify-content-start">
      <label className="form-label">
        {camelCaseToSentenceCase(name)}
        {validations?.required && "*"}
      </label>
      {getInputType()}
      {errors[name] && <div className="small text-danger">Invalid Input</div>}
    </div>
  );
}
