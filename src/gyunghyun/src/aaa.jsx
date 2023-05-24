import React from 'react';
import './styles.css'; 
import { useNavigate } from 'react-router-dom';
const Second_Main = () => {
  const navigate = useNavigate();

  const handleMainRequest = () => {
    navigate('/');
  };
  return (
<div className="e81_28">
      <div className="e28_89">
        <div className="e28_90"></div>
        <span className="e28_91">마이페이지</span>
      </div>
      <div className="e28_92">
        <div className="e28_93"></div>
        <span className="e28_94">LOGOUT</span>
      </div>
      <button onClick={handleMainRequest}> <span className="e28_95" >CHANGUP</span></button>
      <div className="e28_113">
        <div className="e28_96"></div>
        <div className="e28_97">
          <div className="ei28_97_28_12"></div>
        </div>
        <span className="e28_102">검색어를 입력하세요.</span>
      </div>
      <div className="e30_153">
        <div className="e28_127">
          <div className="e28_126">
            <div className="e28_120"></div>
            <span className="e28_123">일반 사용자</span>
          </div>
          <div className="e28_125">
            <div className="e28_119"></div>
            <span className="e28_122">제조업체</span>
          </div>
          <div className="e28_124">
            <div className="e28_118"></div>
            <span className="e28_121">예비창업자</span>
          </div>
          <div className="e28_98" style={{ position: 'absolute', top: 0 }}>
            {/* 첫 번째 사진 */}
          </div>
          <div className="e28_101"></div>
          <div className="e28_128"></div>
          <span className="e28_147">수인제조</span>
          <span className="e28_148">수인제조</span>
          <div className="e28_130"></div>
          <div className="e29_149"></div>
          <div className="e28_131"></div>
          <div className="e28_132" style={{ overflow: 'hidden' }}>
            {/* 두 번째 사진 */}
          </div>
          <div className="e28_133" style={{ overflow: 'hidden' }}>
            {/* 세 번째 사진 */}
          </div>
          <div className="e29_150"></div>
          <div className="e29_151"></div>
          <div className="e29_152"></div>
        </div>
      </div>
    </div>

  );
};
export default Second_Main;
