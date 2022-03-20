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
    <Styled.WordWrapper position={position} selected={selected}>
      {status && <Styled.Status status={status}>{status}</Styled.Status>}
      <Styled.Word status={status} onClick={onClick}>
        {word}
      </Styled.Word>
    </Styled.WordWrapper>
  );
};

export default WordElement;
