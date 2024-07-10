import React, { useState, useEffect } from 'react';
import './UserProfile.css';
import ProgressBar from './Components/ProgressBar.js';
import Progress from './Components/Progress.js';
import PSP from './assets/psp.png';

const UserProfile = () => {

  const dateStart = new Date('2024-06-25T00:00:00');
  const dateDead = new Date('2024-08-05T00:00:00');

  const [time, setTime] = useState(new Date());

  useEffect(()=>{
    const interval = setInterval(()=>{
      setTime(time => new Date());
    }, 10);

    return ()=>{
        clearInterval(interval);
    };
  }, []);

  const timeDifferenceAll = dateDead - dateStart;
  const timeDifferenceAT = time - dateStart;
  const percentage = (timeDifferenceAT / timeDifferenceAll) * 100;
  
  const dateDifferenceAll = timeDifferenceAll / (1000 * 60 * 60 * 24);
  const wastedDay = timeDifferenceAT / (1000 * 60 * 60 * 24);

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={PSP} className='profile-picture'></img>
        <div className="profile-info">
          <h1>민간인 <span className="profile-name">박상필</span></h1>
          <br/>
          <a>발표: 2024.06.25<br />입대: 2024.08.05</a>
        </div>
      </div>
      <div className="profile-body">
        <ProgressBar>
            <Progress width={percentage.toFixed(6) + '%'}/>
        </ProgressBar>
        <div className="profile-dates">
          <div className="date-block">
            <span>다음 호봉</span>
            <h2>이병 1호봉</h2>
            <p>{percentage.toFixed(6) + '%'}</p>
          </div>
          <div className="date-block">
            <span>다음 계급</span>
            <h2>훈련병</h2>
            <p>{percentage.toFixed(6) + '%'}</p>
          </div>
        </div>
      </div>
      <div className="profile-footer">
        <p>전체 수명: {dateDifferenceAll}<br />허비한 수명: {wastedDay.toFixed(2)}<br />남은 수명: {(dateDifferenceAll-wastedDay).toFixed(2)}</p>
        <p className="disclaimer">※ 위 계산 정보는 행정과 다르지 않음 수고</p>
      </div>
    </div>
  );
};

export default UserProfile;
