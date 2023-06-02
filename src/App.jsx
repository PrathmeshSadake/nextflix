import { Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import Layout from "./layout/Layout";
import SignInScreen from "./pages/SignInScreen";
import SignUpScreen from "./pages/RegisterScreen";

import "react-multi-carousel/lib/styles.css";

const App = () => {
  return (
    <Routes>
      {/* <Route path='/' element={<HomeScreen />} /> */}
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<HomeScreen />} />
      </Route>
      <Route path='/signin' element={<SignInScreen />} />
      <Route path='/register' element={<SignUpScreen />} />
    </Routes>
  );
};

export default App;
