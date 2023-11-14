import Login from "./Login";
import Face from "./Face";
import Signup from "./Signup";
import Main from "./Main";
import Home from "./Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인페이지 */}
        <Route path="/" element={<Main />} />
        {/* 로그인페이지 */}
        <Route path="/Login" element={<Login />} />
        {/* 회원가입페이지 */}
        <Route path="/Signup" element={<Signup />} />
        {/* 얼굴등록페이지 */}
        <Route path="/Face" element={<Face />} />
        {/* 대표페이지 */}
        <Route path="/Home" element={<Home />} />
      </Routes>
      
    </BrowserRouter> 
  );
}

export default App;
