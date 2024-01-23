import { useEffect, useState, useRef } from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from './styles.scss';

const DEFAULT_TIMER = 1500;

export const PomodoroTimer = () => {
  const [timer, setTimer] = useState(5); // in seconds
  const [pomodoroCount, setPomodoroCount] = useState(0);
  const [isPause, setIsPause] = useState(false);

  const timerId = useRef<ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    if (!isPause) {
      timerId.current = setInterval(() => setTimer(timer - 1), 1000);
    }

    if (timer < 1) {
      setPomodoroCount(pomodoroCount + 1);
      clearInterval(timerId.current);
      setTimer(DEFAULT_TIMER);
      setIsPause(true);
    }

    return () => clearInterval(timerId.current);
  }, [timer, isPause]);

  const handleStatusChange = () => {
    if (isPause) {
      timerId.current = setInterval(() => setTimer(timer - 1), 1000);
    } else {
      clearInterval(timerId.current);
    }

    setIsPause(!isPause);
  }

  const timerView = `${Math.trunc(timer / 60)}:${(timer % 60).toLocaleString(undefined, {minimumIntegerDigits: 2})}`

  return (
    <>
      <h3 className={styles.title}>Pomodoro</h3>
      
      <div className={styles.progressbarCont}>
        <button className={styles.statusHiddenButton} onClick={handleStatusChange}>
          <CircularProgressbarWithChildren
            value={timer}
            text={`${timerView}`}
            strokeWidth={5}
            styles={buildStyles({
              textColor: "white",
            })}
            >
            <div className={styles.status}>{isPause ? 'Start' : 'Pause'}</div>
          </CircularProgressbarWithChildren>
        </button>
      </div>

      <div className={styles.pomodoroCount}>Today: {pomodoroCount}</div>

      {/* Pomodoro, short break, long break */}
      <div>Pomodoro / short break / long break</div>
    </>
  )
}
