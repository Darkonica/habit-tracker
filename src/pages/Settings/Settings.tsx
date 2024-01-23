import commonStyles from '@styles/common.scss';
import styles from './styles.scss';

export const Settings = () => {
  return (
    <div className={commonStyles.wrapper}>
      <h1>Settings</h1>

      <h2>Habits</h2>

      <h2>Pomodoro</h2>
      <div className={styles.settingName}>Time (Minutes)</div>

      <div className={styles.timeCont}>
        <div className="timeBlock">
          <div className={styles.settingSubName}>pomodoro</div>
          <input type="number"></input>
        </div>
        <div className="timeBlock">
          <div className={styles.settingSubName}>short break</div>
          <input type="number"></input>      
        </div>
        <div className="timeBlock">
          <div className={styles.settingSubName}>long break</div>
          <input type="number"></input>
        </div>
      </div>



      <h2>Graph</h2>
      {/* I don't know what can be here (for now) */}
    </div>
  )
}
