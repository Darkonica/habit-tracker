import React from 'react';
import { HabitsList } from '@src/components/HabitsList';
import { PomodoroTimer } from '@src/components/PomodoroTimer';
import { Graph } from '@src/components/Graph';
import commonStyles from '@styles/common.scss';
import styles from './styles.scss';

export const Main = () => {
  return (
    <div className={commonStyles.wrapper}>
      <div className={styles.habitsPomodoroCont}>
        <div className={styles.habitsCont}>
          <HabitsList />
        </div>

        <div className={styles.pomodoroCont}>
          <PomodoroTimer />
        </div>
      </div>

      <div className={styles.graphCont}>
        <Graph />
      </div>
    </div>
  )
}
