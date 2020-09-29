import React from 'react';
import './App.css';
import ClassCounter from './components/2-usestate/classCounter';
import HookCounter from './components/2-usestate/HookCounter';
import HookCounterTwo from './components/3-usestate-prevstate/HookCounterTwo';
import HookCounterThree from './components/4-useState-object/HookCounterThree';
import HookCounterFour from './components/5-usestate-array/HookCounterFour';
import ClassCounterOne from './components/7-use-effect-afterrender/ClassCounterOne';
import HookCounterOne from './components/7-use-effect-afterrender/HookCounterOne';
import ClassMouse from './components/9-run-effects-once/ClassMouse';
import HookMouse from './components/9-run-effects-once/HookMouse';
import MouseContainer from './components/9-run-effects-once/MouseContainer';



function App() {
  return (
    <div className="App">
      {/*<ClassCounter />*/}
      {/*<HookCounter />*/}
      {/*<HookCounterTwo />*/}
      {/*<HookCounterThree />*/}
      {/*<HookCounterFour />*/}
      {/*<ClassCounterOne />*/}
      {/*<HookCounterOne />*/}
      {/*<ClassMouse />*/}
      {/*<HookMouse />*/}
      <MouseContainer />
    </div>
  );
}

export default App;
