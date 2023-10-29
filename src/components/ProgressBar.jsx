import ProgressBar from 'react-bootstrap/ProgressBar';

function Timer({ progressBar }) {
  return (
    <ProgressBar
      className='mt-4'
      variant='dark'
      now={progressBar}
      label={`${progressBar}%`}
    />
  );
}

export default Timer;
