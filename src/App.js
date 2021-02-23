
import { useState } from 'react';
import './App.css';
import MyComponent from './mycomponent';

function App() {
  const [myInfo, setMyInfo] = useState('');
  const navigationClicked = (clickedName) => {
    setMyInfo(clickedName === 'home' ? 'Jihad' : 'Student');
  }
  
  return (
    <>
      <button onClick={() => navigationClicked('home')}>Home</button>
      <button onClick={() => navigationClicked('contact')}>Contact</button>
      <MyComponent information={myInfo}/>
    </>
  );
}

export default App;
