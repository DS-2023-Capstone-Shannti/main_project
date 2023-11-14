import React from 'react';
import './home.css'; // 스타일을 위한 CSS 파일을 생성하고 임포트합니다.

export default function Home() {
  const handleButtonClick = (buttonType) => {
    // 각 버튼에 대한 동작을 정의할 수 있습니다.
    console.log(`Button Clicked: ${buttonType}`);
  };

  return (
    <div className="home-container">
      <div className="top-left">
        <img src="./shannti.png" alt="shannti" />
      </div>
      <div className="top-right">
        <img src="./exercise.jpg" alt="Exercise Log" />
      </div>
      <div className="bottom">
        <button onClick={() => handleButtonClick('Button 1')}>
          <img src="버튼1 이미지 경로" alt="Button 1" />
          자세교정운동
        </button>
        <button onClick={() => handleButtonClick('Button 2')}>
          <img src="버튼2 이미지 경로" alt="Button 2" />
          사물인식운동
        </button>
        <button onClick={() => handleButtonClick('Button 3')}>
          <img src="버튼3 이미지 경로" alt="Button 3" />
          유산소운동
        </button>
      </div>
    </div>
  );
}
