import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsChevronLeft } from 'react-icons/bs';
import Question from './Question';

function Medium() {
  const [questions] = useState([
    {
      question:
        'Which internet company began life as an online bookstore called Cadabra?',
      correct_answer: 'Amazon',
      incorrect_answers: ['eBay', 'Overstock', 'Shopify'],
    },
    {
      question: 'On which day did the World Wide Web go online?',
      correct_answer: 'December 20, 1990',
      incorrect_answers: [
        'December 17, 1996',
        'November 12, 1990',
        'November 24, 1995',
      ],
    },
    {
      question: 'What does the acronym CDN stand for in terms of networking?',
      correct_answer: 'Content Delivery Network',
      incorrect_answers: [
        'Content Distribution Network',
        'Computational Data Network',
        'Compressed Data Network',
      ],
    },
    {
      question: 'In the server hosting industry IaaS stands for...',
      correct_answer: 'Infrastructure as a Service',
      incorrect_answers: [
        'Internet as a Service',
        'Internet and a Server',
        'Infrastructure as a Server',
      ],
    },
    {
      question:
        'What is the name of the default theme that is installed with Windows XP?',
      correct_answer: 'Luna',
      incorrect_answers: ['Neptune', 'Whistler', 'Bliss'],
    },
    {
      question:
        'What is the correct term for the metal object in between the CPU and the CPU fan within a computer system?',
      correct_answer: 'Heat Sink',
      incorrect_answers: ['CPU Vent', 'Temperature Decipator', 'Heat Vent'],
    },
    {
      question: 'What does the term MIME stand for, in regards to computing?',
      correct_answer: 'Multipurpose Internet Mail Extensions',
      incorrect_answers: [
        'Mail Internet Mail Exchange',
        'Multipurpose Interleave Mail Exchange',
        'Mail Interleave Method Exchange',
      ],
    },
    {
      question:
        'Which programming language was developed by Sun Microsystems in 1995?',
      correct_answer: 'Java',
      incorrect_answers: ['Python', 'Solaris OS', 'C++'],
    },
    {
      question: 'How many bytes are in a single Kibibyte?',
      correct_answer: '1024',
      incorrect_answers: ['2400', '1000', '1240'],
    },
    {
      question:
        'How many bits make up the significand portion of a single precision floating point number?',
      correct_answer: '23',
      incorrect_answers: ['8', '53', '15'],
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
        Explore the depths of your knowledge with our engaging and
        thought-provoking Medium Quiz. Get ready for a mental workout that
        strikes the perfect balance between fun and challenge!
      </h4>

      <Question
        question={currentQuestion}
        hundleNextQuestion={hundleNextQuestion}
        isLoading={isLoading}
      />
    </Container>
  );
}

export default Medium;
