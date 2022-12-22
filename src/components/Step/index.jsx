import React from "react";

import * as S from "./styled";

const Step = ({
  onBack,
  title,
  subtitle,
  hasBackButton,
  hasNextButton,
  children,
  handleSubmit,
}) => {
  return (
    <S.Step autoComplete="off" onSubmit={handleSubmit}>
      <S.StepHeader>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subtitle}</S.SubTitle>
      </S.StepHeader>
      <S.Body>{children}</S.Body>
      <S.StepFooter>
        {hasBackButton && (
          <S.GoBackButton onClick={onBack}>Go Back</S.GoBackButton>
        )}
        {hasNextButton ? (
          <S.GoNextButton>Next Step</S.GoNextButton>
        ) : (
          <S.ConfirmButton>Confirm</S.ConfirmButton>
        )}
      </S.StepFooter>
    </S.Step>
  );
};

export default Step;
