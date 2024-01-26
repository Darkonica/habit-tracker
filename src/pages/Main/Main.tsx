import { HabitsList, PomodoroTimer, Graph } from '@src/components';
import commonStyles from '@styles/common.scss';
import styles from './styles.scss';

export const Main = () => {
  const pomodoroSettings = JSON.parse(localStorage.getItem('settings'));
  
  return (
    <div className={commonStyles.wrapper}>
      <div className={styles.habitsPomodoroCont}>
        <div className={styles.habitsCont}>
          <HabitsList />
        </div>

        <div className={styles.pomodoroCont}>
          <PomodoroTimer settings={pomodoroSettings} />
        </div>
      </div>

      <div className={styles.graphCont}>
        <Graph />
      </div>
    </div>
  )
}
