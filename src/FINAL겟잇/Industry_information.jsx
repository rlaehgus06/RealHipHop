import React from 'react';
import './Industry_information.css';
import { useNavigate } from 'react-router-dom';

const Industry_Inform = () => {
  const navigate = useNavigate();

  const handleMainRequest = () => {
    navigate('/');
  };
  
  const handleLogoutRequest = () => {
    // Add your logout logic here
    navigate('/');
  };
  
  const handleGotoEstimate = () =>
  {
    navigate('/Estimate');
  }

  return (
    <div className="e30_154">
      <button onClick={handleMainRequest}>
        <span className="e31_155"> CHANGUP</span>
      </button>
      <span className="e35_16">홍길동 기업</span>
      <div className="e60_100">
        <span className="e35_17">♡123</span>
        <div className="e60_93">
          <div className="ei60_93_1135_42891"></div>
        </div>
      </div>
      <span className="e35_41">친환경 기술 - 바이오기술</span>
      <div className="e35_29">
        <button className="e35_30" onClick={handleMainRequest}>
        <span className="e35_31">마이페이지</span>
        </button>
        
      </div>
      <div className="e35_46">
        <button className="e35_47" onClick={handleGotoEstimate}>
          <span className="e35_48">견적 요청하기</span>
        </button>
      </div>
      <div className="e35_32">
        <button className="e35_33" onClick={handleLogoutRequest}>
          <span className="e35_34"> LOGOUT</span>
        </button>
      </div>
      <div className="e35_44"></div>
      <span className="e35_45">
        우리아빠 영양간식 우리아이 술안주
        혁신적이다! <br />
        와! <br />
        놀랍다! <br />
        등등.... <br />
      </span>
      <div className="e35_54"></div>
      <div className="e35_55"></div>
      <div className="e35_56"></div>
      <span className="e35_57">서비스 수주 방식</span>
      <span className="e35_59">회사 기술력 소개</span>
      <span className="e35_61">이러쿵 저러쿵...</span>
      <div className="e45_103"></div>
      <div className="e45_104"></div>
    </div>
  );
};

export default Industry_Inform;
