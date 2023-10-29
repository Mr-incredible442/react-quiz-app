import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Timer from './ProgressBar';

function Question({ question, hundleNextQuestion, isLoading }) {
  const [answers, setAnswers] = useState([]);
  const [radioValue, setRadioValue] = useState('');
  const [progressBar, setProgressBar] = useState(0);

  useEffect(() => {
    setAnswers(question.incorrect_answers);
  }, [question]);

  //shuffle answers
  const shuffledAnswers = [...answers];
  useEffect(() => {
    shuffledAnswers.sort(() => Math.random() - 0.5);
  }, []);

  useEffect(() => {
    setAnswers((prev) => [...prev, question.correct_answer]);
  }, [question.correct_answer]);

  const handleNext = (answer) => {
    setProgressBar((prev) => prev + 10);
    hundleNextQuestion(answer);
  };

  return (
    <>
      <div className='border mt-3 p-5 rounded'>
        <p style={{ fontSize: '1.3rem' }} className='text-center'>
          {question.question}
        </p>
        <div className='d-flex flex-column'>
          {shuffledAnswers.map((answer, index) => (
            <ToggleButton
              key={index}
              id={`radio-${index}`}
              type='radio'
              variant={'outline-secondary'}
              disabled={isLoading}
              value={answer}
              className='my-1'
              checked={radioValue === answer}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
              onClick={() => handleNext(answer)}>
              {answer}
            </ToggleButton>
          ))}
        </div>
        <Timer progressBar={progressBar} />
      </div>
    </>
  );
}

export default Question;
