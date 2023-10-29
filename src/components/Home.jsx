import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';

import logo from '/logo.png';

function Home() {
  return (
    <>
      <div className='text-center mb-5'>
        <Image
          src={logo}
          alt='Logo'
          style={{ width: '10rem', height: '11rem' }}
        />
        <h1>Common computer science questions</h1>
        <p className='display-6'>Choose a difficulty</p>
      </div>
      <div className='d-flex justify-content-around flex-wrap'>
        <Link to={'/easy'} className='nav-link mt-3'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='ps-3'>Easy</Card.Title>
              <Card.Body>Test Your Knowledge, The Easy Way!</Card.Body>
            </Card.Body>
          </Card>
        </Link>
        <Link to={'/medium'} className='nav-link mt-3 ms-2'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='ps-3'>Medium</Card.Title>
              <Card.Body>Challenge Your Mind with Our Medium Quiz!</Card.Body>
            </Card.Body>
          </Card>
        </Link>
        <Link to={'/hard'} className='nav-link mt-3 ms-2'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='ps-3'>Hard</Card.Title>
              <Card.Body>Are You Up for the Ultimate Challenge?</Card.Body>
            </Card.Body>
          </Card>
        </Link>
      </div>
    </>
  );
}

export default Home;
