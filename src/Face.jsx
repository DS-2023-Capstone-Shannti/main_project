import React, { useEffect } from 'react';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';
import ProgressBar from "./ProgressBar.js";

export default function Face() {
  const webcamRef = React.useRef(null);
  const navigate = useNavigate();

  const navigateToSignup = () => {
    navigate("/Signup");
  };

  useEffect(() => {
    // 5초 후에 자동으로 사진 찍기
    const timer = setTimeout(() => {
      const imageSrc = webcamRef.current.getScreenshot();

      const img = new Image();
      img.src = imageSrc;

      const a = document.createElement('a');
      a.href = imageSrc;
      a.download = 'captured_image.png';
      a.click();

      navigateToSignup();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <h1>얼굴 인식 페이지</h1>
      <Webcam
        audio={false}
        mirrored={true}
        ref={webcamRef}
      />
      <br></br>
      
      <button
        onClick={navigateToSignup}
        style={{
          backgroundColor: "#b6be86",
          padding: "10px 20px",
          borderRadius: "64px",
          color: "#557656",
          marginBottom: "16px",
          cursor: "pointer",
        }}
      >
        SHANNTI 시작하기
      </button>
    </div>
  );
}





