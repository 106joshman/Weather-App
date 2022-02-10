import { useState} from 'react';
import Body from './components/Body/Body';
import logo from './components/images/logo.png';

function App() {
  const [loadPage, setLoadpage] = useState(true);
    setTimeout(() => {
        setLoadpage(false)
    }
     ,3000);

  return (
      <div className="App">
        {loadPage&& 
          <div className="load">
            <img src={logo} alt="weather app logo" srcset="" />
            <p>Loading...</p>
          </div>}
        {!loadPage&& <Body />}
      </div>
      
  );
}

export default App;