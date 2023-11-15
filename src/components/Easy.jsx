import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsChevronLeft } from 'react-icons/bs';
import Question from './Question';

function Easy() {
  const [questions] = useState([
    {
      question:
        'Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?',
      correct_answer: 'Apple',
      incorrect_answers: ['Microsoft', 'Atari', 'Commodore'],
    },
    {
      question:
        'When Gmail first launched, how much storage did it provide for your email?',
      correct_answer: '1GB',
      incorrect_answers: ['512MB', '5GB', 'Unlimited'],
    },
    {
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
      correct_answer: 'Final',
      incorrect_answers: ['Static', 'Private', 'Public'],
    },
    {
      question: 'What does the Prt Sc button do?',
      correct_answer:
        "Captures what's on the screen and copies it to your clipboard",
      incorrect_answers: [
        'Nothing',
        "Saves a .png file of what's on the screen in your screenshots folder in photos",
        'Closes all windows',
      ],
    },
    {
      question:
        'The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:',
      correct_answer: 'HD Graphics 500',
      incorrect_answers: [
        'HD Graphics 700 ',
        'HD Graphics 600',
        'HD Graphics 7000',
      ],
    },
    {
      question: 'What does LTS stand for in the software market?',
      correct_answer: 'Long Term Support',
      incorrect_answers: [
        'Long Taco Service',
        'Ludicrous Transfer Speed',
        'Ludicrous Turbo Speed',
      ],
    },
    {
      question:
        'The numbering system with a radix of 16 is more commonly referred to as ',
      correct_answer: 'Hexidecimal',
      incorrect_answers: ['Binary', 'Duodecimal', 'Octal'],
    },
    {
      question: 'This mobile OS held the largest market share in 2012.',
      correct_answer: 'iOS',
      incorrect_answers: ['Android', 'BlackBerry', 'Symbian'],
    },
    {
      question:
        'Which programming language shares its name with an island in Indonesia?',
      correct_answer: 'Java',
      incorrect_answers: ['Python', 'C', 'Jakarta'],
    },
    {
      question: 'What does the computer software acronym JVM stand for?',
      correct_answer: 'Java Virtual Machine',
      incorrect_answers: [
        'Java Vendor Machine',
        'Java Visual Machine',
        'Just Virtual Machine',
      ],
    },
  ]);

  const [number, setNumber] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [userAnswers, setUserAnswers] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);

  const quizIsComplete = userAnswers.length === correctAnswers.length;

  useEffect(() => {
    setCurrentQuestion(questions[0]);
  }, [questions]);
  // put all correct answers in correctAnswer array
  useEffect(() => {
    setCorrectAnswers(questions.map((question) => question.correct_answer));
  }, [questions]);

  // console.log(correctAnswers);

  const hundleNextQuestion = (answer) => {
    setIsLoading(true);
    setTimeout(() => {
      setNumber(number + 1);
      setUserAnswers((prev) => [...prev, answer]);
      setCurrentQuestion(questions[number + 1]);
      setIsLoading(false);
    }, 430);
  };
  // function to compare userAnswers and correctAnswers and creat an array of boolean

  if (quizIsComplete) {
    return (
      <Container className='mt-4'>
        <Link to={'/'} className='nav-link'>
          <Button
            variant='outline-info'
            size='sm'
            className='d-flex align-items-center'>
            <BsChevronLeft />
            Home
          </Button>
        </Link>
        <div className='mt-4 d-flex flex-wrap justify-content-center'>
          <ListGroup variant='flush' className='mx-2'>
            <p>You Answered</p>
            {userAnswers.map((answer, index) => {
              return <ListGroup.Item key={index}>{answer}</ListGroup.Item>;
            })}
          </ListGroup>
          <ListGroup>
            <p>Check</p>
            {correctAnswers.map((answer, index) => {
              return correctAnswers[index] === userAnswers[index] ? (
                <ListGroup.Item key={answer} variant='success'>
                  Correct
                </ListGroup.Item>
              ) : (
                <ListGroup.Item key={answer} variant='danger'>
                  Incorect
                </ListGroup.Item>
              );
            })}
          </ListGroup>
          <ListGroup variant='flush' className='mx-2'>
            <p>Correct Answers</p>
            {correctAnswers.map((answer, index) => {
              return <ListGroup.Item key={index}>{answer}</ListGroup.Item>;
            })}
          </ListGroup>
        </div>
      </Container>
    );
  }

  return (
    <Container className='mt-4'>
      <Link to={'/'} className='nav-link'>
        <Button
          variant='outline-dark'
          size='sm'
          className='d-flex align-items-center'>
          <BsChevronLeft />
          Home
        </Button>
      </Link>
      <h4 className='text-center m-3'>
        Join us for a fun and informative journey through our Easy Quiz - where
        learning is a breeze and success is just a question away!
      </h4>

      <Question
        question={currentQuestion}
        hundleNextQuestion={hundleNextQuestion}
        isLoading={isLoading}
      />
    </Container>
  );
}

export default Easy;
