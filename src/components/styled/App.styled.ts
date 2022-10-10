import styled from "styled-components";

export const PageMain = styled.main`
  display: grid;
  place-items: center;
  height: 100vh;
  padding: var(--MAIN-PADDING-Y) var(--MAIN-PADDING-X);
  width: 100%;
`;

export const PDFViewerContainer = styled.div<{ fullScreen: boolean }>`
  background: #cbffd355;
  border-radius: ${({ fullScreen }) => (fullScreen ? 0 : "10px")};
  box-shadow: inset 0 0 5px #0003;
  display: grid;
  height: 100%;
  overflow: hidden;
  place-items: center;
  position: ${({ fullScreen }) => (fullScreen ? "fixed" : "relative")};
  width: ${({ fullScreen }) =>
    fullScreen ? "100%" : "clamp(20rem, 20rem + 15vw, 50rem)"};
`;

export const BottomBar = styled.div`
  align-items: center;
  background: #0002;
  display: flex;
  gap: 1em;
  justify-content: center;
  padding: 0.5em 1em;
  pointer-events: none;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  & > * {
    pointer-events: all;
    z-index: 1;
  }
`;

export const NoPDFContainer = styled.div`
  color: #434343;
  display: grid;
  font-size: 1.5rem;
  font-weight: 600;
  place-items: center;
`;
