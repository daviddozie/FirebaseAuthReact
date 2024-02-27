import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Meun from "./Pages/Meun/meun";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/meun' element={<Meun />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
