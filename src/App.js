import React from 'react';
import { useAtom, atom } from 'jotai';
import styles from './style.module.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Component1 from './components/component1';
import Component2 from './components/component2';

export const nameAtom = atom('updating..');

export default function App() {
  return (
    <div className={styles.test}>
      <BrowserRouter>
        <h1>My App</h1>
        <Link to="/">Page-1</Link>&nbsp;
        <Link to="/page-2">Page-2</Link>
        <Routes>
          <Route path="/" element={<Component1 />} />
          <Route path="/page-2" element={<Component2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
