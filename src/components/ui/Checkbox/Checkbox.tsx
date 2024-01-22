import { useState } from "react";
import styles from './styles.scss';

type Props = {
  label: string
}

export const Checkbox = ({ label }: Props) => {
  // TODO: hardcode for now
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    // TODO: check info about prevState for useState
    setChecked(!checked);
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className={styles.checkbox}
      />
      <span>{label}</span>
    </label>
  )
}
