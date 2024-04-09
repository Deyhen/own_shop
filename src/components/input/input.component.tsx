
import { FieldHookConfig, useField } from "formik";
import { ClassAttributes, InputHTMLAttributes } from "react";
import { InputProps } from "./input.props";

export const MyInput = ({label, ...props}: InputProps & InputHTMLAttributes<HTMLInputElement> &
    ClassAttributes<HTMLInputElement> &
    FieldHookConfig<string>): JSX.Element => {

    const [field, meta] = useField(props);
    return (
      <div className="flex flex-row w-ful p-4 ">
        <label className="flex flex-row mr-2 font-bold text-lg w-full">
            <span className="w-32 text-main">{label}</span>
            <input {...field} {...props} 
            className=" w-64 border-b-2 outline-none bg-bg border-element focus:shadow-lg focus:shadow-element text-element bg-b text-lg font-bold px-1 mr-4"
            autoComplete="off"/>
        </label>
        {meta.error && meta.touched && <div>{meta.error}</div>}
      </div>
    );
  }