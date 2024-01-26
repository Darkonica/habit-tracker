import { useEffect, useState } from 'react';
import { Input } from '@src/components/ui';
import styles from './styles.scss';

enum DefaultSettings {
  POMODORO = 'POMODORO',
  SHORT_BREAK = 'SHORT_BREAK',
  LONG_BREAK = 'LONG_BREAK',
}

type DefaultSettingsType = {
  POMODORO: number,
  SHORT_BREAK: number,
  LONG_BREAK: number,
}

const DEFAULT_SETTINGS = {
  POMODORO: 25,
  SHORT_BREAK: 5,
  LONG_BREAK: 15,
}

export const PomodoroSettings = () => {
  // const [habits, setHabits] = useState();
  const [settings, setSettings] = useState({} as DefaultSettingsType);

  useEffect(() => {
    const isSettingsExist = JSON.parse(localStorage.getItem('settings'));

    if (!isSettingsExist) {
      localStorage.setItem('settings', JSON.stringify(DEFAULT_SETTINGS));
    }

    console.log('settings', isSettingsExist);

    setSettings(isSettingsExist);
  }, [])

  useEffect(() => {
    localStorage.setItem('settings', JSON.stringify(settings));
  }, [settings])

  const handleTimeChange = (settingName, value) => {
    if (value != Number(value)) {
      return;
    }

    const updatedSettings = {
      ...settings,
      [settingName]: +value,
    }
    console.log('updatedSettings', settingName, updatedSettings);
    setSettings(updatedSettings);
  }

  return (
    <>
      <div className={styles.settingName}>Time (Minutes)</div>

      <div className={styles.timeCont}>
        <div className={styles.timeBlock}>
          <div className={styles.settingSubName}>pomodoro</div>
          <Input
            type="number"
            value={settings?.POMODORO}
            onChange={value => handleTimeChange(DefaultSettings.POMODORO, value)}
          />
        </div>
        <div className={styles.timeBlock}>
          <div className={styles.settingSubName}>short break</div>
          <Input
            type="number"
            value={settings?.SHORT_BREAK}
            onChange={value => handleTimeChange(DefaultSettings.SHORT_BREAK, value)}
          />      
        </div>
        <div className={styles.timeBlock}>
          <div className={styles.settingSubName}>long break</div>
          <Input
            type="number"
            value={settings?.LONG_BREAK}
            onChange={value => handleTimeChange(DefaultSettings.LONG_BREAK, value)}
          />
        </div>
      </div>
    </>
  )
}
