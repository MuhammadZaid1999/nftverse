import './App.css';
import Main from './Component/navbar/Main.js';
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Main/>
    </GlobalProvider>
  );
}

export default App;
