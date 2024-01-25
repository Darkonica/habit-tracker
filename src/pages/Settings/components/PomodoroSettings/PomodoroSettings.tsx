// import { useState } from 'react';
import { Input } from '@src/components/ui';
import styles from './styles.scss';

export const PomodoroSettings = () => {
  // const [habits, setHabits] = useState();

  const handleTimeChange = (value) => {

  }

  return (
    <>
      <div className={styles.settingName}>Time (Minutes)</div>

      <div className={styles.timeCont}>
        <div className={styles.timeBlock}>
          <div className={styles.settingSubName}>pomodoro</div>
          <Input
            type="number"
            value={25}
            onChange={handleTimeChange}
          />
        </div>
        <div className={styles.timeBlock}>
          <div className={styles.settingSubName}>short break</div>
          <Input
            type="number"
            value={5}
            onChange={handleTimeChange}
          />      
        </div>
        <div className={styles.timeBlock}>
          <div className={styles.settingSubName}>long break</div>
          <Input
            type="number"
            value={15}
            onChange={handleTimeChange}
          />
        </div>
      </div>
    </>
  )
}
