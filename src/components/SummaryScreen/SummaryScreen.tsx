import React from 'react';
import * as Styled from './styled';

interface PropsType {
  username: string | null;
  score: number;
}

const SummaryScreen = ({ username, score }: PropsType) => {
  const chooseSummaryMessage = () => {
    if (score < 0) {
      return 'Keep playing to get better';
    }
    if (score === 0) {
      return 'Better luck next time';
    }
    if (score > 0) {
      return 'Congratulations';
    }
  };

  return (
    <>
      <Styled.Wrapper>
        <Styled.SummaryMessage>
          {chooseSummaryMessage()}, {username}!
        </Styled.SummaryMessage>
        <Styled.Subtitle>Your score:</Styled.Subtitle>
        <Styled.Score>{score} points</Styled.Score>
      </Styled.Wrapper>
    </>
  );
};

export default SummaryScreen;
