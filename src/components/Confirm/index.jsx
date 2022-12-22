import React from "react";
import ThankYou from "/assets/icon-thank-you.svg";

import * as S from "./styled";

const Confirm = () => {
  return (
    <S.Confirm>
      <S.MessageBody>
        <S.Icon src={ThankYou} />
        <S.Title>Thank you!</S.Title>
        <S.Description>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </S.Description>
      </S.MessageBody>
    </S.Confirm>
  );
};

export default Confirm;
