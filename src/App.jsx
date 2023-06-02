import { Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import Layout from "./layout/Layout";
import SignInScreen from "./pages/SignInScreen";
import SignUpScreen from "./pages/RegisterScreen";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import "react-multi-carousel/lib/styles.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { login, logout } from "./features/userSlice";
import ProfileScreen from "./pages/ProfileScreen";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/profile' element={<ProfileScreen />} />
      </Route>
      <Route path='/signin' element={<SignInScreen />} />
      <Route path='/register' element={<SignUpScreen />} />
    </Routes>
  );
};

export default App;
