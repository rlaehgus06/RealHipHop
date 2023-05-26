import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const FundingPage = () => {
    const navigate = useNavigate();
    
    const handleIndustryRequest = () => {
        navigate('/');
    }
  return (
    <div className="e60_11">
      <button onclick = {handleIndustryRequest}><span className="e60_12">CHANGUP</span></button>
      <span className="e60_13">음식 &gt; 과일</span>
      <div className="e60_14"></div>
      <span className="e60_15">하우스수박 NO! 국내산 100% 무설탕 수박주스</span>
      <div className="e60_21">
        <span className="e60_16">첨가물이 들지 않았어요.  </span>
        <span className="e60_18">보존료, 색소, 정제수등이 없어요. </span>
        <span className="e60_19">순수한 100% 수박주스!</span>
        <span className="e60_20">올해 첫 제철수박으로 만들었어요.</span>
      </div>
      <span className="e60_22">76명 참여</span>
      <span className="e60_26">달성률 180%</span>
      <div className="e60_23">
        <div className="e60_24"></div>
        <span className="e60_25">펀딩하기</span>
      </div>
      <div className="e60_29">
        <div className="e60_28"></div>
        <span className="e60_27">2,289,000원</span>
      </div>
      <div className="e60_31">
        <div className="ei60_31_1283_102088"></div>
      </div>
      <div className="e60_39">
        <div className="e99_31">
          <div className="e99_32"></div>
          <span className="e99_33">마이페이지</span>
        </div>
      </div>
      <div className="e60_101">
        <span className="e60_102">123</span>
      </div>
      <div className="e99_34"></div>
    </div>
  );
}

export default FundingPage;
