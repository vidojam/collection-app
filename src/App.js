
import HomePage from'./scenes/HomePage.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import './styles/App.css'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
   <>
    <BrowserRouter>
       <HomePage />
    </BrowserRouter>
   </>
  );
}

export default App;
