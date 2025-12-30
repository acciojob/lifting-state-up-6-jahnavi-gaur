import React from 'react';
import './../styles/App.css';
import Tooltip from './Tooltip';

const App = () => {
  return (
    <div>
      <h2 className="tooltip">
        <Tooltip text="This is a tooltip">
          <div>Hover Over Me</div>
        </Tooltip>
      </h2>
      <p className="tooltip">
        <Tooltip text="This is another tooltip">
          <div>Hover over me to see another tooltip</div>
        </Tooltip>
      </p>
    </div>
  );
};

export default App;