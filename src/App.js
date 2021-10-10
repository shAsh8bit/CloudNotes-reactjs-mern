import './App.css';
import Navbar from './components/Navbar';
import Alert from  './components/Alert';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  document.body.style.backgroundColor="#504e4e"
  return (
    <>
    <NoteState>
    <Router>

      <Navbar/>
      <Alert message={"Successful"}/>
      <Switch>
        
        <Route exact path="/">
            <Home />
        </Route>
          <Route exact path="/about">
            <About />
          </Route>
          
        </Switch>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
