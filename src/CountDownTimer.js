import Countdown from 'react-countdown';

function CountDownTimer() {
  return (
    <Countdown date={Date.now() + 25000} />
  );
}

export default CountDownTimer;