import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Input } from '@src/components/ui';
import styles from './styles.scss';

const HABIT = {
  name: "",
  icon: "",
}

const HABITS = [
  {
    name: "Wake up before 9am",
    icon: "",
    id: '1',
  },
  {
    name: "Morning routine",
    icon: "",
    id: '2',
  },
  {
    name: "Jump rope",
    icon: "",
    id: '3',
  },
  {
    name: "Power training",
    icon: "",
    id: '4',
  },
];

export const HabitsCRUD = () => {
  const [habits, setHabits] = useState(HABITS);
  const [editHabitId, setEditHabitId] = useState(null);
  const [editHabitName, setEditHabitName] = useState('');

  const handleNewHabitButton = () => {
    const newHabit = {...HABIT, id: uuidv4()};

    setHabits([...habits, newHabit]);
    setEditHabitId(newHabit.id);
  }

  const handleEditChanges = (value) => {
    setEditHabitName(value);
  }

  const handleOKButton = () => {
    const updatedHabits = habits.map(item => {
      if (item.id !== editHabitId) return item;

      return {...item, name: editHabitName};
    })

    setEditHabitId(null);
    setEditHabitName('');
    setHabits(updatedHabits);
  }

  const handleEditHabitButton = (id) => {
    setEditHabitId(id);
    setEditHabitName(habits.find(item => item.id === id).name);
  }

  const getHabitsList = () => {
    return (
      <ul className={styles.habitsList}>
        {habits.map(item => (
          <li key={item.id}>
            {editHabitId === item.id && (
              <div className={styles.habit}>
                <Input
                  type="text"
                  value={editHabitName}
                  onChange={handleEditChanges}
                  autoFocus
                />
                <button
                  className={styles.okButton}
                  onClick={handleOKButton}
                >
                  ok
                </button>
              </div>
            )}

            {editHabitId !== item.id && (
              <div className={styles.habit}>
                {item.name}
                <button
                  className={styles.editButton}
                  onClick={() => handleEditHabitButton(item.id)}
                >
                  edit
                </button>
              </div>
            )}
          </li>
        ))}

        <button onClick={handleNewHabitButton}>Add new</button>  
      </ul>
    );
  }

  return (
    <div className={styles.habitsCRUDCont}>
      <div className={styles.habitsListCont}>
        {getHabitsList()}
      </div>

      {/* Drag'n'drop ordering */}
    </div>
  )
}
