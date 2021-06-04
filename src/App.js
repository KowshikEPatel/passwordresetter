import LandingPage from './components/LandingPage'
import LandingPagepw from './components/LandingPagepw'
import Topbar from './components/Topbar'
//import Sidebar from './components/Sidebar'
//import Dashboard from './components/Dashboard'
import {
  BrowserRouter as Router,
Switch,
Route,
useParams
} from 'react-router-dom' 
import './App.css';

//{<Route exact path="/"><Dashboard/><UserList/></Route>}

function ResetPassword(){
  let { str } = useParams();
  return <div> Now shing the following page {str}</div>
}


function App() {
  
  return (<>
    <Router>
    <Topbar />
    <Switch>
          <Route exact path="/">
            <LandingPage/>
          </Route>
          <Route exact path="/forgotpw">
            <LandingPagepw/>
          </Route>
          <Route path="/resetpassword/:str">
            <ResetPassword />
          </Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;
