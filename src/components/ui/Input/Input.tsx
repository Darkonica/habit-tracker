import { useState } from "react";
import styles from './styles.scss';

type Props = {
  value: number | string,
  onChange: (val) => void,
  type: string,
  defaultValue?: number | string,
  className?: string,
  autoFocus?: boolean,
}

export const Input = ({ value, onChange, type, className, autoFocus }: Props) => {
  // const [innerValue, setInnerValue] = useState(value ?? '');

  const handleChange = (val) => {
    // setInnerValue(val)
    onChange(val);
  };

  return (
    <input
      type={type}
      value={value}
      className={className}
      // onChange={e => setValue(type === 'number' ? Number(e.target.value) : e.target.value)}
      onChange={e => handleChange(e.target.value)}
      autoFocus={autoFocus}
    />
  )
}
