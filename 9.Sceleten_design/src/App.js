import logo from './logo.svg';
import './App.css';

import Appbar from './Appbar'
import Content from './Components/Content'
import Users from './Components/Users'

function App() {
  return (
    <div className="App">
      <Appbar/>
      <div className="flexpart">
        <Content/>
        <Users/>
      </div>
    </div>
  );
}

export default App;
