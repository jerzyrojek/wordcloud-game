import styled from 'styled-components';

export const MainWrapper = styled.div<{ selected: boolean; position: string }>`
  color: ${({ selected }) => selected && '#a09f9f'};
  margin: 10px;
  height: 20px;
  width: 200px;
  display: flex;
  justify-content: ${({ position }) => position};
  align-self: ${({ position }) => position};
  align-items: center;
`;

export const WordWrapper = styled.div<{ status: 'Good' | 'Bad' | null }>`
  position: relative;
  color: ${({ status }) =>
    status && (status === 'Good' ? '#6dd06d' : '#FF0000FF')};
  cursor: pointer;
  font-weight: 600;
  font-size: 20px;
  width: fit-content;
`;

export const Status = styled.span<{ status: 'Good' | 'Bad' | null }>`
  color: ${({ status }) =>
    status && (status === 'Good' ? '#048004' : '#fd9a9a')};
  position: absolute;
  font-weight: 600;
  text-align: center;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
`;
