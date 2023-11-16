import React, { useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';
import './signup.css'; // CSS 파일 경로에 맞게 수정

export default function Signup() {
  const navigate = useNavigate();
  const [isFaceRecognized, setIsFaceRecognized] = useState(false);

  const navigateToLogin = () => {
    navigate("/Login");
  };

  useEffect(() => {
    const checkFaceRecognition = setInterval(() => {
      // 여기에서 실제 얼굴 인식 여부를 확인하는 로직을 추가해야 합니다.
      // 만약 얼굴 인식에 성공했다면 setIsFaceRecognized(true) 호출
      // 아래는 예시로 5초 후에 얼굴 인식에 성공한 것으로 가정한 코드입니다.
      setTimeout(() => {
        setIsFaceRecognized(true);
      }, 5000);
    }, 1000); // 1초마다 체크

    return () => {
      clearInterval(checkFaceRecognition); // 컴포넌트가 언마운트되면 interval을 정리
    };
  }, []);

  useEffect(() => {
    // 얼굴 인식에 성공하면 Home으로 자동 이동
    if (isFaceRecognized) {
      navigate("/Home");
    }
  }, [isFaceRecognized, navigate]);

  return (
    <div className="signup-container">
      <div className="left-half">
        <div className="signup-form">
          <div>
            <img src="./shannti.png" alt="Shannti" />
            <p>SHANNTI = 마음의 평화</p>
            <p>"운동을 통해 몸과 마음의 평화를 얻자"</p>
          </div>
          <button onClick={navigateToLogin} className="signup-button">SHANNTI 가입하기</button>
        </div>
      </div>

      <div className="right-half">
        <div className="webcam-container">
          <Webcam
            audio={false}
            mirrored={true}
          />
          <h2>얼굴을 인식해주세요.</h2>
          <div className="center-line"></div>
        </div>
      </div>
    </div>
  );
}
