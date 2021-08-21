import {useState} from 'react';
import './App.css';
import TopContents from './component/TopContents';
import HeaderParts from './component/HeaderParts';
import Entrance from './component/Entrance';
function App() {

  const [pageState, setPageState] = useState(0)

  const changePageState = (state) => {
      console.log('invoked changePageState')
      setPageState(state)
  }

  return (
    <div>
      <HeaderParts />
      { pageState === 0 && <TopContents callback={changePageState}/>}
      { pageState !== 0 && <Entrance />}
    </div>
  );
}

export default App;
