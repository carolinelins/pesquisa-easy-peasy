import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'
import ThirdPage from './pages/ThirdPage'
import ResultPage from './pages/ResultPage'

function App() {
  return (
    <div id="root">
      <Router>
        <Switch>
          <Route path="/" exact component={FirstPage} />
          <Route path="/secondPage" exact component={SecondPage} />
          <Route path="/thirdPage" exact component={ThirdPage} />
          <Route path="/resultPage" exact component={ResultPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
