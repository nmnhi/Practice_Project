import logo from './logo.svg';
import './App.scss';

import MyComponent from '../component/MyComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyComponent />
        {/* <MyForm /> */}
      </header>
    </div>
  );
}

export default App;
