import { styled } from "frontity";

const Blocker = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: rgba(69, 72, 89, 0.3);
  pointer-events: none;
  z-index: 5;
`;

export default Blocker;
