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
  return (
    <div className="row p-3">
      <label className="form-label">
        {camelCaseToSentenceCase(name)}
        {validations?.required && "*"}
      </label>

      {type === "select" ? (
        <select
          className="form-control form-control-sm"
          {...register(name, validations)}
        >
          {options?.map((option) => (
            <option value={option}>{camelCaseToSentenceCase(option)}</option>
          ))}
        </select>
      ) : (
        <input
          className="form-control form-control-sm"
          {...register(name, validations)}
          type={type || "text"}
        />
      )}

      {errors[name] && <div className="small text-danger">Invalid Input</div>}
    </div>
  );
}
