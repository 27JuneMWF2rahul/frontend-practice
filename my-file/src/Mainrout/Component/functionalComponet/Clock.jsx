import React from 'react';


const Clock = () => {
    function tick() {
        return (
            <div className="container">
                <h2>hello wold</h2>
                <h2>

                {(new Date().toLocaleTimeString())}.
                </h2>
            </div>
        );
      
       }
    return (
        <>
        {tick()}
            {  setInterval(tick())}
   
            
        </>
    );
};

export default Clock;

