import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { UserSearch } from './components/finder/UserSearch';

export const App = () => {
  return (
    <>
      <UserSearch />
    </>
  );
};
