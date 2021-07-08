
import './App.css';
import Test from './components/Test';
import Demo from './components/Demo';
import Apps from './components/Apps';
import Para from './components/Para';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (

    <Router>
      <div>
        <Apps />
        <Switch>
          <Route path="/" exact>
            <Test />
          </Route>
          <Route path="/about" exact>
            <Demo />
          </Route>
        </Switch>
        <Para />
      </div>
    </Router>
  );
}

export default App;
