import React from 'react';
import './main.css';
import { useNavigate } from 'react-router-dom';

const Main_Bricks = () => {
  const navigate = useNavigate();

  const handleServiceRequest = () => {
    navigate('/Second_Main');
  };

  const handleLoginRequest = () => {
    // Add your login logic here
    navigate('/LoginPage');
  };

  return (
    <div className="e78_28">
      <span className="e18_6">CHANGUP</span>
      <span className="e23_3">
        창업의 시작이 두렵거나, <br />창업의 미래를 밝히고 싶을 때. 
      </span>
      <div className="e1_34">
        <div className="e18_3">
          <button className="e18_4" onClick={handleLoginRequest}>
            <span className='e18_5'>회원가입</span>
          </button>
        </div>
      </div>
      
      <div className="e1_33">
        <button className="e1_15" onClick={handleLoginRequest}>
          <span className="e1_20">지금 시작하기</span>
        </button>
      </div>
    </div>
  );
};

export default Main_Bricks;
