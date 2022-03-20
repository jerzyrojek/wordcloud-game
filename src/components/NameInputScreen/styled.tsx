import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 324px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;

  @media (min-width: 768px) {
    width: 400px;
    padding: 0;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  color: #000000ff;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

export const InputWrapper = styled.form`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NameInput = styled.input<{ error: boolean }>`
  border-radius: 5px;
  border: 1px solid ${({ error }) => (error ? '#ff0000ff' : '#d7d7d7')};
  width: 100%;
  padding: 17px 10px;
  margin-bottom: 16px;
`;

export const Error = styled.span`
  color: #ff0000ff;
  text-align: center;
  width: 100%;
  position: absolute;
  top: -20px;
`;
