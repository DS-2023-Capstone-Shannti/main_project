import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from "./ProgressBar.js";

export default function Main() {
  const navigate = useNavigate();

  const navigateToSignup = () => {
    navigate("/Signup");
  };

  useEffect(() => {
    // 5초 후에 자동으로 다음 페이지로 이동
    const timer = setTimeout(() => {
      navigateToSignup();
    }, 5000);

    // 컴포넌트가 언마운트될 때 타이머 클리어
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div style={{ 
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#F5F5F5" // Set the background color here
    }}>
      <img src="./shannti.png" alt="Shannti" style={{ maxWidth: "50%", maxHeight: "50%" }} />
      <p style={{ fontSize: "24px", color: "#557656", fontWeight: "bold" }}>SHANNTI = 마음의 평화</p>
      <p style={{ fontSize: "20px", color: "#557656" }}> "운동을 통해 몸과 마음의 평화를 얻자" </p>
    </div>
  );
}
