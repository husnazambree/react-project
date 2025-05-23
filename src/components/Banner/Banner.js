import React from 'react';

function Banner({ status, action, actionText, children }) {
  return (
    <div className={`${status} banner`}>{children}
      {/* <button className='banner-button' onClick={() => window.location.reload()}>
        Play Again
      </button> */}

      {action && <button className='banner-button' onClick={action}>{actionText}</button>}

    </div>
  );
}

export default Banner;
