import { useState} from 'react';
import Body from './components/Body/Body';
import Header from './components/Header';
import weatherContext, { WeatherContextProvider } from './components/store/weathercontext';

function App() {
  const [loadPage, setLoadpage] = useState(true);
    setTimeout(() => {
        setLoadpage(false)
    }
     ,3000);

  return (
    <WeatherContextProvider>
      <div className="App">
        {loadPage&& <div className="load"><div className="loader"></div></div>}
        {!loadPage&& <Header />}
        {/* {!loadPage&& <Body />} */}
      </div>
    </WeatherContextProvider>
      
  );
}

export default App;
