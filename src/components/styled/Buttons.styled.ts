import styled from "styled-components";

export const BasicButton = styled.button`
  border-radius: var(--BTN-BORDER-RADIUS);
  font-weight: 600;
  text-align: center;
  padding: var(--BTN-PADDING-Y) var(--BTN-PADDING-X);
`;

export const PrimaryButton = styled(BasicButton)`
  background: var(--ACCENT-CLR);
  box-shadow: var(--BTN-BOX-SHADOW);
  color: #fff;
`;
