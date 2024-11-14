import './App.css'
import React, { createContext, useEffect } from 'react';
import ChildComponent from './components/ChildComponent';
import CounterEffect from './components/CounterEffect';
import MousePosition from './components/MousePosition';
import RandomColor from './components/RandomColor';
import FetchData from './components/FetchData';
import LightSwitch from './components/LightSwitch';
import CounterState from './components/CounterState';
import ColorPicker from './components/ColorPicker';

const SharedDataContext = createContext();

const sharedData = {
  theme: 'dark',
  username: 'Juan',
};

const App = () => {

  useEffect(() => {
    document.body.className = sharedData.theme === 'light' ? 'light-theme' : 'dark-theme';
  }, [sharedData.theme]);
  
  return (
    <>
      <SharedDataContext.Provider value={sharedData}>
        <ChildComponent />
      </SharedDataContext.Provider>

      <CounterEffect />

      <MousePosition />

      <RandomColor />

      <FetchData />

      <LightSwitch />

      <CounterState />

      <ColorPicker />
    </>
  )
}

export default App;
export { SharedDataContext };