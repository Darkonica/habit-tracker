import { useEffect, useState, useRef } from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from './styles.scss';

// enum DefaultTimer {
//   POMODORO = 1500,
//   LONG_BREAK = 900,
//   SHORT_BREAK = 300,
// }
// Just for testing
enum DefaultTimer {
  POMODORO = 5,
  LONG_BREAK = 4,
  SHORT_BREAK = 3,
}
enum CurrentActivity {
  POMODORO = "pomodoro",
  LONG_BREAK = "long break",
  SHORT_BREAK = "short break",
} 

export const PomodoroTimer = () => {
  const [timer, setTimer] = useState(5); // in seconds
  const [pomodoroCount, setPomodoroCount] = useState(0);
  const [currentActivity, setCurrentActivity] = useState(CurrentActivity.POMODORO);
  const [isPause, setIsPause] = useState(false);
  
  const timerId = useRef<ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    if (!isPause) {
      timerId.current = setInterval(() => setTimer(timer - 1), 1000);
    }

    if (timer < 1) {
      // Chain of breaks and pomodoro
      if (currentActivity !== CurrentActivity.POMODORO) {
        setCurrentActivity(CurrentActivity.POMODORO);
        setTimer(DefaultTimer.POMODORO);
      }

      if (currentActivity === CurrentActivity.POMODORO) {
        const updatedPomodoroCount = pomodoroCount + 1;

        if (updatedPomodoroCount % 4 === 0) {
          setCurrentActivity(CurrentActivity.LONG_BREAK);
          setTimer(DefaultTimer.LONG_BREAK);
        } else {
          setCurrentActivity(CurrentActivity.SHORT_BREAK);
          setTimer(DefaultTimer.SHORT_BREAK);
        }

        setPomodoroCount(updatedPomodoroCount);
      }

      clearInterval(timerId.current);
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

  const handleCurrentActivityChange = (activity: CurrentActivity) => {
    if (activity === currentActivity) return;

    setCurrentActivity(activity);
    clearInterval(timerId.current);

    if (activity === CurrentActivity.POMODORO) {
      setTimer(DefaultTimer.POMODORO);
    }
    if (activity === CurrentActivity.SHORT_BREAK) {
      setTimer(DefaultTimer.SHORT_BREAK);
    }
    if (activity === CurrentActivity.LONG_BREAK) {
      setTimer(DefaultTimer.LONG_BREAK);
    }
    setIsPause(true);
  }

  const timerView = `${Math.trunc(timer / 60)}:${(timer % 60).toLocaleString(undefined, {minimumIntegerDigits: 2})}`

  return (
    <>
      <div className={styles.activityCont}>
        <button
          className={currentActivity === CurrentActivity.POMODORO && styles.active}
          onClick={() => handleCurrentActivityChange(CurrentActivity.POMODORO)}
        >
          {CurrentActivity.POMODORO}
        </button>
        <button
          className={currentActivity === CurrentActivity.SHORT_BREAK && styles.active}
          onClick={() => handleCurrentActivityChange(CurrentActivity.SHORT_BREAK)}
        >
          {CurrentActivity.SHORT_BREAK}
        </button>
        <button
          className={currentActivity === CurrentActivity.LONG_BREAK && styles.active}
          onClick={() => handleCurrentActivityChange(CurrentActivity.LONG_BREAK)}
        >
          {CurrentActivity.LONG_BREAK}
        </button>
      </div>
      
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
    </>
  )
}
