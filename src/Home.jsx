// Home.jsx

import React, { useEffect, useState } from 'react';
import './home.css'; // 스타일을 위한 CSS 파일을 생성하고 임포트합니다.

export default function Home() {
  const [attendanceData, setAttendanceData] = useState(null);

  // 서버에서 출석 정보를 가져오는 함수
  const fetchAttendanceData = async () => {
    try {
      const response = await fetch('/api/attendance'); // 서버의 API 엔드포인트로 요청
      const data = await response.json();
      setAttendanceData(data);
    } catch (error) {
      console.error('출석 정보를 불러오는 중 오류 발생:', error);
    }
  };

  // 컴포넌트가 마운트될 때 출석 정보를 가져옴
  useEffect(() => {
    fetchAttendanceData();
  }, []);

  const handleButtonClick = (buttonType) => {
    // 각 버튼에 대한 동작을 정의할 수 있습니다.
    console.log(`Button Clicked: ${buttonType}`);
  };

  return (
    <div className="home-container">
      <div className="top-left">
        <img className="shannti" src="./roundshannti.png" alt="shannti" />
        SHANNTI<br />
        마음의 평화<br />
        "운동을 통해 몸과<br />
        마음의 평화를 얻자"<br />
      </div>
      <div className="top-right">
        {/* 서버에서 받아온 출석 정보를 표시 */}
        {attendanceData ? (
          <p>{attendanceData.attended ? '출석함' : '출석하지 않음'}</p>
        ) : (
          <p>출석 정보 불러오는 중...</p>
        )}
      </div>
      <div className="bottom">
        <button onClick={() => handleButtonClick('Button 1')}>
          <img src="./pose.png" alt="Button 1" />
          자세교정운동
        </button>
        <button onClick={() => handleButtonClick('Button 2')}>
          <img src="./bottle.png" alt="Button 2" />
          사물인식운동
        </button>
        <button onClick={() => handleButtonClick('Button 3')}>
          <img src="./game.png" alt="Button 3" />
          유산소운동
        </button>
      </div>
    </div>
  );
}
