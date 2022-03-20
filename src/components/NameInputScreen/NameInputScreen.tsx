import React, { useState } from 'react';
import * as Styled from './styled';
import { GlobalButton } from '../../globalStyles';

interface PropsType {
  setNameProvided: (b: boolean) => void;
}

const NameInputScreen = ({ setNameProvided }: PropsType) => {
  const [username, setUsername] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username.length < 3 || username.length > 50) {
      setError(true);
      return;
    }
    localStorage.setItem('userName', username);
    setNameProvided(true);
  };

  return (
    <>
      <Styled.Wrapper>
        <Styled.Title>Wordcloud game</Styled.Title>
        <Styled.InputWrapper onSubmit={(e) => handleSubmit(e)}>
          {error && (
            <Styled.Error>Should be between 3 and 50 characters</Styled.Error>
          )}
          <Styled.NameInput
            error={error}
            value={username}
            onBlur={(e) => setUsername(e.target.value.trim())}
            onChange={(e) => {
              setError(false);
              setUsername(e.target.value);
            }}
            placeholder="Enter your nickname here..."
          />
          <GlobalButton type="submit">play</GlobalButton>
        </Styled.InputWrapper>
      </Styled.Wrapper>
    </>
  );
};

export default NameInputScreen;
