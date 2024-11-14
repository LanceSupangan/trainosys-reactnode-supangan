import React, { useState } from 'react';

const LightSwitch = () => {
  const [isLightOn, setLight] = useState(false);

  function toggler() {
    setLight(!isLightOn);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>{isLightOn ? 'The light is ON' : 'The light is OFF'}</h2>
      <button onClick={toggler} style={{ padding: '10px 20px', fontSize: '16px' }}>
        {isLightOn ? 'Turn Off' : 'Turn On'}
      </button>
    </div>
  );
}

export default LightSwitch;