import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";
import { loadUser } from "./redux/action-creators/auth";
import setAuthToken from "./utils/setAuthToken";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import CreateProfile from "./components/profile-forms/CreateProfile";
import EditProfile from "./components/profile-forms/EditProfile";
import { Provider } from "react-redux";
import store from "./redux/store";
import Games from "./components/games/Games";
import Classroom from "./components/classroom/Classroom";
import WordsGame from "./components/games/WordsGame";
import NotFound from "./components/NotFound";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <section className="container">
          <Alert />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/games" component={Games} />
            <PrivateRoute exact path="/words-game" component={WordsGame} />
            <PrivateRoute exact path="/classroom" component={Classroom} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute
              exact
              path="/create-profile"
              component={CreateProfile}
            />
            <PrivateRoute exact path="/edit-profile" component={EditProfile} />
            <Route component={NotFound} />
          </Switch>
        </section>
      </div>
    </Provider>
  );
};

export default App;
