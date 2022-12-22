import { useState } from "react";
import Step from "../Step";
import FormJson from "../../data/form.json";
import { Switch } from "antd";
import {
  Icons,
  DEFAULT_PLAN,
  DEFAULT_BILLING_TYPE,
  MONTHLY,
  YEARLY,
} from "./constants";

import * as S from "./styled";
const { step2 } = FormJson;

const Step2 = ({ onStepSubmit, formData, ...props }) => {
  const [plan, setPlan] = useState(formData.step2.plan ?? DEFAULT_PLAN);
  const [billingType, setBillingType] = useState(
    formData.step2.billingType ?? DEFAULT_BILLING_TYPE
  );

  const changePlan = (newPlan) => {
    setPlan(newPlan);
  };

  const changeBillingType = () => {
    if (billingType === MONTHLY) {
      setBillingType(YEARLY);
    } else {
      setBillingType(MONTHLY);
    }
  };

  const isSelected = () => {};

  const onSubmit = () => {
    onStepSubmit("step2", "step3", {
      billingType,
      plan,
    });
  };

  return (
    <Step {...props} handleSubmit={onSubmit}>
      <S.Step2>
        <S.RadioGroup>
          {step2[billingType].map((item) => (
            <S.RadioLabel key={item.id} isSelected={item.id === plan.id}>
              <S.RadioInput
                name="plan-type"
                type="radio"
                onChange={() => changePlan(item)}
              />
              <S.Icon src={Icons[item.id]} />
              <S.Title>{item.title}</S.Title>
              <S.SubTitle>{item.price}</S.SubTitle>
              {billingType === YEARLY && (
                <S.Description>{item.description}</S.Description>
              )}
            </S.RadioLabel>
          ))}
        </S.RadioGroup>
        <S.BillingGroup>
          <S.BillingToggleText>Monthly</S.BillingToggleText>
          <Switch onClick={changeBillingType}/>
          <S.BillingToggleText>Yearly</S.BillingToggleText>
        </S.BillingGroup>
      </S.Step2>
    </Step>
  );
};

export default Step2;
