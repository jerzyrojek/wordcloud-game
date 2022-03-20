import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 0 16px;
`;
export const SummaryMessage = styled.h2`
  font-weight: 700;
  margin-bottom: 16px;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-weight: 700;
  margin-bottom: 16px;
`;

export const Score = styled.div`
  font-weight: 700;
  color: #64affa;
  font-size: 25px;
  margin-bottom: 24px;
`;

export const ButtonsWrapper = styled.div`
  font-size: 16px;
  display: flex;
  button:first-child {
    margin-right: 24px;
  }
`;
