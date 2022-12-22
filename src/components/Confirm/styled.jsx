import styled from "styled-components";

export const Confirm = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MessageBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 12px;
`;

export const Icon = styled.img``;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
`;

export const Description = styled.p`
  font-size: 14px;
  width: 60%;
  color: var(--cool-gray);
`;
