import React, { useState, useEffect } from 'react';
import LeftContent from './LeftContent';
import LeftContent2 from './LeftContent2';
import LeftContent3 from './LeftContent3';
import RightContent from './RightContent';
import RightContent2 from './RightContent2';
import RightContent3 from './RightContent3';
import doener from './assets/doener.png';

const App = () => {
  const [leftContentIndex, setLeftContentIndex] = useState(0);
  const [rightContentIndex, setRightContentIndex] = useState(0);

  const leftContents = [LeftContent, LeftContent2, LeftContent3];
  const rightContents = [RightContent, RightContent2, RightContent3];

  useEffect(() => {
    const leftInterval = setInterval(() => {
      setLeftContentIndex(prevIndex => (prevIndex + 1) % leftContents.length);
    }, 5000); // Change every 5 seconds

    const rightInterval = setInterval(() => {
      setRightContentIndex(prevIndex => (prevIndex + 1) % rightContents.length);
    }, 5000); // Change every 5 seconds

    // Clean up intervals
    return () => {
      clearInterval(leftInterval);
      clearInterval(rightInterval);
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        {/*<div style={{ width: '20%', right:'200px' }}>
          <img src={doener} alt="doener" style={{ width: '100%', scale: '1' }} />
          <img src={doener} alt="doener" style={{ width: '100%', scale: '1' }} />
          <img src={doener} alt="doener" style={{ width: '100%', scale: '1' }} />
          <img src={doener} alt="doener" style={{ width: '100%', scale: '1' }} />
          <img src={doener} alt="doener" style={{ width: '100%', scale: '1' }} />
          <img src={doener} alt="doener" style={{ width: '100%', scale: '1' }} />
          <img src={doener} alt="doener" style={{ width: '100%', scale: '1' }} />
          <img src={doener} alt="doener" style={{ width: '100%', scale: '1' }} />     
  </div>*/}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
          <div style={{ position: 'absolute',top:'5px',width:'95%', right:'10px', opacity: leftContentIndex === 0 ? 1 : 0, transition: 'opacity 1s ease' }}>
            {React.createElement(leftContents[0])}
          </div>
          <div style={{ position: 'absolute', top:'5px',width:'95%',right:'10px', opacity: leftContentIndex === 1 ? 1 : 0, transition: 'opacity 1s ease' }}>
            {React.createElement(leftContents[1])}
          </div>
          <div style={{ position: 'absolute', top:'5px',width:'95%',right:'10px', opacity: leftContentIndex === 2 ? 1 : 0, transition: 'opacity 1s ease' }}>
            {React.createElement(leftContents[2])}
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
          <div style={{ position: 'absolute', top:'5px',width:'45%',left:'10px', opacity: rightContentIndex === 0 ? 1 : 0, transition: 'opacity 1s ease' }}>
            {React.createElement(rightContents[0])}
          </div>
          <div style={{ position: 'absolute', top:'5px',width:'45%',left:'10px', opacity: rightContentIndex === 1 ? 1 : 0, transition: 'opacity 1s ease' }}>
            {React.createElement(rightContents[1])}
          </div>
          <div style={{ position: 'absolute', top:'5px',width:'45%',left:'10px', opacity: rightContentIndex === 2 ? 1 : 0, transition: 'opacity 1s ease' }}>
            {React.createElement(rightContents[2])}
          </div>
        </div>
        {/*<div style={{ width: '20%' }}>
        <img src={doener} alt="doener" style={{ width: '100%', scale: '1' }} />
          <img src={doener} alt="doener" style={{ width: '100%', scale: '1' }} />
          <img src={doener} alt="doener" style={{ width: '100%', scale: '1' }} />
          <img src={doener} alt="doener" style={{ width: '100%', scale: '1' }} />
          <img src={doener} alt="doener" style={{ width: '100%', scale: '1' }} />
          <img src={doener} alt="doener" style={{ width: '100%', scale: '1' }} />
          <img src={doener} alt="doener" style={{ width: '100%', scale: '1' }} />
          <img src={doener} alt="doener" style={{ width: '100%', scale: '1' }} />
</div>*/}
      </div>
    </div>
  );
};

export default App;
