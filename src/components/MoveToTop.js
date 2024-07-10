import React, { forwardRef } from 'react';

const MoveToTop = forwardRef((props, ref) => {  
  
  return (
    <div ref={ref} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="moveToTop show-link">
        <button className="btn" aria-label="Scroll to top">
          <i className="ri-arrow-up-s-line"></i>
        </button>
    </div>
  )
})

export default MoveToTop
