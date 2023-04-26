import './App.css';
import Main from './Component/Main';
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Main/>
    </GlobalProvider>
  );
}

export default App;
