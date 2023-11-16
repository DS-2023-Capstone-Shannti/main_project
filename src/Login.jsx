import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate를 추가
import ProgressBar from "./ProgressBar.js";
import './login.css';

const User = {
  email: 'test@gmail.com',
  pw: 'test1234!',
  name: '샨티'
}

export default function Login() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [nameValid, setNameValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);
  const [ageValid, setAgeValid] = useState(false);
  const [ageOptions] = useState(Array.from({ length: 100 }, (_, i) => (i + 1).toString()));
  const navigateToFace = () => {
    navigate("/Face"); // "/Face"로 이동
  };

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePw = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const handleName = (e) => {
    setName(e.target.value);
    const koreanRegex = /^[가-힣]+$/;
    if (e.target.value.length > 0 && koreanRegex.test(e.target.value)) {
      setNameValid(true);
    } else {
      setNameValid(false);
    }
  };

  const handleAge = (e) => {
    setAge(e.target.value);
    const ageRegex = /^\d+$/;
    if (e.target.value.length > 0 && ageRegex.test(e.target.value)) {
      setAgeValid(true);
    } else {
      setAgeValid(false);
    }
  };

  const handleAgeSelect = (e) => {
    setAge(e.target.value);
    setAgeValid(true); // 드롭다운에서 선택할 경우에는 항상 유효하다고 처리
  };

  return (
    <div className="page">
      <div className="titleWrap">
        이메일과 비밀번호, 닉네임을
        <br />
        입력해주세요
      </div>

      <div className="contentWrap">
        <div className="inputTitle">이메일 주소</div>
        <div className="inputWrap">
          <input
            className="input"
            type="text"
            placeholder="test@gmail.com"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="errorMessageWrap">
          {!emailValid && email.length > 0 && (
            <div>올바른 이메일을 입력해주세요.</div>
          )}
        </div>

        <div style={{ marginTop: "26px" }} className="inputTitle">
          비밀번호
        </div>
        <div className="inputWrap">
          <input
            className="input"
            type="password"
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            value={pw}
            onChange={handlePw}
          />
        </div>
        <div className="errorMessageWrap">
          {!pwValid && pw.length > 0 && (
            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
          )}
        </div>

        <div style={{ marginTop: "26px" }} className="inputTitle">
          닉네임
        </div>
        <div className="inputWrap">
          <input
            className="input"
            type="text"
            placeholder="한국어로 입력해주세요."
            value={name}
            onChange={handleName}
          />
        </div>
        <div className="errorMessageWrap">
          {!nameValid && name.length > 0 && (
            <div>올바른 한국어 닉네임을 입력해주세요.</div>
          )}
        </div>

        <div style={{ marginTop: '26px' }} className="inputTitle">
          나이
        </div>
        <div className="inputWrap">
          <select
            className="input"
            value={age}
            onChange={handleAgeSelect}
          >
            <option value="" style={{ color: '#dadada !important'}}>나이를 선택해주세요.</option>
            {ageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="errorMessageWrap">
          {!ageValid && age.length > 0 && <div>나이를 올바르게 선택해주세요.</div>}
        </div>

        <div className="errorMessageWrap">
          {!ageValid && age.length > 0 && <div>나이를 올바르게 선택해주세요.</div>}
        </div>

      </div>

      <button onClick={navigateToFace} disabled={notAllow} className="bottomButton">
        다음 페이지로
      </button>
    </div >
  );
}
