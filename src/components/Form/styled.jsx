import styled from "styled-components";

export const MultiStepFrom = styled.div`
  display: flex;
  gap: 12px;
  padding: 12px;
  background-color: var(--white);
  min-height: 60vh;
  width: 50vw;
  box-shadow: 0 5px 10px 10px rgba(0, 0, 0, 0.05);
  border-radius: 12px;


  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%
    padding: 0;
    flex-direction: column;
    border-radius: 0;
  }
`;
