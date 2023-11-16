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
        <img className = "shannti" src="./roundshannti.png" alt="shannti" />
        SHANNTI<br></br>
        마음의 평화<br></br>
        "운동을 통해 몸과<br></br>
        마음의 평화를 얻자"<br></br>
      </div>
      <div className="top-right">
        <img src="./exercise.jpg" alt="Exercise Log" />
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
