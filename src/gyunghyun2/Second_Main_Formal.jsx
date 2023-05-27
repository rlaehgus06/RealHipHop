import React from 'react';
import './desktop2.css';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';

const desktop2 = () => {

  const navigate = useNavigate();

  const handleServiceRequest = () => {
    navigate('/Second_Main');
  };

  const GotoMainRequest = () =>
  {
    navigate('/');
  };

    const GotoFundingPage = () =>
  {
    navigate('/FundingPage');
  };

  return (
    <div className="e135_41">
      <div className="e60_47">
        <div className="e130_26">
          <div className="e60_48">
            <div className="e60_49"></div>
            <span className="e60_50">마이페이지</span>
          </div>
          <div className="e60_51">
            <div className="e60_52"></div>
            <span className="e60_53">LOGOUT</span>
          </div>
          <button className="e60_54" onClick={GotoMainRequest} style={{ backgroundColor: 'transparent', border: 'none' }}>
  <span className="e60_54">CHANGUP</span>
</button>

          <div className="e60_55">
            <div className="ei60_55_28_96"></div>
            <div className="ei60_55_28_97">
              <div className="ei60_55_28_97_28_12"></div>
            </div>
            <span className="ei60_55_28_102">검색어를 입력하세요.</span>
          </div>
          <div className="e60_56">
            <div className="e60_57">
              <div className="e60_58">
                <div className="ei60_58_28_120" ></div>
                <span className="ei60_58_28_123">일반 사용자</span>
              </div>
              <div className="e60_59">
                <div className="ei60_59_28_119"></div>
                <span className="ei60_59_28_122">제조업체</span>
              </div>
              <div className="e60_60">
                <button className="ei60_60_28_118" onClick={handleServiceRequest}></button>
                <span className="ei60_60_28_121">예비창업자</span>
              </div>
              <div className="e60_61"></div>
              <button className="e60_63" onClick = {GotoFundingPage}></button>
              <div className="e60_66"></div>
              <div className="e60_67"></div>
              <div className="e60_68"></div>
              <div className="e60_69"></div>
              <div className="e60_70"></div>
              <div className="e60_71"></div>
              <div className="e60_72"></div>
              <div className="e60_73"></div>
            </div>
            <div className="e61_37"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default desktop2;
