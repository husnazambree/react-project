import React from 'react';

import Banner from '../Banner';

function LostBanner({ answer, handleRestart }) {
  return (
    <Banner
      status="sad"
      action={handleRestart}
      actionText="Try again!"
    >
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    </Banner>
  );
}

export default LostBanner;
