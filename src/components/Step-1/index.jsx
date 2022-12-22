import { useState } from "react";

import Step from "../Step";
import FormJson from "../../data/form.json";

import * as S from "./styled";

const Step1 = ({ onStepSubmit, formData, ...props }) => {
  const { step1 } = FormJson;
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formProperties = Object.fromEntries(formData);

    onStepSubmit("step1", "step2", formProperties);
  };

  return (
    <Step {...props} handleSubmit={handleSubmit}>
      <S.Step1>
        {step1.map((item) => (
          <S.FormItem key={item.id} hasError={hasError}>
            <S.Label htmlFor={item.id}>{item.label}</S.Label>
            <S.Input
              id={item.id}
              type={item.type}
              placeholder={item.placeholder}
              name={item.id}
              defaultValue={formData.step1[item.id]}
              required
            />
            {hasError && (
              <S.ErrorMessage>This field is required</S.ErrorMessage>
            )}
          </S.FormItem>
        ))}
      </S.Step1>
    </Step>
  );
};

export default Step1;
