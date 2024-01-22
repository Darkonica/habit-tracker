import styles from './styles.scss';

export const HabitsList = () => {
  return (
    <>
      <h3>Your habits</h3>
      <ul className={styles.list}>
        {/* separate component maybe */}
        <li>
          <label>
            <input type="checkbox" /> Jump rope
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" /> Power training
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" /> Reading
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" /> Guitar
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" /> English
          </label>
        </li>
      </ul>
    </>
  )
}
