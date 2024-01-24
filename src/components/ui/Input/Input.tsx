import { useState } from "react";
import styles from './styles.scss';

type Props = {
  type: string,
  defaultValue: number
}

export const Input = ({ type, defaultValue }: Props) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <input
      type={type}
      value={value}
      onChange={e => setValue(Number(e.target.value))}
      className={styles.checkbox}
    />
  )
}
