import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsChevronLeft } from 'react-icons/bs';
import Question from './Question';

function HArd() {
  const [questions] = useState([
    {
      question: 'How many Hz does the video standard PAL support?',
      correct_answer: '50',
      incorrect_answers: ['59', '60', '25'],
    },
    {
      question:
        'Which of these names was an actual codename for a cancelled Microsoft project?',
      correct_answer: 'Neptune',
      incorrect_answers: ['Enceladus', 'Pollux', 'Saturn'],
    },
    {
      question:
        'Which of these was the name of a bug found in April 2014 in the publicly available OpenSSL cryptography library?',
      correct_answer: 'Heartbleed',
      incorrect_answers: ['Shellshock', 'Corrupted Blood', 'Shellscript'],
    },
    {
      question:
        'Who is the original author of the realtime physics engine called PhysX?',
      correct_answer: 'NovodeX',
      incorrect_answers: ['Ageia', 'Nvidia', 'AMD'],
    },
    {
      question: 'What internet protocol was documented in RFC 1459?',
      correct_answer: 'IRC',
      incorrect_answers: ['HTTP', 'HTTPS', 'FTP'],
    },
    {
      question: 'Which RAID array type is associated with data mirroring?',
      correct_answer: 'RAID 1',
      incorrect_answers: ['RAID 0', 'RAID 10', 'RAID 5'],
    },
    {
      question:
        'Dutch computer scientist Mark Overmars is known for creating which game development engine?',
      correct_answer: 'Game Maker',
      incorrect_answers: ['Stencyl', 'Construct', 'Torque 2D'],
    },
    {
      question:
        'What is the name given to layer 4 of the Open Systems Interconnection (ISO) model?',
      correct_answer: 'Transport',
      incorrect_answers: ['Session', 'Data link', 'Network'],
    },
    {
      question: 'What vulnerability ranked #1 on the OWASP Top 10 in 2013?',
      correct_answer: 'Injection ',
      incorrect_answers: [
        'Broken Authentication',
        'Cross-Site Scripting',
        'Insecure Direct Object References',
      ],
    },
    {
      question:
        'Lenovo acquired IBM&#039;s personal computer division, including the ThinkPad line of laptops and tablets, in what year?',
      correct_answer: '2005',
      incorrect_answers: ['1999', '2002', '2008'],
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
        <Link to={'/'} className='nav-info'>
          <Button
            variant='outline-dark'
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
        Prepare to test the limits of your intellect in our Hard Quiz. This is
        where champions are made, and only the most determined minds will
        triumph. It's not just a quiz, it's a quest for the truly extraordinary!
      </h4>

      <Question
        question={currentQuestion}
        hundleNextQuestion={hundleNextQuestion}
        isLoading={isLoading}
      />
    </Container>
  );
}

export default HArd;
