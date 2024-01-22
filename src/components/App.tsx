import React from 'react';
import { MainPage } from '@src/pages';
import { Header } from './ui/Header';
import './App.scss';

const Application: React.FC = () => {
  return (
    <div id='app'>
      <Header />
      <MainPage />
    </div>
  );
};

export default Application;