import styled, { css } from "styled-components";

import SidebarBg from "/assets/bg-sidebar-desktop.svg";

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  width: 35%;
  padding: 36px;
  border-radius: 8px;
  background-image: url(${SidebarBg});
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--white);

  @media only screen and (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30vh;
    background-size: cover;
  }
`;

export const ItemNumber = styled.span`
  width: 32px;
  height: 32px;
  border: 1px solid var(--white);
  font-weight: 500;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  ${ItemNumber} {
    ${({ isActive }) =>
      isActive &&
      css`
        background-color: var(--magnolia);
        color: var(--marine-blue);
        border-color: var(--magnolia);
      `}
  }
`;

export const ItemBody = styled.div``;

export const SubTitle = styled.h5`
  font-size: 13px;
  text-transform: uppercase;
  opacity: 0.75;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-weight: 500;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
