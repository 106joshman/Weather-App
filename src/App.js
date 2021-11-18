import { useState} from 'react';
import Body from './components/Body/Body';
import Header from './components/Header';

function App() {
  const [loadPage, setLoadpage] = useState(true);
    setTimeout(() => {
        setLoadpage(false)
    }
     ,3000);

  return (
      <div className="App">
        {loadPage&& <div className="load"><div className="loader"></div></div>}
        {!loadPage&& <Header />}
        {!loadPage&& <Body />}
      </div>
  );
}

export default App;
