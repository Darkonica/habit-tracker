import React from 'react';
import './App.scss';
import { Header } from './ui/Header';
import { MainPage } from '@src/pages/Main';

const Application: React.FC = () => {
  return (
    <div id='app'>
      <Header />
      <MainPage />
    </div>
  );
};

export default Application;