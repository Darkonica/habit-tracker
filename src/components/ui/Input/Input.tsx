import { useState } from "react";
import styles from './styles.scss';

type Props = {
  type: string,
  defaultValue?: number | string,
  className?: string,
  autoFocus?: boolean,
}

export const Input = ({ type, defaultValue, className, autoFocus }: Props) => {
  const [value, setValue] = useState(defaultValue || null);

  return (
    <input
      type={type}
      value={value}
      className={className}
      // onChange={e => setValue(e.target.value)}
      onChange={e => setValue(type === 'number' ? Number(e.target.value) : e.target.value)}
      autoFocus={autoFocus}
    />
  )
}
