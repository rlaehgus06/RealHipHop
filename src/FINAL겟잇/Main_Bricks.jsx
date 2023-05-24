import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import Industry_Inform from './Industry_information';
const Main_Bricks = () => {
  const [showIndustry, setIndustry] = useState(false);

  const ServiceRequest = () => {
    setIndustry(true);
  };

  const LoginRequest = () => {
    window.location.href = 'your-target-page-url';
  };

  useEffect(() => {
    return () => {
      setIndustry(false);
    };
  }, []);

  return (
    <div className="e78_28">
      <span className="e18_6">CHANGUP</span>
      <span className="e23_3">
        창업의 시작이 두렵거나, 창업의 미래를 밝히고 싶을 때.
      </span>
      <div className="e1_34">
        <div className="e18_3">
          <button className="e18_4" onClick={LoginRequest}>
            <span className='e18_5'>LOGIN</span>
          </button>
        </div>
      </div>
      
      {showIndustry ? (
        <Industry_Inform handleMainRequest={() => setIndustry(false)} />
      ) : (
        <div className="e1_33">
          <button className="e1_15" onClick={ServiceRequest}>
            <span className="e1_20">견적 요청하기</span>
          </button>
        </div>
      )}
    </div>
  );
}

ReactDOM.render(<Main_Bricks/>, document.getElementById('root'));

export default Main_Bricks;
