import React, { useEffect, useState } from 'react';
import * as Styled from './styled';
import { GlobalButton } from '../../globalStyles';
import WordElement from '../WordElement';

interface QuestionObject {
  question: string;
  all_words: string[];
  good_words: string[];
}

interface PropsType {
  setFinalScore: (a: number) => void;
}

interface Results {
  goodAnswers: string[];
  wrongAnswers: string[];
  missedGoodAnswers: string[];
}

const SelectWordsScreen = ({ setFinalScore }: PropsType) => {
  const [randomQuestion, setRandomQuestion] = useState<null | QuestionObject>(
    null,
  );
  const [allWordsWithPosition, setAllWordsWithPosition] = useState([
    { word: '', position: '' },
  ]);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [answersChecked, setAnswersChecked] = useState<boolean>(false);
  const [selectedWordsResults, setSelectedWordsResults] = useState<Results>({
    goodAnswers: [],
    wrongAnswers: [],
    missedGoodAnswers: [],
  });

  const fetchData = async () => {
    const response = await fetch('apiDataMock.json');
    //mock file placed in the public folder to bypass server file serving for the sake of this task
    return await response.json();
  };

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    //timeout set to mimic loading time on api call
    fetchData().then((res) => {
      timeout = setTimeout(
        () => setRandomQuestion(res[Math.floor(Math.random() * res.length)]),
        2 * 1000,
      );
    });
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (randomQuestion) {
      const positionArray = ['flex-start', 'center', 'flex-end'];
      const arrayWithPositions = randomQuestion.all_words.map((word) => {
        return {
          word: word,
          position: positionArray[Math.floor(Math.random() * (2 + 1))],
        };
      });
      setAllWordsWithPosition(arrayWithPositions);
    }
  }, [randomQuestion]);

  const selectWord = (clickedWord: string) => {
    if (answersChecked) {
      return;
    }
    if (selectedWords.indexOf(clickedWord) === -1) {
      setSelectedWords((prevState) => [...prevState, clickedWord]);
    } else {
      setSelectedWords(selectedWords.filter((word) => word !== clickedWord));
    }
  };

  const checkAnswers = () => {
    const goodAnswersArray: string[] = [];
    const wrongAnswersArray: string[] = [];
    const missedGoodAnswersArray: string[] = [];
    selectedWords.map((word) => {
      if (randomQuestion?.good_words.includes(word)) {
        goodAnswersArray.push(word);
      } else {
        wrongAnswersArray.push(word);
      }
    });

    randomQuestion?.good_words.map((el) => {
      if (!selectedWords.includes(el)) {
        missedGoodAnswersArray.push(el);
      }
    });

    setSelectedWordsResults({
      goodAnswers: goodAnswersArray,
      wrongAnswers: wrongAnswersArray,
      missedGoodAnswers: missedGoodAnswersArray,
    });
    setAnswersChecked(true);
  };

  const answerStatusAfterChecking = (word: string) => {
    if (selectedWordsResults.goodAnswers.includes(word)) {
      return 'Good';
    }
    if (selectedWordsResults.wrongAnswers.includes(word)) {
      return 'Bad';
    }
    return null;
  };

  const calculateScore = () => {
    return (
      selectedWordsResults.goodAnswers.length * 2 -
      (selectedWordsResults.wrongAnswers.length +
        selectedWordsResults.missedGoodAnswers.length)
    );
  };

  return (
    <Styled.Wrapper>
      {!randomQuestion ? (
        <Styled.Loader />
      ) : (
        <>
          <Styled.Question>
            {randomQuestion.question.charAt(0).toUpperCase() +
              randomQuestion.question.slice(1)}
          </Styled.Question>
          <Styled.GameBox>
            {allWordsWithPosition.map((el) => (
              <WordElement
                status={
                  answersChecked ? answerStatusAfterChecking(el.word) : null
                }
                position={el.position}
                selected={selectedWords.includes(el.word)}
                onClick={() => selectWord(el.word)}
                word={el.word}
                key={el.word}
              />
            ))}
          </Styled.GameBox>
          {!answersChecked ? (
            <GlobalButton
              onClick={checkAnswers}
              disabled={selectedWords.length === 0}
            >
              check answers
            </GlobalButton>
          ) : (
            <GlobalButton onClick={() => setFinalScore(calculateScore())}>
              finish game
            </GlobalButton>
          )}
        </>
      )}
    </Styled.Wrapper>
  );
};

export default SelectWordsScreen;
