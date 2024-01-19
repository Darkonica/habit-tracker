import React from 'react';
import styles from './styles.scss';

export const HabitsList = () => {
  return (
    <>
      <h3>Your habits</h3>
      <ul className={styles.list}>
        {/* separate component maybe */}
        <li>
          <label>
            <input type="checkbox" /> Habit name
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" /> Habit name
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" /> Habit name
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" /> Habit name
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" /> Habit name
          </label>
        </li>
      </ul>
    </>
  )
}
