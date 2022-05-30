import Countdown from 'react-countdown';

function CountDownTimer({deadline}) {
  return (
    <Countdown date={Date.now() + deadline} />
  );
}

export default CountDownTimer;