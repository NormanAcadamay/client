
// rafce
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const TextAeraInput = ({register,name,type,placeholder,errors}) => {
  return (
    <div className="md-2">
      <Label htmlFor={name} className='capitalize'>{name}</Label>
      <Textarea
        {...register(name)}
        rows={5}
        type={type}
        placeholder={placeholder}
        className={`${errors[name] && "border-red-500"}`}
      />
       {
      errors[name] && (<p className="text-red-500 text-sm">{errors[name].message}</p>)
      }
    </div>
  );
};

export default TextAeraInput;
