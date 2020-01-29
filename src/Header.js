import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <div className="mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark mdl-js-ripple-effect--ignore-events" data-upgraded=",MaterialRipple">
        <Link to="/listall" className="mdl-layout__tab">All pokemon<span className="mdl-layout__tab-ripple-container mdl-js-ripple-effect" data-upgraded=",MaterialRipple"><span className="mdl-ripple"></span></span></Link>
        <Link to="/search" className="mdl-layout__tab">Search<span className="mdl-layout__tab-ripple-container mdl-js-ripple-effect" data-upgraded=",MaterialRipple"><span className="mdl-ripple"></span></span></Link>
      </div>

      
    </>
  )
}

