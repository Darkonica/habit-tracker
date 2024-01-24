import commonStyles from '@styles/common.scss';
import { PomodoroSettings } from './components/PomodoroSettings';
import styles from './styles.scss';

export const Settings = () => {
  return (
    <div className={commonStyles.wrapper}>
      <h1>Settings</h1>

      <h2>Habits</h2>

      <h2>Pomodoro</h2>
      <PomodoroSettings />

      <h2>Graph</h2>
      {/* I don't know what can be here (for now) */}
    </div>
  )
}
