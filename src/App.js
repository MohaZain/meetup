import "./index.css";
import { Route, Switch } from "react-router-dom";
import AllMeetupPage from "./pages/AllMeetup";
import FavortiesPage from "./pages/Favorties";
import NewMeetupPage from "./pages/NewMeetup";
import Layuot from "./components/layuot/Layuot";
function App() {
  return (
    <Layuot>
      <Switch>
        <Route path="/" exact>
          <AllMeetupPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavortiesPage />
        </Route>
      </Switch>
    </Layuot>
  );
}

export default App;
