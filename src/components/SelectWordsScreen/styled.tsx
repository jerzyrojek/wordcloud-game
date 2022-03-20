import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
`;

export const Loader = styled.div`
  width: 100px;
  height: 100px;
  border: 10px solid #f1f0f0;
  border-top: 10px solid #2882d9;
  border-radius: 50%;
  animation: rotate 3s linear infinite;
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const Question = styled.h2`
  margin-bottom: 16px;
  font-weight: 700;
`;

export const GameBox = styled.div`
  width: 100%;
  margin-bottom: 32px;
  max-width: 700px;
  height: auto;
  min-height: 400px;
  border: 1px solid #000000;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;
