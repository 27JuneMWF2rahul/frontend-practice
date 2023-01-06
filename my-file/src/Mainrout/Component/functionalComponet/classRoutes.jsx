const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
  
  function tick() {
  return element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    root.render(element);
  }
  




import React from 'react';

const classRoutes = () => {
    return (
        <div>
            {setInterval(tick, 1000)}
        </div>
    );
};

export default classRoutes;