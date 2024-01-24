import { Input } from '@src/components/ui';
import styles from './styles.scss';

export const PomodoroSettings = () => {
  return (
    <>
      <div className={styles.settingName}>Time (Minutes)</div>

      <div className={styles.timeCont}>
        <div className={styles.timeBlock}>
          <div className={styles.settingSubName}>pomodoro</div>
          <Input type="number" defaultValue={25} />
        </div>
        <div className={styles.timeBlock}>
          <div className={styles.settingSubName}>short break</div>
          <Input type="number" defaultValue={5} />      
        </div>
        <div className={styles.timeBlock}>
          <div className={styles.settingSubName}>long break</div>
          <Input type="number" defaultValue={15} />
        </div>
      </div>
    </>
  )
}
