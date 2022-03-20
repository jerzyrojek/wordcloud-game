import React from 'react';
import * as Styled from './styled';

interface PropsType {
  onClick: () => void;
  word: string;
  selected: boolean;
  status: 'Good' | 'Bad' | null;
  position: string;
}

const WordElement = ({
  word,
  onClick,
  selected,
  status,
  position,
}: PropsType) => {
  return (
    <Styled.MainWrapper position={position} selected={selected}>
      <Styled.WordWrapper status={status} onClick={onClick}>
        {status && <Styled.Status status={status}>{status}</Styled.Status>}
        {word}
      </Styled.WordWrapper>
    </Styled.MainWrapper>
  );
};

export default WordElement;
