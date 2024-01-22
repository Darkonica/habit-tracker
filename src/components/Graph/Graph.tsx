import React from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import styles from './styles.scss';

const data = [
  {
    "name": "1 Jan",
    "Jump rope": 40,
    "Power training": 24,
    "Wake up early": 24
  },
  {
    "name": "2 Jan",
    "Jump rope": 30,
    "Power training": 13,
    "Wake up early": 22
  },
  {
    "name": "3 Jan",
    "Jump rope": 20,
    "Power training": 98,
    "Wake up early": 22
  },
  {
    "name": "4 Jan",
    "Jump rope": 27,
    "Power training": 39,
    "Wake up early": 20
  },
  {
    "name": "5 Jan",
    "Jump rope": 18,
    "Power training": 48,
    "Wake up early": 21
  },
  {
    "name": "6 Jan",
    "Jump rope": 23,
    "Power training": 38,
    "Wake up early": 25
  },
  {
    "name": "7 Jan",
    "Jump rope": 34,
    "Power training": 43,
    "Wake up early": 21
  }
]

export const Graph = () => {
  return (
    <div className={styles.container}>
      <div>Graph</div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={730} height={250} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Power training" stroke="#8884d8" />
          <Line type="monotone" dataKey="Jump rope" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Wake up early" stroke="#015678" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
