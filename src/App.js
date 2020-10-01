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
import IntervalClassCounter from './components/11-use-effect-incorrectdep/IntervalClassCounter';
import IntervalHookCounter from './components/11-use-effect-incorrectdep/IntervalHookCounter';
import ComponentC from './components/ComponentC';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

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
      {/*<MouseContainer />*/}
    {/*<IntervalClassConter />*/}
      {/*<IntervalHookCounter />*/}
      <UserContext.Provider value={'prakash'}>
      <ChannelContext.Provider value={'codeevolution'}>
      <ComponentC />
      </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
