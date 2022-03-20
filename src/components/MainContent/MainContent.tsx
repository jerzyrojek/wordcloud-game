import React, { useState } from 'react';
import NameInputScreen from '../NameInputScreen';
import * as Styled from './styled';
import SelectWordsScreen from '../SelectWordsScreen';
import SummaryScreen from '../SummaryScreen';

const MainContent = () => {
  const name = localStorage.getItem('userName');
  const [nameProvided, setNameProvided] = useState<boolean>(Boolean(name));
  const [finalScore, setFinalScore] = useState<null | number>(null);

  return (
    <>
      <Styled.MainContentWrapper>
        {!nameProvided && <NameInputScreen setNameProvided={setNameProvided} />}
        {nameProvided && (
          <>
            {finalScore === null ? (
              <SelectWordsScreen setFinalScore={setFinalScore} />
            ) : (
              <SummaryScreen username={name} score={finalScore} />
            )}
          </>
        )}
      </Styled.MainContentWrapper>
    </>
  );
};

export default MainContent;
