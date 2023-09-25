import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import LandingPage from './components/LandingPage';
import ProfilePage from './components/ProfilePage';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser ]=useState(false)
  const currentUser=((state) => state.session.user)
  useEffect(() => {
    if (user) {
      dispatch(authenticate(user?.email)).then(() => setIsLoaded(true));
    }else {
      dispatch(authenticate()).then(() => setIsLoaded(true));
    }

  }, [dispatch, user]);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
    // dispatch(authenticate(currentUser.email)).then(() => setIsLoaded(true));
  })
  return isLoaded && (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <LandingPage />
          </Route>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/profile/:id'>
          <ProfilePage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
