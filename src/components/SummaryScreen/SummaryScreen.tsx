import React from 'react';
import * as Styled from './styled';
import { GlobalButton } from '../../globalStyles';

interface PropsType {
  username: string | null;
  score: number;
  resetScore: () => void;
  setNameProvided: (a: boolean) => void;
}

const SummaryScreen = ({
  username,
  score,
  resetScore,
  setNameProvided,
}: PropsType) => {
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
        <Styled.ButtonsWrapper>
          <GlobalButton onClick={() => resetScore()}>play again</GlobalButton>
          <GlobalButton
            onClick={() => {
              localStorage.removeItem('userName');
              setNameProvided(false);
              resetScore();
            }}
          >
            change user
          </GlobalButton>
        </Styled.ButtonsWrapper>
      </Styled.Wrapper>
    </>
  );
};

export default SummaryScreen;
