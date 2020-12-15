import styled, { keyframes } from 'styled-components';
import { FlexMixin } from './Mixins';

const opacity = keyframes`
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

export const Loading = styled.div`
  width: 100%;
  height: 80vh;
  ${FlexMixin}
  justify-content: center;
`;

export const LdsGrid = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  & div {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.purple};
    animation: ${opacity} 1.2s linear infinite;
    &:nth-child(1) {
      top: 8px;
      left: 8px;
      animation-delay: 0s;
    }
    &:nth-child(2) {
      top: 8px;
      left: 32px;
      animation-delay: -0.4s;
    }
    &:nth-child(3) {
      top: 8px;
      left: 56px;
      animation-delay: -0.8s;
    }
    &:nth-child(4) {
      top: 32px;
      left: 8px;
      animation-delay: -0.4s;
    }
    &:nth-child(5) {
      top: 32px;
      left: 32px;
      animation-delay: -0.8s;
    }
    &:nth-child(6) {
      top: 32px;
      left: 56px;
      animation-delay: -1.2s;
    }
    &:nth-child(7) {
      top: 56px;
      left: 8px;
      animation-delay: -0.8s;
    }
    &:nth-child(8) {
      top: 56px;
      left: 32px;
      animation-delay: -1.2s;
    }
    &:nth-child(9) {
      top: 56px;
      left: 56px;
      animation-delay: -1.6s;
    }
  }
`;
