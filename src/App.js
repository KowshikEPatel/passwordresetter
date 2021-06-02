import LandingPage from './components/LandingPage'
import LandingPagepw from './components/LandingPagepw'
import Topbar from './components/Topbar'
//import Sidebar from './components/Sidebar'
//import Dashboard from './components/Dashboard'
import {
  BrowserRouter as Router,
Switch,
Route
} from 'react-router-dom' 
import './App.css';

//{<Route exact path="/"><Dashboard/><UserList/></Route>}
function App() {
  return (<>
    <Router>
    <Topbar />
    <Switch>
          <Route exact path="/"><LandingPage/></Route>
          <Route exact path="/forgotpw"><LandingPagepw/></Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;
