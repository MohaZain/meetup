import './index.css';
import {Route, Switch} from 'react-router-dom'
import AllMeetupPage from './pages/AllMeetup';
import FavortiesPage from './pages/Favorties';
import NewMeetupPage from './pages/NewMeetup';
import MainNavigation from './components/layuot/MainNavigation';
function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
            <Route path='/' exact>
              <AllMeetupPage />
            </Route>
            <Route path='/new-meetup'>
              <NewMeetupPage />
            </Route>
            <Route path='/favorites'>
              <FavortiesPage />
            </Route>
        </Switch>
    </div>
  );
}

export default App;