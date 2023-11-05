import logo from './logo.svg';
import './scss/app.scss';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';


function App() {

  const title = 'Consultorios Lutcy'

  return (

    <div className="App">

      <BrowserRouter>
      
        <Header mensaje={title}/>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
