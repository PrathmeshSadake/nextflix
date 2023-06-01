import { Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import Layout from "./layout/Layout";
import SignInScreen from "./pages/SignInScreen";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<HomeScreen />} />
      </Route>
      <Route path='/signin' element={<SignInScreen />} />
    </Routes>
  );
};

export default App;
