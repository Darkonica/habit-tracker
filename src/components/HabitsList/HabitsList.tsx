import { Checkbox } from '@src/components/ui';;
import styles from './styles.scss';

export const HabitsList = () => {
  return (
    <>
      <h3>Your habits</h3>
      <ul className={styles.list}>
        <li>
          <Checkbox label="Jump rope" />
        </li>
        <li>
          <Checkbox label="Power training" />
        </li>
        <li>
          <Checkbox label="Reading" />
        </li>
        <li>
          <Checkbox label="Guitar" />
        </li>
        <li>
          <Checkbox label="English" />
        </li>
      </ul>
    </>
  )
}
