import React from 'react';
import ControlComponent from './components/ControlComponent';
import FormComponent from './components/FormComponent';
import ListComponent from './components/ListComponent';
import './css/main.css';

import { useSelector } from 'react-redux';

const styleRightBlock = {
  width:'70%',
};

const styleRightBlockToggle = {
  width: '100%'
};

const styleLeftBlock = {
  width:'30%',
  display:'block'
};

const styleLeftBlockToggle = {
  width: '0%',
  display:'none'
};


const App = () => {
  const isToggleForm = useSelector(state => state.AppReducer.toggle);
  return (
    <div className="wrapper">
      <h1>TODO LIST</h1>
      <div className="container">
        <div className="left__block" style={isToggleForm ? styleLeftBlockToggle : styleLeftBlock}>
          <FormComponent />
        </div>
        <div className="right__block" style={isToggleForm ? styleRightBlockToggle : styleRightBlock}>
          <ControlComponent/>
          <ListComponent/>
        </div>
      </div>
    </div>
  )
}

export default App;
