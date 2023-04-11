import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import User from './components/User/User';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Route>
        <Route exact path="/" component={Home}></Route>
        <Route exact route="/users/:userId" component={User}> </Route>
      </Route>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
